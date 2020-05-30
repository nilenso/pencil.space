goog.provide("goog.net.XhrManager");
goog.provide("goog.net.XhrManager.Event");
goog.provide("goog.net.XhrManager.Request");
goog.require("goog.events");
goog.require("goog.events.Event");
goog.require("goog.events.EventHandler");
goog.require("goog.events.EventTarget");
goog.require("goog.net.ErrorCode");
goog.require("goog.net.EventType");
goog.require("goog.net.XhrIo");
goog.require("goog.net.XhrIoPool");
goog.require("goog.structs.Map");
/**
 * @constructor
 * @extends {goog.events.EventTarget}
 * @param {number=} opt_maxRetries
 * @param {goog.structs.Map=} opt_headers
 * @param {number=} opt_minCount
 * @param {number=} opt_maxCount
 * @param {number=} opt_timeoutInterval
 * @param {boolean=} opt_withCredentials
 */
goog.net.XhrManager = function(opt_maxRetries, opt_headers, opt_minCount, opt_maxCount, opt_timeoutInterval, opt_withCredentials) {
  goog.net.XhrManager.base(this, "constructor");
  /** @private @type {number} */ this.maxRetries_ = opt_maxRetries !== undefined ? opt_maxRetries : 1;
  /** @private @type {number} */ this.timeoutInterval_ = opt_timeoutInterval !== undefined ? Math.max(0, opt_timeoutInterval) : 0;
  /** @private @type {boolean} */ this.withCredentials_ = !!opt_withCredentials;
  /** @private @type {goog.net.XhrIoPool} */ this.xhrPool_ = new goog.net.XhrIoPool(opt_headers, opt_minCount, opt_maxCount, opt_withCredentials);
  /** @private @type {goog.structs.Map<string,!goog.net.XhrManager.Request>} */ this.requests_ = new goog.structs.Map;
  /** @private @type {goog.events.EventHandler<!goog.net.XhrManager>} */ this.eventHandler_ = new goog.events.EventHandler(this);
};
goog.inherits(goog.net.XhrManager, goog.events.EventTarget);
/** @private @type {string} */ goog.net.XhrManager.ERROR_ID_IN_USE_ = "[goog.net.XhrManager] ID in use";
/** @private @type {Array<goog.net.EventType>} */ goog.net.XhrManager.XHR_EVENT_TYPES_ = [goog.net.EventType.READY, goog.net.EventType.COMPLETE, goog.net.EventType.SUCCESS, goog.net.EventType.ERROR, goog.net.EventType.ABORT, goog.net.EventType.TIMEOUT];
/**
 * @param {number} ms
 */
goog.net.XhrManager.prototype.setTimeoutInterval = function(ms) {
  this.timeoutInterval_ = Math.max(0, ms);
};
/**
 * @return {number}
 */
goog.net.XhrManager.prototype.getOutstandingCount = function() {
  return this.requests_.getCount();
};
/**
 * @return {!Array<string>}
 */
goog.net.XhrManager.prototype.getOutstandingRequestIds = function() {
  return this.requests_.getKeys();
};
/**
 * @param {string} id
 * @param {string} url
 * @param {string=} opt_method
 * @param {(ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string)=} opt_content
 * @param {(Object|goog.structs.Map)=} opt_headers
 * @param {number=} opt_priority
 * @param {Function=} opt_callback
 * @param {number=} opt_maxRetries
 * @param {goog.net.XhrIo.ResponseType=} opt_responseType
 * @param {boolean=} opt_withCredentials
 * @return {!goog.net.XhrManager.Request}
 */
goog.net.XhrManager.prototype.send = function(id, url, opt_method, opt_content, opt_headers, opt_priority, opt_callback, opt_maxRetries, opt_responseType, opt_withCredentials) {
  var requests = this.requests_;
  if (requests.get(id)) {
    throw new Error(goog.net.XhrManager.ERROR_ID_IN_USE_);
  }
  var request = new goog.net.XhrManager.Request(url, goog.bind(this.handleEvent_, this, id), opt_method, opt_content, opt_headers, opt_callback, opt_maxRetries !== undefined ? opt_maxRetries : this.maxRetries_, opt_responseType, opt_withCredentials !== undefined ? opt_withCredentials : this.withCredentials_);
  this.requests_.set(id, request);
  var callback = goog.bind(this.handleAvailableXhr_, this, id);
  this.xhrPool_.getObject(callback, opt_priority);
  return request;
};
/**
 * @param {string} id
 * @param {boolean=} opt_force
 */
goog.net.XhrManager.prototype.abort = function(id, opt_force) {
  var request = this.requests_.get(id);
  if (request) {
    var xhrIo = request.xhrIo;
    request.setAborted(true);
    if (opt_force) {
      if (xhrIo) {
        this.removeXhrListener_(xhrIo, request.getXhrEventCallback());
        goog.events.listenOnce(xhrIo, goog.net.EventType.READY, function() {
          this.xhrPool_.releaseObject(xhrIo);
        }, false, this);
      }
      this.requests_.remove(id);
    }
    if (xhrIo) {
      xhrIo.abort();
    }
  }
};
/**
 * @private
 * @param {string} id
 * @param {goog.net.XhrIo} xhrIo
 */
goog.net.XhrManager.prototype.handleAvailableXhr_ = function(id, xhrIo) {
  var request = this.requests_.get(id);
  if (request && !request.xhrIo) {
    this.addXhrListener_(xhrIo, request.getXhrEventCallback());
    xhrIo.setTimeoutInterval(this.timeoutInterval_);
    xhrIo.setResponseType(request.getResponseType());
    xhrIo.setWithCredentials(request.getWithCredentials());
    request.xhrIo = xhrIo;
    this.dispatchEvent(new goog.net.XhrManager.Event(goog.net.EventType.READY, this, id, xhrIo));
    this.retry_(id, xhrIo);
    if (request.getAborted()) {
      xhrIo.abort();
    }
  } else {
    this.xhrPool_.releaseObject(xhrIo);
  }
};
/**
 * @private
 * @param {string} id
 * @param {goog.events.Event} e
 * @return {Object}
 */
goog.net.XhrManager.prototype.handleEvent_ = function(id, e) {
  var xhrIo = /** @type {goog.net.XhrIo} */ (e.target);
  switch(e.type) {
    case goog.net.EventType.READY:
      this.retry_(id, xhrIo);
      break;
    case goog.net.EventType.COMPLETE:
      return this.handleComplete_(id, xhrIo, e);
    case goog.net.EventType.SUCCESS:
      this.handleSuccess_(id, xhrIo);
      break;
    case goog.net.EventType.TIMEOUT:
    case goog.net.EventType.ERROR:
      this.handleError_(id, xhrIo);
      break;
    case goog.net.EventType.ABORT:
      this.handleAbort_(id, xhrIo);
      break;
  }
  return null;
};
/**
 * @private
 * @param {string} id
 * @param {goog.net.XhrIo} xhrIo
 */
goog.net.XhrManager.prototype.retry_ = function(id, xhrIo) {
  var request = this.requests_.get(id);
  if (request && !request.getCompleted() && !request.hasReachedMaxRetries()) {
    request.increaseAttemptCount();
    xhrIo.send(request.getUrl(), request.getMethod(), request.getContent(), request.getHeaders());
  } else {
    if (request) {
      this.removeXhrListener_(xhrIo, request.getXhrEventCallback());
      this.requests_.remove(id);
    }
    this.xhrPool_.releaseObject(xhrIo);
  }
};
/**
 * @private
 * @param {string} id
 * @param {goog.net.XhrIo} xhrIo
 * @param {goog.events.Event} e
 * @return {Object}
 */
goog.net.XhrManager.prototype.handleComplete_ = function(id, xhrIo, e) {
  var request = this.requests_.get(id);
  if (xhrIo.getLastErrorCode() == goog.net.ErrorCode.ABORT || xhrIo.isSuccess() || request.hasReachedMaxRetries()) {
    this.dispatchEvent(new goog.net.XhrManager.Event(goog.net.EventType.COMPLETE, this, id, xhrIo));
    if (request) {
      request.setCompleted(true);
      if (request.getCompleteCallback()) {
        return request.getCompleteCallback().call(xhrIo, e);
      }
    }
  }
  return null;
};
/**
 * @private
 * @param {string} id
 * @param {goog.net.XhrIo} xhrIo
 */
goog.net.XhrManager.prototype.handleAbort_ = function(id, xhrIo) {
  this.dispatchEvent(new goog.net.XhrManager.Event(goog.net.EventType.ABORT, this, id, xhrIo));
};
/**
 * @private
 * @param {string} id
 * @param {goog.net.XhrIo} xhrIo
 */
goog.net.XhrManager.prototype.handleSuccess_ = function(id, xhrIo) {
  this.dispatchEvent(new goog.net.XhrManager.Event(goog.net.EventType.SUCCESS, this, id, xhrIo));
};
/**
 * @private
 * @param {string} id
 * @param {goog.net.XhrIo} xhrIo
 */
goog.net.XhrManager.prototype.handleError_ = function(id, xhrIo) {
  var request = this.requests_.get(id);
  if (request.hasReachedMaxRetries()) {
    this.dispatchEvent(new goog.net.XhrManager.Event(goog.net.EventType.ERROR, this, id, xhrIo));
  }
};
/**
 * @private
 * @param {goog.net.XhrIo} xhrIo
 * @param {Function} func
 * @param {(string|Array<string>)=} opt_types
 */
goog.net.XhrManager.prototype.removeXhrListener_ = function(xhrIo, func, opt_types) {
  var types = opt_types || goog.net.XhrManager.XHR_EVENT_TYPES_;
  this.eventHandler_.unlisten(xhrIo, types, func);
};
/**
 * @private
 * @param {goog.net.XhrIo} xhrIo
 * @param {Function} func
 * @param {(string|Array<string>)=} opt_types
 */
goog.net.XhrManager.prototype.addXhrListener_ = function(xhrIo, func, opt_types) {
  var types = opt_types || goog.net.XhrManager.XHR_EVENT_TYPES_;
  this.eventHandler_.listen(xhrIo, types, func);
};
/** @override */ goog.net.XhrManager.prototype.disposeInternal = function() {
  goog.net.XhrManager.superClass_.disposeInternal.call(this);
  this.xhrPool_.dispose();
  this.xhrPool_ = null;
  this.eventHandler_.dispose();
  this.eventHandler_ = null;
  this.requests_.clear();
  this.requests_ = null;
};
/**
 * @final
 * @constructor
 * @extends {goog.events.Event}
 * @param {goog.net.EventType} type
 * @param {goog.net.XhrManager} target
 * @param {string} id
 * @param {goog.net.XhrIo} xhrIo
 */
goog.net.XhrManager.Event = function(type, target, id, xhrIo) {
  goog.events.Event.call(this, type, target);
  /** @type {string} */ this.id = id;
  /** @type {goog.net.XhrIo} */ this.xhrIo = xhrIo;
};
goog.inherits(goog.net.XhrManager.Event, goog.events.Event);
/**
 * @final
 * @constructor
 * @param {string} url
 * @param {Function} xhrEventCallback
 * @param {string=} opt_method
 * @param {(ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string)=} opt_content
 * @param {(Object|goog.structs.Map)=} opt_headers
 * @param {Function=} opt_callback
 * @param {number=} opt_maxRetries
 * @param {goog.net.XhrIo.ResponseType=} opt_responseType
 * @param {boolean=} opt_withCredentials
 */
goog.net.XhrManager.Request = function(url, xhrEventCallback, opt_method, opt_content, opt_headers, opt_callback, opt_maxRetries, opt_responseType, opt_withCredentials) {
  /** @private @type {string} */ this.url_ = url;
  /** @private @type {string} */ this.method_ = opt_method || "GET";
  /** @private @type {(ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string|undefined)} */ this.content_ = opt_content;
  /** @private @type {(Object|goog.structs.Map|null)} */ this.headers_ = opt_headers || null;
  /** @private @type {number} */ this.maxRetries_ = opt_maxRetries !== undefined ? opt_maxRetries : 1;
  /** @private @type {number} */ this.attemptCount_ = 0;
  /** @private @type {boolean} */ this.completed_ = false;
  /** @private @type {boolean} */ this.aborted_ = false;
  /** @private @type {Function} */ this.xhrEventCallback_ = xhrEventCallback;
  /** @private @type {(Function|undefined)} */ this.completeCallback_ = opt_callback;
  /** @private @type {!goog.net.XhrIo.ResponseType} */ this.responseType_ = opt_responseType || goog.net.XhrIo.ResponseType.DEFAULT;
  /** @private @type {boolean} */ this.withCredentials_ = !!opt_withCredentials;
  /** @type {?goog.net.XhrIo} */ this.xhrIo = null;
};
/**
 * @return {string}
 */
goog.net.XhrManager.Request.prototype.getUrl = function() {
  return this.url_;
};
/**
 * @return {string}
 */
goog.net.XhrManager.Request.prototype.getMethod = function() {
  return this.method_;
};
/**
 * @return {(ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string|undefined)}
 */
goog.net.XhrManager.Request.prototype.getContent = function() {
  return this.content_;
};
/**
 * @return {(Object|goog.structs.Map)}
 */
goog.net.XhrManager.Request.prototype.getHeaders = function() {
  return this.headers_;
};
/**
 * @return {boolean}
 */
goog.net.XhrManager.Request.prototype.getWithCredentials = function() {
  return this.withCredentials_;
};
/**
 * @return {number}
 */
goog.net.XhrManager.Request.prototype.getMaxRetries = function() {
  return this.maxRetries_;
};
/**
 * @return {number}
 */
goog.net.XhrManager.Request.prototype.getAttemptCount = function() {
  return this.attemptCount_;
};
goog.net.XhrManager.Request.prototype.increaseAttemptCount = function() {
  this.attemptCount_++;
};
/**
 * @return {boolean}
 */
goog.net.XhrManager.Request.prototype.hasReachedMaxRetries = function() {
  return this.attemptCount_ > this.maxRetries_;
};
/**
 * @param {boolean} complete
 */
goog.net.XhrManager.Request.prototype.setCompleted = function(complete) {
  this.completed_ = complete;
};
/**
 * @return {boolean}
 */
goog.net.XhrManager.Request.prototype.getCompleted = function() {
  return this.completed_;
};
/**
 * @param {boolean} aborted
 */
goog.net.XhrManager.Request.prototype.setAborted = function(aborted) {
  this.aborted_ = aborted;
};
/**
 * @return {boolean}
 */
goog.net.XhrManager.Request.prototype.getAborted = function() {
  return this.aborted_;
};
/**
 * @return {Function}
 */
goog.net.XhrManager.Request.prototype.getXhrEventCallback = function() {
  return this.xhrEventCallback_;
};
/**
 * @return {(Function|undefined)}
 */
goog.net.XhrManager.Request.prototype.getCompleteCallback = function() {
  return this.completeCallback_;
};
/**
 * @return {!goog.net.XhrIo.ResponseType}
 */
goog.net.XhrManager.Request.prototype.getResponseType = function() {
  return this.responseType_;
};

//# sourceMappingURL=goog.net.xhrmanager.js.map
