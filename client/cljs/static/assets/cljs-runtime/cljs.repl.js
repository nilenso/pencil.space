goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39953){
var map__39954 = p__39953;
var map__39954__$1 = (((((!((map__39954 == null))))?(((((map__39954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39954):map__39954);
var m = map__39954__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39954__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39954__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39956_40158 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39957_40159 = null;
var count__39958_40160 = (0);
var i__39959_40161 = (0);
while(true){
if((i__39959_40161 < count__39958_40160)){
var f_40162 = chunk__39957_40159.cljs$core$IIndexed$_nth$arity$2(null,i__39959_40161);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40162], 0));


var G__40163 = seq__39956_40158;
var G__40164 = chunk__39957_40159;
var G__40165 = count__39958_40160;
var G__40166 = (i__39959_40161 + (1));
seq__39956_40158 = G__40163;
chunk__39957_40159 = G__40164;
count__39958_40160 = G__40165;
i__39959_40161 = G__40166;
continue;
} else {
var temp__5735__auto___40168 = cljs.core.seq(seq__39956_40158);
if(temp__5735__auto___40168){
var seq__39956_40169__$1 = temp__5735__auto___40168;
if(cljs.core.chunked_seq_QMARK_(seq__39956_40169__$1)){
var c__4609__auto___40170 = cljs.core.chunk_first(seq__39956_40169__$1);
var G__40171 = cljs.core.chunk_rest(seq__39956_40169__$1);
var G__40172 = c__4609__auto___40170;
var G__40173 = cljs.core.count(c__4609__auto___40170);
var G__40174 = (0);
seq__39956_40158 = G__40171;
chunk__39957_40159 = G__40172;
count__39958_40160 = G__40173;
i__39959_40161 = G__40174;
continue;
} else {
var f_40175 = cljs.core.first(seq__39956_40169__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40175], 0));


var G__40176 = cljs.core.next(seq__39956_40169__$1);
var G__40177 = null;
var G__40178 = (0);
var G__40179 = (0);
seq__39956_40158 = G__40176;
chunk__39957_40159 = G__40177;
count__39958_40160 = G__40178;
i__39959_40161 = G__40179;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40180 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40180], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40180)))?cljs.core.second(arglists_40180):arglists_40180)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39960_40182 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39961_40183 = null;
var count__39962_40184 = (0);
var i__39963_40185 = (0);
while(true){
if((i__39963_40185 < count__39962_40184)){
var vec__39974_40186 = chunk__39961_40183.cljs$core$IIndexed$_nth$arity$2(null,i__39963_40185);
var name_40187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39974_40186,(0),null);
var map__39977_40188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39974_40186,(1),null);
var map__39977_40189__$1 = (((((!((map__39977_40188 == null))))?(((((map__39977_40188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39977_40188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39977_40188):map__39977_40188);
var doc_40190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39977_40189__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39977_40189__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40187], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40191], 0));

if(cljs.core.truth_(doc_40190)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40190], 0));
} else {
}


var G__40193 = seq__39960_40182;
var G__40194 = chunk__39961_40183;
var G__40195 = count__39962_40184;
var G__40196 = (i__39963_40185 + (1));
seq__39960_40182 = G__40193;
chunk__39961_40183 = G__40194;
count__39962_40184 = G__40195;
i__39963_40185 = G__40196;
continue;
} else {
var temp__5735__auto___40197 = cljs.core.seq(seq__39960_40182);
if(temp__5735__auto___40197){
var seq__39960_40198__$1 = temp__5735__auto___40197;
if(cljs.core.chunked_seq_QMARK_(seq__39960_40198__$1)){
var c__4609__auto___40199 = cljs.core.chunk_first(seq__39960_40198__$1);
var G__40200 = cljs.core.chunk_rest(seq__39960_40198__$1);
var G__40201 = c__4609__auto___40199;
var G__40202 = cljs.core.count(c__4609__auto___40199);
var G__40203 = (0);
seq__39960_40182 = G__40200;
chunk__39961_40183 = G__40201;
count__39962_40184 = G__40202;
i__39963_40185 = G__40203;
continue;
} else {
var vec__39980_40204 = cljs.core.first(seq__39960_40198__$1);
var name_40205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39980_40204,(0),null);
var map__39983_40206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39980_40204,(1),null);
var map__39983_40207__$1 = (((((!((map__39983_40206 == null))))?(((((map__39983_40206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39983_40206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39983_40206):map__39983_40206);
var doc_40208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39983_40207__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39983_40207__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40205], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40209], 0));

if(cljs.core.truth_(doc_40208)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40208], 0));
} else {
}


var G__40210 = cljs.core.next(seq__39960_40198__$1);
var G__40211 = null;
var G__40212 = (0);
var G__40213 = (0);
seq__39960_40182 = G__40210;
chunk__39961_40183 = G__40211;
count__39962_40184 = G__40212;
i__39963_40185 = G__40213;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39985 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39986 = null;
var count__39987 = (0);
var i__39988 = (0);
while(true){
if((i__39988 < count__39987)){
var role = chunk__39986.cljs$core$IIndexed$_nth$arity$2(null,i__39988);
var temp__5735__auto___40215__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40215__$1)){
var spec_40216 = temp__5735__auto___40215__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40216)], 0));
} else {
}


var G__40217 = seq__39985;
var G__40218 = chunk__39986;
var G__40219 = count__39987;
var G__40220 = (i__39988 + (1));
seq__39985 = G__40217;
chunk__39986 = G__40218;
count__39987 = G__40219;
i__39988 = G__40220;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__39985);
if(temp__5735__auto____$1){
var seq__39985__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39985__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39985__$1);
var G__40221 = cljs.core.chunk_rest(seq__39985__$1);
var G__40222 = c__4609__auto__;
var G__40223 = cljs.core.count(c__4609__auto__);
var G__40224 = (0);
seq__39985 = G__40221;
chunk__39986 = G__40222;
count__39987 = G__40223;
i__39988 = G__40224;
continue;
} else {
var role = cljs.core.first(seq__39985__$1);
var temp__5735__auto___40225__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40225__$2)){
var spec_40226 = temp__5735__auto___40225__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40226)], 0));
} else {
}


var G__40227 = cljs.core.next(seq__39985__$1);
var G__40228 = null;
var G__40229 = (0);
var G__40230 = (0);
seq__39985 = G__40227;
chunk__39986 = G__40228;
count__39987 = G__40229;
i__39988 = G__40230;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40231 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40232 = cljs.core.ex_cause(t);
via = G__40231;
t = G__40232;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39994 = datafied_throwable;
var map__39994__$1 = (((((!((map__39994 == null))))?(((((map__39994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39994):map__39994);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39994__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39994__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39994__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39995 = cljs.core.last(via);
var map__39995__$1 = (((((!((map__39995 == null))))?(((((map__39995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39995):map__39995);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39995__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39995__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39995__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39996 = data;
var map__39996__$1 = (((((!((map__39996 == null))))?(((((map__39996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39996):map__39996);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39996__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39996__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39996__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39997 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39997__$1 = (((((!((map__39997 == null))))?(((((map__39997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39997):map__39997);
var top_data = map__39997__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39997__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40002 = phase;
var G__40002__$1 = (((G__40002 instanceof cljs.core.Keyword))?G__40002.fqn:null);
switch (G__40002__$1) {
case "read-source":
var map__40003 = data;
var map__40003__$1 = (((((!((map__40003 == null))))?(((((map__40003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40003):map__40003);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40009 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40009__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40009,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40009);
var G__40009__$2 = (cljs.core.truth_((function (){var fexpr__40010 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40010.cljs$core$IFn$_invoke$arity$1 ? fexpr__40010.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40010.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40009__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40009__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40009__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40009__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40015 = top_data;
var G__40015__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40015,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40015);
var G__40015__$2 = (cljs.core.truth_((function (){var fexpr__40025 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40025.cljs$core$IFn$_invoke$arity$1 ? fexpr__40025.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40025.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40015__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40015__$1);
var G__40015__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40015__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40015__$2);
var G__40015__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40015__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40015__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40015__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40015__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40026 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40026,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40026,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40026,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40026,(3),null);
var G__40029 = top_data;
var G__40029__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40029,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40029);
var G__40029__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40029__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40029__$1);
var G__40029__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40029__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40029__$2);
var G__40029__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40029__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40029__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40029__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40029__$4;
}

break;
case "execution":
var vec__40037 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40037,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40037,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40037,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40037,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39993_SHARP_){
var or__4185__auto__ = (p1__39993_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__40048 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40048.cljs$core$IFn$_invoke$arity$1 ? fexpr__40048.cljs$core$IFn$_invoke$arity$1(p1__39993_SHARP_) : fexpr__40048.call(null,p1__39993_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__40056 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40056__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40056,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40056);
var G__40056__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40056__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40056__$1);
var G__40056__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40056__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40056__$2);
var G__40056__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40056__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40056__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40056__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40056__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40002__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40087){
var map__40088 = p__40087;
var map__40088__$1 = (((((!((map__40088 == null))))?(((((map__40088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40088):map__40088);
var triage_data = map__40088__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40088__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40088__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40088__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40088__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40088__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40088__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40088__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40088__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40107 = phase;
var G__40107__$1 = (((G__40107 instanceof cljs.core.Keyword))?G__40107.fqn:null);
switch (G__40107__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40108 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40109 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40110 = loc;
var G__40111 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40116_40243 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40117_40244 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40118_40245 = true;
var _STAR_print_fn_STAR__temp_val__40119_40246 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40118_40245);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40119_40246);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40081_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40081_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40117_40244);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40116_40243);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40108,G__40109,G__40110,G__40111) : format.call(null,G__40108,G__40109,G__40110,G__40111));

break;
case "macroexpansion":
var G__40128 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40129 = cause_type;
var G__40130 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40131 = loc;
var G__40132 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40128,G__40129,G__40130,G__40131,G__40132) : format.call(null,G__40128,G__40129,G__40130,G__40131,G__40132));

break;
case "compile-syntax-check":
var G__40133 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40134 = cause_type;
var G__40135 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40136 = loc;
var G__40137 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40133,G__40134,G__40135,G__40136,G__40137) : format.call(null,G__40133,G__40134,G__40135,G__40136,G__40137));

break;
case "compilation":
var G__40138 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40139 = cause_type;
var G__40140 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40141 = loc;
var G__40142 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40138,G__40139,G__40140,G__40141,G__40142) : format.call(null,G__40138,G__40139,G__40140,G__40141,G__40142));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40143 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40144 = symbol;
var G__40145 = loc;
var G__40146 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40147_40247 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40148_40248 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40149_40249 = true;
var _STAR_print_fn_STAR__temp_val__40150_40250 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40149_40249);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40150_40250);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40082_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40082_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40148_40248);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40147_40247);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40143,G__40144,G__40145,G__40146) : format.call(null,G__40143,G__40144,G__40145,G__40146));
} else {
var G__40152 = "Execution error%s at %s(%s).\n%s\n";
var G__40153 = cause_type;
var G__40154 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40155 = loc;
var G__40156 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40152,G__40153,G__40154,G__40155,G__40156) : format.call(null,G__40152,G__40153,G__40154,G__40155,G__40156));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40107__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
