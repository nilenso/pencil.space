goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__36361){
var vec__36362 = p__36361;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36362,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36362,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__36367){
var map__36368 = p__36367;
var map__36368__$1 = (((((!((map__36368 == null))))?(((((map__36368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36368):map__36368);
var request = map__36368__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36368__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36368__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__36365_SHARP_){
var G__36370 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__36365_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__36370) : re_frame.core.dispatch.call(null,G__36370));
}),(function (p1__36366_SHARP_){
var G__36371 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__36366_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__36371) : re_frame.core.dispatch.call(null,G__36371));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__36372 = cljs.core.seq(seq_request_maps);
var chunk__36373 = null;
var count__36374 = (0);
var i__36375 = (0);
while(true){
if((i__36375 < count__36374)){
var request__$1 = chunk__36373.cljs$core$IIndexed$_nth$arity$2(null,i__36375);
var G__36378_36380 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__36378_36380) : ajax.core.ajax_request.call(null,G__36378_36380));


var G__36381 = seq__36372;
var G__36382 = chunk__36373;
var G__36383 = count__36374;
var G__36384 = (i__36375 + (1));
seq__36372 = G__36381;
chunk__36373 = G__36382;
count__36374 = G__36383;
i__36375 = G__36384;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36372);
if(temp__5735__auto__){
var seq__36372__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36372__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36372__$1);
var G__36385 = cljs.core.chunk_rest(seq__36372__$1);
var G__36386 = c__4609__auto__;
var G__36387 = cljs.core.count(c__4609__auto__);
var G__36388 = (0);
seq__36372 = G__36385;
chunk__36373 = G__36386;
count__36374 = G__36387;
i__36375 = G__36388;
continue;
} else {
var request__$1 = cljs.core.first(seq__36372__$1);
var G__36379_36389 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__36379_36389) : ajax.core.ajax_request.call(null,G__36379_36389));


var G__36390 = cljs.core.next(seq__36372__$1);
var G__36391 = null;
var G__36392 = (0);
var G__36393 = (0);
seq__36372 = G__36390;
chunk__36373 = G__36391;
count__36374 = G__36392;
i__36375 = G__36393;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect) : re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
