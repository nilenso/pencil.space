goog.provide('src.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.dom');
goog.require('src.dev');
goog.require('src.db');
goog.require('src.routes');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.core","initialize-db","src.core/initialize-db",-502393145),(function (db,_){
return src.db.default$;
}));
src.core.page_root = document.getElementById("app");
/**
 * Shows a loader message while waiting for page load.
 */
src.core.loading = (function src$core$loading(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Loading"], null),src.core.page_root);
});
src.core.init = (function src$core$init(){
console.log("Initializing...");

src.dev.setup();

var G__9227_9228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.core","initialize-db","src.core/initialize-db",-502393145)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__9227_9228) : re_frame.core.dispatch_sync.call(null,G__9227_9228));

src.core.loading();

return src.routes.mount(src.core.page_root);
});
goog.exportSymbol('src.core.init', src.core.init);

//# sourceMappingURL=src.core.js.map
