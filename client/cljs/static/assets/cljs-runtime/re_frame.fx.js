goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__8968 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__8969 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__8969);

try{try{var seq__8970 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__8971 = null;
var count__8972 = (0);
var i__8973 = (0);
while(true){
if((i__8973 < count__8972)){
var vec__8980 = chunk__8971.cljs$core$IIndexed$_nth$arity$2(null,i__8973);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8980,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8980,(1),null);
var temp__5733__auto___9063 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___9063)){
var effect_fn_9065 = temp__5733__auto___9063;
(effect_fn_9065.cljs$core$IFn$_invoke$arity$1 ? effect_fn_9065.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_9065.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__9066 = seq__8970;
var G__9067 = chunk__8971;
var G__9068 = count__8972;
var G__9069 = (i__8973 + (1));
seq__8970 = G__9066;
chunk__8971 = G__9067;
count__8972 = G__9068;
i__8973 = G__9069;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__8970);
if(temp__5735__auto__){
var seq__8970__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8970__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__8970__$1);
var G__9070 = cljs.core.chunk_rest(seq__8970__$1);
var G__9071 = c__4609__auto__;
var G__9072 = cljs.core.count(c__4609__auto__);
var G__9073 = (0);
seq__8970 = G__9070;
chunk__8971 = G__9071;
count__8972 = G__9072;
i__8973 = G__9073;
continue;
} else {
var vec__8992 = cljs.core.first(seq__8970__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8992,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8992,(1),null);
var temp__5733__auto___9074 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___9074)){
var effect_fn_9075 = temp__5733__auto___9074;
(effect_fn_9075.cljs$core$IFn$_invoke$arity$1 ? effect_fn_9075.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_9075.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__9076 = cljs.core.next(seq__8970__$1);
var G__9077 = null;
var G__9078 = (0);
var G__9079 = (0);
seq__8970 = G__9076;
chunk__8971 = G__9077;
count__8972 = G__9078;
i__8973 = G__9079;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__8684__auto___9080 = re_frame.interop.now();
var duration__8685__auto___9081 = (end__8684__auto___9080 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__8685__auto___9081,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__8684__auto___9080);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__8968);
}} else {
var seq__8998 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__8999 = null;
var count__9000 = (0);
var i__9001 = (0);
while(true){
if((i__9001 < count__9000)){
var vec__9012 = chunk__8999.cljs$core$IIndexed$_nth$arity$2(null,i__9001);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9012,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9012,(1),null);
var temp__5733__auto___9087 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___9087)){
var effect_fn_9088 = temp__5733__auto___9087;
(effect_fn_9088.cljs$core$IFn$_invoke$arity$1 ? effect_fn_9088.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_9088.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__9089 = seq__8998;
var G__9090 = chunk__8999;
var G__9091 = count__9000;
var G__9092 = (i__9001 + (1));
seq__8998 = G__9089;
chunk__8999 = G__9090;
count__9000 = G__9091;
i__9001 = G__9092;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__8998);
if(temp__5735__auto__){
var seq__8998__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8998__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__8998__$1);
var G__9094 = cljs.core.chunk_rest(seq__8998__$1);
var G__9095 = c__4609__auto__;
var G__9096 = cljs.core.count(c__4609__auto__);
var G__9097 = (0);
seq__8998 = G__9094;
chunk__8999 = G__9095;
count__9000 = G__9096;
i__9001 = G__9097;
continue;
} else {
var vec__9015 = cljs.core.first(seq__8998__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9015,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9015,(1),null);
var temp__5733__auto___9099 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___9099)){
var effect_fn_9100 = temp__5733__auto___9099;
(effect_fn_9100.cljs$core$IFn$_invoke$arity$1 ? effect_fn_9100.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_9100.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__9101 = cljs.core.next(seq__8998__$1);
var G__9102 = null;
var G__9103 = (0);
var G__9104 = (0);
seq__8998 = G__9101;
chunk__8999 = G__9102;
count__9000 = G__9103;
i__9001 = G__9104;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__9020 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__9021 = null;
var count__9022 = (0);
var i__9023 = (0);
while(true){
if((i__9023 < count__9022)){
var map__9041 = chunk__9021.cljs$core$IIndexed$_nth$arity$2(null,i__9023);
var map__9041__$1 = (((((!((map__9041 == null))))?(((((map__9041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9041):map__9041);
var effect = map__9041__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9041__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9041__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__9020,chunk__9021,count__9022,i__9023,map__9041,map__9041__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__9020,chunk__9021,count__9022,i__9023,map__9041,map__9041__$1,effect,ms,dispatch))
,ms);
}


var G__9105 = seq__9020;
var G__9106 = chunk__9021;
var G__9107 = count__9022;
var G__9108 = (i__9023 + (1));
seq__9020 = G__9105;
chunk__9021 = G__9106;
count__9022 = G__9107;
i__9023 = G__9108;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__9020);
if(temp__5735__auto__){
var seq__9020__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9020__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__9020__$1);
var G__9114 = cljs.core.chunk_rest(seq__9020__$1);
var G__9115 = c__4609__auto__;
var G__9116 = cljs.core.count(c__4609__auto__);
var G__9117 = (0);
seq__9020 = G__9114;
chunk__9021 = G__9115;
count__9022 = G__9116;
i__9023 = G__9117;
continue;
} else {
var map__9046 = cljs.core.first(seq__9020__$1);
var map__9046__$1 = (((((!((map__9046 == null))))?(((((map__9046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9046):map__9046);
var effect = map__9046__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9046__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9046__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__9020,chunk__9021,count__9022,i__9023,map__9046,map__9046__$1,effect,ms,dispatch,seq__9020__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__9020,chunk__9021,count__9022,i__9023,map__9046,map__9046__$1,effect,ms,dispatch,seq__9020__$1,temp__5735__auto__))
,ms);
}


var G__9125 = cljs.core.next(seq__9020__$1);
var G__9126 = null;
var G__9127 = (0);
var G__9128 = (0);
seq__9020 = G__9125;
chunk__9021 = G__9126;
count__9022 = G__9127;
i__9023 = G__9128;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__9049 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__9050 = null;
var count__9051 = (0);
var i__9052 = (0);
while(true){
if((i__9052 < count__9051)){
var event = chunk__9050.cljs$core$IIndexed$_nth$arity$2(null,i__9052);
re_frame.router.dispatch(event);


var G__9130 = seq__9049;
var G__9131 = chunk__9050;
var G__9132 = count__9051;
var G__9133 = (i__9052 + (1));
seq__9049 = G__9130;
chunk__9050 = G__9131;
count__9051 = G__9132;
i__9052 = G__9133;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__9049);
if(temp__5735__auto__){
var seq__9049__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9049__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__9049__$1);
var G__9134 = cljs.core.chunk_rest(seq__9049__$1);
var G__9135 = c__4609__auto__;
var G__9136 = cljs.core.count(c__4609__auto__);
var G__9137 = (0);
seq__9049 = G__9134;
chunk__9050 = G__9135;
count__9051 = G__9136;
i__9052 = G__9137;
continue;
} else {
var event = cljs.core.first(seq__9049__$1);
re_frame.router.dispatch(event);


var G__9140 = cljs.core.next(seq__9049__$1);
var G__9141 = null;
var G__9142 = (0);
var G__9143 = (0);
seq__9049 = G__9140;
chunk__9050 = G__9141;
count__9051 = G__9142;
i__9052 = G__9143;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__9053 = cljs.core.seq(value);
var chunk__9054 = null;
var count__9055 = (0);
var i__9056 = (0);
while(true){
if((i__9056 < count__9055)){
var event = chunk__9054.cljs$core$IIndexed$_nth$arity$2(null,i__9056);
clear_event(event);


var G__9144 = seq__9053;
var G__9145 = chunk__9054;
var G__9146 = count__9055;
var G__9147 = (i__9056 + (1));
seq__9053 = G__9144;
chunk__9054 = G__9145;
count__9055 = G__9146;
i__9056 = G__9147;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__9053);
if(temp__5735__auto__){
var seq__9053__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9053__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__9053__$1);
var G__9148 = cljs.core.chunk_rest(seq__9053__$1);
var G__9149 = c__4609__auto__;
var G__9150 = cljs.core.count(c__4609__auto__);
var G__9151 = (0);
seq__9053 = G__9148;
chunk__9054 = G__9149;
count__9055 = G__9150;
i__9056 = G__9151;
continue;
} else {
var event = cljs.core.first(seq__9053__$1);
clear_event(event);


var G__9152 = cljs.core.next(seq__9053__$1);
var G__9153 = null;
var G__9154 = (0);
var G__9155 = (0);
seq__9053 = G__9152;
chunk__9054 = G__9153;
count__9055 = G__9154;
i__9056 = G__9155;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
