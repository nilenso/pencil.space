goog.provide('src.sundry');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('re_frame.core');
goog.require('reitit.frontend.easy');
src.sundry.default_time_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:ss (dd-mm-yy)");
src.sundry.now = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_time.coerce.to_long,cljs_time.core.now);
src.sundry._GT_evt = re_frame.core.dispatch;
src.sundry._LT_sub = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,re_frame.core.subscribe);
src.sundry.__GT_clj = (function src$sundry$__GT_clj(data){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
src.sundry.__GT_js = (function src$sundry$__GT_js(data){
return cljs.core.clj__GT_js(data);
});
src.sundry.__GT_input = (function src$sundry$__GT_input(data){
return data.target.value;
});
/**
 * Return time in browser timezone for given unix time, optionally formatted
 */
src.sundry.epoch__GT_local = (function src$sundry$epoch__GT_local(var_args){
var G__33862 = arguments.length;
switch (G__33862) {
case 2:
return src.sundry.epoch__GT_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return src.sundry.epoch__GT_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(src.sundry.epoch__GT_local.cljs$core$IFn$_invoke$arity$2 = (function (millis,format_QMARK_){
if(cljs.core.truth_(format_QMARK_)){
return cljs_time.format.unparse(src.sundry.default_time_formatter,src.sundry.epoch__GT_local.cljs$core$IFn$_invoke$arity$1(millis));
} else {
return src.sundry.epoch__GT_local.cljs$core$IFn$_invoke$arity$1(millis);
}
}));

(src.sundry.epoch__GT_local.cljs$core$IFn$_invoke$arity$1 = (function (millis){
return cljs_time.coerce.to_local_date_time(cljs_time.coerce.from_long(millis));
}));

(src.sundry.epoch__GT_local.cljs$lang$maxFixedArity = 2);

/**
 * Return relative url for given route. Url can be used in HTML links.
 */
src.sundry.href = (function src$sundry$href(var_args){
var G__33864 = arguments.length;
switch (G__33864) {
case 1:
return src.sundry.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return src.sundry.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return src.sundry.href.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(src.sundry.href.cljs$core$IFn$_invoke$arity$1 = (function (k){
return src.sundry.href.cljs$core$IFn$_invoke$arity$3(k,null,null);
}));

(src.sundry.href.cljs$core$IFn$_invoke$arity$2 = (function (k,params){
return src.sundry.href.cljs$core$IFn$_invoke$arity$3(k,params,null);
}));

(src.sundry.href.cljs$core$IFn$_invoke$arity$3 = (function (k,params,query){
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3(k,params,query);
}));

(src.sundry.href.cljs$lang$maxFixedArity = 3);

/**
 * Return a random hex color code in #RRGGBB format
 */
src.sundry.random_hex_color = (function src$sundry$random_hex_color(){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Math.random() * ((1) << (24))) | (0)).toString((16)))].join('');
});

//# sourceMappingURL=src.sundry.js.map
