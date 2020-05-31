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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.routes","update-game","src.routes/update-game",129362012),(function (db,p__34960){
var vec__34961 = p__34960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34961,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34961,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"starting","starting",-1852141466),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),name], 0));
}));
src.routes.routes = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","home","src.routes/home",626274071),new cljs.core.Keyword(null,"view","view",1247994814),src.home.views.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__34980__delegate = function (params){
return console.log("Entering home page");
};
var G__34980 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34981__i = 0, G__34981__a = new Array(arguments.length -  0);
while (G__34981__i < G__34981__a.length) {G__34981__a[G__34981__i] = arguments[G__34981__i + 0]; ++G__34981__i;}
  params = new cljs.core.IndexedSeq(G__34981__a,0,null);
} 
return G__34980__delegate.call(this,params);};
G__34980.cljs$lang$maxFixedArity = 0;
G__34980.cljs$lang$applyTo = (function (arglist__34982){
var params = cljs.core.seq(arglist__34982);
return G__34980__delegate(params);
});
G__34980.cljs$core$IFn$_invoke$arity$variadic = G__34980__delegate;
return G__34980;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__34983__delegate = function (params){
return console.log("Leaving home page");
};
var G__34983 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34984__i = 0, G__34984__a = new Array(arguments.length -  0);
while (G__34984__i < G__34984__a.length) {G__34984__a[G__34984__i] = arguments[G__34984__i + 0]; ++G__34984__i;}
  params = new cljs.core.IndexedSeq(G__34984__a,0,null);
} 
return G__34983__delegate.call(this,params);};
G__34983.cljs$lang$maxFixedArity = 0;
G__34983.cljs$lang$applyTo = (function (arglist__34985){
var params = cljs.core.seq(arglist__34985);
return G__34983__delegate(params);
});
G__34983.cljs$core$IFn$_invoke$arity$variadic = G__34983__delegate;
return G__34983;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chat",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","chat","src.routes/chat",921022401),new cljs.core.Keyword(null,"view","view",1247994814),src.chat.views.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__34986__delegate = function (params){
src.chat.views.mount();

return console.log("Entering sub-page 2");
};
var G__34986 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34987__i = 0, G__34987__a = new Array(arguments.length -  0);
while (G__34987__i < G__34987__a.length) {G__34987__a[G__34987__i] = arguments[G__34987__i + 0]; ++G__34987__i;}
  params = new cljs.core.IndexedSeq(G__34987__a,0,null);
} 
return G__34986__delegate.call(this,params);};
G__34986.cljs$lang$maxFixedArity = 0;
G__34986.cljs$lang$applyTo = (function (arglist__34988){
var params = cljs.core.seq(arglist__34988);
return G__34986__delegate(params);
});
G__34986.cljs$core$IFn$_invoke$arity$variadic = G__34986__delegate;
return G__34986;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__34989__delegate = function (params){
return console.log("Leaving sub-page 2");
};
var G__34989 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34990__i = 0, G__34990__a = new Array(arguments.length -  0);
while (G__34990__i < G__34990__a.length) {G__34990__a[G__34990__i] = arguments[G__34990__i + 0]; ++G__34990__i;}
  params = new cljs.core.IndexedSeq(G__34990__a,0,null);
} 
return G__34989__delegate.call(this,params);};
G__34989.cljs$lang$maxFixedArity = 0;
G__34989.cljs$lang$applyTo = (function (arglist__34991){
var params = cljs.core.seq(arglist__34991);
return G__34989__delegate(params);
});
G__34989.cljs$core$IFn$_invoke$arity$variadic = G__34989__delegate;
return G__34989;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game/:name",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","game","src.routes/game",737200659),new cljs.core.Keyword(null,"view","view",1247994814),src.home.views.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__34992__delegate = function (params){
return console.log("Entering game",params);
};
var G__34992 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34993__i = 0, G__34993__a = new Array(arguments.length -  0);
while (G__34993__i < G__34993__a.length) {G__34993__a[G__34993__i] = arguments[G__34993__i + 0]; ++G__34993__i;}
  params = new cljs.core.IndexedSeq(G__34993__a,0,null);
} 
return G__34992__delegate.call(this,params);};
G__34992.cljs$lang$maxFixedArity = 0;
G__34992.cljs$lang$applyTo = (function (arglist__34994){
var params = cljs.core.seq(arglist__34994);
return G__34992__delegate(params);
});
G__34992.cljs$core$IFn$_invoke$arity$variadic = G__34992__delegate;
return G__34992;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__34996__delegate = function (params){
return console.log("Leaving game");
};
var G__34996 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__34997__i = 0, G__34997__a = new Array(arguments.length -  0);
while (G__34997__i < G__34997__a.length) {G__34997__a[G__34997__i] = arguments[G__34997__i + 0]; ++G__34997__i;}
  params = new cljs.core.IndexedSeq(G__34997__a,0,null);
} 
return G__34996__delegate.call(this,params);};
G__34996.cljs$lang$maxFixedArity = 0;
G__34996.cljs$lang$applyTo = (function (arglist__34998){
var params = cljs.core.seq(arglist__34998);
return G__34996__delegate(params);
});
G__34996.cljs$core$IFn$_invoke$arity$variadic = G__34996__delegate;
return G__34996;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lobby",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","lobby","src.routes/lobby",14718945),new cljs.core.Keyword(null,"view","view",1247994814),src.lobby.views.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__34999__delegate = function (params){
src.chat.views.mount();

return console.log("Entering sub-page 2");
};
var G__34999 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__35000__i = 0, G__35000__a = new Array(arguments.length -  0);
while (G__35000__i < G__35000__a.length) {G__35000__a[G__35000__i] = arguments[G__35000__i + 0]; ++G__35000__i;}
  params = new cljs.core.IndexedSeq(G__35000__a,0,null);
} 
return G__34999__delegate.call(this,params);};
G__34999.cljs$lang$maxFixedArity = 0;
G__34999.cljs$lang$applyTo = (function (arglist__35001){
var params = cljs.core.seq(arglist__35001);
return G__34999__delegate(params);
});
G__34999.cljs$core$IFn$_invoke$arity$variadic = G__34999__delegate;
return G__34999;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__35003__delegate = function (params){
return console.log("Leaving sub-page 2");
};
var G__35003 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__35004__i = 0, G__35004__a = new Array(arguments.length -  0);
while (G__35004__i < G__35004__a.length) {G__35004__a[G__35004__i] = arguments[G__35004__i + 0]; ++G__35004__i;}
  params = new cljs.core.IndexedSeq(G__35004__a,0,null);
} 
return G__35003__delegate.call(this,params);};
G__35003.cljs$lang$maxFixedArity = 0;
G__35003.cljs$lang$applyTo = (function (arglist__35005){
var params = cljs.core.seq(arglist__35005);
return G__35003__delegate(params);
});
G__35003.cljs$core$IFn$_invoke$arity$variadic = G__35003__delegate;
return G__35003;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["draw",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("src.routes","draw","src.routes/draw",313285038),new cljs.core.Keyword(null,"view","view",1247994814),src.canvas.views.page,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__35006__delegate = function (params){
src.canvas.views.mount();

return console.log("Entering sub-page 2");
};
var G__35006 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__35007__i = 0, G__35007__a = new Array(arguments.length -  0);
while (G__35007__i < G__35007__a.length) {G__35007__a[G__35007__i] = arguments[G__35007__i + 0]; ++G__35007__i;}
  params = new cljs.core.IndexedSeq(G__35007__a,0,null);
} 
return G__35006__delegate.call(this,params);};
G__35006.cljs$lang$maxFixedArity = 0;
G__35006.cljs$lang$applyTo = (function (arglist__35008){
var params = cljs.core.seq(arglist__35008);
return G__35006__delegate(params);
});
G__35006.cljs$core$IFn$_invoke$arity$variadic = G__35006__delegate;
return G__35006;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__35009__delegate = function (params){
return console.log("Leaving sub-page 2");
};
var G__35009 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__35010__i = 0, G__35010__a = new Array(arguments.length -  0);
while (G__35010__i < G__35010__a.length) {G__35010__a[G__35010__i] = arguments[G__35010__i + 0]; ++G__35010__i;}
  params = new cljs.core.IndexedSeq(G__35010__a,0,null);
} 
return G__35009__delegate.call(this,params);};
G__35009.cljs$lang$maxFixedArity = 0;
G__35009.cljs$lang$applyTo = (function (arglist__35011){
var params = cljs.core.seq(arglist__35011);
return G__35009__delegate(params);
});
G__35009.cljs$core$IFn$_invoke$arity$variadic = G__35009__delegate;
return G__35009;
})()
], null)], null)], null)], null)], null);
src.routes.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(src.routes.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
var G__34970_35012 = new cljs.core.Keyword("src.routes","current-route","src.routes/current-route",-1183265412);
var G__34971_35013 = (function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__34970_35012,G__34971_35013) : re_frame.core.reg_sub.call(null,G__34970_35012,G__34971_35013));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.routes","navigated","src.routes/navigated",1518536872),(function (p__34972,p__34973){
var map__34974 = p__34972;
var map__34974__$1 = (((((!((map__34974 == null))))?(((((map__34974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34974):map__34974);
var db = map__34974__$1;
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,new cljs.core.Keyword(null,"current-route","current-route",2067529448));
var vec__34975 = p__34973;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975,(1),null);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(current_route),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));
src.routes.on_navigate = (function src$routes$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
var G__34979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.routes","navigated","src.routes/navigated",1518536872),new_match], null);
return (src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1 ? src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1(G__34979) : src.sundry._GT_evt.call(null,G__34979));
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
