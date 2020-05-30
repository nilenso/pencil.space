goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__13286,match){
var map__13287 = p__13286;
var map__13287__$1 = (((((!((map__13287 == null))))?(((((map__13287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13287):map__13287);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13287__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13287__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13287__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__13289(s__13290){
return (new cljs.core.LazySeq(null,(function (){
var s__13290__$1 = s__13290;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13290__$1);
if(temp__5735__auto__){
var s__13290__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13290__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__13290__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__13292 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__13291 = (0);
while(true){
if((i__13291 < size__4581__auto__)){
var vec__13293 = cljs.core._nth(c__4580__auto__,i__13291);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13293,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13293,(1),null);
cljs.core.chunk_append(b__13292,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__13349 = (i__13291 + (1));
i__13291 = G__13349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13292),reitit$frontend$controllers$get_identity_$_iter__13289(cljs.core.chunk_rest(s__13290__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13292),null);
}
} else {
var vec__13297 = cljs.core.first(s__13290__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13297,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13297,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__13289(cljs.core.rest(s__13290__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__13303 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13303) : f.call(null,G__13303));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__13309_13358 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__13310_13359 = null;
var count__13311_13360 = (0);
var i__13312_13361 = (0);
while(true){
if((i__13312_13361 < count__13311_13360)){
var controller_13362 = chunk__13310_13359.cljs$core$IIndexed$_nth$arity$2(null,i__13312_13361);
reitit.frontend.controllers.apply_controller(controller_13362,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__13363 = seq__13309_13358;
var G__13364 = chunk__13310_13359;
var G__13365 = count__13311_13360;
var G__13366 = (i__13312_13361 + (1));
seq__13309_13358 = G__13363;
chunk__13310_13359 = G__13364;
count__13311_13360 = G__13365;
i__13312_13361 = G__13366;
continue;
} else {
var temp__5735__auto___13371 = cljs.core.seq(seq__13309_13358);
if(temp__5735__auto___13371){
var seq__13309_13372__$1 = temp__5735__auto___13371;
if(cljs.core.chunked_seq_QMARK_(seq__13309_13372__$1)){
var c__4609__auto___13373 = cljs.core.chunk_first(seq__13309_13372__$1);
var G__13374 = cljs.core.chunk_rest(seq__13309_13372__$1);
var G__13375 = c__4609__auto___13373;
var G__13376 = cljs.core.count(c__4609__auto___13373);
var G__13377 = (0);
seq__13309_13358 = G__13374;
chunk__13310_13359 = G__13375;
count__13311_13360 = G__13376;
i__13312_13361 = G__13377;
continue;
} else {
var controller_13378 = cljs.core.first(seq__13309_13372__$1);
reitit.frontend.controllers.apply_controller(controller_13378,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__13379 = cljs.core.next(seq__13309_13372__$1);
var G__13380 = null;
var G__13381 = (0);
var G__13382 = (0);
seq__13309_13358 = G__13379;
chunk__13310_13359 = G__13380;
count__13311_13360 = G__13381;
i__13312_13361 = G__13382;
continue;
}
} else {
}
}
break;
}

var seq__13322_13386 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__13323_13387 = null;
var count__13324_13388 = (0);
var i__13325_13389 = (0);
while(true){
if((i__13325_13389 < count__13324_13388)){
var controller_13390 = chunk__13323_13387.cljs$core$IIndexed$_nth$arity$2(null,i__13325_13389);
reitit.frontend.controllers.apply_controller(controller_13390,new cljs.core.Keyword(null,"start","start",-355208981));


var G__13391 = seq__13322_13386;
var G__13392 = chunk__13323_13387;
var G__13393 = count__13324_13388;
var G__13394 = (i__13325_13389 + (1));
seq__13322_13386 = G__13391;
chunk__13323_13387 = G__13392;
count__13324_13388 = G__13393;
i__13325_13389 = G__13394;
continue;
} else {
var temp__5735__auto___13398 = cljs.core.seq(seq__13322_13386);
if(temp__5735__auto___13398){
var seq__13322_13399__$1 = temp__5735__auto___13398;
if(cljs.core.chunked_seq_QMARK_(seq__13322_13399__$1)){
var c__4609__auto___13400 = cljs.core.chunk_first(seq__13322_13399__$1);
var G__13401 = cljs.core.chunk_rest(seq__13322_13399__$1);
var G__13402 = c__4609__auto___13400;
var G__13403 = cljs.core.count(c__4609__auto___13400);
var G__13404 = (0);
seq__13322_13386 = G__13401;
chunk__13323_13387 = G__13402;
count__13324_13388 = G__13403;
i__13325_13389 = G__13404;
continue;
} else {
var controller_13405 = cljs.core.first(seq__13322_13399__$1);
reitit.frontend.controllers.apply_controller(controller_13405,new cljs.core.Keyword(null,"start","start",-355208981));


var G__13406 = cljs.core.next(seq__13322_13399__$1);
var G__13407 = null;
var G__13408 = (0);
var G__13409 = (0);
seq__13322_13386 = G__13406;
chunk__13323_13387 = G__13407;
count__13324_13388 = G__13408;
i__13325_13389 = G__13409;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
