goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39298 = arguments.length;
var i__4790__auto___39299 = (0);
while(true){
if((i__4790__auto___39299 < len__4789__auto___39298)){
args__4795__auto__.push((arguments[i__4790__auto___39299]));

var G__39304 = (i__4790__auto___39299 + (1));
i__4790__auto___39299 = G__39304;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38915){
var G__38916 = cljs.core.first(seq38915);
var seq38915__$1 = cljs.core.next(seq38915);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38916,seq38915__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38930 = cljs.core.seq(sources);
var chunk__38931 = null;
var count__38932 = (0);
var i__38933 = (0);
while(true){
if((i__38933 < count__38932)){
var map__38944 = chunk__38931.cljs$core$IIndexed$_nth$arity$2(null,i__38933);
var map__38944__$1 = (((((!((map__38944 == null))))?(((((map__38944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38944):map__38944);
var src__$1 = map__38944__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38944__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38944__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38944__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38944__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src__$1);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38949){var e_39317 = e38949;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39317);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39317.message)].join('')));
}

var G__39318 = seq__38930;
var G__39319 = chunk__38931;
var G__39320 = count__38932;
var G__39321 = (i__38933 + (1));
seq__38930 = G__39318;
chunk__38931 = G__39319;
count__38932 = G__39320;
i__38933 = G__39321;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38930);
if(temp__5735__auto__){
var seq__38930__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38930__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38930__$1);
var G__39323 = cljs.core.chunk_rest(seq__38930__$1);
var G__39324 = c__4609__auto__;
var G__39325 = cljs.core.count(c__4609__auto__);
var G__39326 = (0);
seq__38930 = G__39323;
chunk__38931 = G__39324;
count__38932 = G__39325;
i__38933 = G__39326;
continue;
} else {
var map__38950 = cljs.core.first(seq__38930__$1);
var map__38950__$1 = (((((!((map__38950 == null))))?(((((map__38950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38950):map__38950);
var src__$1 = map__38950__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38950__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38950__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38950__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38950__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src__$1);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38954){var e_39335 = e38954;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39335);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39335.message)].join('')));
}

var G__39336 = cljs.core.next(seq__38930__$1);
var G__39337 = null;
var G__39338 = (0);
var G__39339 = (0);
seq__38930 = G__39336;
chunk__38931 = G__39337;
count__38932 = G__39338;
i__38933 = G__39339;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38956 = cljs.core.seq(js_requires);
var chunk__38957 = null;
var count__38958 = (0);
var i__38959 = (0);
while(true){
if((i__38959 < count__38958)){
var js_ns = chunk__38957.cljs$core$IIndexed$_nth$arity$2(null,i__38959);
var require_str_39345 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39345);


var G__39346 = seq__38956;
var G__39347 = chunk__38957;
var G__39348 = count__38958;
var G__39349 = (i__38959 + (1));
seq__38956 = G__39346;
chunk__38957 = G__39347;
count__38958 = G__39348;
i__38959 = G__39349;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38956);
if(temp__5735__auto__){
var seq__38956__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38956__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38956__$1);
var G__39352 = cljs.core.chunk_rest(seq__38956__$1);
var G__39353 = c__4609__auto__;
var G__39354 = cljs.core.count(c__4609__auto__);
var G__39355 = (0);
seq__38956 = G__39352;
chunk__38957 = G__39353;
count__38958 = G__39354;
i__38959 = G__39355;
continue;
} else {
var js_ns = cljs.core.first(seq__38956__$1);
var require_str_39357 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39357);


var G__39358 = cljs.core.next(seq__38956__$1);
var G__39359 = null;
var G__39360 = (0);
var G__39361 = (0);
seq__38956 = G__39358;
chunk__38957 = G__39359;
count__38958 = G__39360;
i__38959 = G__39361;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__38967 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__38967) : callback.call(null,G__38967));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__38973){
var map__38974 = p__38973;
var map__38974__$1 = (((((!((map__38974 == null))))?(((((map__38974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38974):map__38974);
var msg = map__38974__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38974__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38974__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38976(s__38977){
return (new cljs.core.LazySeq(null,(function (){
var s__38977__$1 = s__38977;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38977__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38982 = cljs.core.first(xs__6292__auto__);
var map__38982__$1 = (((((!((map__38982 == null))))?(((((map__38982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38982):map__38982);
var src__$1 = map__38982__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38982__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38982__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src__$1))){
var iterys__4578__auto__ = ((function (s__38977__$1,map__38982,map__38982__$1,src__$1,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38974,map__38974__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38976_$_iter__38978(s__38979){
return (new cljs.core.LazySeq(null,((function (s__38977__$1,map__38982,map__38982__$1,src__$1,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38974,map__38974__$1,msg,info,reload_info){
return (function (){
var s__38979__$1 = s__38979;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38979__$1);
if(temp__5735__auto____$1){
var s__38979__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38979__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38979__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38981 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38980 = (0);
while(true){
if((i__38980 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__38980);
cljs.core.chunk_append(b__38981,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39367 = (i__38980 + (1));
i__38980 = G__39367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38981),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38976_$_iter__38978(cljs.core.chunk_rest(s__38979__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38981),null);
}
} else {
var warning = cljs.core.first(s__38979__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38976_$_iter__38978(cljs.core.rest(s__38979__$2)));
}
} else {
return null;
}
break;
}
});})(s__38977__$1,map__38982,map__38982__$1,src__$1,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38974,map__38974__$1,msg,info,reload_info))
,null,null));
});})(s__38977__$1,map__38982,map__38982__$1,src__$1,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38974,map__38974__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38976(cljs.core.rest(s__38977__$1)));
} else {
var G__39373 = cljs.core.rest(s__38977__$1);
s__38977__$1 = G__39373;
continue;
}
} else {
var G__39374 = cljs.core.rest(s__38977__$1);
s__38977__$1 = G__39374;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__38989_39375 = cljs.core.seq(warnings);
var chunk__38990_39376 = null;
var count__38991_39377 = (0);
var i__38992_39378 = (0);
while(true){
if((i__38992_39378 < count__38991_39377)){
var map__39009_39379 = chunk__38990_39376.cljs$core$IIndexed$_nth$arity$2(null,i__38992_39378);
var map__39009_39380__$1 = (((((!((map__39009_39379 == null))))?(((((map__39009_39379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39009_39379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39009_39379):map__39009_39379);
var w_39381 = map__39009_39380__$1;
var msg_39382__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39009_39380__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39009_39380__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39009_39380__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39009_39380__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39385)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39383),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39384),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39382__$1)].join(''));


var G__39387 = seq__38989_39375;
var G__39388 = chunk__38990_39376;
var G__39389 = count__38991_39377;
var G__39390 = (i__38992_39378 + (1));
seq__38989_39375 = G__39387;
chunk__38990_39376 = G__39388;
count__38991_39377 = G__39389;
i__38992_39378 = G__39390;
continue;
} else {
var temp__5735__auto___39391 = cljs.core.seq(seq__38989_39375);
if(temp__5735__auto___39391){
var seq__38989_39394__$1 = temp__5735__auto___39391;
if(cljs.core.chunked_seq_QMARK_(seq__38989_39394__$1)){
var c__4609__auto___39395 = cljs.core.chunk_first(seq__38989_39394__$1);
var G__39397 = cljs.core.chunk_rest(seq__38989_39394__$1);
var G__39398 = c__4609__auto___39395;
var G__39399 = cljs.core.count(c__4609__auto___39395);
var G__39400 = (0);
seq__38989_39375 = G__39397;
chunk__38990_39376 = G__39398;
count__38991_39377 = G__39399;
i__38992_39378 = G__39400;
continue;
} else {
var map__39015_39401 = cljs.core.first(seq__38989_39394__$1);
var map__39015_39402__$1 = (((((!((map__39015_39401 == null))))?(((((map__39015_39401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39015_39401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39015_39401):map__39015_39401);
var w_39403 = map__39015_39402__$1;
var msg_39404__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39015_39402__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39015_39402__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39015_39402__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39015_39402__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39407)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39405),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39406),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39404__$1)].join(''));


var G__39409 = cljs.core.next(seq__38989_39394__$1);
var G__39410 = null;
var G__39411 = (0);
var G__39412 = (0);
seq__38989_39375 = G__39409;
chunk__38990_39376 = G__39410;
count__38991_39377 = G__39411;
i__38992_39378 = G__39412;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__38971_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38971_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__39033){
var map__39034 = p__39033;
var map__39034__$1 = (((((!((map__39034 == null))))?(((((map__39034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39034):map__39034);
var msg = map__39034__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39034__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39037 = cljs.core.seq(updates);
var chunk__39039 = null;
var count__39040 = (0);
var i__39041 = (0);
while(true){
if((i__39041 < count__39040)){
var path = chunk__39039.cljs$core$IIndexed$_nth$arity$2(null,i__39041);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39094_39422 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39097_39423 = null;
var count__39098_39424 = (0);
var i__39099_39425 = (0);
while(true){
if((i__39099_39425 < count__39098_39424)){
var node_39427 = chunk__39097_39423.cljs$core$IIndexed$_nth$arity$2(null,i__39099_39425);
var path_match_39428 = shadow.cljs.devtools.client.browser.match_paths(node_39427.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39428)){
var new_link_39429 = (function (){var G__39113 = node_39427.cloneNode(true);
G__39113.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39428),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39113;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39428], 0));

goog.dom.insertSiblingAfter(new_link_39429,node_39427);

goog.dom.removeNode(node_39427);


var G__39430 = seq__39094_39422;
var G__39431 = chunk__39097_39423;
var G__39432 = count__39098_39424;
var G__39433 = (i__39099_39425 + (1));
seq__39094_39422 = G__39430;
chunk__39097_39423 = G__39431;
count__39098_39424 = G__39432;
i__39099_39425 = G__39433;
continue;
} else {
var G__39434 = seq__39094_39422;
var G__39435 = chunk__39097_39423;
var G__39436 = count__39098_39424;
var G__39437 = (i__39099_39425 + (1));
seq__39094_39422 = G__39434;
chunk__39097_39423 = G__39435;
count__39098_39424 = G__39436;
i__39099_39425 = G__39437;
continue;
}
} else {
var temp__5735__auto___39438 = cljs.core.seq(seq__39094_39422);
if(temp__5735__auto___39438){
var seq__39094_39439__$1 = temp__5735__auto___39438;
if(cljs.core.chunked_seq_QMARK_(seq__39094_39439__$1)){
var c__4609__auto___39440 = cljs.core.chunk_first(seq__39094_39439__$1);
var G__39441 = cljs.core.chunk_rest(seq__39094_39439__$1);
var G__39442 = c__4609__auto___39440;
var G__39443 = cljs.core.count(c__4609__auto___39440);
var G__39444 = (0);
seq__39094_39422 = G__39441;
chunk__39097_39423 = G__39442;
count__39098_39424 = G__39443;
i__39099_39425 = G__39444;
continue;
} else {
var node_39445 = cljs.core.first(seq__39094_39439__$1);
var path_match_39446 = shadow.cljs.devtools.client.browser.match_paths(node_39445.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39446)){
var new_link_39447 = (function (){var G__39117 = node_39445.cloneNode(true);
G__39117.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39446),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39117;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39446], 0));

goog.dom.insertSiblingAfter(new_link_39447,node_39445);

goog.dom.removeNode(node_39445);


var G__39448 = cljs.core.next(seq__39094_39439__$1);
var G__39449 = null;
var G__39450 = (0);
var G__39451 = (0);
seq__39094_39422 = G__39448;
chunk__39097_39423 = G__39449;
count__39098_39424 = G__39450;
i__39099_39425 = G__39451;
continue;
} else {
var G__39452 = cljs.core.next(seq__39094_39439__$1);
var G__39453 = null;
var G__39454 = (0);
var G__39455 = (0);
seq__39094_39422 = G__39452;
chunk__39097_39423 = G__39453;
count__39098_39424 = G__39454;
i__39099_39425 = G__39455;
continue;
}
}
} else {
}
}
break;
}


var G__39456 = seq__39037;
var G__39457 = chunk__39039;
var G__39458 = count__39040;
var G__39459 = (i__39041 + (1));
seq__39037 = G__39456;
chunk__39039 = G__39457;
count__39040 = G__39458;
i__39041 = G__39459;
continue;
} else {
var G__39460 = seq__39037;
var G__39461 = chunk__39039;
var G__39462 = count__39040;
var G__39463 = (i__39041 + (1));
seq__39037 = G__39460;
chunk__39039 = G__39461;
count__39040 = G__39462;
i__39041 = G__39463;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39037);
if(temp__5735__auto__){
var seq__39037__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39037__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39037__$1);
var G__39464 = cljs.core.chunk_rest(seq__39037__$1);
var G__39465 = c__4609__auto__;
var G__39466 = cljs.core.count(c__4609__auto__);
var G__39467 = (0);
seq__39037 = G__39464;
chunk__39039 = G__39465;
count__39040 = G__39466;
i__39041 = G__39467;
continue;
} else {
var path = cljs.core.first(seq__39037__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39118_39468 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39121_39469 = null;
var count__39122_39470 = (0);
var i__39123_39471 = (0);
while(true){
if((i__39123_39471 < count__39122_39470)){
var node_39472 = chunk__39121_39469.cljs$core$IIndexed$_nth$arity$2(null,i__39123_39471);
var path_match_39473 = shadow.cljs.devtools.client.browser.match_paths(node_39472.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39473)){
var new_link_39474 = (function (){var G__39134 = node_39472.cloneNode(true);
G__39134.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39473),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39134;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39473], 0));

goog.dom.insertSiblingAfter(new_link_39474,node_39472);

goog.dom.removeNode(node_39472);


var G__39475 = seq__39118_39468;
var G__39476 = chunk__39121_39469;
var G__39477 = count__39122_39470;
var G__39478 = (i__39123_39471 + (1));
seq__39118_39468 = G__39475;
chunk__39121_39469 = G__39476;
count__39122_39470 = G__39477;
i__39123_39471 = G__39478;
continue;
} else {
var G__39479 = seq__39118_39468;
var G__39480 = chunk__39121_39469;
var G__39481 = count__39122_39470;
var G__39482 = (i__39123_39471 + (1));
seq__39118_39468 = G__39479;
chunk__39121_39469 = G__39480;
count__39122_39470 = G__39481;
i__39123_39471 = G__39482;
continue;
}
} else {
var temp__5735__auto___39483__$1 = cljs.core.seq(seq__39118_39468);
if(temp__5735__auto___39483__$1){
var seq__39118_39484__$1 = temp__5735__auto___39483__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39118_39484__$1)){
var c__4609__auto___39485 = cljs.core.chunk_first(seq__39118_39484__$1);
var G__39486 = cljs.core.chunk_rest(seq__39118_39484__$1);
var G__39487 = c__4609__auto___39485;
var G__39488 = cljs.core.count(c__4609__auto___39485);
var G__39489 = (0);
seq__39118_39468 = G__39486;
chunk__39121_39469 = G__39487;
count__39122_39470 = G__39488;
i__39123_39471 = G__39489;
continue;
} else {
var node_39490 = cljs.core.first(seq__39118_39484__$1);
var path_match_39491 = shadow.cljs.devtools.client.browser.match_paths(node_39490.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39491)){
var new_link_39492 = (function (){var G__39149 = node_39490.cloneNode(true);
G__39149.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39491),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39149;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39491], 0));

goog.dom.insertSiblingAfter(new_link_39492,node_39490);

goog.dom.removeNode(node_39490);


var G__39493 = cljs.core.next(seq__39118_39484__$1);
var G__39494 = null;
var G__39495 = (0);
var G__39496 = (0);
seq__39118_39468 = G__39493;
chunk__39121_39469 = G__39494;
count__39122_39470 = G__39495;
i__39123_39471 = G__39496;
continue;
} else {
var G__39498 = cljs.core.next(seq__39118_39484__$1);
var G__39499 = null;
var G__39500 = (0);
var G__39501 = (0);
seq__39118_39468 = G__39498;
chunk__39121_39469 = G__39499;
count__39122_39470 = G__39500;
i__39123_39471 = G__39501;
continue;
}
}
} else {
}
}
break;
}


var G__39503 = cljs.core.next(seq__39037__$1);
var G__39504 = null;
var G__39505 = (0);
var G__39506 = (0);
seq__39037 = G__39503;
chunk__39039 = G__39504;
count__39040 = G__39505;
i__39041 = G__39506;
continue;
} else {
var G__39507 = cljs.core.next(seq__39037__$1);
var G__39508 = null;
var G__39509 = (0);
var G__39510 = (0);
seq__39037 = G__39507;
chunk__39039 = G__39508;
count__39040 = G__39509;
i__39041 = G__39510;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__39171){
var map__39172 = p__39171;
var map__39172__$1 = (((((!((map__39172 == null))))?(((((map__39172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39172):map__39172);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39172__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39172__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__39185,done){
var map__39189 = p__39185;
var map__39189__$1 = (((((!((map__39189 == null))))?(((((map__39189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39189):map__39189);
var msg = map__39189__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39189__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39189__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39189__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39189__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39194){
var map__39195 = p__39194;
var map__39195__$1 = (((((!((map__39195 == null))))?(((((map__39195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39195):map__39195);
var src__$1 = map__39195__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39195__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src__$1);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e39201){var e = e39201;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__39212,done){
var map__39213 = p__39212;
var map__39213__$1 = (((((!((map__39213 == null))))?(((((map__39213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39213):map__39213);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39213__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39213__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__39221){
var map__39223 = p__39221;
var map__39223__$1 = (((((!((map__39223 == null))))?(((((map__39223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39223):map__39223);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39223__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39223__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__39232,done){
var map__39233 = p__39232;
var map__39233__$1 = (((((!((map__39233 == null))))?(((((map__39233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39233):map__39233);
var msg = map__39233__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__39239_39515 = type;
var G__39239_39516__$1 = (((G__39239_39515 instanceof cljs.core.Keyword))?G__39239_39515.fqn:null);
switch (G__39239_39516__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__39257 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__39257.cljs$core$IFn$_invoke$arity$1 ? fexpr__39257.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__39257.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e39268){var e = e39268;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___39524 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___39524)){
var s_39525 = temp__5735__auto___39524;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_39525.onclose = (function (e){
return null;
}));

s_39525.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
