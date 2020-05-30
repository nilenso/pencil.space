goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__8704){
var map__8705 = p__8704;
var map__8705__$1 = (((((!((map__8705 == null))))?(((((map__8705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8705):map__8705);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8705__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8705__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8705__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8705__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__8707_8748 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__8708_8749 = null;
var count__8709_8750 = (0);
var i__8710_8751 = (0);
while(true){
if((i__8710_8751 < count__8709_8750)){
var vec__8721_8752 = chunk__8708_8749.cljs$core$IIndexed$_nth$arity$2(null,i__8710_8751);
var k_8753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8721_8752,(0),null);
var cb_8754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8721_8752,(1),null);
try{var G__8725_8758 = cljs.core.deref(re_frame.trace.traces);
(cb_8754.cljs$core$IFn$_invoke$arity$1 ? cb_8754.cljs$core$IFn$_invoke$arity$1(G__8725_8758) : cb_8754.call(null,G__8725_8758));
}catch (e8724){var e_8759 = e8724;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_8753,"while storing",cljs.core.deref(re_frame.trace.traces),e_8759], 0));
}

var G__8760 = seq__8707_8748;
var G__8761 = chunk__8708_8749;
var G__8762 = count__8709_8750;
var G__8763 = (i__8710_8751 + (1));
seq__8707_8748 = G__8760;
chunk__8708_8749 = G__8761;
count__8709_8750 = G__8762;
i__8710_8751 = G__8763;
continue;
} else {
var temp__5735__auto___8764 = cljs.core.seq(seq__8707_8748);
if(temp__5735__auto___8764){
var seq__8707_8765__$1 = temp__5735__auto___8764;
if(cljs.core.chunked_seq_QMARK_(seq__8707_8765__$1)){
var c__4609__auto___8766 = cljs.core.chunk_first(seq__8707_8765__$1);
var G__8767 = cljs.core.chunk_rest(seq__8707_8765__$1);
var G__8768 = c__4609__auto___8766;
var G__8769 = cljs.core.count(c__4609__auto___8766);
var G__8770 = (0);
seq__8707_8748 = G__8767;
chunk__8708_8749 = G__8768;
count__8709_8750 = G__8769;
i__8710_8751 = G__8770;
continue;
} else {
var vec__8726_8774 = cljs.core.first(seq__8707_8765__$1);
var k_8775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8726_8774,(0),null);
var cb_8776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8726_8774,(1),null);
try{var G__8730_8778 = cljs.core.deref(re_frame.trace.traces);
(cb_8776.cljs$core$IFn$_invoke$arity$1 ? cb_8776.cljs$core$IFn$_invoke$arity$1(G__8730_8778) : cb_8776.call(null,G__8730_8778));
}catch (e8729){var e_8780 = e8729;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_8775,"while storing",cljs.core.deref(re_frame.trace.traces),e_8780], 0));
}

var G__8781 = cljs.core.next(seq__8707_8765__$1);
var G__8782 = null;
var G__8783 = (0);
var G__8784 = (0);
seq__8707_8748 = G__8781;
chunk__8708_8749 = G__8782;
count__8709_8750 = G__8783;
i__8710_8751 = G__8784;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
