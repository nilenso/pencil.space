goog.provide('src.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reitit.coercion.spec');
goog.require('reitit.core');
goog.require('reitit.frontend');
goog.require('reitit.frontend.controllers');
goog.require('reitit.frontend.easy');
goog.require('src.chat.views');
goog.require('src.canvas.views');
goog.require('src.home.views');
goog.require('src.lobby.views');
goog.require('src.db');
goog.require('src.sundry');
goog.require('src.tube');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.routes","update-game","src.routes/update-game",129362012),(function (db,p__9181){
var vec__9182 = p__9181;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9182,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9182,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"starting","starting",-1852141466),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),name], 0));
}));
src.routes.routes = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","home","src.routes/home",626274071),new cljs.core.Keyword(null,"view","view",1247994814),src.home.views.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__9195__delegate = function (params){
return console.log("Entering home page");
};
var G__9195 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__9196__i = 0, G__9196__a = new Array(arguments.length -  0);
while (G__9196__i < G__9196__a.length) {G__9196__a[G__9196__i] = arguments[G__9196__i + 0]; ++G__9196__i;}
  params = new cljs.core.IndexedSeq(G__9196__a,0,null);
} 
return G__9195__delegate.call(this,params);};
G__9195.cljs$lang$maxFixedArity = 0;
G__9195.cljs$lang$applyTo = (function (arglist__9197){
var params = cljs.core.seq(arglist__9197);
return G__9195__delegate(params);
});
G__9195.cljs$core$IFn$_invoke$arity$variadic = G__9195__delegate;
return G__9195;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__9198__delegate = function (params){
return console.log("Leaving home page");
};
var G__9198 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__9199__i = 0, G__9199__a = new Array(arguments.length -  0);
while (G__9199__i < G__9199__a.length) {G__9199__a[G__9199__i] = arguments[G__9199__i + 0]; ++G__9199__i;}
  params = new cljs.core.IndexedSeq(G__9199__a,0,null);
} 
return G__9198__delegate.call(this,params);};
G__9198.cljs$lang$maxFixedArity = 0;
G__9198.cljs$lang$applyTo = (function (arglist__9200){
var params = cljs.core.seq(arglist__9200);
return G__9198__delegate(params);
});
G__9198.cljs$core$IFn$_invoke$arity$variadic = G__9198__delegate;
return G__9198;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chat",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","chat","src.routes/chat",921022401),new cljs.core.Keyword(null,"view","view",1247994814),src.chat.views.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__9201__delegate = function (params){
src.chat.views.mount();

return console.log("Entering sub-page 2");
};
var G__9201 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__9202__i = 0, G__9202__a = new Array(arguments.length -  0);
while (G__9202__i < G__9202__a.length) {G__9202__a[G__9202__i] = arguments[G__9202__i + 0]; ++G__9202__i;}
  params = new cljs.core.IndexedSeq(G__9202__a,0,null);
} 
return G__9201__delegate.call(this,params);};
G__9201.cljs$lang$maxFixedArity = 0;
G__9201.cljs$lang$applyTo = (function (arglist__9203){
var params = cljs.core.seq(arglist__9203);
return G__9201__delegate(params);
});
G__9201.cljs$core$IFn$_invoke$arity$variadic = G__9201__delegate;
return G__9201;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__9204__delegate = function (params){
return console.log("Leaving sub-page 2");
};
var G__9204 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__9205__i = 0, G__9205__a = new Array(arguments.length -  0);
while (G__9205__i < G__9205__a.length) {G__9205__a[G__9205__i] = arguments[G__9205__i + 0]; ++G__9205__i;}
  params = new cljs.core.IndexedSeq(G__9205__a,0,null);
} 
return G__9204__delegate.call(this,params);};
G__9204.cljs$lang$maxFixedArity = 0;
G__9204.cljs$lang$applyTo = (function (arglist__9206){
var params = cljs.core.seq(arglist__9206);
return G__9204__delegate(params);
});
G__9204.cljs$core$IFn$_invoke$arity$variadic = G__9204__delegate;
return G__9204;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game/:name",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","game","src.routes/game",737200659),new cljs.core.Keyword(null,"view","view",1247994814),src.home.views.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__9207__delegate = function (params){
return console.log("Entering game",params);
};
var G__9207 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__9208__i = 0, G__9208__a = new Array(arguments.length -  0);
while (G__9208__i < G__9208__a.length) {G__9208__a[G__9208__i] = arguments[G__9208__i + 0]; ++G__9208__i;}
  params = new cljs.core.IndexedSeq(G__9208__a,0,null);
} 
return G__9207__delegate.call(this,params);};
G__9207.cljs$lang$maxFixedArity = 0;
G__9207.cljs$lang$applyTo = (function (arglist__9209){
var params = cljs.core.seq(arglist__9209);
return G__9207__delegate(params);
});
G__9207.cljs$core$IFn$_invoke$arity$variadic = G__9207__delegate;
return G__9207;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__9210__delegate = function (params){
return console.log("Leaving game");
};
var G__9210 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__9211__i = 0, G__9211__a = new Array(arguments.length -  0);
while (G__9211__i < G__9211__a.length) {G__9211__a[G__9211__i] = arguments[G__9211__i + 0]; ++G__9211__i;}
  params = new cljs.core.IndexedSeq(G__9211__a,0,null);
} 
return G__9210__delegate.call(this,params);};
G__9210.cljs$lang$maxFixedArity = 0;
G__9210.cljs$lang$applyTo = (function (arglist__9212){
var params = cljs.core.seq(arglist__9212);
return G__9210__delegate(params);
});
G__9210.cljs$core$IFn$_invoke$arity$variadic = G__9210__delegate;
return G__9210;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lobby",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","lobby","src.routes/lobby",14718945),new cljs.core.Keyword(null,"view","view",1247994814),src.lobby.views.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__9213__delegate = function (params){
src.chat.views.mount();

return console.log("Entering sub-page 2");
};
var G__9213 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__9214__i = 0, G__9214__a = new Array(arguments.length -  0);
while (G__9214__i < G__9214__a.length) {G__9214__a[G__9214__i] = arguments[G__9214__i + 0]; ++G__9214__i;}
  params = new cljs.core.IndexedSeq(G__9214__a,0,null);
} 
return G__9213__delegate.call(this,params);};
G__9213.cljs$lang$maxFixedArity = 0;
G__9213.cljs$lang$applyTo = (function (arglist__9215){
var params = cljs.core.seq(arglist__9215);
return G__9213__delegate(params);
});
G__9213.cljs$core$IFn$_invoke$arity$variadic = G__9213__delegate;
return G__9213;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__9216__delegate = function (params){
return console.log("Leaving sub-page 2");
};
var G__9216 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__9217__i = 0, G__9217__a = new Array(arguments.length -  0);
while (G__9217__i < G__9217__a.length) {G__9217__a[G__9217__i] = arguments[G__9217__i + 0]; ++G__9217__i;}
  params = new cljs.core.IndexedSeq(G__9217__a,0,null);
} 
return G__9216__delegate.call(this,params);};
G__9216.cljs$lang$maxFixedArity = 0;
G__9216.cljs$lang$applyTo = (function (arglist__9218){
var params = cljs.core.seq(arglist__9218);
return G__9216__delegate(params);
});
G__9216.cljs$core$IFn$_invoke$arity$variadic = G__9216__delegate;
return G__9216;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["draw",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","draw","src.routes/draw",313285038),new cljs.core.Keyword(null,"view","view",1247994814),src.canvas.views.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__9219__delegate = function (params){
src.canvas.views.mount();

return console.log("Entering sub-page 2");
};
var G__9219 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__9220__i = 0, G__9220__a = new Array(arguments.length -  0);
while (G__9220__i < G__9220__a.length) {G__9220__a[G__9220__i] = arguments[G__9220__i + 0]; ++G__9220__i;}
  params = new cljs.core.IndexedSeq(G__9220__a,0,null);
} 
return G__9219__delegate.call(this,params);};
G__9219.cljs$lang$maxFixedArity = 0;
G__9219.cljs$lang$applyTo = (function (arglist__9221){
var params = cljs.core.seq(arglist__9221);
return G__9219__delegate(params);
});
G__9219.cljs$core$IFn$_invoke$arity$variadic = G__9219__delegate;
return G__9219;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__9222__delegate = function (params){
return console.log("Leaving sub-page 2");
};
var G__9222 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__9223__i = 0, G__9223__a = new Array(arguments.length -  0);
while (G__9223__i < G__9223__a.length) {G__9223__a[G__9223__i] = arguments[G__9223__i + 0]; ++G__9223__i;}
  params = new cljs.core.IndexedSeq(G__9223__a,0,null);
} 
return G__9222__delegate.call(this,params);};
G__9222.cljs$lang$maxFixedArity = 0;
G__9222.cljs$lang$applyTo = (function (arglist__9224){
var params = cljs.core.seq(arglist__9224);
return G__9222__delegate(params);
});
G__9222.cljs$core$IFn$_invoke$arity$variadic = G__9222__delegate;
return G__9222;
})()
], null)], null)], null)], null)], null);
src.routes.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(src.routes.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
var G__9185_9225 = new cljs.core.Keyword("src.routes","current-route","src.routes/current-route",-1183265412);
var G__9186_9226 = (function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__9185_9225,G__9186_9226) : re_frame.core.reg_sub.call(null,G__9185_9225,G__9186_9226));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.routes","navigated","src.routes/navigated",1518536872),(function (p__9187,p__9188){
var map__9189 = p__9187;
var map__9189__$1 = (((((!((map__9189 == null))))?(((((map__9189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9189):map__9189);
var db = map__9189__$1;
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9189__$1,new cljs.core.Keyword(null,"current-route","current-route",2067529448));
var vec__9190 = p__9188;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9190,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9190,(1),null);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(current_route),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));
src.routes.on_navigate = (function src$routes$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
var G__9194 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.routes","navigated","src.routes/navigated",1518536872),new_match], null);
return (src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1 ? src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1(G__9194) : src.sundry._GT_evt.call(null,G__9194));
} else {
return null;
}
});
src.routes.router_component = (function src$routes$router_component(){
var current_route = src.sundry._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.routes","current-route","src.routes/current-route",-1183265412)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(current_route)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route))], null):null)], null);
});
src.routes.init = (function src$routes$init(){
console.log("Initializing routes");

return reitit.frontend.easy.start_BANG_(src.routes.router,src.routes.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));
});
src.routes.mount = (function src$routes$mount(page_root){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

src.routes.init();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src.routes.router_component], null),page_root);
});

//# sourceMappingURL=src.routes.js.map
