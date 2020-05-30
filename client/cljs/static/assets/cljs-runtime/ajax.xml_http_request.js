goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__36208 = e.target.readyState;
var fexpr__36207 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__36207.cljs$core$IFn$_invoke$arity$1 ? fexpr__36207.cljs$core$IFn$_invoke$arity$1(G__36208) : fexpr__36207.call(null,G__36208));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__36243,handler){
var map__36244 = p__36243;
var map__36244__$1 = (((((!((map__36244 == null))))?(((((map__36244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36244):map__36244);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36244__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36244__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36244__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36244__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36244__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36244__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36244__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__36214_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__36214_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___36288 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___36288)){
var response_type_36289 = temp__5735__auto___36288;
(this$__$1.responseType = cljs.core.name(response_type_36289));
} else {
}

var seq__36254_36290 = cljs.core.seq(headers);
var chunk__36255_36291 = null;
var count__36256_36292 = (0);
var i__36257_36293 = (0);
while(true){
if((i__36257_36293 < count__36256_36292)){
var vec__36267_36295 = chunk__36255_36291.cljs$core$IIndexed$_nth$arity$2(null,i__36257_36293);
var k_36296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36267_36295,(0),null);
var v_36297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36267_36295,(1),null);
this$__$1.setRequestHeader(k_36296,v_36297);


var G__36300 = seq__36254_36290;
var G__36301 = chunk__36255_36291;
var G__36302 = count__36256_36292;
var G__36303 = (i__36257_36293 + (1));
seq__36254_36290 = G__36300;
chunk__36255_36291 = G__36301;
count__36256_36292 = G__36302;
i__36257_36293 = G__36303;
continue;
} else {
var temp__5735__auto___36306 = cljs.core.seq(seq__36254_36290);
if(temp__5735__auto___36306){
var seq__36254_36307__$1 = temp__5735__auto___36306;
if(cljs.core.chunked_seq_QMARK_(seq__36254_36307__$1)){
var c__4609__auto___36308 = cljs.core.chunk_first(seq__36254_36307__$1);
var G__36309 = cljs.core.chunk_rest(seq__36254_36307__$1);
var G__36310 = c__4609__auto___36308;
var G__36311 = cljs.core.count(c__4609__auto___36308);
var G__36312 = (0);
seq__36254_36290 = G__36309;
chunk__36255_36291 = G__36310;
count__36256_36292 = G__36311;
i__36257_36293 = G__36312;
continue;
} else {
var vec__36276_36313 = cljs.core.first(seq__36254_36307__$1);
var k_36314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36276_36313,(0),null);
var v_36315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36276_36313,(1),null);
this$__$1.setRequestHeader(k_36314,v_36315);


var G__36323 = cljs.core.next(seq__36254_36307__$1);
var G__36324 = null;
var G__36325 = (0);
var G__36326 = (0);
seq__36254_36290 = G__36323;
chunk__36255_36291 = G__36324;
count__36256_36292 = G__36325;
i__36257_36293 = G__36326;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
