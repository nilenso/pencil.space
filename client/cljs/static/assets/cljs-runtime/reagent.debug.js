goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7746__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7748__i = 0, G__7748__a = new Array(arguments.length -  0);
while (G__7748__i < G__7748__a.length) {G__7748__a[G__7748__i] = arguments[G__7748__i + 0]; ++G__7748__i;}
  args = new cljs.core.IndexedSeq(G__7748__a,0,null);
} 
return G__7746__delegate.call(this,args);};
G__7746.cljs$lang$maxFixedArity = 0;
G__7746.cljs$lang$applyTo = (function (arglist__7749){
var args = cljs.core.seq(arglist__7749);
return G__7746__delegate(args);
});
G__7746.cljs$core$IFn$_invoke$arity$variadic = G__7746__delegate;
return G__7746;
})()
);

(o.error = (function() { 
var G__7753__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7754__i = 0, G__7754__a = new Array(arguments.length -  0);
while (G__7754__i < G__7754__a.length) {G__7754__a[G__7754__i] = arguments[G__7754__i + 0]; ++G__7754__i;}
  args = new cljs.core.IndexedSeq(G__7754__a,0,null);
} 
return G__7753__delegate.call(this,args);};
G__7753.cljs$lang$maxFixedArity = 0;
G__7753.cljs$lang$applyTo = (function (arglist__7755){
var args = cljs.core.seq(arglist__7755);
return G__7753__delegate(args);
});
G__7753.cljs$core$IFn$_invoke$arity$variadic = G__7753__delegate;
return G__7753;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
