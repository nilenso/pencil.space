goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34530 = arguments.length;
switch (G__34530) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34538 = (function (f,blockable,meta34539){
this.f = f;
this.blockable = blockable;
this.meta34539 = meta34539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34540,meta34539__$1){
var self__ = this;
var _34540__$1 = this;
return (new cljs.core.async.t_cljs$core$async34538(self__.f,self__.blockable,meta34539__$1));
}));

(cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34540){
var self__ = this;
var _34540__$1 = this;
return self__.meta34539;
}));

(cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34539","meta34539",-1770110104,null)], null);
}));

(cljs.core.async.t_cljs$core$async34538.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34538");

(cljs.core.async.t_cljs$core$async34538.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34538");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34538.
 */
cljs.core.async.__GT_t_cljs$core$async34538 = (function cljs$core$async$__GT_t_cljs$core$async34538(f__$1,blockable__$1,meta34539){
return (new cljs.core.async.t_cljs$core$async34538(f__$1,blockable__$1,meta34539));
});

}

return (new cljs.core.async.t_cljs$core$async34538(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34578 = arguments.length;
switch (G__34578) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34585 = arguments.length;
switch (G__34585) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34600 = arguments.length;
switch (G__34600) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36730 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36730) : fn1.call(null,val_36730));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36730) : fn1.call(null,val_36730));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34613 = arguments.length;
switch (G__34613) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___36743 = n;
var x_36744 = (0);
while(true){
if((x_36744 < n__4666__auto___36743)){
(a[x_36744] = x_36744);

var G__36746 = (x_36744 + (1));
x_36744 = G__36746;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34631 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34631 = (function (flag,meta34632){
this.flag = flag;
this.meta34632 = meta34632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34633,meta34632__$1){
var self__ = this;
var _34633__$1 = this;
return (new cljs.core.async.t_cljs$core$async34631(self__.flag,meta34632__$1));
}));

(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34633){
var self__ = this;
var _34633__$1 = this;
return self__.meta34632;
}));

(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34632","meta34632",769517592,null)], null);
}));

(cljs.core.async.t_cljs$core$async34631.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34631");

(cljs.core.async.t_cljs$core$async34631.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34631");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34631.
 */
cljs.core.async.__GT_t_cljs$core$async34631 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34631(flag__$1,meta34632){
return (new cljs.core.async.t_cljs$core$async34631(flag__$1,meta34632));
});

}

return (new cljs.core.async.t_cljs$core$async34631(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34654 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34654 = (function (flag,cb,meta34655){
this.flag = flag;
this.cb = cb;
this.meta34655 = meta34655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34656,meta34655__$1){
var self__ = this;
var _34656__$1 = this;
return (new cljs.core.async.t_cljs$core$async34654(self__.flag,self__.cb,meta34655__$1));
}));

(cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34656){
var self__ = this;
var _34656__$1 = this;
return self__.meta34655;
}));

(cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34655","meta34655",834729489,null)], null);
}));

(cljs.core.async.t_cljs$core$async34654.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34654");

(cljs.core.async.t_cljs$core$async34654.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34654");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34654.
 */
cljs.core.async.__GT_t_cljs$core$async34654 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34654(flag__$1,cb__$1,meta34655){
return (new cljs.core.async.t_cljs$core$async34654(flag__$1,cb__$1,meta34655));
});

}

return (new cljs.core.async.t_cljs$core$async34654(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34663_SHARP_){
var G__34670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34663_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34670) : fret.call(null,G__34670));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34665_SHARP_){
var G__34672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34665_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34672) : fret.call(null,G__34672));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36766 = (i + (1));
i = G__36766;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36772 = arguments.length;
var i__4790__auto___36773 = (0);
while(true){
if((i__4790__auto___36773 < len__4789__auto___36772)){
args__4795__auto__.push((arguments[i__4790__auto___36773]));

var G__36775 = (i__4790__auto___36773 + (1));
i__4790__auto___36773 = G__36775;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34693){
var map__34694 = p__34693;
var map__34694__$1 = (((((!((map__34694 == null))))?(((((map__34694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34694):map__34694);
var opts = map__34694__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34685){
var G__34686 = cljs.core.first(seq34685);
var seq34685__$1 = cljs.core.next(seq34685);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34686,seq34685__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34711 = arguments.length;
switch (G__34711) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34451__auto___36804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_34796){
var state_val_34797 = (state_34796[(1)]);
if((state_val_34797 === (7))){
var inst_34791 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34804_36808 = state_34796__$1;
(statearr_34804_36808[(2)] = inst_34791);

(statearr_34804_36808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (1))){
var state_34796__$1 = state_34796;
var statearr_34805_36811 = state_34796__$1;
(statearr_34805_36811[(2)] = null);

(statearr_34805_36811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (4))){
var inst_34767 = (state_34796[(7)]);
var inst_34767__$1 = (state_34796[(2)]);
var inst_34775 = (inst_34767__$1 == null);
var state_34796__$1 = (function (){var statearr_34806 = state_34796;
(statearr_34806[(7)] = inst_34767__$1);

return statearr_34806;
})();
if(cljs.core.truth_(inst_34775)){
var statearr_34807_36812 = state_34796__$1;
(statearr_34807_36812[(1)] = (5));

} else {
var statearr_34808_36813 = state_34796__$1;
(statearr_34808_36813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (13))){
var state_34796__$1 = state_34796;
var statearr_34809_36814 = state_34796__$1;
(statearr_34809_36814[(2)] = null);

(statearr_34809_36814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (6))){
var inst_34767 = (state_34796[(7)]);
var state_34796__$1 = state_34796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34796__$1,(11),to,inst_34767);
} else {
if((state_val_34797 === (3))){
var inst_34793 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34796__$1,inst_34793);
} else {
if((state_val_34797 === (12))){
var state_34796__$1 = state_34796;
var statearr_34812_36815 = state_34796__$1;
(statearr_34812_36815[(2)] = null);

(statearr_34812_36815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (2))){
var state_34796__$1 = state_34796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34796__$1,(4),from);
} else {
if((state_val_34797 === (11))){
var inst_34784 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
if(cljs.core.truth_(inst_34784)){
var statearr_34813_36816 = state_34796__$1;
(statearr_34813_36816[(1)] = (12));

} else {
var statearr_34814_36817 = state_34796__$1;
(statearr_34814_36817[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (9))){
var state_34796__$1 = state_34796;
var statearr_34815_36818 = state_34796__$1;
(statearr_34815_36818[(2)] = null);

(statearr_34815_36818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (5))){
var state_34796__$1 = state_34796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34818_36819 = state_34796__$1;
(statearr_34818_36819[(1)] = (8));

} else {
var statearr_34819_36820 = state_34796__$1;
(statearr_34819_36820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (14))){
var inst_34789 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34820_36821 = state_34796__$1;
(statearr_34820_36821[(2)] = inst_34789);

(statearr_34820_36821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (10))){
var inst_34781 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34821_36822 = state_34796__$1;
(statearr_34821_36822[(2)] = inst_34781);

(statearr_34821_36822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (8))){
var inst_34778 = cljs.core.async.close_BANG_(to);
var state_34796__$1 = state_34796;
var statearr_34822_36823 = state_34796__$1;
(statearr_34822_36823[(2)] = inst_34778);

(statearr_34822_36823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34255__auto__ = null;
var cljs$core$async$state_machine__34255__auto____0 = (function (){
var statearr_34829 = [null,null,null,null,null,null,null,null];
(statearr_34829[(0)] = cljs$core$async$state_machine__34255__auto__);

(statearr_34829[(1)] = (1));

return statearr_34829;
});
var cljs$core$async$state_machine__34255__auto____1 = (function (state_34796){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_34796);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e34830){if((e34830 instanceof Object)){
var ex__34258__auto__ = e34830;
var statearr_34831_36826 = state_34796;
(statearr_34831_36826[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34830;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36828 = state_34796;
state_34796 = G__36828;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$state_machine__34255__auto__ = function(state_34796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34255__auto____1.call(this,state_34796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34255__auto____0;
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34255__auto____1;
return cljs$core$async$state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_34832 = f__34452__auto__();
(statearr_34832[(6)] = c__34451__auto___36804);

return statearr_34832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__34834){
var vec__34836 = p__34834;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34836,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34836,(1),null);
var job = vec__34836;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34451__auto___36850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_34846){
var state_val_34847 = (state_34846[(1)]);
if((state_val_34847 === (1))){
var state_34846__$1 = state_34846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34846__$1,(2),res,v);
} else {
if((state_val_34847 === (2))){
var inst_34843 = (state_34846[(2)]);
var inst_34844 = cljs.core.async.close_BANG_(res);
var state_34846__$1 = (function (){var statearr_34849 = state_34846;
(statearr_34849[(7)] = inst_34843);

return statearr_34849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34846__$1,inst_34844);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0 = (function (){
var statearr_34850 = [null,null,null,null,null,null,null,null];
(statearr_34850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__);

(statearr_34850[(1)] = (1));

return statearr_34850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1 = (function (state_34846){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_34846);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e34851){if((e34851 instanceof Object)){
var ex__34258__auto__ = e34851;
var statearr_34852_36852 = state_34846;
(statearr_34852_36852[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36853 = state_34846;
state_34846 = G__36853;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__ = function(state_34846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1.call(this,state_34846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_34853 = f__34452__auto__();
(statearr_34853[(6)] = c__34451__auto___36850);

return statearr_34853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34854){
var vec__34855 = p__34854;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34855,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34855,(1),null);
var job = vec__34855;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___36855 = n;
var __36856 = (0);
while(true){
if((__36856 < n__4666__auto___36855)){
var G__34863_36858 = type;
var G__34863_36859__$1 = (((G__34863_36858 instanceof cljs.core.Keyword))?G__34863_36858.fqn:null);
switch (G__34863_36859__$1) {
case "compute":
var c__34451__auto___36861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36856,c__34451__auto___36861,G__34863_36858,G__34863_36859__$1,n__4666__auto___36855,jobs,results,process,async){
return (function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = ((function (__36856,c__34451__auto___36861,G__34863_36858,G__34863_36859__$1,n__4666__auto___36855,jobs,results,process,async){
return (function (state_34876){
var state_val_34877 = (state_34876[(1)]);
if((state_val_34877 === (1))){
var state_34876__$1 = state_34876;
var statearr_34878_36862 = state_34876__$1;
(statearr_34878_36862[(2)] = null);

(statearr_34878_36862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (2))){
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34876__$1,(4),jobs);
} else {
if((state_val_34877 === (3))){
var inst_34874 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34876__$1,inst_34874);
} else {
if((state_val_34877 === (4))){
var inst_34866 = (state_34876[(2)]);
var inst_34867 = process(inst_34866);
var state_34876__$1 = state_34876;
if(cljs.core.truth_(inst_34867)){
var statearr_34879_36863 = state_34876__$1;
(statearr_34879_36863[(1)] = (5));

} else {
var statearr_34880_36864 = state_34876__$1;
(statearr_34880_36864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (5))){
var state_34876__$1 = state_34876;
var statearr_34884_36865 = state_34876__$1;
(statearr_34884_36865[(2)] = null);

(statearr_34884_36865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (6))){
var state_34876__$1 = state_34876;
var statearr_34885_36866 = state_34876__$1;
(statearr_34885_36866[(2)] = null);

(statearr_34885_36866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (7))){
var inst_34872 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
var statearr_34886_36867 = state_34876__$1;
(statearr_34886_36867[(2)] = inst_34872);

(statearr_34886_36867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36856,c__34451__auto___36861,G__34863_36858,G__34863_36859__$1,n__4666__auto___36855,jobs,results,process,async))
;
return ((function (__36856,switch__34254__auto__,c__34451__auto___36861,G__34863_36858,G__34863_36859__$1,n__4666__auto___36855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0 = (function (){
var statearr_34887 = [null,null,null,null,null,null,null];
(statearr_34887[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__);

(statearr_34887[(1)] = (1));

return statearr_34887;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1 = (function (state_34876){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_34876);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e34888){if((e34888 instanceof Object)){
var ex__34258__auto__ = e34888;
var statearr_34889_36870 = state_34876;
(statearr_34889_36870[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34888;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36871 = state_34876;
state_34876 = G__36871;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__ = function(state_34876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1.call(this,state_34876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__;
})()
;})(__36856,switch__34254__auto__,c__34451__auto___36861,G__34863_36858,G__34863_36859__$1,n__4666__auto___36855,jobs,results,process,async))
})();
var state__34453__auto__ = (function (){var statearr_34891 = f__34452__auto__();
(statearr_34891[(6)] = c__34451__auto___36861);

return statearr_34891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
});})(__36856,c__34451__auto___36861,G__34863_36858,G__34863_36859__$1,n__4666__auto___36855,jobs,results,process,async))
);


break;
case "async":
var c__34451__auto___36872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36856,c__34451__auto___36872,G__34863_36858,G__34863_36859__$1,n__4666__auto___36855,jobs,results,process,async){
return (function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = ((function (__36856,c__34451__auto___36872,G__34863_36858,G__34863_36859__$1,n__4666__auto___36855,jobs,results,process,async){
return (function (state_34904){
var state_val_34905 = (state_34904[(1)]);
if((state_val_34905 === (1))){
var state_34904__$1 = state_34904;
var statearr_34911_36873 = state_34904__$1;
(statearr_34911_36873[(2)] = null);

(statearr_34911_36873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34905 === (2))){
var state_34904__$1 = state_34904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34904__$1,(4),jobs);
} else {
if((state_val_34905 === (3))){
var inst_34902 = (state_34904[(2)]);
var state_34904__$1 = state_34904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34904__$1,inst_34902);
} else {
if((state_val_34905 === (4))){
var inst_34894 = (state_34904[(2)]);
var inst_34895 = async(inst_34894);
var state_34904__$1 = state_34904;
if(cljs.core.truth_(inst_34895)){
var statearr_34916_36875 = state_34904__$1;
(statearr_34916_36875[(1)] = (5));

} else {
var statearr_34917_36876 = state_34904__$1;
(statearr_34917_36876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34905 === (5))){
var state_34904__$1 = state_34904;
var statearr_34918_36877 = state_34904__$1;
(statearr_34918_36877[(2)] = null);

(statearr_34918_36877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34905 === (6))){
var state_34904__$1 = state_34904;
var statearr_34919_36878 = state_34904__$1;
(statearr_34919_36878[(2)] = null);

(statearr_34919_36878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34905 === (7))){
var inst_34900 = (state_34904[(2)]);
var state_34904__$1 = state_34904;
var statearr_34920_36879 = state_34904__$1;
(statearr_34920_36879[(2)] = inst_34900);

(statearr_34920_36879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36856,c__34451__auto___36872,G__34863_36858,G__34863_36859__$1,n__4666__auto___36855,jobs,results,process,async))
;
return ((function (__36856,switch__34254__auto__,c__34451__auto___36872,G__34863_36858,G__34863_36859__$1,n__4666__auto___36855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0 = (function (){
var statearr_34921 = [null,null,null,null,null,null,null];
(statearr_34921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__);

(statearr_34921[(1)] = (1));

return statearr_34921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1 = (function (state_34904){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_34904);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e34922){if((e34922 instanceof Object)){
var ex__34258__auto__ = e34922;
var statearr_34923_36880 = state_34904;
(statearr_34923_36880[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36885 = state_34904;
state_34904 = G__36885;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__ = function(state_34904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1.call(this,state_34904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__;
})()
;})(__36856,switch__34254__auto__,c__34451__auto___36872,G__34863_36858,G__34863_36859__$1,n__4666__auto___36855,jobs,results,process,async))
})();
var state__34453__auto__ = (function (){var statearr_34924 = f__34452__auto__();
(statearr_34924[(6)] = c__34451__auto___36872);

return statearr_34924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
});})(__36856,c__34451__auto___36872,G__34863_36858,G__34863_36859__$1,n__4666__auto___36855,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34863_36859__$1)].join('')));

}

var G__36886 = (__36856 + (1));
__36856 = G__36886;
continue;
} else {
}
break;
}

var c__34451__auto___36887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_34950){
var state_val_34951 = (state_34950[(1)]);
if((state_val_34951 === (7))){
var inst_34942 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34953_36888 = state_34950__$1;
(statearr_34953_36888[(2)] = inst_34942);

(statearr_34953_36888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (1))){
var state_34950__$1 = state_34950;
var statearr_34955_36889 = state_34950__$1;
(statearr_34955_36889[(2)] = null);

(statearr_34955_36889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (4))){
var inst_34927 = (state_34950[(7)]);
var inst_34927__$1 = (state_34950[(2)]);
var inst_34928 = (inst_34927__$1 == null);
var state_34950__$1 = (function (){var statearr_34956 = state_34950;
(statearr_34956[(7)] = inst_34927__$1);

return statearr_34956;
})();
if(cljs.core.truth_(inst_34928)){
var statearr_34958_36890 = state_34950__$1;
(statearr_34958_36890[(1)] = (5));

} else {
var statearr_34959_36891 = state_34950__$1;
(statearr_34959_36891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (6))){
var inst_34927 = (state_34950[(7)]);
var inst_34932 = (state_34950[(8)]);
var inst_34932__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34934 = [inst_34927,inst_34932__$1];
var inst_34935 = (new cljs.core.PersistentVector(null,2,(5),inst_34933,inst_34934,null));
var state_34950__$1 = (function (){var statearr_34960 = state_34950;
(statearr_34960[(8)] = inst_34932__$1);

return statearr_34960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34950__$1,(8),jobs,inst_34935);
} else {
if((state_val_34951 === (3))){
var inst_34944 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34950__$1,inst_34944);
} else {
if((state_val_34951 === (2))){
var state_34950__$1 = state_34950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34950__$1,(4),from);
} else {
if((state_val_34951 === (9))){
var inst_34939 = (state_34950[(2)]);
var state_34950__$1 = (function (){var statearr_34961 = state_34950;
(statearr_34961[(9)] = inst_34939);

return statearr_34961;
})();
var statearr_34962_36893 = state_34950__$1;
(statearr_34962_36893[(2)] = null);

(statearr_34962_36893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (5))){
var inst_34930 = cljs.core.async.close_BANG_(jobs);
var state_34950__$1 = state_34950;
var statearr_34963_36894 = state_34950__$1;
(statearr_34963_36894[(2)] = inst_34930);

(statearr_34963_36894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (8))){
var inst_34932 = (state_34950[(8)]);
var inst_34937 = (state_34950[(2)]);
var state_34950__$1 = (function (){var statearr_34964 = state_34950;
(statearr_34964[(10)] = inst_34937);

return statearr_34964;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34950__$1,(9),results,inst_34932);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0 = (function (){
var statearr_34965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__);

(statearr_34965[(1)] = (1));

return statearr_34965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1 = (function (state_34950){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_34950);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e34967){if((e34967 instanceof Object)){
var ex__34258__auto__ = e34967;
var statearr_34968_36896 = state_34950;
(statearr_34968_36896[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34967;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36898 = state_34950;
state_34950 = G__36898;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__ = function(state_34950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1.call(this,state_34950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_34969 = f__34452__auto__();
(statearr_34969[(6)] = c__34451__auto___36887);

return statearr_34969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


var c__34451__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_35008){
var state_val_35009 = (state_35008[(1)]);
if((state_val_35009 === (7))){
var inst_35004 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35010_36899 = state_35008__$1;
(statearr_35010_36899[(2)] = inst_35004);

(statearr_35010_36899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (20))){
var state_35008__$1 = state_35008;
var statearr_35011_36900 = state_35008__$1;
(statearr_35011_36900[(2)] = null);

(statearr_35011_36900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (1))){
var state_35008__$1 = state_35008;
var statearr_35012_36901 = state_35008__$1;
(statearr_35012_36901[(2)] = null);

(statearr_35012_36901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (4))){
var inst_34972 = (state_35008[(7)]);
var inst_34972__$1 = (state_35008[(2)]);
var inst_34973 = (inst_34972__$1 == null);
var state_35008__$1 = (function (){var statearr_35013 = state_35008;
(statearr_35013[(7)] = inst_34972__$1);

return statearr_35013;
})();
if(cljs.core.truth_(inst_34973)){
var statearr_35014_36902 = state_35008__$1;
(statearr_35014_36902[(1)] = (5));

} else {
var statearr_35015_36903 = state_35008__$1;
(statearr_35015_36903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (15))){
var inst_34985 = (state_35008[(8)]);
var state_35008__$1 = state_35008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35008__$1,(18),to,inst_34985);
} else {
if((state_val_35009 === (21))){
var inst_34999 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35022_36904 = state_35008__$1;
(statearr_35022_36904[(2)] = inst_34999);

(statearr_35022_36904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (13))){
var inst_35001 = (state_35008[(2)]);
var state_35008__$1 = (function (){var statearr_35027 = state_35008;
(statearr_35027[(9)] = inst_35001);

return statearr_35027;
})();
var statearr_35028_36905 = state_35008__$1;
(statearr_35028_36905[(2)] = null);

(statearr_35028_36905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (6))){
var inst_34972 = (state_35008[(7)]);
var state_35008__$1 = state_35008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35008__$1,(11),inst_34972);
} else {
if((state_val_35009 === (17))){
var inst_34994 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
if(cljs.core.truth_(inst_34994)){
var statearr_35029_36913 = state_35008__$1;
(statearr_35029_36913[(1)] = (19));

} else {
var statearr_35030_36914 = state_35008__$1;
(statearr_35030_36914[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (3))){
var inst_35006 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35008__$1,inst_35006);
} else {
if((state_val_35009 === (12))){
var inst_34982 = (state_35008[(10)]);
var state_35008__$1 = state_35008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35008__$1,(14),inst_34982);
} else {
if((state_val_35009 === (2))){
var state_35008__$1 = state_35008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35008__$1,(4),results);
} else {
if((state_val_35009 === (19))){
var state_35008__$1 = state_35008;
var statearr_35038_36918 = state_35008__$1;
(statearr_35038_36918[(2)] = null);

(statearr_35038_36918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (11))){
var inst_34982 = (state_35008[(2)]);
var state_35008__$1 = (function (){var statearr_35039 = state_35008;
(statearr_35039[(10)] = inst_34982);

return statearr_35039;
})();
var statearr_35043_36919 = state_35008__$1;
(statearr_35043_36919[(2)] = null);

(statearr_35043_36919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (9))){
var state_35008__$1 = state_35008;
var statearr_35044_36923 = state_35008__$1;
(statearr_35044_36923[(2)] = null);

(statearr_35044_36923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (5))){
var state_35008__$1 = state_35008;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35045_36924 = state_35008__$1;
(statearr_35045_36924[(1)] = (8));

} else {
var statearr_35046_36925 = state_35008__$1;
(statearr_35046_36925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (14))){
var inst_34985 = (state_35008[(8)]);
var inst_34985__$1 = (state_35008[(2)]);
var inst_34987 = (inst_34985__$1 == null);
var inst_34988 = cljs.core.not(inst_34987);
var state_35008__$1 = (function (){var statearr_35047 = state_35008;
(statearr_35047[(8)] = inst_34985__$1);

return statearr_35047;
})();
if(inst_34988){
var statearr_35048_36926 = state_35008__$1;
(statearr_35048_36926[(1)] = (15));

} else {
var statearr_35049_36930 = state_35008__$1;
(statearr_35049_36930[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (16))){
var state_35008__$1 = state_35008;
var statearr_35050_36931 = state_35008__$1;
(statearr_35050_36931[(2)] = false);

(statearr_35050_36931[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (10))){
var inst_34979 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35051_36932 = state_35008__$1;
(statearr_35051_36932[(2)] = inst_34979);

(statearr_35051_36932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (18))){
var inst_34991 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35052_36933 = state_35008__$1;
(statearr_35052_36933[(2)] = inst_34991);

(statearr_35052_36933[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (8))){
var inst_34976 = cljs.core.async.close_BANG_(to);
var state_35008__$1 = state_35008;
var statearr_35053_36938 = state_35008__$1;
(statearr_35053_36938[(2)] = inst_34976);

(statearr_35053_36938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0 = (function (){
var statearr_35054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__);

(statearr_35054[(1)] = (1));

return statearr_35054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1 = (function (state_35008){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_35008);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e35055){if((e35055 instanceof Object)){
var ex__34258__auto__ = e35055;
var statearr_35056_36942 = state_35008;
(statearr_35056_36942[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36943 = state_35008;
state_35008 = G__36943;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__ = function(state_35008){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1.call(this,state_35008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34255__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_35057 = f__34452__auto__();
(statearr_35057[(6)] = c__34451__auto__);

return statearr_35057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));

return c__34451__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__35068 = arguments.length;
switch (G__35068) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__35074 = arguments.length;
switch (G__35074) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__35076 = arguments.length;
switch (G__35076) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34451__auto___36959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_35102){
var state_val_35103 = (state_35102[(1)]);
if((state_val_35103 === (7))){
var inst_35098 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
var statearr_35104_36960 = state_35102__$1;
(statearr_35104_36960[(2)] = inst_35098);

(statearr_35104_36960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (1))){
var state_35102__$1 = state_35102;
var statearr_35105_36961 = state_35102__$1;
(statearr_35105_36961[(2)] = null);

(statearr_35105_36961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (4))){
var inst_35079 = (state_35102[(7)]);
var inst_35079__$1 = (state_35102[(2)]);
var inst_35080 = (inst_35079__$1 == null);
var state_35102__$1 = (function (){var statearr_35106 = state_35102;
(statearr_35106[(7)] = inst_35079__$1);

return statearr_35106;
})();
if(cljs.core.truth_(inst_35080)){
var statearr_35107_36962 = state_35102__$1;
(statearr_35107_36962[(1)] = (5));

} else {
var statearr_35108_36963 = state_35102__$1;
(statearr_35108_36963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (13))){
var state_35102__$1 = state_35102;
var statearr_35109_36964 = state_35102__$1;
(statearr_35109_36964[(2)] = null);

(statearr_35109_36964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (6))){
var inst_35079 = (state_35102[(7)]);
var inst_35085 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35079) : p.call(null,inst_35079));
var state_35102__$1 = state_35102;
if(cljs.core.truth_(inst_35085)){
var statearr_35110_36965 = state_35102__$1;
(statearr_35110_36965[(1)] = (9));

} else {
var statearr_35111_36966 = state_35102__$1;
(statearr_35111_36966[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (3))){
var inst_35100 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35102__$1,inst_35100);
} else {
if((state_val_35103 === (12))){
var state_35102__$1 = state_35102;
var statearr_35112_36967 = state_35102__$1;
(statearr_35112_36967[(2)] = null);

(statearr_35112_36967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (2))){
var state_35102__$1 = state_35102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35102__$1,(4),ch);
} else {
if((state_val_35103 === (11))){
var inst_35079 = (state_35102[(7)]);
var inst_35089 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35102__$1,(8),inst_35089,inst_35079);
} else {
if((state_val_35103 === (9))){
var state_35102__$1 = state_35102;
var statearr_35113_36968 = state_35102__$1;
(statearr_35113_36968[(2)] = tc);

(statearr_35113_36968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (5))){
var inst_35082 = cljs.core.async.close_BANG_(tc);
var inst_35083 = cljs.core.async.close_BANG_(fc);
var state_35102__$1 = (function (){var statearr_35114 = state_35102;
(statearr_35114[(8)] = inst_35082);

return statearr_35114;
})();
var statearr_35115_36969 = state_35102__$1;
(statearr_35115_36969[(2)] = inst_35083);

(statearr_35115_36969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (14))){
var inst_35096 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
var statearr_35116_36970 = state_35102__$1;
(statearr_35116_36970[(2)] = inst_35096);

(statearr_35116_36970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (10))){
var state_35102__$1 = state_35102;
var statearr_35117_36975 = state_35102__$1;
(statearr_35117_36975[(2)] = fc);

(statearr_35117_36975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (8))){
var inst_35091 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
if(cljs.core.truth_(inst_35091)){
var statearr_35118_36978 = state_35102__$1;
(statearr_35118_36978[(1)] = (12));

} else {
var statearr_35119_36979 = state_35102__$1;
(statearr_35119_36979[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34255__auto__ = null;
var cljs$core$async$state_machine__34255__auto____0 = (function (){
var statearr_35120 = [null,null,null,null,null,null,null,null,null];
(statearr_35120[(0)] = cljs$core$async$state_machine__34255__auto__);

(statearr_35120[(1)] = (1));

return statearr_35120;
});
var cljs$core$async$state_machine__34255__auto____1 = (function (state_35102){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_35102);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e35121){if((e35121 instanceof Object)){
var ex__34258__auto__ = e35121;
var statearr_35122_36982 = state_35102;
(statearr_35122_36982[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35121;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36987 = state_35102;
state_35102 = G__36987;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$state_machine__34255__auto__ = function(state_35102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34255__auto____1.call(this,state_35102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34255__auto____0;
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34255__auto____1;
return cljs$core$async$state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_35132 = f__34452__auto__();
(statearr_35132[(6)] = c__34451__auto___36959);

return statearr_35132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34451__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_35157){
var state_val_35158 = (state_35157[(1)]);
if((state_val_35158 === (7))){
var inst_35153 = (state_35157[(2)]);
var state_35157__$1 = state_35157;
var statearr_35159_36992 = state_35157__$1;
(statearr_35159_36992[(2)] = inst_35153);

(statearr_35159_36992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (1))){
var inst_35137 = init;
var state_35157__$1 = (function (){var statearr_35160 = state_35157;
(statearr_35160[(7)] = inst_35137);

return statearr_35160;
})();
var statearr_35161_36995 = state_35157__$1;
(statearr_35161_36995[(2)] = null);

(statearr_35161_36995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (4))){
var inst_35140 = (state_35157[(8)]);
var inst_35140__$1 = (state_35157[(2)]);
var inst_35141 = (inst_35140__$1 == null);
var state_35157__$1 = (function (){var statearr_35162 = state_35157;
(statearr_35162[(8)] = inst_35140__$1);

return statearr_35162;
})();
if(cljs.core.truth_(inst_35141)){
var statearr_35163_37000 = state_35157__$1;
(statearr_35163_37000[(1)] = (5));

} else {
var statearr_35164_37001 = state_35157__$1;
(statearr_35164_37001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (6))){
var inst_35144 = (state_35157[(9)]);
var inst_35140 = (state_35157[(8)]);
var inst_35137 = (state_35157[(7)]);
var inst_35144__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35137,inst_35140) : f.call(null,inst_35137,inst_35140));
var inst_35145 = cljs.core.reduced_QMARK_(inst_35144__$1);
var state_35157__$1 = (function (){var statearr_35165 = state_35157;
(statearr_35165[(9)] = inst_35144__$1);

return statearr_35165;
})();
if(inst_35145){
var statearr_35166_37005 = state_35157__$1;
(statearr_35166_37005[(1)] = (8));

} else {
var statearr_35167_37007 = state_35157__$1;
(statearr_35167_37007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (3))){
var inst_35155 = (state_35157[(2)]);
var state_35157__$1 = state_35157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35157__$1,inst_35155);
} else {
if((state_val_35158 === (2))){
var state_35157__$1 = state_35157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35157__$1,(4),ch);
} else {
if((state_val_35158 === (9))){
var inst_35144 = (state_35157[(9)]);
var inst_35137 = inst_35144;
var state_35157__$1 = (function (){var statearr_35168 = state_35157;
(statearr_35168[(7)] = inst_35137);

return statearr_35168;
})();
var statearr_35169_37015 = state_35157__$1;
(statearr_35169_37015[(2)] = null);

(statearr_35169_37015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (5))){
var inst_35137 = (state_35157[(7)]);
var state_35157__$1 = state_35157;
var statearr_35174_37020 = state_35157__$1;
(statearr_35174_37020[(2)] = inst_35137);

(statearr_35174_37020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (10))){
var inst_35151 = (state_35157[(2)]);
var state_35157__$1 = state_35157;
var statearr_35175_37022 = state_35157__$1;
(statearr_35175_37022[(2)] = inst_35151);

(statearr_35175_37022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (8))){
var inst_35144 = (state_35157[(9)]);
var inst_35147 = cljs.core.deref(inst_35144);
var state_35157__$1 = state_35157;
var statearr_35181_37023 = state_35157__$1;
(statearr_35181_37023[(2)] = inst_35147);

(statearr_35181_37023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34255__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34255__auto____0 = (function (){
var statearr_35182 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35182[(0)] = cljs$core$async$reduce_$_state_machine__34255__auto__);

(statearr_35182[(1)] = (1));

return statearr_35182;
});
var cljs$core$async$reduce_$_state_machine__34255__auto____1 = (function (state_35157){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_35157);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e35183){if((e35183 instanceof Object)){
var ex__34258__auto__ = e35183;
var statearr_35184_37027 = state_35157;
(statearr_35184_37027[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35183;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37030 = state_35157;
state_35157 = G__37030;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34255__auto__ = function(state_35157){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34255__auto____1.call(this,state_35157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34255__auto____0;
cljs$core$async$reduce_$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34255__auto____1;
return cljs$core$async$reduce_$_state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_35185 = f__34452__auto__();
(statearr_35185[(6)] = c__34451__auto__);

return statearr_35185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));

return c__34451__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34451__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_35191){
var state_val_35192 = (state_35191[(1)]);
if((state_val_35192 === (1))){
var inst_35186 = cljs.core.async.reduce(f__$1,init,ch);
var state_35191__$1 = state_35191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35191__$1,(2),inst_35186);
} else {
if((state_val_35192 === (2))){
var inst_35188 = (state_35191[(2)]);
var inst_35189 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35188) : f__$1.call(null,inst_35188));
var state_35191__$1 = state_35191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35191__$1,inst_35189);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34255__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34255__auto____0 = (function (){
var statearr_35197 = [null,null,null,null,null,null,null];
(statearr_35197[(0)] = cljs$core$async$transduce_$_state_machine__34255__auto__);

(statearr_35197[(1)] = (1));

return statearr_35197;
});
var cljs$core$async$transduce_$_state_machine__34255__auto____1 = (function (state_35191){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_35191);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e35198){if((e35198 instanceof Object)){
var ex__34258__auto__ = e35198;
var statearr_35199_37043 = state_35191;
(statearr_35199_37043[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35198;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37049 = state_35191;
state_35191 = G__37049;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34255__auto__ = function(state_35191){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34255__auto____1.call(this,state_35191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34255__auto____0;
cljs$core$async$transduce_$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34255__auto____1;
return cljs$core$async$transduce_$_state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_35200 = f__34452__auto__();
(statearr_35200[(6)] = c__34451__auto__);

return statearr_35200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));

return c__34451__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35202 = arguments.length;
switch (G__35202) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34451__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_35236){
var state_val_35237 = (state_35236[(1)]);
if((state_val_35237 === (7))){
var inst_35218 = (state_35236[(2)]);
var state_35236__$1 = state_35236;
var statearr_35238_37062 = state_35236__$1;
(statearr_35238_37062[(2)] = inst_35218);

(statearr_35238_37062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (1))){
var inst_35207 = cljs.core.seq(coll);
var inst_35208 = inst_35207;
var state_35236__$1 = (function (){var statearr_35239 = state_35236;
(statearr_35239[(7)] = inst_35208);

return statearr_35239;
})();
var statearr_35240_37063 = state_35236__$1;
(statearr_35240_37063[(2)] = null);

(statearr_35240_37063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (4))){
var inst_35208 = (state_35236[(7)]);
var inst_35216 = cljs.core.first(inst_35208);
var state_35236__$1 = state_35236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35236__$1,(7),ch,inst_35216);
} else {
if((state_val_35237 === (13))){
var inst_35230 = (state_35236[(2)]);
var state_35236__$1 = state_35236;
var statearr_35241_37064 = state_35236__$1;
(statearr_35241_37064[(2)] = inst_35230);

(statearr_35241_37064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (6))){
var inst_35221 = (state_35236[(2)]);
var state_35236__$1 = state_35236;
if(cljs.core.truth_(inst_35221)){
var statearr_35246_37065 = state_35236__$1;
(statearr_35246_37065[(1)] = (8));

} else {
var statearr_35247_37066 = state_35236__$1;
(statearr_35247_37066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (3))){
var inst_35234 = (state_35236[(2)]);
var state_35236__$1 = state_35236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35236__$1,inst_35234);
} else {
if((state_val_35237 === (12))){
var state_35236__$1 = state_35236;
var statearr_35248_37067 = state_35236__$1;
(statearr_35248_37067[(2)] = null);

(statearr_35248_37067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (2))){
var inst_35208 = (state_35236[(7)]);
var state_35236__$1 = state_35236;
if(cljs.core.truth_(inst_35208)){
var statearr_35254_37068 = state_35236__$1;
(statearr_35254_37068[(1)] = (4));

} else {
var statearr_35255_37073 = state_35236__$1;
(statearr_35255_37073[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (11))){
var inst_35227 = cljs.core.async.close_BANG_(ch);
var state_35236__$1 = state_35236;
var statearr_35256_37074 = state_35236__$1;
(statearr_35256_37074[(2)] = inst_35227);

(statearr_35256_37074[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (9))){
var state_35236__$1 = state_35236;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35257_37076 = state_35236__$1;
(statearr_35257_37076[(1)] = (11));

} else {
var statearr_35258_37083 = state_35236__$1;
(statearr_35258_37083[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (5))){
var inst_35208 = (state_35236[(7)]);
var state_35236__$1 = state_35236;
var statearr_35259_37086 = state_35236__$1;
(statearr_35259_37086[(2)] = inst_35208);

(statearr_35259_37086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (10))){
var inst_35232 = (state_35236[(2)]);
var state_35236__$1 = state_35236;
var statearr_35260_37088 = state_35236__$1;
(statearr_35260_37088[(2)] = inst_35232);

(statearr_35260_37088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35237 === (8))){
var inst_35208 = (state_35236[(7)]);
var inst_35223 = cljs.core.next(inst_35208);
var inst_35208__$1 = inst_35223;
var state_35236__$1 = (function (){var statearr_35261 = state_35236;
(statearr_35261[(7)] = inst_35208__$1);

return statearr_35261;
})();
var statearr_35262_37091 = state_35236__$1;
(statearr_35262_37091[(2)] = null);

(statearr_35262_37091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34255__auto__ = null;
var cljs$core$async$state_machine__34255__auto____0 = (function (){
var statearr_35265 = [null,null,null,null,null,null,null,null];
(statearr_35265[(0)] = cljs$core$async$state_machine__34255__auto__);

(statearr_35265[(1)] = (1));

return statearr_35265;
});
var cljs$core$async$state_machine__34255__auto____1 = (function (state_35236){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_35236);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e35266){if((e35266 instanceof Object)){
var ex__34258__auto__ = e35266;
var statearr_35267_37101 = state_35236;
(statearr_35267_37101[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35266;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37106 = state_35236;
state_35236 = G__37106;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$state_machine__34255__auto__ = function(state_35236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34255__auto____1.call(this,state_35236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34255__auto____0;
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34255__auto____1;
return cljs$core$async$state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_35270 = f__34452__auto__();
(statearr_35270[(6)] = c__34451__auto__);

return statearr_35270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));

return c__34451__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35280 = (function (ch,cs,meta35281){
this.ch = ch;
this.cs = cs;
this.meta35281 = meta35281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35282,meta35281__$1){
var self__ = this;
var _35282__$1 = this;
return (new cljs.core.async.t_cljs$core$async35280(self__.ch,self__.cs,meta35281__$1));
}));

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35282){
var self__ = this;
var _35282__$1 = this;
return self__.meta35281;
}));

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35281","meta35281",-125640433,null)], null);
}));

(cljs.core.async.t_cljs$core$async35280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35280");

(cljs.core.async.t_cljs$core$async35280.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35280.
 */
cljs.core.async.__GT_t_cljs$core$async35280 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35280(ch__$1,cs__$1,meta35281){
return (new cljs.core.async.t_cljs$core$async35280(ch__$1,cs__$1,meta35281));
});

}

return (new cljs.core.async.t_cljs$core$async35280(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34451__auto___37135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_35420){
var state_val_35421 = (state_35420[(1)]);
if((state_val_35421 === (7))){
var inst_35416 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35422_37140 = state_35420__$1;
(statearr_35422_37140[(2)] = inst_35416);

(statearr_35422_37140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (20))){
var inst_35320 = (state_35420[(7)]);
var inst_35332 = cljs.core.first(inst_35320);
var inst_35333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35332,(0),null);
var inst_35334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35332,(1),null);
var state_35420__$1 = (function (){var statearr_35426 = state_35420;
(statearr_35426[(8)] = inst_35333);

return statearr_35426;
})();
if(cljs.core.truth_(inst_35334)){
var statearr_35427_37144 = state_35420__$1;
(statearr_35427_37144[(1)] = (22));

} else {
var statearr_35428_37145 = state_35420__$1;
(statearr_35428_37145[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (27))){
var inst_35370 = (state_35420[(9)]);
var inst_35289 = (state_35420[(10)]);
var inst_35365 = (state_35420[(11)]);
var inst_35363 = (state_35420[(12)]);
var inst_35370__$1 = cljs.core._nth(inst_35363,inst_35365);
var inst_35371 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35370__$1,inst_35289,done);
var state_35420__$1 = (function (){var statearr_35431 = state_35420;
(statearr_35431[(9)] = inst_35370__$1);

return statearr_35431;
})();
if(cljs.core.truth_(inst_35371)){
var statearr_35432_37149 = state_35420__$1;
(statearr_35432_37149[(1)] = (30));

} else {
var statearr_35433_37150 = state_35420__$1;
(statearr_35433_37150[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (1))){
var state_35420__$1 = state_35420;
var statearr_35434_37151 = state_35420__$1;
(statearr_35434_37151[(2)] = null);

(statearr_35434_37151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (24))){
var inst_35320 = (state_35420[(7)]);
var inst_35339 = (state_35420[(2)]);
var inst_35340 = cljs.core.next(inst_35320);
var inst_35298 = inst_35340;
var inst_35299 = null;
var inst_35300 = (0);
var inst_35301 = (0);
var state_35420__$1 = (function (){var statearr_35435 = state_35420;
(statearr_35435[(13)] = inst_35298);

(statearr_35435[(14)] = inst_35301);

(statearr_35435[(15)] = inst_35300);

(statearr_35435[(16)] = inst_35339);

(statearr_35435[(17)] = inst_35299);

return statearr_35435;
})();
var statearr_35436_37156 = state_35420__$1;
(statearr_35436_37156[(2)] = null);

(statearr_35436_37156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (39))){
var state_35420__$1 = state_35420;
var statearr_35440_37160 = state_35420__$1;
(statearr_35440_37160[(2)] = null);

(statearr_35440_37160[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (4))){
var inst_35289 = (state_35420[(10)]);
var inst_35289__$1 = (state_35420[(2)]);
var inst_35290 = (inst_35289__$1 == null);
var state_35420__$1 = (function (){var statearr_35445 = state_35420;
(statearr_35445[(10)] = inst_35289__$1);

return statearr_35445;
})();
if(cljs.core.truth_(inst_35290)){
var statearr_35446_37162 = state_35420__$1;
(statearr_35446_37162[(1)] = (5));

} else {
var statearr_35447_37164 = state_35420__$1;
(statearr_35447_37164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (15))){
var inst_35298 = (state_35420[(13)]);
var inst_35301 = (state_35420[(14)]);
var inst_35300 = (state_35420[(15)]);
var inst_35299 = (state_35420[(17)]);
var inst_35316 = (state_35420[(2)]);
var inst_35317 = (inst_35301 + (1));
var tmp35437 = inst_35298;
var tmp35438 = inst_35300;
var tmp35439 = inst_35299;
var inst_35298__$1 = tmp35437;
var inst_35299__$1 = tmp35439;
var inst_35300__$1 = tmp35438;
var inst_35301__$1 = inst_35317;
var state_35420__$1 = (function (){var statearr_35448 = state_35420;
(statearr_35448[(13)] = inst_35298__$1);

(statearr_35448[(14)] = inst_35301__$1);

(statearr_35448[(15)] = inst_35300__$1);

(statearr_35448[(17)] = inst_35299__$1);

(statearr_35448[(18)] = inst_35316);

return statearr_35448;
})();
var statearr_35449_37169 = state_35420__$1;
(statearr_35449_37169[(2)] = null);

(statearr_35449_37169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (21))){
var inst_35343 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35456_37173 = state_35420__$1;
(statearr_35456_37173[(2)] = inst_35343);

(statearr_35456_37173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (31))){
var inst_35370 = (state_35420[(9)]);
var inst_35374 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35370);
var state_35420__$1 = state_35420;
var statearr_35457_37175 = state_35420__$1;
(statearr_35457_37175[(2)] = inst_35374);

(statearr_35457_37175[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (32))){
var inst_35365 = (state_35420[(11)]);
var inst_35362 = (state_35420[(19)]);
var inst_35364 = (state_35420[(20)]);
var inst_35363 = (state_35420[(12)]);
var inst_35376 = (state_35420[(2)]);
var inst_35377 = (inst_35365 + (1));
var tmp35450 = inst_35362;
var tmp35451 = inst_35364;
var tmp35452 = inst_35363;
var inst_35362__$1 = tmp35450;
var inst_35363__$1 = tmp35452;
var inst_35364__$1 = tmp35451;
var inst_35365__$1 = inst_35377;
var state_35420__$1 = (function (){var statearr_35461 = state_35420;
(statearr_35461[(21)] = inst_35376);

(statearr_35461[(11)] = inst_35365__$1);

(statearr_35461[(19)] = inst_35362__$1);

(statearr_35461[(20)] = inst_35364__$1);

(statearr_35461[(12)] = inst_35363__$1);

return statearr_35461;
})();
var statearr_35462_37181 = state_35420__$1;
(statearr_35462_37181[(2)] = null);

(statearr_35462_37181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (40))){
var inst_35389 = (state_35420[(22)]);
var inst_35393 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35389);
var state_35420__$1 = state_35420;
var statearr_35467_37187 = state_35420__$1;
(statearr_35467_37187[(2)] = inst_35393);

(statearr_35467_37187[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (33))){
var inst_35380 = (state_35420[(23)]);
var inst_35382 = cljs.core.chunked_seq_QMARK_(inst_35380);
var state_35420__$1 = state_35420;
if(inst_35382){
var statearr_35468_37188 = state_35420__$1;
(statearr_35468_37188[(1)] = (36));

} else {
var statearr_35472_37189 = state_35420__$1;
(statearr_35472_37189[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (13))){
var inst_35310 = (state_35420[(24)]);
var inst_35313 = cljs.core.async.close_BANG_(inst_35310);
var state_35420__$1 = state_35420;
var statearr_35473_37190 = state_35420__$1;
(statearr_35473_37190[(2)] = inst_35313);

(statearr_35473_37190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (22))){
var inst_35333 = (state_35420[(8)]);
var inst_35336 = cljs.core.async.close_BANG_(inst_35333);
var state_35420__$1 = state_35420;
var statearr_35477_37191 = state_35420__$1;
(statearr_35477_37191[(2)] = inst_35336);

(statearr_35477_37191[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (36))){
var inst_35380 = (state_35420[(23)]);
var inst_35384 = cljs.core.chunk_first(inst_35380);
var inst_35385 = cljs.core.chunk_rest(inst_35380);
var inst_35386 = cljs.core.count(inst_35384);
var inst_35362 = inst_35385;
var inst_35363 = inst_35384;
var inst_35364 = inst_35386;
var inst_35365 = (0);
var state_35420__$1 = (function (){var statearr_35482 = state_35420;
(statearr_35482[(11)] = inst_35365);

(statearr_35482[(19)] = inst_35362);

(statearr_35482[(20)] = inst_35364);

(statearr_35482[(12)] = inst_35363);

return statearr_35482;
})();
var statearr_35483_37197 = state_35420__$1;
(statearr_35483_37197[(2)] = null);

(statearr_35483_37197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (41))){
var inst_35380 = (state_35420[(23)]);
var inst_35395 = (state_35420[(2)]);
var inst_35396 = cljs.core.next(inst_35380);
var inst_35362 = inst_35396;
var inst_35363 = null;
var inst_35364 = (0);
var inst_35365 = (0);
var state_35420__$1 = (function (){var statearr_35484 = state_35420;
(statearr_35484[(11)] = inst_35365);

(statearr_35484[(25)] = inst_35395);

(statearr_35484[(19)] = inst_35362);

(statearr_35484[(20)] = inst_35364);

(statearr_35484[(12)] = inst_35363);

return statearr_35484;
})();
var statearr_35485_37204 = state_35420__$1;
(statearr_35485_37204[(2)] = null);

(statearr_35485_37204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (43))){
var state_35420__$1 = state_35420;
var statearr_35486_37207 = state_35420__$1;
(statearr_35486_37207[(2)] = null);

(statearr_35486_37207[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (29))){
var inst_35404 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35487_37210 = state_35420__$1;
(statearr_35487_37210[(2)] = inst_35404);

(statearr_35487_37210[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (44))){
var inst_35413 = (state_35420[(2)]);
var state_35420__$1 = (function (){var statearr_35488 = state_35420;
(statearr_35488[(26)] = inst_35413);

return statearr_35488;
})();
var statearr_35489_37211 = state_35420__$1;
(statearr_35489_37211[(2)] = null);

(statearr_35489_37211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (6))){
var inst_35354 = (state_35420[(27)]);
var inst_35353 = cljs.core.deref(cs);
var inst_35354__$1 = cljs.core.keys(inst_35353);
var inst_35355 = cljs.core.count(inst_35354__$1);
var inst_35356 = cljs.core.reset_BANG_(dctr,inst_35355);
var inst_35361 = cljs.core.seq(inst_35354__$1);
var inst_35362 = inst_35361;
var inst_35363 = null;
var inst_35364 = (0);
var inst_35365 = (0);
var state_35420__$1 = (function (){var statearr_35490 = state_35420;
(statearr_35490[(27)] = inst_35354__$1);

(statearr_35490[(11)] = inst_35365);

(statearr_35490[(28)] = inst_35356);

(statearr_35490[(19)] = inst_35362);

(statearr_35490[(20)] = inst_35364);

(statearr_35490[(12)] = inst_35363);

return statearr_35490;
})();
var statearr_35491_37226 = state_35420__$1;
(statearr_35491_37226[(2)] = null);

(statearr_35491_37226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (28))){
var inst_35362 = (state_35420[(19)]);
var inst_35380 = (state_35420[(23)]);
var inst_35380__$1 = cljs.core.seq(inst_35362);
var state_35420__$1 = (function (){var statearr_35492 = state_35420;
(statearr_35492[(23)] = inst_35380__$1);

return statearr_35492;
})();
if(inst_35380__$1){
var statearr_35493_37231 = state_35420__$1;
(statearr_35493_37231[(1)] = (33));

} else {
var statearr_35494_37232 = state_35420__$1;
(statearr_35494_37232[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (25))){
var inst_35365 = (state_35420[(11)]);
var inst_35364 = (state_35420[(20)]);
var inst_35367 = (inst_35365 < inst_35364);
var inst_35368 = inst_35367;
var state_35420__$1 = state_35420;
if(cljs.core.truth_(inst_35368)){
var statearr_35495_37236 = state_35420__$1;
(statearr_35495_37236[(1)] = (27));

} else {
var statearr_35496_37237 = state_35420__$1;
(statearr_35496_37237[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (34))){
var state_35420__$1 = state_35420;
var statearr_35497_37239 = state_35420__$1;
(statearr_35497_37239[(2)] = null);

(statearr_35497_37239[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (17))){
var state_35420__$1 = state_35420;
var statearr_35498_37242 = state_35420__$1;
(statearr_35498_37242[(2)] = null);

(statearr_35498_37242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (3))){
var inst_35418 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35420__$1,inst_35418);
} else {
if((state_val_35421 === (12))){
var inst_35348 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35499_37244 = state_35420__$1;
(statearr_35499_37244[(2)] = inst_35348);

(statearr_35499_37244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (2))){
var state_35420__$1 = state_35420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35420__$1,(4),ch);
} else {
if((state_val_35421 === (23))){
var state_35420__$1 = state_35420;
var statearr_35500_37247 = state_35420__$1;
(statearr_35500_37247[(2)] = null);

(statearr_35500_37247[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (35))){
var inst_35402 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35501_37252 = state_35420__$1;
(statearr_35501_37252[(2)] = inst_35402);

(statearr_35501_37252[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (19))){
var inst_35320 = (state_35420[(7)]);
var inst_35324 = cljs.core.chunk_first(inst_35320);
var inst_35325 = cljs.core.chunk_rest(inst_35320);
var inst_35326 = cljs.core.count(inst_35324);
var inst_35298 = inst_35325;
var inst_35299 = inst_35324;
var inst_35300 = inst_35326;
var inst_35301 = (0);
var state_35420__$1 = (function (){var statearr_35502 = state_35420;
(statearr_35502[(13)] = inst_35298);

(statearr_35502[(14)] = inst_35301);

(statearr_35502[(15)] = inst_35300);

(statearr_35502[(17)] = inst_35299);

return statearr_35502;
})();
var statearr_35503_37257 = state_35420__$1;
(statearr_35503_37257[(2)] = null);

(statearr_35503_37257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (11))){
var inst_35298 = (state_35420[(13)]);
var inst_35320 = (state_35420[(7)]);
var inst_35320__$1 = cljs.core.seq(inst_35298);
var state_35420__$1 = (function (){var statearr_35504 = state_35420;
(statearr_35504[(7)] = inst_35320__$1);

return statearr_35504;
})();
if(inst_35320__$1){
var statearr_35505_37262 = state_35420__$1;
(statearr_35505_37262[(1)] = (16));

} else {
var statearr_35506_37263 = state_35420__$1;
(statearr_35506_37263[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (9))){
var inst_35351 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35507_37264 = state_35420__$1;
(statearr_35507_37264[(2)] = inst_35351);

(statearr_35507_37264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (5))){
var inst_35296 = cljs.core.deref(cs);
var inst_35297 = cljs.core.seq(inst_35296);
var inst_35298 = inst_35297;
var inst_35299 = null;
var inst_35300 = (0);
var inst_35301 = (0);
var state_35420__$1 = (function (){var statearr_35508 = state_35420;
(statearr_35508[(13)] = inst_35298);

(statearr_35508[(14)] = inst_35301);

(statearr_35508[(15)] = inst_35300);

(statearr_35508[(17)] = inst_35299);

return statearr_35508;
})();
var statearr_35509_37267 = state_35420__$1;
(statearr_35509_37267[(2)] = null);

(statearr_35509_37267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (14))){
var state_35420__$1 = state_35420;
var statearr_35510_37272 = state_35420__$1;
(statearr_35510_37272[(2)] = null);

(statearr_35510_37272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (45))){
var inst_35410 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35511_37273 = state_35420__$1;
(statearr_35511_37273[(2)] = inst_35410);

(statearr_35511_37273[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (26))){
var inst_35354 = (state_35420[(27)]);
var inst_35406 = (state_35420[(2)]);
var inst_35407 = cljs.core.seq(inst_35354);
var state_35420__$1 = (function (){var statearr_35512 = state_35420;
(statearr_35512[(29)] = inst_35406);

return statearr_35512;
})();
if(inst_35407){
var statearr_35513_37277 = state_35420__$1;
(statearr_35513_37277[(1)] = (42));

} else {
var statearr_35515_37280 = state_35420__$1;
(statearr_35515_37280[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (16))){
var inst_35320 = (state_35420[(7)]);
var inst_35322 = cljs.core.chunked_seq_QMARK_(inst_35320);
var state_35420__$1 = state_35420;
if(inst_35322){
var statearr_35518_37281 = state_35420__$1;
(statearr_35518_37281[(1)] = (19));

} else {
var statearr_35519_37282 = state_35420__$1;
(statearr_35519_37282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (38))){
var inst_35399 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35520_37287 = state_35420__$1;
(statearr_35520_37287[(2)] = inst_35399);

(statearr_35520_37287[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (30))){
var state_35420__$1 = state_35420;
var statearr_35524_37288 = state_35420__$1;
(statearr_35524_37288[(2)] = null);

(statearr_35524_37288[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (10))){
var inst_35301 = (state_35420[(14)]);
var inst_35299 = (state_35420[(17)]);
var inst_35309 = cljs.core._nth(inst_35299,inst_35301);
var inst_35310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35309,(0),null);
var inst_35311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35309,(1),null);
var state_35420__$1 = (function (){var statearr_35525 = state_35420;
(statearr_35525[(24)] = inst_35310);

return statearr_35525;
})();
if(cljs.core.truth_(inst_35311)){
var statearr_35526_37292 = state_35420__$1;
(statearr_35526_37292[(1)] = (13));

} else {
var statearr_35527_37293 = state_35420__$1;
(statearr_35527_37293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (18))){
var inst_35346 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35528_37294 = state_35420__$1;
(statearr_35528_37294[(2)] = inst_35346);

(statearr_35528_37294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (42))){
var state_35420__$1 = state_35420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35420__$1,(45),dchan);
} else {
if((state_val_35421 === (37))){
var inst_35289 = (state_35420[(10)]);
var inst_35389 = (state_35420[(22)]);
var inst_35380 = (state_35420[(23)]);
var inst_35389__$1 = cljs.core.first(inst_35380);
var inst_35390 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35389__$1,inst_35289,done);
var state_35420__$1 = (function (){var statearr_35533 = state_35420;
(statearr_35533[(22)] = inst_35389__$1);

return statearr_35533;
})();
if(cljs.core.truth_(inst_35390)){
var statearr_35534_37295 = state_35420__$1;
(statearr_35534_37295[(1)] = (39));

} else {
var statearr_35535_37300 = state_35420__$1;
(statearr_35535_37300[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (8))){
var inst_35301 = (state_35420[(14)]);
var inst_35300 = (state_35420[(15)]);
var inst_35303 = (inst_35301 < inst_35300);
var inst_35304 = inst_35303;
var state_35420__$1 = state_35420;
if(cljs.core.truth_(inst_35304)){
var statearr_35538_37304 = state_35420__$1;
(statearr_35538_37304[(1)] = (10));

} else {
var statearr_35540_37305 = state_35420__$1;
(statearr_35540_37305[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__34255__auto__ = null;
var cljs$core$async$mult_$_state_machine__34255__auto____0 = (function (){
var statearr_35545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35545[(0)] = cljs$core$async$mult_$_state_machine__34255__auto__);

(statearr_35545[(1)] = (1));

return statearr_35545;
});
var cljs$core$async$mult_$_state_machine__34255__auto____1 = (function (state_35420){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_35420);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e35547){if((e35547 instanceof Object)){
var ex__34258__auto__ = e35547;
var statearr_35548_37312 = state_35420;
(statearr_35548_37312[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37315 = state_35420;
state_35420 = G__37315;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34255__auto__ = function(state_35420){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34255__auto____1.call(this,state_35420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34255__auto____0;
cljs$core$async$mult_$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34255__auto____1;
return cljs$core$async$mult_$_state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_35550 = f__34452__auto__();
(statearr_35550[(6)] = c__34451__auto___37135);

return statearr_35550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35557 = arguments.length;
switch (G__35557) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37338 = arguments.length;
var i__4790__auto___37339 = (0);
while(true){
if((i__4790__auto___37339 < len__4789__auto___37338)){
args__4795__auto__.push((arguments[i__4790__auto___37339]));

var G__37340 = (i__4790__auto___37339 + (1));
i__4790__auto___37339 = G__37340;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35588){
var map__35589 = p__35588;
var map__35589__$1 = (((((!((map__35589 == null))))?(((((map__35589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35589):map__35589);
var opts = map__35589__$1;
var statearr_35593_37342 = state;
(statearr_35593_37342[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35595_37343 = state;
(statearr_35595_37343[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35597_37344 = state;
(statearr_35597_37344[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35577){
var G__35578 = cljs.core.first(seq35577);
var seq35577__$1 = cljs.core.next(seq35577);
var G__35579 = cljs.core.first(seq35577__$1);
var seq35577__$2 = cljs.core.next(seq35577__$1);
var G__35580 = cljs.core.first(seq35577__$2);
var seq35577__$3 = cljs.core.next(seq35577__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35578,G__35579,G__35580,seq35577__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35605 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35606){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35606 = meta35606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35607,meta35606__$1){
var self__ = this;
var _35607__$1 = this;
return (new cljs.core.async.t_cljs$core$async35605(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35606__$1));
}));

(cljs.core.async.t_cljs$core$async35605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35607){
var self__ = this;
var _35607__$1 = this;
return self__.meta35606;
}));

(cljs.core.async.t_cljs$core$async35605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35605.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35605.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35605.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35605.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35605.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35605.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35606","meta35606",-1861915690,null)], null);
}));

(cljs.core.async.t_cljs$core$async35605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35605");

(cljs.core.async.t_cljs$core$async35605.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35605.
 */
cljs.core.async.__GT_t_cljs$core$async35605 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35605(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35606){
return (new cljs.core.async.t_cljs$core$async35605(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35606));
});

}

return (new cljs.core.async.t_cljs$core$async35605(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34451__auto___37364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_35737){
var state_val_35738 = (state_35737[(1)]);
if((state_val_35738 === (7))){
var inst_35645 = (state_35737[(2)]);
var state_35737__$1 = state_35737;
var statearr_35742_37365 = state_35737__$1;
(statearr_35742_37365[(2)] = inst_35645);

(statearr_35742_37365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (20))){
var inst_35657 = (state_35737[(7)]);
var state_35737__$1 = state_35737;
var statearr_35743_37366 = state_35737__$1;
(statearr_35743_37366[(2)] = inst_35657);

(statearr_35743_37366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (27))){
var state_35737__$1 = state_35737;
var statearr_35744_37371 = state_35737__$1;
(statearr_35744_37371[(2)] = null);

(statearr_35744_37371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (1))){
var inst_35628 = (state_35737[(8)]);
var inst_35628__$1 = calc_state();
var inst_35630 = (inst_35628__$1 == null);
var inst_35631 = cljs.core.not(inst_35630);
var state_35737__$1 = (function (){var statearr_35748 = state_35737;
(statearr_35748[(8)] = inst_35628__$1);

return statearr_35748;
})();
if(inst_35631){
var statearr_35749_37373 = state_35737__$1;
(statearr_35749_37373[(1)] = (2));

} else {
var statearr_35750_37374 = state_35737__$1;
(statearr_35750_37374[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (24))){
var inst_35684 = (state_35737[(9)]);
var inst_35694 = (state_35737[(10)]);
var inst_35708 = (state_35737[(11)]);
var inst_35708__$1 = (inst_35684.cljs$core$IFn$_invoke$arity$1 ? inst_35684.cljs$core$IFn$_invoke$arity$1(inst_35694) : inst_35684.call(null,inst_35694));
var state_35737__$1 = (function (){var statearr_35751 = state_35737;
(statearr_35751[(11)] = inst_35708__$1);

return statearr_35751;
})();
if(cljs.core.truth_(inst_35708__$1)){
var statearr_35752_37375 = state_35737__$1;
(statearr_35752_37375[(1)] = (29));

} else {
var statearr_35754_37376 = state_35737__$1;
(statearr_35754_37376[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (4))){
var inst_35648 = (state_35737[(2)]);
var state_35737__$1 = state_35737;
if(cljs.core.truth_(inst_35648)){
var statearr_35757_37378 = state_35737__$1;
(statearr_35757_37378[(1)] = (8));

} else {
var statearr_35758_37379 = state_35737__$1;
(statearr_35758_37379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (15))){
var inst_35678 = (state_35737[(2)]);
var state_35737__$1 = state_35737;
if(cljs.core.truth_(inst_35678)){
var statearr_35759_37380 = state_35737__$1;
(statearr_35759_37380[(1)] = (19));

} else {
var statearr_35760_37381 = state_35737__$1;
(statearr_35760_37381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (21))){
var inst_35683 = (state_35737[(12)]);
var inst_35683__$1 = (state_35737[(2)]);
var inst_35684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35683__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35683__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35683__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35737__$1 = (function (){var statearr_35763 = state_35737;
(statearr_35763[(12)] = inst_35683__$1);

(statearr_35763[(13)] = inst_35686);

(statearr_35763[(9)] = inst_35684);

return statearr_35763;
})();
return cljs.core.async.ioc_alts_BANG_(state_35737__$1,(22),inst_35687);
} else {
if((state_val_35738 === (31))){
var inst_35717 = (state_35737[(2)]);
var state_35737__$1 = state_35737;
if(cljs.core.truth_(inst_35717)){
var statearr_35765_37386 = state_35737__$1;
(statearr_35765_37386[(1)] = (32));

} else {
var statearr_35766_37387 = state_35737__$1;
(statearr_35766_37387[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (32))){
var inst_35693 = (state_35737[(14)]);
var state_35737__$1 = state_35737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35737__$1,(35),out,inst_35693);
} else {
if((state_val_35738 === (33))){
var inst_35683 = (state_35737[(12)]);
var inst_35657 = inst_35683;
var state_35737__$1 = (function (){var statearr_35767 = state_35737;
(statearr_35767[(7)] = inst_35657);

return statearr_35767;
})();
var statearr_35768_37388 = state_35737__$1;
(statearr_35768_37388[(2)] = null);

(statearr_35768_37388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (13))){
var inst_35657 = (state_35737[(7)]);
var inst_35664 = inst_35657.cljs$lang$protocol_mask$partition0$;
var inst_35665 = (inst_35664 & (64));
var inst_35669 = inst_35657.cljs$core$ISeq$;
var inst_35670 = (cljs.core.PROTOCOL_SENTINEL === inst_35669);
var inst_35671 = ((inst_35665) || (inst_35670));
var state_35737__$1 = state_35737;
if(cljs.core.truth_(inst_35671)){
var statearr_35771_37389 = state_35737__$1;
(statearr_35771_37389[(1)] = (16));

} else {
var statearr_35773_37390 = state_35737__$1;
(statearr_35773_37390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (22))){
var inst_35694 = (state_35737[(10)]);
var inst_35693 = (state_35737[(14)]);
var inst_35692 = (state_35737[(2)]);
var inst_35693__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35692,(0),null);
var inst_35694__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35692,(1),null);
var inst_35695 = (inst_35693__$1 == null);
var inst_35696 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35694__$1,change);
var inst_35697 = ((inst_35695) || (inst_35696));
var state_35737__$1 = (function (){var statearr_35779 = state_35737;
(statearr_35779[(10)] = inst_35694__$1);

(statearr_35779[(14)] = inst_35693__$1);

return statearr_35779;
})();
if(cljs.core.truth_(inst_35697)){
var statearr_35783_37391 = state_35737__$1;
(statearr_35783_37391[(1)] = (23));

} else {
var statearr_35787_37392 = state_35737__$1;
(statearr_35787_37392[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (36))){
var inst_35683 = (state_35737[(12)]);
var inst_35657 = inst_35683;
var state_35737__$1 = (function (){var statearr_35791 = state_35737;
(statearr_35791[(7)] = inst_35657);

return statearr_35791;
})();
var statearr_35792_37393 = state_35737__$1;
(statearr_35792_37393[(2)] = null);

(statearr_35792_37393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (29))){
var inst_35708 = (state_35737[(11)]);
var state_35737__$1 = state_35737;
var statearr_35793_37394 = state_35737__$1;
(statearr_35793_37394[(2)] = inst_35708);

(statearr_35793_37394[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (6))){
var state_35737__$1 = state_35737;
var statearr_35794_37395 = state_35737__$1;
(statearr_35794_37395[(2)] = false);

(statearr_35794_37395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (28))){
var inst_35704 = (state_35737[(2)]);
var inst_35705 = calc_state();
var inst_35657 = inst_35705;
var state_35737__$1 = (function (){var statearr_35795 = state_35737;
(statearr_35795[(7)] = inst_35657);

(statearr_35795[(15)] = inst_35704);

return statearr_35795;
})();
var statearr_35796_37396 = state_35737__$1;
(statearr_35796_37396[(2)] = null);

(statearr_35796_37396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (25))){
var inst_35733 = (state_35737[(2)]);
var state_35737__$1 = state_35737;
var statearr_35797_37397 = state_35737__$1;
(statearr_35797_37397[(2)] = inst_35733);

(statearr_35797_37397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (34))){
var inst_35731 = (state_35737[(2)]);
var state_35737__$1 = state_35737;
var statearr_35798_37398 = state_35737__$1;
(statearr_35798_37398[(2)] = inst_35731);

(statearr_35798_37398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (17))){
var state_35737__$1 = state_35737;
var statearr_35799_37399 = state_35737__$1;
(statearr_35799_37399[(2)] = false);

(statearr_35799_37399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (3))){
var state_35737__$1 = state_35737;
var statearr_35800_37400 = state_35737__$1;
(statearr_35800_37400[(2)] = false);

(statearr_35800_37400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (12))){
var inst_35735 = (state_35737[(2)]);
var state_35737__$1 = state_35737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35737__$1,inst_35735);
} else {
if((state_val_35738 === (2))){
var inst_35628 = (state_35737[(8)]);
var inst_35636 = inst_35628.cljs$lang$protocol_mask$partition0$;
var inst_35637 = (inst_35636 & (64));
var inst_35638 = inst_35628.cljs$core$ISeq$;
var inst_35640 = (cljs.core.PROTOCOL_SENTINEL === inst_35638);
var inst_35641 = ((inst_35637) || (inst_35640));
var state_35737__$1 = state_35737;
if(cljs.core.truth_(inst_35641)){
var statearr_35801_37404 = state_35737__$1;
(statearr_35801_37404[(1)] = (5));

} else {
var statearr_35802_37405 = state_35737__$1;
(statearr_35802_37405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (23))){
var inst_35693 = (state_35737[(14)]);
var inst_35699 = (inst_35693 == null);
var state_35737__$1 = state_35737;
if(cljs.core.truth_(inst_35699)){
var statearr_35803_37406 = state_35737__$1;
(statearr_35803_37406[(1)] = (26));

} else {
var statearr_35807_37407 = state_35737__$1;
(statearr_35807_37407[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (35))){
var inst_35722 = (state_35737[(2)]);
var state_35737__$1 = state_35737;
if(cljs.core.truth_(inst_35722)){
var statearr_35810_37408 = state_35737__$1;
(statearr_35810_37408[(1)] = (36));

} else {
var statearr_35811_37409 = state_35737__$1;
(statearr_35811_37409[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (19))){
var inst_35657 = (state_35737[(7)]);
var inst_35680 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35657);
var state_35737__$1 = state_35737;
var statearr_35812_37410 = state_35737__$1;
(statearr_35812_37410[(2)] = inst_35680);

(statearr_35812_37410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (11))){
var inst_35657 = (state_35737[(7)]);
var inst_35661 = (inst_35657 == null);
var inst_35662 = cljs.core.not(inst_35661);
var state_35737__$1 = state_35737;
if(inst_35662){
var statearr_35813_37411 = state_35737__$1;
(statearr_35813_37411[(1)] = (13));

} else {
var statearr_35814_37412 = state_35737__$1;
(statearr_35814_37412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (9))){
var inst_35628 = (state_35737[(8)]);
var state_35737__$1 = state_35737;
var statearr_35815_37413 = state_35737__$1;
(statearr_35815_37413[(2)] = inst_35628);

(statearr_35815_37413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (5))){
var state_35737__$1 = state_35737;
var statearr_35816_37414 = state_35737__$1;
(statearr_35816_37414[(2)] = true);

(statearr_35816_37414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (14))){
var state_35737__$1 = state_35737;
var statearr_35817_37415 = state_35737__$1;
(statearr_35817_37415[(2)] = false);

(statearr_35817_37415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (26))){
var inst_35694 = (state_35737[(10)]);
var inst_35701 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35694);
var state_35737__$1 = state_35737;
var statearr_35818_37416 = state_35737__$1;
(statearr_35818_37416[(2)] = inst_35701);

(statearr_35818_37416[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (16))){
var state_35737__$1 = state_35737;
var statearr_35819_37417 = state_35737__$1;
(statearr_35819_37417[(2)] = true);

(statearr_35819_37417[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (38))){
var inst_35727 = (state_35737[(2)]);
var state_35737__$1 = state_35737;
var statearr_35820_37419 = state_35737__$1;
(statearr_35820_37419[(2)] = inst_35727);

(statearr_35820_37419[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (30))){
var inst_35686 = (state_35737[(13)]);
var inst_35684 = (state_35737[(9)]);
var inst_35694 = (state_35737[(10)]);
var inst_35712 = cljs.core.empty_QMARK_(inst_35684);
var inst_35713 = (inst_35686.cljs$core$IFn$_invoke$arity$1 ? inst_35686.cljs$core$IFn$_invoke$arity$1(inst_35694) : inst_35686.call(null,inst_35694));
var inst_35714 = cljs.core.not(inst_35713);
var inst_35715 = ((inst_35712) && (inst_35714));
var state_35737__$1 = state_35737;
var statearr_35821_37420 = state_35737__$1;
(statearr_35821_37420[(2)] = inst_35715);

(statearr_35821_37420[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (10))){
var inst_35628 = (state_35737[(8)]);
var inst_35653 = (state_35737[(2)]);
var inst_35654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35653,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35653,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35653,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35657 = inst_35628;
var state_35737__$1 = (function (){var statearr_35822 = state_35737;
(statearr_35822[(16)] = inst_35654);

(statearr_35822[(7)] = inst_35657);

(statearr_35822[(17)] = inst_35655);

(statearr_35822[(18)] = inst_35656);

return statearr_35822;
})();
var statearr_35824_37421 = state_35737__$1;
(statearr_35824_37421[(2)] = null);

(statearr_35824_37421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (18))){
var inst_35675 = (state_35737[(2)]);
var state_35737__$1 = state_35737;
var statearr_35825_37422 = state_35737__$1;
(statearr_35825_37422[(2)] = inst_35675);

(statearr_35825_37422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (37))){
var state_35737__$1 = state_35737;
var statearr_35826_37423 = state_35737__$1;
(statearr_35826_37423[(2)] = null);

(statearr_35826_37423[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35738 === (8))){
var inst_35628 = (state_35737[(8)]);
var inst_35650 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35628);
var state_35737__$1 = state_35737;
var statearr_35827_37424 = state_35737__$1;
(statearr_35827_37424[(2)] = inst_35650);

(statearr_35827_37424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__34255__auto__ = null;
var cljs$core$async$mix_$_state_machine__34255__auto____0 = (function (){
var statearr_35832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35832[(0)] = cljs$core$async$mix_$_state_machine__34255__auto__);

(statearr_35832[(1)] = (1));

return statearr_35832;
});
var cljs$core$async$mix_$_state_machine__34255__auto____1 = (function (state_35737){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_35737);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e35833){if((e35833 instanceof Object)){
var ex__34258__auto__ = e35833;
var statearr_35834_37430 = state_35737;
(statearr_35834_37430[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37431 = state_35737;
state_35737 = G__37431;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34255__auto__ = function(state_35737){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34255__auto____1.call(this,state_35737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34255__auto____0;
cljs$core$async$mix_$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34255__auto____1;
return cljs$core$async$mix_$_state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_35835 = f__34452__auto__();
(statearr_35835[(6)] = c__34451__auto___37364);

return statearr_35835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35845 = arguments.length;
switch (G__35845) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35862 = arguments.length;
switch (G__35862) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35859_SHARP_){
if(cljs.core.truth_((p1__35859_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35859_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35859_SHARP_.call(null,topic)))){
return p1__35859_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35859_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35876 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35877){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35877 = meta35877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35878,meta35877__$1){
var self__ = this;
var _35878__$1 = this;
return (new cljs.core.async.t_cljs$core$async35876(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35877__$1));
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35878){
var self__ = this;
var _35878__$1 = this;
return self__.meta35877;
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35877","meta35877",1578836596,null)], null);
}));

(cljs.core.async.t_cljs$core$async35876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35876");

(cljs.core.async.t_cljs$core$async35876.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35876.
 */
cljs.core.async.__GT_t_cljs$core$async35876 = (function cljs$core$async$__GT_t_cljs$core$async35876(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35877){
return (new cljs.core.async.t_cljs$core$async35876(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35877));
});

}

return (new cljs.core.async.t_cljs$core$async35876(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34451__auto___37442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_35957){
var state_val_35958 = (state_35957[(1)]);
if((state_val_35958 === (7))){
var inst_35953 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
var statearr_35959_37443 = state_35957__$1;
(statearr_35959_37443[(2)] = inst_35953);

(statearr_35959_37443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (20))){
var state_35957__$1 = state_35957;
var statearr_35960_37444 = state_35957__$1;
(statearr_35960_37444[(2)] = null);

(statearr_35960_37444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (1))){
var state_35957__$1 = state_35957;
var statearr_35961_37445 = state_35957__$1;
(statearr_35961_37445[(2)] = null);

(statearr_35961_37445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (24))){
var inst_35936 = (state_35957[(7)]);
var inst_35945 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35936);
var state_35957__$1 = state_35957;
var statearr_35962_37446 = state_35957__$1;
(statearr_35962_37446[(2)] = inst_35945);

(statearr_35962_37446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (4))){
var inst_35888 = (state_35957[(8)]);
var inst_35888__$1 = (state_35957[(2)]);
var inst_35889 = (inst_35888__$1 == null);
var state_35957__$1 = (function (){var statearr_35963 = state_35957;
(statearr_35963[(8)] = inst_35888__$1);

return statearr_35963;
})();
if(cljs.core.truth_(inst_35889)){
var statearr_35964_37447 = state_35957__$1;
(statearr_35964_37447[(1)] = (5));

} else {
var statearr_35965_37448 = state_35957__$1;
(statearr_35965_37448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (15))){
var inst_35930 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
var statearr_35966_37449 = state_35957__$1;
(statearr_35966_37449[(2)] = inst_35930);

(statearr_35966_37449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (21))){
var inst_35950 = (state_35957[(2)]);
var state_35957__$1 = (function (){var statearr_35967 = state_35957;
(statearr_35967[(9)] = inst_35950);

return statearr_35967;
})();
var statearr_35968_37451 = state_35957__$1;
(statearr_35968_37451[(2)] = null);

(statearr_35968_37451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (13))){
var inst_35912 = (state_35957[(10)]);
var inst_35914 = cljs.core.chunked_seq_QMARK_(inst_35912);
var state_35957__$1 = state_35957;
if(inst_35914){
var statearr_35969_37452 = state_35957__$1;
(statearr_35969_37452[(1)] = (16));

} else {
var statearr_35970_37453 = state_35957__$1;
(statearr_35970_37453[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (22))){
var inst_35942 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
if(cljs.core.truth_(inst_35942)){
var statearr_35971_37454 = state_35957__$1;
(statearr_35971_37454[(1)] = (23));

} else {
var statearr_35972_37455 = state_35957__$1;
(statearr_35972_37455[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (6))){
var inst_35888 = (state_35957[(8)]);
var inst_35938 = (state_35957[(11)]);
var inst_35936 = (state_35957[(7)]);
var inst_35936__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35888) : topic_fn.call(null,inst_35888));
var inst_35937 = cljs.core.deref(mults);
var inst_35938__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35937,inst_35936__$1);
var state_35957__$1 = (function (){var statearr_35973 = state_35957;
(statearr_35973[(11)] = inst_35938__$1);

(statearr_35973[(7)] = inst_35936__$1);

return statearr_35973;
})();
if(cljs.core.truth_(inst_35938__$1)){
var statearr_35974_37456 = state_35957__$1;
(statearr_35974_37456[(1)] = (19));

} else {
var statearr_35975_37457 = state_35957__$1;
(statearr_35975_37457[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (25))){
var inst_35947 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
var statearr_35977_37458 = state_35957__$1;
(statearr_35977_37458[(2)] = inst_35947);

(statearr_35977_37458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (17))){
var inst_35912 = (state_35957[(10)]);
var inst_35921 = cljs.core.first(inst_35912);
var inst_35922 = cljs.core.async.muxch_STAR_(inst_35921);
var inst_35923 = cljs.core.async.close_BANG_(inst_35922);
var inst_35924 = cljs.core.next(inst_35912);
var inst_35898 = inst_35924;
var inst_35899 = null;
var inst_35900 = (0);
var inst_35901 = (0);
var state_35957__$1 = (function (){var statearr_35978 = state_35957;
(statearr_35978[(12)] = inst_35901);

(statearr_35978[(13)] = inst_35898);

(statearr_35978[(14)] = inst_35923);

(statearr_35978[(15)] = inst_35900);

(statearr_35978[(16)] = inst_35899);

return statearr_35978;
})();
var statearr_35979_37459 = state_35957__$1;
(statearr_35979_37459[(2)] = null);

(statearr_35979_37459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (3))){
var inst_35955 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35957__$1,inst_35955);
} else {
if((state_val_35958 === (12))){
var inst_35932 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
var statearr_35980_37460 = state_35957__$1;
(statearr_35980_37460[(2)] = inst_35932);

(statearr_35980_37460[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (2))){
var state_35957__$1 = state_35957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35957__$1,(4),ch);
} else {
if((state_val_35958 === (23))){
var state_35957__$1 = state_35957;
var statearr_35981_37461 = state_35957__$1;
(statearr_35981_37461[(2)] = null);

(statearr_35981_37461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (19))){
var inst_35888 = (state_35957[(8)]);
var inst_35938 = (state_35957[(11)]);
var inst_35940 = cljs.core.async.muxch_STAR_(inst_35938);
var state_35957__$1 = state_35957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35957__$1,(22),inst_35940,inst_35888);
} else {
if((state_val_35958 === (11))){
var inst_35912 = (state_35957[(10)]);
var inst_35898 = (state_35957[(13)]);
var inst_35912__$1 = cljs.core.seq(inst_35898);
var state_35957__$1 = (function (){var statearr_35982 = state_35957;
(statearr_35982[(10)] = inst_35912__$1);

return statearr_35982;
})();
if(inst_35912__$1){
var statearr_35983_37466 = state_35957__$1;
(statearr_35983_37466[(1)] = (13));

} else {
var statearr_35984_37467 = state_35957__$1;
(statearr_35984_37467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (9))){
var inst_35934 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
var statearr_35985_37469 = state_35957__$1;
(statearr_35985_37469[(2)] = inst_35934);

(statearr_35985_37469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (5))){
var inst_35895 = cljs.core.deref(mults);
var inst_35896 = cljs.core.vals(inst_35895);
var inst_35897 = cljs.core.seq(inst_35896);
var inst_35898 = inst_35897;
var inst_35899 = null;
var inst_35900 = (0);
var inst_35901 = (0);
var state_35957__$1 = (function (){var statearr_35986 = state_35957;
(statearr_35986[(12)] = inst_35901);

(statearr_35986[(13)] = inst_35898);

(statearr_35986[(15)] = inst_35900);

(statearr_35986[(16)] = inst_35899);

return statearr_35986;
})();
var statearr_35987_37473 = state_35957__$1;
(statearr_35987_37473[(2)] = null);

(statearr_35987_37473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (14))){
var state_35957__$1 = state_35957;
var statearr_35991_37475 = state_35957__$1;
(statearr_35991_37475[(2)] = null);

(statearr_35991_37475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (16))){
var inst_35912 = (state_35957[(10)]);
var inst_35916 = cljs.core.chunk_first(inst_35912);
var inst_35917 = cljs.core.chunk_rest(inst_35912);
var inst_35918 = cljs.core.count(inst_35916);
var inst_35898 = inst_35917;
var inst_35899 = inst_35916;
var inst_35900 = inst_35918;
var inst_35901 = (0);
var state_35957__$1 = (function (){var statearr_35992 = state_35957;
(statearr_35992[(12)] = inst_35901);

(statearr_35992[(13)] = inst_35898);

(statearr_35992[(15)] = inst_35900);

(statearr_35992[(16)] = inst_35899);

return statearr_35992;
})();
var statearr_35993_37477 = state_35957__$1;
(statearr_35993_37477[(2)] = null);

(statearr_35993_37477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (10))){
var inst_35901 = (state_35957[(12)]);
var inst_35898 = (state_35957[(13)]);
var inst_35900 = (state_35957[(15)]);
var inst_35899 = (state_35957[(16)]);
var inst_35906 = cljs.core._nth(inst_35899,inst_35901);
var inst_35907 = cljs.core.async.muxch_STAR_(inst_35906);
var inst_35908 = cljs.core.async.close_BANG_(inst_35907);
var inst_35909 = (inst_35901 + (1));
var tmp35988 = inst_35898;
var tmp35989 = inst_35900;
var tmp35990 = inst_35899;
var inst_35898__$1 = tmp35988;
var inst_35899__$1 = tmp35990;
var inst_35900__$1 = tmp35989;
var inst_35901__$1 = inst_35909;
var state_35957__$1 = (function (){var statearr_35994 = state_35957;
(statearr_35994[(12)] = inst_35901__$1);

(statearr_35994[(13)] = inst_35898__$1);

(statearr_35994[(17)] = inst_35908);

(statearr_35994[(15)] = inst_35900__$1);

(statearr_35994[(16)] = inst_35899__$1);

return statearr_35994;
})();
var statearr_35995_37478 = state_35957__$1;
(statearr_35995_37478[(2)] = null);

(statearr_35995_37478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (18))){
var inst_35927 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
var statearr_35996_37479 = state_35957__$1;
(statearr_35996_37479[(2)] = inst_35927);

(statearr_35996_37479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (8))){
var inst_35901 = (state_35957[(12)]);
var inst_35900 = (state_35957[(15)]);
var inst_35903 = (inst_35901 < inst_35900);
var inst_35904 = inst_35903;
var state_35957__$1 = state_35957;
if(cljs.core.truth_(inst_35904)){
var statearr_35997_37480 = state_35957__$1;
(statearr_35997_37480[(1)] = (10));

} else {
var statearr_35998_37481 = state_35957__$1;
(statearr_35998_37481[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34255__auto__ = null;
var cljs$core$async$state_machine__34255__auto____0 = (function (){
var statearr_35999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35999[(0)] = cljs$core$async$state_machine__34255__auto__);

(statearr_35999[(1)] = (1));

return statearr_35999;
});
var cljs$core$async$state_machine__34255__auto____1 = (function (state_35957){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_35957);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e36000){if((e36000 instanceof Object)){
var ex__34258__auto__ = e36000;
var statearr_36001_37482 = state_35957;
(statearr_36001_37482[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36000;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37483 = state_35957;
state_35957 = G__37483;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$state_machine__34255__auto__ = function(state_35957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34255__auto____1.call(this,state_35957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34255__auto____0;
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34255__auto____1;
return cljs$core$async$state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_36002 = f__34452__auto__();
(statearr_36002[(6)] = c__34451__auto___37442);

return statearr_36002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36008 = arguments.length;
switch (G__36008) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36012 = arguments.length;
switch (G__36012) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36016 = arguments.length;
switch (G__36016) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34451__auto___37487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_36073){
var state_val_36074 = (state_36073[(1)]);
if((state_val_36074 === (7))){
var state_36073__$1 = state_36073;
var statearr_36075_37488 = state_36073__$1;
(statearr_36075_37488[(2)] = null);

(statearr_36075_37488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (1))){
var state_36073__$1 = state_36073;
var statearr_36076_37489 = state_36073__$1;
(statearr_36076_37489[(2)] = null);

(statearr_36076_37489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (4))){
var inst_36033 = (state_36073[(7)]);
var inst_36035 = (inst_36033 < cnt);
var state_36073__$1 = state_36073;
if(cljs.core.truth_(inst_36035)){
var statearr_36077_37490 = state_36073__$1;
(statearr_36077_37490[(1)] = (6));

} else {
var statearr_36078_37491 = state_36073__$1;
(statearr_36078_37491[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (15))){
var inst_36069 = (state_36073[(2)]);
var state_36073__$1 = state_36073;
var statearr_36079_37492 = state_36073__$1;
(statearr_36079_37492[(2)] = inst_36069);

(statearr_36079_37492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (13))){
var inst_36062 = cljs.core.async.close_BANG_(out);
var state_36073__$1 = state_36073;
var statearr_36081_37493 = state_36073__$1;
(statearr_36081_37493[(2)] = inst_36062);

(statearr_36081_37493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (6))){
var state_36073__$1 = state_36073;
var statearr_36083_37494 = state_36073__$1;
(statearr_36083_37494[(2)] = null);

(statearr_36083_37494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (3))){
var inst_36071 = (state_36073[(2)]);
var state_36073__$1 = state_36073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36073__$1,inst_36071);
} else {
if((state_val_36074 === (12))){
var inst_36059 = (state_36073[(8)]);
var inst_36059__$1 = (state_36073[(2)]);
var inst_36060 = cljs.core.some(cljs.core.nil_QMARK_,inst_36059__$1);
var state_36073__$1 = (function (){var statearr_36085 = state_36073;
(statearr_36085[(8)] = inst_36059__$1);

return statearr_36085;
})();
if(cljs.core.truth_(inst_36060)){
var statearr_36086_37498 = state_36073__$1;
(statearr_36086_37498[(1)] = (13));

} else {
var statearr_36087_37499 = state_36073__$1;
(statearr_36087_37499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (2))){
var inst_36031 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36033 = (0);
var state_36073__$1 = (function (){var statearr_36088 = state_36073;
(statearr_36088[(9)] = inst_36031);

(statearr_36088[(7)] = inst_36033);

return statearr_36088;
})();
var statearr_36089_37504 = state_36073__$1;
(statearr_36089_37504[(2)] = null);

(statearr_36089_37504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (11))){
var inst_36033 = (state_36073[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36073,(10),Object,null,(9));
var inst_36046 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36033) : chs__$1.call(null,inst_36033));
var inst_36047 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36033) : done.call(null,inst_36033));
var inst_36048 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36046,inst_36047);
var state_36073__$1 = state_36073;
var statearr_36090_37508 = state_36073__$1;
(statearr_36090_37508[(2)] = inst_36048);


cljs.core.async.impl.ioc_helpers.process_exception(state_36073__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (9))){
var inst_36033 = (state_36073[(7)]);
var inst_36050 = (state_36073[(2)]);
var inst_36051 = (inst_36033 + (1));
var inst_36033__$1 = inst_36051;
var state_36073__$1 = (function (){var statearr_36091 = state_36073;
(statearr_36091[(10)] = inst_36050);

(statearr_36091[(7)] = inst_36033__$1);

return statearr_36091;
})();
var statearr_36094_37509 = state_36073__$1;
(statearr_36094_37509[(2)] = null);

(statearr_36094_37509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (5))){
var inst_36057 = (state_36073[(2)]);
var state_36073__$1 = (function (){var statearr_36095 = state_36073;
(statearr_36095[(11)] = inst_36057);

return statearr_36095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36073__$1,(12),dchan);
} else {
if((state_val_36074 === (14))){
var inst_36059 = (state_36073[(8)]);
var inst_36064 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36059);
var state_36073__$1 = state_36073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36073__$1,(16),out,inst_36064);
} else {
if((state_val_36074 === (16))){
var inst_36066 = (state_36073[(2)]);
var state_36073__$1 = (function (){var statearr_36107 = state_36073;
(statearr_36107[(12)] = inst_36066);

return statearr_36107;
})();
var statearr_36113_37513 = state_36073__$1;
(statearr_36113_37513[(2)] = null);

(statearr_36113_37513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (10))){
var inst_36041 = (state_36073[(2)]);
var inst_36042 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36073__$1 = (function (){var statearr_36119 = state_36073;
(statearr_36119[(13)] = inst_36041);

return statearr_36119;
})();
var statearr_36120_37517 = state_36073__$1;
(statearr_36120_37517[(2)] = inst_36042);


cljs.core.async.impl.ioc_helpers.process_exception(state_36073__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36074 === (8))){
var inst_36055 = (state_36073[(2)]);
var state_36073__$1 = state_36073;
var statearr_36121_37518 = state_36073__$1;
(statearr_36121_37518[(2)] = inst_36055);

(statearr_36121_37518[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34255__auto__ = null;
var cljs$core$async$state_machine__34255__auto____0 = (function (){
var statearr_36122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36122[(0)] = cljs$core$async$state_machine__34255__auto__);

(statearr_36122[(1)] = (1));

return statearr_36122;
});
var cljs$core$async$state_machine__34255__auto____1 = (function (state_36073){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_36073);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e36123){if((e36123 instanceof Object)){
var ex__34258__auto__ = e36123;
var statearr_36124_37519 = state_36073;
(statearr_36124_37519[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36123;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37523 = state_36073;
state_36073 = G__37523;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$state_machine__34255__auto__ = function(state_36073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34255__auto____1.call(this,state_36073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34255__auto____0;
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34255__auto____1;
return cljs$core$async$state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_36125 = f__34452__auto__();
(statearr_36125[(6)] = c__34451__auto___37487);

return statearr_36125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36128 = arguments.length;
switch (G__36128) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34451__auto___37526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_36160){
var state_val_36161 = (state_36160[(1)]);
if((state_val_36161 === (7))){
var inst_36139 = (state_36160[(7)]);
var inst_36140 = (state_36160[(8)]);
var inst_36139__$1 = (state_36160[(2)]);
var inst_36140__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36139__$1,(0),null);
var inst_36141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36139__$1,(1),null);
var inst_36142 = (inst_36140__$1 == null);
var state_36160__$1 = (function (){var statearr_36163 = state_36160;
(statearr_36163[(7)] = inst_36139__$1);

(statearr_36163[(8)] = inst_36140__$1);

(statearr_36163[(9)] = inst_36141);

return statearr_36163;
})();
if(cljs.core.truth_(inst_36142)){
var statearr_36165_37527 = state_36160__$1;
(statearr_36165_37527[(1)] = (8));

} else {
var statearr_36166_37528 = state_36160__$1;
(statearr_36166_37528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (1))){
var inst_36129 = cljs.core.vec(chs);
var inst_36130 = inst_36129;
var state_36160__$1 = (function (){var statearr_36167 = state_36160;
(statearr_36167[(10)] = inst_36130);

return statearr_36167;
})();
var statearr_36168_37532 = state_36160__$1;
(statearr_36168_37532[(2)] = null);

(statearr_36168_37532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (4))){
var inst_36130 = (state_36160[(10)]);
var state_36160__$1 = state_36160;
return cljs.core.async.ioc_alts_BANG_(state_36160__$1,(7),inst_36130);
} else {
if((state_val_36161 === (6))){
var inst_36156 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
var statearr_36169_37539 = state_36160__$1;
(statearr_36169_37539[(2)] = inst_36156);

(statearr_36169_37539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (3))){
var inst_36158 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36160__$1,inst_36158);
} else {
if((state_val_36161 === (2))){
var inst_36130 = (state_36160[(10)]);
var inst_36132 = cljs.core.count(inst_36130);
var inst_36133 = (inst_36132 > (0));
var state_36160__$1 = state_36160;
if(cljs.core.truth_(inst_36133)){
var statearr_36175_37546 = state_36160__$1;
(statearr_36175_37546[(1)] = (4));

} else {
var statearr_36176_37547 = state_36160__$1;
(statearr_36176_37547[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (11))){
var inst_36130 = (state_36160[(10)]);
var inst_36149 = (state_36160[(2)]);
var tmp36171 = inst_36130;
var inst_36130__$1 = tmp36171;
var state_36160__$1 = (function (){var statearr_36177 = state_36160;
(statearr_36177[(10)] = inst_36130__$1);

(statearr_36177[(11)] = inst_36149);

return statearr_36177;
})();
var statearr_36178_37548 = state_36160__$1;
(statearr_36178_37548[(2)] = null);

(statearr_36178_37548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (9))){
var inst_36140 = (state_36160[(8)]);
var state_36160__$1 = state_36160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36160__$1,(11),out,inst_36140);
} else {
if((state_val_36161 === (5))){
var inst_36154 = cljs.core.async.close_BANG_(out);
var state_36160__$1 = state_36160;
var statearr_36179_37549 = state_36160__$1;
(statearr_36179_37549[(2)] = inst_36154);

(statearr_36179_37549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (10))){
var inst_36152 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
var statearr_36180_37550 = state_36160__$1;
(statearr_36180_37550[(2)] = inst_36152);

(statearr_36180_37550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (8))){
var inst_36139 = (state_36160[(7)]);
var inst_36140 = (state_36160[(8)]);
var inst_36141 = (state_36160[(9)]);
var inst_36130 = (state_36160[(10)]);
var inst_36144 = (function (){var cs = inst_36130;
var vec__36135 = inst_36139;
var v = inst_36140;
var c = inst_36141;
return (function (p1__36126_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36126_SHARP_);
});
})();
var inst_36145 = cljs.core.filterv(inst_36144,inst_36130);
var inst_36130__$1 = inst_36145;
var state_36160__$1 = (function (){var statearr_36181 = state_36160;
(statearr_36181[(10)] = inst_36130__$1);

return statearr_36181;
})();
var statearr_36182_37551 = state_36160__$1;
(statearr_36182_37551[(2)] = null);

(statearr_36182_37551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34255__auto__ = null;
var cljs$core$async$state_machine__34255__auto____0 = (function (){
var statearr_36183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36183[(0)] = cljs$core$async$state_machine__34255__auto__);

(statearr_36183[(1)] = (1));

return statearr_36183;
});
var cljs$core$async$state_machine__34255__auto____1 = (function (state_36160){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_36160);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e36184){if((e36184 instanceof Object)){
var ex__34258__auto__ = e36184;
var statearr_36185_37552 = state_36160;
(statearr_36185_37552[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37553 = state_36160;
state_36160 = G__37553;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$state_machine__34255__auto__ = function(state_36160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34255__auto____1.call(this,state_36160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34255__auto____0;
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34255__auto____1;
return cljs$core$async$state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_36188 = f__34452__auto__();
(statearr_36188[(6)] = c__34451__auto___37526);

return statearr_36188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36191 = arguments.length;
switch (G__36191) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34451__auto___37555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_36219){
var state_val_36220 = (state_36219[(1)]);
if((state_val_36220 === (7))){
var inst_36197 = (state_36219[(7)]);
var inst_36197__$1 = (state_36219[(2)]);
var inst_36198 = (inst_36197__$1 == null);
var inst_36199 = cljs.core.not(inst_36198);
var state_36219__$1 = (function (){var statearr_36223 = state_36219;
(statearr_36223[(7)] = inst_36197__$1);

return statearr_36223;
})();
if(inst_36199){
var statearr_36224_37562 = state_36219__$1;
(statearr_36224_37562[(1)] = (8));

} else {
var statearr_36226_37563 = state_36219__$1;
(statearr_36226_37563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (1))){
var inst_36192 = (0);
var state_36219__$1 = (function (){var statearr_36227 = state_36219;
(statearr_36227[(8)] = inst_36192);

return statearr_36227;
})();
var statearr_36228_37564 = state_36219__$1;
(statearr_36228_37564[(2)] = null);

(statearr_36228_37564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (4))){
var state_36219__$1 = state_36219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36219__$1,(7),ch);
} else {
if((state_val_36220 === (6))){
var inst_36210 = (state_36219[(2)]);
var state_36219__$1 = state_36219;
var statearr_36229_37565 = state_36219__$1;
(statearr_36229_37565[(2)] = inst_36210);

(statearr_36229_37565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (3))){
var inst_36212 = (state_36219[(2)]);
var inst_36213 = cljs.core.async.close_BANG_(out);
var state_36219__$1 = (function (){var statearr_36232 = state_36219;
(statearr_36232[(9)] = inst_36212);

return statearr_36232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36219__$1,inst_36213);
} else {
if((state_val_36220 === (2))){
var inst_36192 = (state_36219[(8)]);
var inst_36194 = (inst_36192 < n);
var state_36219__$1 = state_36219;
if(cljs.core.truth_(inst_36194)){
var statearr_36233_37566 = state_36219__$1;
(statearr_36233_37566[(1)] = (4));

} else {
var statearr_36234_37567 = state_36219__$1;
(statearr_36234_37567[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (11))){
var inst_36192 = (state_36219[(8)]);
var inst_36202 = (state_36219[(2)]);
var inst_36203 = (inst_36192 + (1));
var inst_36192__$1 = inst_36203;
var state_36219__$1 = (function (){var statearr_36235 = state_36219;
(statearr_36235[(10)] = inst_36202);

(statearr_36235[(8)] = inst_36192__$1);

return statearr_36235;
})();
var statearr_36236_37568 = state_36219__$1;
(statearr_36236_37568[(2)] = null);

(statearr_36236_37568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (9))){
var state_36219__$1 = state_36219;
var statearr_36237_37569 = state_36219__$1;
(statearr_36237_37569[(2)] = null);

(statearr_36237_37569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (5))){
var state_36219__$1 = state_36219;
var statearr_36238_37570 = state_36219__$1;
(statearr_36238_37570[(2)] = null);

(statearr_36238_37570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (10))){
var inst_36207 = (state_36219[(2)]);
var state_36219__$1 = state_36219;
var statearr_36239_37571 = state_36219__$1;
(statearr_36239_37571[(2)] = inst_36207);

(statearr_36239_37571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (8))){
var inst_36197 = (state_36219[(7)]);
var state_36219__$1 = state_36219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36219__$1,(11),out,inst_36197);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34255__auto__ = null;
var cljs$core$async$state_machine__34255__auto____0 = (function (){
var statearr_36242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36242[(0)] = cljs$core$async$state_machine__34255__auto__);

(statearr_36242[(1)] = (1));

return statearr_36242;
});
var cljs$core$async$state_machine__34255__auto____1 = (function (state_36219){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_36219);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e36244){if((e36244 instanceof Object)){
var ex__34258__auto__ = e36244;
var statearr_36245_37572 = state_36219;
(statearr_36245_37572[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37573 = state_36219;
state_36219 = G__37573;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$state_machine__34255__auto__ = function(state_36219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34255__auto____1.call(this,state_36219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34255__auto____0;
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34255__auto____1;
return cljs$core$async$state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_36246 = f__34452__auto__();
(statearr_36246[(6)] = c__34451__auto___37555);

return statearr_36246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36248 = (function (f,ch,meta36249){
this.f = f;
this.ch = ch;
this.meta36249 = meta36249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36250,meta36249__$1){
var self__ = this;
var _36250__$1 = this;
return (new cljs.core.async.t_cljs$core$async36248(self__.f,self__.ch,meta36249__$1));
}));

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36250){
var self__ = this;
var _36250__$1 = this;
return self__.meta36249;
}));

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36252 = (function (f,ch,meta36249,_,fn1,meta36253){
this.f = f;
this.ch = ch;
this.meta36249 = meta36249;
this._ = _;
this.fn1 = fn1;
this.meta36253 = meta36253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36254,meta36253__$1){
var self__ = this;
var _36254__$1 = this;
return (new cljs.core.async.t_cljs$core$async36252(self__.f,self__.ch,self__.meta36249,self__._,self__.fn1,meta36253__$1));
}));

(cljs.core.async.t_cljs$core$async36252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36254){
var self__ = this;
var _36254__$1 = this;
return self__.meta36253;
}));

(cljs.core.async.t_cljs$core$async36252.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36252.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36247_SHARP_){
var G__36255 = (((p1__36247_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36247_SHARP_) : self__.f.call(null,p1__36247_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36255) : f1.call(null,G__36255));
});
}));

(cljs.core.async.t_cljs$core$async36252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36249","meta36249",-1597385334,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36248","cljs.core.async/t_cljs$core$async36248",1198856629,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36253","meta36253",-106505042,null)], null);
}));

(cljs.core.async.t_cljs$core$async36252.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36252");

(cljs.core.async.t_cljs$core$async36252.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36252");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36252.
 */
cljs.core.async.__GT_t_cljs$core$async36252 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36252(f__$1,ch__$1,meta36249__$1,___$2,fn1__$1,meta36253){
return (new cljs.core.async.t_cljs$core$async36252(f__$1,ch__$1,meta36249__$1,___$2,fn1__$1,meta36253));
});

}

return (new cljs.core.async.t_cljs$core$async36252(self__.f,self__.ch,self__.meta36249,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36256 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36256) : self__.f.call(null,G__36256));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36249","meta36249",-1597385334,null)], null);
}));

(cljs.core.async.t_cljs$core$async36248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36248");

(cljs.core.async.t_cljs$core$async36248.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36248.
 */
cljs.core.async.__GT_t_cljs$core$async36248 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36248(f__$1,ch__$1,meta36249){
return (new cljs.core.async.t_cljs$core$async36248(f__$1,ch__$1,meta36249));
});

}

return (new cljs.core.async.t_cljs$core$async36248(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36257 = (function (f,ch,meta36258){
this.f = f;
this.ch = ch;
this.meta36258 = meta36258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36259,meta36258__$1){
var self__ = this;
var _36259__$1 = this;
return (new cljs.core.async.t_cljs$core$async36257(self__.f,self__.ch,meta36258__$1));
}));

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36259){
var self__ = this;
var _36259__$1 = this;
return self__.meta36258;
}));

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36258","meta36258",-547299431,null)], null);
}));

(cljs.core.async.t_cljs$core$async36257.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36257");

(cljs.core.async.t_cljs$core$async36257.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36257");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36257.
 */
cljs.core.async.__GT_t_cljs$core$async36257 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36257(f__$1,ch__$1,meta36258){
return (new cljs.core.async.t_cljs$core$async36257(f__$1,ch__$1,meta36258));
});

}

return (new cljs.core.async.t_cljs$core$async36257(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36261 = (function (p,ch,meta36262){
this.p = p;
this.ch = ch;
this.meta36262 = meta36262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36263,meta36262__$1){
var self__ = this;
var _36263__$1 = this;
return (new cljs.core.async.t_cljs$core$async36261(self__.p,self__.ch,meta36262__$1));
}));

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36263){
var self__ = this;
var _36263__$1 = this;
return self__.meta36262;
}));

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36262","meta36262",1528439859,null)], null);
}));

(cljs.core.async.t_cljs$core$async36261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36261");

(cljs.core.async.t_cljs$core$async36261.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36261.
 */
cljs.core.async.__GT_t_cljs$core$async36261 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36261(p__$1,ch__$1,meta36262){
return (new cljs.core.async.t_cljs$core$async36261(p__$1,ch__$1,meta36262));
});

}

return (new cljs.core.async.t_cljs$core$async36261(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36265 = arguments.length;
switch (G__36265) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34451__auto___37589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_36286){
var state_val_36287 = (state_36286[(1)]);
if((state_val_36287 === (7))){
var inst_36282 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
var statearr_36288_37590 = state_36286__$1;
(statearr_36288_37590[(2)] = inst_36282);

(statearr_36288_37590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (1))){
var state_36286__$1 = state_36286;
var statearr_36289_37592 = state_36286__$1;
(statearr_36289_37592[(2)] = null);

(statearr_36289_37592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (4))){
var inst_36268 = (state_36286[(7)]);
var inst_36268__$1 = (state_36286[(2)]);
var inst_36269 = (inst_36268__$1 == null);
var state_36286__$1 = (function (){var statearr_36290 = state_36286;
(statearr_36290[(7)] = inst_36268__$1);

return statearr_36290;
})();
if(cljs.core.truth_(inst_36269)){
var statearr_36291_37594 = state_36286__$1;
(statearr_36291_37594[(1)] = (5));

} else {
var statearr_36292_37595 = state_36286__$1;
(statearr_36292_37595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (6))){
var inst_36268 = (state_36286[(7)]);
var inst_36273 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36268) : p.call(null,inst_36268));
var state_36286__$1 = state_36286;
if(cljs.core.truth_(inst_36273)){
var statearr_36293_37596 = state_36286__$1;
(statearr_36293_37596[(1)] = (8));

} else {
var statearr_36294_37597 = state_36286__$1;
(statearr_36294_37597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (3))){
var inst_36284 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36286__$1,inst_36284);
} else {
if((state_val_36287 === (2))){
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36286__$1,(4),ch);
} else {
if((state_val_36287 === (11))){
var inst_36276 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
var statearr_36295_37598 = state_36286__$1;
(statearr_36295_37598[(2)] = inst_36276);

(statearr_36295_37598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (9))){
var state_36286__$1 = state_36286;
var statearr_36296_37599 = state_36286__$1;
(statearr_36296_37599[(2)] = null);

(statearr_36296_37599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (5))){
var inst_36271 = cljs.core.async.close_BANG_(out);
var state_36286__$1 = state_36286;
var statearr_36297_37600 = state_36286__$1;
(statearr_36297_37600[(2)] = inst_36271);

(statearr_36297_37600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (10))){
var inst_36279 = (state_36286[(2)]);
var state_36286__$1 = (function (){var statearr_36298 = state_36286;
(statearr_36298[(8)] = inst_36279);

return statearr_36298;
})();
var statearr_36299_37601 = state_36286__$1;
(statearr_36299_37601[(2)] = null);

(statearr_36299_37601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (8))){
var inst_36268 = (state_36286[(7)]);
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36286__$1,(11),out,inst_36268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34255__auto__ = null;
var cljs$core$async$state_machine__34255__auto____0 = (function (){
var statearr_36300 = [null,null,null,null,null,null,null,null,null];
(statearr_36300[(0)] = cljs$core$async$state_machine__34255__auto__);

(statearr_36300[(1)] = (1));

return statearr_36300;
});
var cljs$core$async$state_machine__34255__auto____1 = (function (state_36286){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_36286);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e36301){if((e36301 instanceof Object)){
var ex__34258__auto__ = e36301;
var statearr_36302_37608 = state_36286;
(statearr_36302_37608[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37609 = state_36286;
state_36286 = G__37609;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$state_machine__34255__auto__ = function(state_36286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34255__auto____1.call(this,state_36286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34255__auto____0;
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34255__auto____1;
return cljs$core$async$state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_36309 = f__34452__auto__();
(statearr_36309[(6)] = c__34451__auto___37589);

return statearr_36309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36311 = arguments.length;
switch (G__36311) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34451__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_36381){
var state_val_36382 = (state_36381[(1)]);
if((state_val_36382 === (7))){
var inst_36375 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36383_37614 = state_36381__$1;
(statearr_36383_37614[(2)] = inst_36375);

(statearr_36383_37614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (20))){
var inst_36339 = (state_36381[(7)]);
var inst_36354 = (state_36381[(2)]);
var inst_36355 = cljs.core.next(inst_36339);
var inst_36325 = inst_36355;
var inst_36326 = null;
var inst_36327 = (0);
var inst_36328 = (0);
var state_36381__$1 = (function (){var statearr_36384 = state_36381;
(statearr_36384[(8)] = inst_36325);

(statearr_36384[(9)] = inst_36328);

(statearr_36384[(10)] = inst_36326);

(statearr_36384[(11)] = inst_36327);

(statearr_36384[(12)] = inst_36354);

return statearr_36384;
})();
var statearr_36385_37616 = state_36381__$1;
(statearr_36385_37616[(2)] = null);

(statearr_36385_37616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (1))){
var state_36381__$1 = state_36381;
var statearr_36386_37618 = state_36381__$1;
(statearr_36386_37618[(2)] = null);

(statearr_36386_37618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (4))){
var inst_36314 = (state_36381[(13)]);
var inst_36314__$1 = (state_36381[(2)]);
var inst_36315 = (inst_36314__$1 == null);
var state_36381__$1 = (function (){var statearr_36389 = state_36381;
(statearr_36389[(13)] = inst_36314__$1);

return statearr_36389;
})();
if(cljs.core.truth_(inst_36315)){
var statearr_36390_37619 = state_36381__$1;
(statearr_36390_37619[(1)] = (5));

} else {
var statearr_36394_37620 = state_36381__$1;
(statearr_36394_37620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (15))){
var state_36381__$1 = state_36381;
var statearr_36398_37621 = state_36381__$1;
(statearr_36398_37621[(2)] = null);

(statearr_36398_37621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (21))){
var state_36381__$1 = state_36381;
var statearr_36399_37622 = state_36381__$1;
(statearr_36399_37622[(2)] = null);

(statearr_36399_37622[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (13))){
var inst_36325 = (state_36381[(8)]);
var inst_36328 = (state_36381[(9)]);
var inst_36326 = (state_36381[(10)]);
var inst_36327 = (state_36381[(11)]);
var inst_36335 = (state_36381[(2)]);
var inst_36336 = (inst_36328 + (1));
var tmp36395 = inst_36325;
var tmp36396 = inst_36326;
var tmp36397 = inst_36327;
var inst_36325__$1 = tmp36395;
var inst_36326__$1 = tmp36396;
var inst_36327__$1 = tmp36397;
var inst_36328__$1 = inst_36336;
var state_36381__$1 = (function (){var statearr_36403 = state_36381;
(statearr_36403[(8)] = inst_36325__$1);

(statearr_36403[(9)] = inst_36328__$1);

(statearr_36403[(10)] = inst_36326__$1);

(statearr_36403[(11)] = inst_36327__$1);

(statearr_36403[(14)] = inst_36335);

return statearr_36403;
})();
var statearr_36404_37623 = state_36381__$1;
(statearr_36404_37623[(2)] = null);

(statearr_36404_37623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (22))){
var state_36381__$1 = state_36381;
var statearr_36405_37624 = state_36381__$1;
(statearr_36405_37624[(2)] = null);

(statearr_36405_37624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (6))){
var inst_36314 = (state_36381[(13)]);
var inst_36323 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36314) : f.call(null,inst_36314));
var inst_36324 = cljs.core.seq(inst_36323);
var inst_36325 = inst_36324;
var inst_36326 = null;
var inst_36327 = (0);
var inst_36328 = (0);
var state_36381__$1 = (function (){var statearr_36406 = state_36381;
(statearr_36406[(8)] = inst_36325);

(statearr_36406[(9)] = inst_36328);

(statearr_36406[(10)] = inst_36326);

(statearr_36406[(11)] = inst_36327);

return statearr_36406;
})();
var statearr_36411_37625 = state_36381__$1;
(statearr_36411_37625[(2)] = null);

(statearr_36411_37625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (17))){
var inst_36339 = (state_36381[(7)]);
var inst_36347 = cljs.core.chunk_first(inst_36339);
var inst_36348 = cljs.core.chunk_rest(inst_36339);
var inst_36349 = cljs.core.count(inst_36347);
var inst_36325 = inst_36348;
var inst_36326 = inst_36347;
var inst_36327 = inst_36349;
var inst_36328 = (0);
var state_36381__$1 = (function (){var statearr_36416 = state_36381;
(statearr_36416[(8)] = inst_36325);

(statearr_36416[(9)] = inst_36328);

(statearr_36416[(10)] = inst_36326);

(statearr_36416[(11)] = inst_36327);

return statearr_36416;
})();
var statearr_36417_37626 = state_36381__$1;
(statearr_36417_37626[(2)] = null);

(statearr_36417_37626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (3))){
var inst_36377 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36381__$1,inst_36377);
} else {
if((state_val_36382 === (12))){
var inst_36363 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36418_37627 = state_36381__$1;
(statearr_36418_37627[(2)] = inst_36363);

(statearr_36418_37627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (2))){
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36381__$1,(4),in$);
} else {
if((state_val_36382 === (23))){
var inst_36373 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36419_37628 = state_36381__$1;
(statearr_36419_37628[(2)] = inst_36373);

(statearr_36419_37628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (19))){
var inst_36358 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36420_37629 = state_36381__$1;
(statearr_36420_37629[(2)] = inst_36358);

(statearr_36420_37629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (11))){
var inst_36325 = (state_36381[(8)]);
var inst_36339 = (state_36381[(7)]);
var inst_36339__$1 = cljs.core.seq(inst_36325);
var state_36381__$1 = (function (){var statearr_36421 = state_36381;
(statearr_36421[(7)] = inst_36339__$1);

return statearr_36421;
})();
if(inst_36339__$1){
var statearr_36422_37630 = state_36381__$1;
(statearr_36422_37630[(1)] = (14));

} else {
var statearr_36425_37631 = state_36381__$1;
(statearr_36425_37631[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (9))){
var inst_36365 = (state_36381[(2)]);
var inst_36368 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36381__$1 = (function (){var statearr_36426 = state_36381;
(statearr_36426[(15)] = inst_36365);

return statearr_36426;
})();
if(cljs.core.truth_(inst_36368)){
var statearr_36427_37632 = state_36381__$1;
(statearr_36427_37632[(1)] = (21));

} else {
var statearr_36428_37633 = state_36381__$1;
(statearr_36428_37633[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (5))){
var inst_36317 = cljs.core.async.close_BANG_(out);
var state_36381__$1 = state_36381;
var statearr_36429_37634 = state_36381__$1;
(statearr_36429_37634[(2)] = inst_36317);

(statearr_36429_37634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (14))){
var inst_36339 = (state_36381[(7)]);
var inst_36345 = cljs.core.chunked_seq_QMARK_(inst_36339);
var state_36381__$1 = state_36381;
if(inst_36345){
var statearr_36430_37635 = state_36381__$1;
(statearr_36430_37635[(1)] = (17));

} else {
var statearr_36431_37636 = state_36381__$1;
(statearr_36431_37636[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (16))){
var inst_36361 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36432_37637 = state_36381__$1;
(statearr_36432_37637[(2)] = inst_36361);

(statearr_36432_37637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (10))){
var inst_36328 = (state_36381[(9)]);
var inst_36326 = (state_36381[(10)]);
var inst_36333 = cljs.core._nth(inst_36326,inst_36328);
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36381__$1,(13),out,inst_36333);
} else {
if((state_val_36382 === (18))){
var inst_36339 = (state_36381[(7)]);
var inst_36352 = cljs.core.first(inst_36339);
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36381__$1,(20),out,inst_36352);
} else {
if((state_val_36382 === (8))){
var inst_36328 = (state_36381[(9)]);
var inst_36327 = (state_36381[(11)]);
var inst_36330 = (inst_36328 < inst_36327);
var inst_36331 = inst_36330;
var state_36381__$1 = state_36381;
if(cljs.core.truth_(inst_36331)){
var statearr_36433_37639 = state_36381__$1;
(statearr_36433_37639[(1)] = (10));

} else {
var statearr_36434_37640 = state_36381__$1;
(statearr_36434_37640[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34255__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34255__auto____0 = (function (){
var statearr_36435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36435[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34255__auto__);

(statearr_36435[(1)] = (1));

return statearr_36435;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34255__auto____1 = (function (state_36381){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_36381);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e36436){if((e36436 instanceof Object)){
var ex__34258__auto__ = e36436;
var statearr_36437_37642 = state_36381;
(statearr_36437_37642[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37643 = state_36381;
state_36381 = G__37643;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34255__auto__ = function(state_36381){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34255__auto____1.call(this,state_36381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34255__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34255__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_36439 = f__34452__auto__();
(statearr_36439[(6)] = c__34451__auto__);

return statearr_36439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));

return c__34451__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36441 = arguments.length;
switch (G__36441) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36443 = arguments.length;
switch (G__36443) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36445 = arguments.length;
switch (G__36445) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34451__auto___37649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_36474){
var state_val_36475 = (state_36474[(1)]);
if((state_val_36475 === (7))){
var inst_36469 = (state_36474[(2)]);
var state_36474__$1 = state_36474;
var statearr_36495_37651 = state_36474__$1;
(statearr_36495_37651[(2)] = inst_36469);

(statearr_36495_37651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (1))){
var inst_36451 = null;
var state_36474__$1 = (function (){var statearr_36505 = state_36474;
(statearr_36505[(7)] = inst_36451);

return statearr_36505;
})();
var statearr_36506_37652 = state_36474__$1;
(statearr_36506_37652[(2)] = null);

(statearr_36506_37652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (4))){
var inst_36454 = (state_36474[(8)]);
var inst_36454__$1 = (state_36474[(2)]);
var inst_36455 = (inst_36454__$1 == null);
var inst_36456 = cljs.core.not(inst_36455);
var state_36474__$1 = (function (){var statearr_36507 = state_36474;
(statearr_36507[(8)] = inst_36454__$1);

return statearr_36507;
})();
if(inst_36456){
var statearr_36508_37654 = state_36474__$1;
(statearr_36508_37654[(1)] = (5));

} else {
var statearr_36509_37655 = state_36474__$1;
(statearr_36509_37655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (6))){
var state_36474__$1 = state_36474;
var statearr_36510_37656 = state_36474__$1;
(statearr_36510_37656[(2)] = null);

(statearr_36510_37656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (3))){
var inst_36471 = (state_36474[(2)]);
var inst_36472 = cljs.core.async.close_BANG_(out);
var state_36474__$1 = (function (){var statearr_36511 = state_36474;
(statearr_36511[(9)] = inst_36471);

return statearr_36511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36474__$1,inst_36472);
} else {
if((state_val_36475 === (2))){
var state_36474__$1 = state_36474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36474__$1,(4),ch);
} else {
if((state_val_36475 === (11))){
var inst_36454 = (state_36474[(8)]);
var inst_36463 = (state_36474[(2)]);
var inst_36451 = inst_36454;
var state_36474__$1 = (function (){var statearr_36517 = state_36474;
(statearr_36517[(7)] = inst_36451);

(statearr_36517[(10)] = inst_36463);

return statearr_36517;
})();
var statearr_36518_37659 = state_36474__$1;
(statearr_36518_37659[(2)] = null);

(statearr_36518_37659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (9))){
var inst_36454 = (state_36474[(8)]);
var state_36474__$1 = state_36474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36474__$1,(11),out,inst_36454);
} else {
if((state_val_36475 === (5))){
var inst_36451 = (state_36474[(7)]);
var inst_36454 = (state_36474[(8)]);
var inst_36458 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36454,inst_36451);
var state_36474__$1 = state_36474;
if(inst_36458){
var statearr_36520_37660 = state_36474__$1;
(statearr_36520_37660[(1)] = (8));

} else {
var statearr_36521_37661 = state_36474__$1;
(statearr_36521_37661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (10))){
var inst_36466 = (state_36474[(2)]);
var state_36474__$1 = state_36474;
var statearr_36522_37663 = state_36474__$1;
(statearr_36522_37663[(2)] = inst_36466);

(statearr_36522_37663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36475 === (8))){
var inst_36451 = (state_36474[(7)]);
var tmp36519 = inst_36451;
var inst_36451__$1 = tmp36519;
var state_36474__$1 = (function (){var statearr_36524 = state_36474;
(statearr_36524[(7)] = inst_36451__$1);

return statearr_36524;
})();
var statearr_36525_37668 = state_36474__$1;
(statearr_36525_37668[(2)] = null);

(statearr_36525_37668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34255__auto__ = null;
var cljs$core$async$state_machine__34255__auto____0 = (function (){
var statearr_36526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36526[(0)] = cljs$core$async$state_machine__34255__auto__);

(statearr_36526[(1)] = (1));

return statearr_36526;
});
var cljs$core$async$state_machine__34255__auto____1 = (function (state_36474){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_36474);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e36527){if((e36527 instanceof Object)){
var ex__34258__auto__ = e36527;
var statearr_36528_37678 = state_36474;
(statearr_36528_37678[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37679 = state_36474;
state_36474 = G__37679;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$state_machine__34255__auto__ = function(state_36474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34255__auto____1.call(this,state_36474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34255__auto____0;
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34255__auto____1;
return cljs$core$async$state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_36529 = f__34452__auto__();
(statearr_36529[(6)] = c__34451__auto___37649);

return statearr_36529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36531 = arguments.length;
switch (G__36531) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34451__auto___37684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_36569){
var state_val_36570 = (state_36569[(1)]);
if((state_val_36570 === (7))){
var inst_36565 = (state_36569[(2)]);
var state_36569__$1 = state_36569;
var statearr_36571_37685 = state_36569__$1;
(statearr_36571_37685[(2)] = inst_36565);

(statearr_36571_37685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36570 === (1))){
var inst_36532 = (new Array(n));
var inst_36533 = inst_36532;
var inst_36534 = (0);
var state_36569__$1 = (function (){var statearr_36572 = state_36569;
(statearr_36572[(7)] = inst_36533);

(statearr_36572[(8)] = inst_36534);

return statearr_36572;
})();
var statearr_36573_37691 = state_36569__$1;
(statearr_36573_37691[(2)] = null);

(statearr_36573_37691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36570 === (4))){
var inst_36537 = (state_36569[(9)]);
var inst_36537__$1 = (state_36569[(2)]);
var inst_36538 = (inst_36537__$1 == null);
var inst_36539 = cljs.core.not(inst_36538);
var state_36569__$1 = (function (){var statearr_36574 = state_36569;
(statearr_36574[(9)] = inst_36537__$1);

return statearr_36574;
})();
if(inst_36539){
var statearr_36575_37697 = state_36569__$1;
(statearr_36575_37697[(1)] = (5));

} else {
var statearr_36576_37702 = state_36569__$1;
(statearr_36576_37702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36570 === (15))){
var inst_36559 = (state_36569[(2)]);
var state_36569__$1 = state_36569;
var statearr_36577_37703 = state_36569__$1;
(statearr_36577_37703[(2)] = inst_36559);

(statearr_36577_37703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36570 === (13))){
var state_36569__$1 = state_36569;
var statearr_36578_37704 = state_36569__$1;
(statearr_36578_37704[(2)] = null);

(statearr_36578_37704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36570 === (6))){
var inst_36534 = (state_36569[(8)]);
var inst_36555 = (inst_36534 > (0));
var state_36569__$1 = state_36569;
if(cljs.core.truth_(inst_36555)){
var statearr_36582_37709 = state_36569__$1;
(statearr_36582_37709[(1)] = (12));

} else {
var statearr_36583_37710 = state_36569__$1;
(statearr_36583_37710[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36570 === (3))){
var inst_36567 = (state_36569[(2)]);
var state_36569__$1 = state_36569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36569__$1,inst_36567);
} else {
if((state_val_36570 === (12))){
var inst_36533 = (state_36569[(7)]);
var inst_36557 = cljs.core.vec(inst_36533);
var state_36569__$1 = state_36569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36569__$1,(15),out,inst_36557);
} else {
if((state_val_36570 === (2))){
var state_36569__$1 = state_36569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36569__$1,(4),ch);
} else {
if((state_val_36570 === (11))){
var inst_36549 = (state_36569[(2)]);
var inst_36550 = (new Array(n));
var inst_36533 = inst_36550;
var inst_36534 = (0);
var state_36569__$1 = (function (){var statearr_36584 = state_36569;
(statearr_36584[(7)] = inst_36533);

(statearr_36584[(10)] = inst_36549);

(statearr_36584[(8)] = inst_36534);

return statearr_36584;
})();
var statearr_36587_37722 = state_36569__$1;
(statearr_36587_37722[(2)] = null);

(statearr_36587_37722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36570 === (9))){
var inst_36533 = (state_36569[(7)]);
var inst_36547 = cljs.core.vec(inst_36533);
var state_36569__$1 = state_36569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36569__$1,(11),out,inst_36547);
} else {
if((state_val_36570 === (5))){
var inst_36533 = (state_36569[(7)]);
var inst_36534 = (state_36569[(8)]);
var inst_36537 = (state_36569[(9)]);
var inst_36542 = (state_36569[(11)]);
var inst_36541 = (inst_36533[inst_36534] = inst_36537);
var inst_36542__$1 = (inst_36534 + (1));
var inst_36543 = (inst_36542__$1 < n);
var state_36569__$1 = (function (){var statearr_36588 = state_36569;
(statearr_36588[(11)] = inst_36542__$1);

(statearr_36588[(12)] = inst_36541);

return statearr_36588;
})();
if(cljs.core.truth_(inst_36543)){
var statearr_36589_37724 = state_36569__$1;
(statearr_36589_37724[(1)] = (8));

} else {
var statearr_36590_37726 = state_36569__$1;
(statearr_36590_37726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36570 === (14))){
var inst_36562 = (state_36569[(2)]);
var inst_36563 = cljs.core.async.close_BANG_(out);
var state_36569__$1 = (function (){var statearr_36595 = state_36569;
(statearr_36595[(13)] = inst_36562);

return statearr_36595;
})();
var statearr_36596_37727 = state_36569__$1;
(statearr_36596_37727[(2)] = inst_36563);

(statearr_36596_37727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36570 === (10))){
var inst_36553 = (state_36569[(2)]);
var state_36569__$1 = state_36569;
var statearr_36597_37729 = state_36569__$1;
(statearr_36597_37729[(2)] = inst_36553);

(statearr_36597_37729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36570 === (8))){
var inst_36533 = (state_36569[(7)]);
var inst_36542 = (state_36569[(11)]);
var tmp36591 = inst_36533;
var inst_36533__$1 = tmp36591;
var inst_36534 = inst_36542;
var state_36569__$1 = (function (){var statearr_36598 = state_36569;
(statearr_36598[(7)] = inst_36533__$1);

(statearr_36598[(8)] = inst_36534);

return statearr_36598;
})();
var statearr_36599_37731 = state_36569__$1;
(statearr_36599_37731[(2)] = null);

(statearr_36599_37731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34255__auto__ = null;
var cljs$core$async$state_machine__34255__auto____0 = (function (){
var statearr_36602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36602[(0)] = cljs$core$async$state_machine__34255__auto__);

(statearr_36602[(1)] = (1));

return statearr_36602;
});
var cljs$core$async$state_machine__34255__auto____1 = (function (state_36569){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_36569);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e36603){if((e36603 instanceof Object)){
var ex__34258__auto__ = e36603;
var statearr_36604_37732 = state_36569;
(statearr_36604_37732[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37734 = state_36569;
state_36569 = G__37734;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$state_machine__34255__auto__ = function(state_36569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34255__auto____1.call(this,state_36569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34255__auto____0;
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34255__auto____1;
return cljs$core$async$state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_36608 = f__34452__auto__();
(statearr_36608[(6)] = c__34451__auto___37684);

return statearr_36608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36610 = arguments.length;
switch (G__36610) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34451__auto___37738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_36656){
var state_val_36661 = (state_36656[(1)]);
if((state_val_36661 === (7))){
var inst_36652 = (state_36656[(2)]);
var state_36656__$1 = state_36656;
var statearr_36662_37741 = state_36656__$1;
(statearr_36662_37741[(2)] = inst_36652);

(statearr_36662_37741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (1))){
var inst_36611 = [];
var inst_36612 = inst_36611;
var inst_36613 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36656__$1 = (function (){var statearr_36663 = state_36656;
(statearr_36663[(7)] = inst_36612);

(statearr_36663[(8)] = inst_36613);

return statearr_36663;
})();
var statearr_36664_37742 = state_36656__$1;
(statearr_36664_37742[(2)] = null);

(statearr_36664_37742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (4))){
var inst_36616 = (state_36656[(9)]);
var inst_36616__$1 = (state_36656[(2)]);
var inst_36617 = (inst_36616__$1 == null);
var inst_36618 = cljs.core.not(inst_36617);
var state_36656__$1 = (function (){var statearr_36665 = state_36656;
(statearr_36665[(9)] = inst_36616__$1);

return statearr_36665;
})();
if(inst_36618){
var statearr_36666_37745 = state_36656__$1;
(statearr_36666_37745[(1)] = (5));

} else {
var statearr_36667_37747 = state_36656__$1;
(statearr_36667_37747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (15))){
var inst_36646 = (state_36656[(2)]);
var state_36656__$1 = state_36656;
var statearr_36668_37748 = state_36656__$1;
(statearr_36668_37748[(2)] = inst_36646);

(statearr_36668_37748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (13))){
var state_36656__$1 = state_36656;
var statearr_36669_37749 = state_36656__$1;
(statearr_36669_37749[(2)] = null);

(statearr_36669_37749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (6))){
var inst_36612 = (state_36656[(7)]);
var inst_36641 = inst_36612.length;
var inst_36642 = (inst_36641 > (0));
var state_36656__$1 = state_36656;
if(cljs.core.truth_(inst_36642)){
var statearr_36670_37750 = state_36656__$1;
(statearr_36670_37750[(1)] = (12));

} else {
var statearr_36671_37751 = state_36656__$1;
(statearr_36671_37751[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (3))){
var inst_36654 = (state_36656[(2)]);
var state_36656__$1 = state_36656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36656__$1,inst_36654);
} else {
if((state_val_36661 === (12))){
var inst_36612 = (state_36656[(7)]);
var inst_36644 = cljs.core.vec(inst_36612);
var state_36656__$1 = state_36656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36656__$1,(15),out,inst_36644);
} else {
if((state_val_36661 === (2))){
var state_36656__$1 = state_36656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36656__$1,(4),ch);
} else {
if((state_val_36661 === (11))){
var inst_36616 = (state_36656[(9)]);
var inst_36620 = (state_36656[(10)]);
var inst_36634 = (state_36656[(2)]);
var inst_36635 = [];
var inst_36636 = inst_36635.push(inst_36616);
var inst_36612 = inst_36635;
var inst_36613 = inst_36620;
var state_36656__$1 = (function (){var statearr_36672 = state_36656;
(statearr_36672[(11)] = inst_36636);

(statearr_36672[(7)] = inst_36612);

(statearr_36672[(12)] = inst_36634);

(statearr_36672[(8)] = inst_36613);

return statearr_36672;
})();
var statearr_36673_37771 = state_36656__$1;
(statearr_36673_37771[(2)] = null);

(statearr_36673_37771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (9))){
var inst_36612 = (state_36656[(7)]);
var inst_36632 = cljs.core.vec(inst_36612);
var state_36656__$1 = state_36656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36656__$1,(11),out,inst_36632);
} else {
if((state_val_36661 === (5))){
var inst_36616 = (state_36656[(9)]);
var inst_36613 = (state_36656[(8)]);
var inst_36620 = (state_36656[(10)]);
var inst_36620__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36616) : f.call(null,inst_36616));
var inst_36621 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36620__$1,inst_36613);
var inst_36622 = cljs.core.keyword_identical_QMARK_(inst_36613,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36623 = ((inst_36621) || (inst_36622));
var state_36656__$1 = (function (){var statearr_36674 = state_36656;
(statearr_36674[(10)] = inst_36620__$1);

return statearr_36674;
})();
if(cljs.core.truth_(inst_36623)){
var statearr_36675_37788 = state_36656__$1;
(statearr_36675_37788[(1)] = (8));

} else {
var statearr_36676_37793 = state_36656__$1;
(statearr_36676_37793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (14))){
var inst_36649 = (state_36656[(2)]);
var inst_36650 = cljs.core.async.close_BANG_(out);
var state_36656__$1 = (function (){var statearr_36678 = state_36656;
(statearr_36678[(13)] = inst_36649);

return statearr_36678;
})();
var statearr_36679_37800 = state_36656__$1;
(statearr_36679_37800[(2)] = inst_36650);

(statearr_36679_37800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (10))){
var inst_36639 = (state_36656[(2)]);
var state_36656__$1 = state_36656;
var statearr_36680_37805 = state_36656__$1;
(statearr_36680_37805[(2)] = inst_36639);

(statearr_36680_37805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (8))){
var inst_36616 = (state_36656[(9)]);
var inst_36612 = (state_36656[(7)]);
var inst_36620 = (state_36656[(10)]);
var inst_36629 = inst_36612.push(inst_36616);
var tmp36677 = inst_36612;
var inst_36612__$1 = tmp36677;
var inst_36613 = inst_36620;
var state_36656__$1 = (function (){var statearr_36681 = state_36656;
(statearr_36681[(7)] = inst_36612__$1);

(statearr_36681[(8)] = inst_36613);

(statearr_36681[(14)] = inst_36629);

return statearr_36681;
})();
var statearr_36682_37817 = state_36656__$1;
(statearr_36682_37817[(2)] = null);

(statearr_36682_37817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34255__auto__ = null;
var cljs$core$async$state_machine__34255__auto____0 = (function (){
var statearr_36683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36683[(0)] = cljs$core$async$state_machine__34255__auto__);

(statearr_36683[(1)] = (1));

return statearr_36683;
});
var cljs$core$async$state_machine__34255__auto____1 = (function (state_36656){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_36656);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e36684){if((e36684 instanceof Object)){
var ex__34258__auto__ = e36684;
var statearr_36685_37834 = state_36656;
(statearr_36685_37834[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37843 = state_36656;
state_36656 = G__37843;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
cljs$core$async$state_machine__34255__auto__ = function(state_36656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34255__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34255__auto____1.call(this,state_36656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34255__auto____0;
cljs$core$async$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34255__auto____1;
return cljs$core$async$state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_36686 = f__34452__auto__();
(statearr_36686[(6)] = c__34451__auto___37738);

return statearr_36686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
