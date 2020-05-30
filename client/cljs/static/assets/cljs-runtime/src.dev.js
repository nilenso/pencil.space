goog.provide('src.dev');
goog.require('cljs.core');
goog.require('cljs.pprint');
src.dev.debug_QMARK_ = goog.DEBUG;
src.dev.setup = (function src$dev$setup(){
if(src.dev.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
src.dev.print_db = (function src$dev$print_db(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38520_38524 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38521_38525 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38522_38526 = true;
var _STAR_print_fn_STAR__temp_val__38523_38527 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38522_38526);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38523_38527);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.db.app_db));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38521_38525);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38520_38524);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})()], null);
});

//# sourceMappingURL=src.dev.js.map
