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
goog.require('src.components.chat');
goog.require('src.components.draw');
goog.require('src.components.home');
goog.require('src.components.lobby');
goog.require('src.db');
goog.require('src.sundry');
goog.require('src.tube');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.routes","update-game","src.routes/update-game",129362012),(function (db,p__34171){
var vec__34172 = p__34171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34172,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34172,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"starting","starting",-1852141466),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),name], 0));
}));
src.routes.routes = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","home","src.routes/home",626274071),new cljs.core.Keyword(null,"view","view",1247994814),src.components.home.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__34192__delegate = function (params){
return console.log("Entering home page");
};
var G__34192 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34193__i = 0, G__34193__a = new Array(arguments.length -  0);
while (G__34193__i < G__34193__a.length) {G__34193__a[G__34193__i] = arguments[G__34193__i + 0]; ++G__34193__i;}
  params = new cljs.core.IndexedSeq(G__34193__a,0,null);
} 
return G__34192__delegate.call(this,params);};
G__34192.cljs$lang$maxFixedArity = 0;
G__34192.cljs$lang$applyTo = (function (arglist__34194){
var params = cljs.core.seq(arglist__34194);
return G__34192__delegate(params);
});
G__34192.cljs$core$IFn$_invoke$arity$variadic = G__34192__delegate;
return G__34192;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__34195__delegate = function (params){
return console.log("Leaving home page");
};
var G__34195 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34196__i = 0, G__34196__a = new Array(arguments.length -  0);
while (G__34196__i < G__34196__a.length) {G__34196__a[G__34196__i] = arguments[G__34196__i + 0]; ++G__34196__i;}
  params = new cljs.core.IndexedSeq(G__34196__a,0,null);
} 
return G__34195__delegate.call(this,params);};
G__34195.cljs$lang$maxFixedArity = 0;
G__34195.cljs$lang$applyTo = (function (arglist__34197){
var params = cljs.core.seq(arglist__34197);
return G__34195__delegate(params);
});
G__34195.cljs$core$IFn$_invoke$arity$variadic = G__34195__delegate;
return G__34195;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chat",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","chat","src.routes/chat",921022401),new cljs.core.Keyword(null,"view","view",1247994814),src.components.chat.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__34198__delegate = function (params){
src.components.chat.mount();

return console.log("Entering sub-page 2");
};
var G__34198 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34199__i = 0, G__34199__a = new Array(arguments.length -  0);
while (G__34199__i < G__34199__a.length) {G__34199__a[G__34199__i] = arguments[G__34199__i + 0]; ++G__34199__i;}
  params = new cljs.core.IndexedSeq(G__34199__a,0,null);
} 
return G__34198__delegate.call(this,params);};
G__34198.cljs$lang$maxFixedArity = 0;
G__34198.cljs$lang$applyTo = (function (arglist__34200){
var params = cljs.core.seq(arglist__34200);
return G__34198__delegate(params);
});
G__34198.cljs$core$IFn$_invoke$arity$variadic = G__34198__delegate;
return G__34198;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__34201__delegate = function (params){
return console.log("Leaving sub-page 2");
};
var G__34201 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34202__i = 0, G__34202__a = new Array(arguments.length -  0);
while (G__34202__i < G__34202__a.length) {G__34202__a[G__34202__i] = arguments[G__34202__i + 0]; ++G__34202__i;}
  params = new cljs.core.IndexedSeq(G__34202__a,0,null);
} 
return G__34201__delegate.call(this,params);};
G__34201.cljs$lang$maxFixedArity = 0;
G__34201.cljs$lang$applyTo = (function (arglist__34203){
var params = cljs.core.seq(arglist__34203);
return G__34201__delegate(params);
});
G__34201.cljs$core$IFn$_invoke$arity$variadic = G__34201__delegate;
return G__34201;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game/:name",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","game","src.routes/game",737200659),new cljs.core.Keyword(null,"view","view",1247994814),src.components.home.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__34204__delegate = function (params){
return console.log("Entering game",params);
};
var G__34204 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34205__i = 0, G__34205__a = new Array(arguments.length -  0);
while (G__34205__i < G__34205__a.length) {G__34205__a[G__34205__i] = arguments[G__34205__i + 0]; ++G__34205__i;}
  params = new cljs.core.IndexedSeq(G__34205__a,0,null);
} 
return G__34204__delegate.call(this,params);};
G__34204.cljs$lang$maxFixedArity = 0;
G__34204.cljs$lang$applyTo = (function (arglist__34206){
var params = cljs.core.seq(arglist__34206);
return G__34204__delegate(params);
});
G__34204.cljs$core$IFn$_invoke$arity$variadic = G__34204__delegate;
return G__34204;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__34207__delegate = function (params){
return console.log("Leaving game");
};
var G__34207 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34208__i = 0, G__34208__a = new Array(arguments.length -  0);
while (G__34208__i < G__34208__a.length) {G__34208__a[G__34208__i] = arguments[G__34208__i + 0]; ++G__34208__i;}
  params = new cljs.core.IndexedSeq(G__34208__a,0,null);
} 
return G__34207__delegate.call(this,params);};
G__34207.cljs$lang$maxFixedArity = 0;
G__34207.cljs$lang$applyTo = (function (arglist__34209){
var params = cljs.core.seq(arglist__34209);
return G__34207__delegate(params);
});
G__34207.cljs$core$IFn$_invoke$arity$variadic = G__34207__delegate;
return G__34207;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lobby",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","lobby","src.routes/lobby",14718945),new cljs.core.Keyword(null,"view","view",1247994814),src.components.lobby.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__34210__delegate = function (params){
src.components.chat.mount();

return console.log("Entering sub-page 2");
};
var G__34210 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34211__i = 0, G__34211__a = new Array(arguments.length -  0);
while (G__34211__i < G__34211__a.length) {G__34211__a[G__34211__i] = arguments[G__34211__i + 0]; ++G__34211__i;}
  params = new cljs.core.IndexedSeq(G__34211__a,0,null);
} 
return G__34210__delegate.call(this,params);};
G__34210.cljs$lang$maxFixedArity = 0;
G__34210.cljs$lang$applyTo = (function (arglist__34212){
var params = cljs.core.seq(arglist__34212);
return G__34210__delegate(params);
});
G__34210.cljs$core$IFn$_invoke$arity$variadic = G__34210__delegate;
return G__34210;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__34213__delegate = function (params){
return console.log("Leaving sub-page 2");
};
var G__34213 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34214__i = 0, G__34214__a = new Array(arguments.length -  0);
while (G__34214__i < G__34214__a.length) {G__34214__a[G__34214__i] = arguments[G__34214__i + 0]; ++G__34214__i;}
  params = new cljs.core.IndexedSeq(G__34214__a,0,null);
} 
return G__34213__delegate.call(this,params);};
G__34213.cljs$lang$maxFixedArity = 0;
G__34213.cljs$lang$applyTo = (function (arglist__34215){
var params = cljs.core.seq(arglist__34215);
return G__34213__delegate(params);
});
G__34213.cljs$core$IFn$_invoke$arity$variadic = G__34213__delegate;
return G__34213;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["draw",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","draw","src.routes/draw",313285038),new cljs.core.Keyword(null,"view","view",1247994814),src.components.draw.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__34216__delegate = function (params){
src.components.draw.mount();

return console.log("Entering sub-page 2");
};
var G__34216 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34217__i = 0, G__34217__a = new Array(arguments.length -  0);
while (G__34217__i < G__34217__a.length) {G__34217__a[G__34217__i] = arguments[G__34217__i + 0]; ++G__34217__i;}
  params = new cljs.core.IndexedSeq(G__34217__a,0,null);
} 
return G__34216__delegate.call(this,params);};
G__34216.cljs$lang$maxFixedArity = 0;
G__34216.cljs$lang$applyTo = (function (arglist__34218){
var params = cljs.core.seq(arglist__34218);
return G__34216__delegate(params);
});
G__34216.cljs$core$IFn$_invoke$arity$variadic = G__34216__delegate;
return G__34216;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__34219__delegate = function (params){
return console.log("Leaving sub-page 2");
};
var G__34219 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34220__i = 0, G__34220__a = new Array(arguments.length -  0);
while (G__34220__i < G__34220__a.length) {G__34220__a[G__34220__i] = arguments[G__34220__i + 0]; ++G__34220__i;}
  params = new cljs.core.IndexedSeq(G__34220__a,0,null);
} 
return G__34219__delegate.call(this,params);};
G__34219.cljs$lang$maxFixedArity = 0;
G__34219.cljs$lang$applyTo = (function (arglist__34221){
var params = cljs.core.seq(arglist__34221);
return G__34219__delegate(params);
});
G__34219.cljs$core$IFn$_invoke$arity$variadic = G__34219__delegate;
return G__34219;
})()
], null)], null)], null)], null)], null);
src.routes.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(src.routes.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
var G__34179_34222 = new cljs.core.Keyword("src.routes","current-route","src.routes/current-route",-1183265412);
var G__34180_34223 = (function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__34179_34222,G__34180_34223) : re_frame.core.reg_sub.call(null,G__34179_34222,G__34180_34223));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.routes","navigated","src.routes/navigated",1518536872),(function (p__34181,p__34182){
var map__34183 = p__34181;
var map__34183__$1 = (((((!((map__34183 == null))))?(((((map__34183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34183):map__34183);
var db = map__34183__$1;
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34183__$1,new cljs.core.Keyword(null,"current-route","current-route",2067529448));
var vec__34184 = p__34182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34184,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34184,(1),null);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(current_route),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));
src.routes.on_navigate = (function src$routes$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
var G__34188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.routes","navigated","src.routes/navigated",1518536872),new_match], null);
return (src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1 ? src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1(G__34188) : src.sundry._GT_evt.call(null,G__34188));
} else {
return null;
}
});
src.routes.router_component = (function src$routes$router_component(p__34189){
var map__34190 = p__34189;
var map__34190__$1 = (((((!((map__34190 == null))))?(((((map__34190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34190):map__34190);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34190__$1,new cljs.core.Keyword(null,"router","router",1091916230));
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

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src.routes.router_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),src.routes.router], null)], null),page_root);
});

//# sourceMappingURL=src.routes.js.map
