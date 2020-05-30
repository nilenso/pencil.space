goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36824 = coll;
var G__36825 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36824,G__36825) : shadow.dom.lazy_native_coll_seq.call(null,G__36824,G__36825));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36841 = arguments.length;
switch (G__36841) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36846 = arguments.length;
switch (G__36846) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36848 = arguments.length;
switch (G__36848) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36851 = arguments.length;
switch (G__36851) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36857 = arguments.length;
switch (G__36857) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36869 = arguments.length;
switch (G__36869) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36874){if((e36874 instanceof Object)){
var e = e36874;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36874;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36881 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36882 = null;
var count__36883 = (0);
var i__36884 = (0);
while(true){
if((i__36884 < count__36883)){
var el = chunk__36882.cljs$core$IIndexed$_nth$arity$2(null,i__36884);
var handler_37662__$1 = ((function (seq__36881,chunk__36882,count__36883,i__36884,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36881,chunk__36882,count__36883,i__36884,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37662__$1);


var G__37664 = seq__36881;
var G__37665 = chunk__36882;
var G__37666 = count__36883;
var G__37667 = (i__36884 + (1));
seq__36881 = G__37664;
chunk__36882 = G__37665;
count__36883 = G__37666;
i__36884 = G__37667;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36881);
if(temp__5735__auto__){
var seq__36881__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36881__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36881__$1);
var G__37669 = cljs.core.chunk_rest(seq__36881__$1);
var G__37670 = c__4609__auto__;
var G__37671 = cljs.core.count(c__4609__auto__);
var G__37672 = (0);
seq__36881 = G__37669;
chunk__36882 = G__37670;
count__36883 = G__37671;
i__36884 = G__37672;
continue;
} else {
var el = cljs.core.first(seq__36881__$1);
var handler_37673__$1 = ((function (seq__36881,chunk__36882,count__36883,i__36884,el,seq__36881__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36881,chunk__36882,count__36883,i__36884,el,seq__36881__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37673__$1);


var G__37674 = cljs.core.next(seq__36881__$1);
var G__37675 = null;
var G__37676 = (0);
var G__37677 = (0);
seq__36881 = G__37674;
chunk__36882 = G__37675;
count__36883 = G__37676;
i__36884 = G__37677;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36897 = arguments.length;
switch (G__36897) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36906 = cljs.core.seq(events);
var chunk__36907 = null;
var count__36908 = (0);
var i__36909 = (0);
while(true){
if((i__36909 < count__36908)){
var vec__36920 = chunk__36907.cljs$core$IIndexed$_nth$arity$2(null,i__36909);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36920,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37686 = seq__36906;
var G__37687 = chunk__36907;
var G__37688 = count__36908;
var G__37689 = (i__36909 + (1));
seq__36906 = G__37686;
chunk__36907 = G__37687;
count__36908 = G__37688;
i__36909 = G__37689;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36906);
if(temp__5735__auto__){
var seq__36906__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36906__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36906__$1);
var G__37692 = cljs.core.chunk_rest(seq__36906__$1);
var G__37693 = c__4609__auto__;
var G__37694 = cljs.core.count(c__4609__auto__);
var G__37695 = (0);
seq__36906 = G__37692;
chunk__36907 = G__37693;
count__36908 = G__37694;
i__36909 = G__37695;
continue;
} else {
var vec__36927 = cljs.core.first(seq__36906__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36927,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36927,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37698 = cljs.core.next(seq__36906__$1);
var G__37699 = null;
var G__37700 = (0);
var G__37701 = (0);
seq__36906 = G__37698;
chunk__36907 = G__37699;
count__36908 = G__37700;
i__36909 = G__37701;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36934 = cljs.core.seq(styles);
var chunk__36935 = null;
var count__36936 = (0);
var i__36937 = (0);
while(true){
if((i__36937 < count__36936)){
var vec__36948 = chunk__36935.cljs$core$IIndexed$_nth$arity$2(null,i__36937);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36948,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36948,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37705 = seq__36934;
var G__37706 = chunk__36935;
var G__37707 = count__36936;
var G__37708 = (i__36937 + (1));
seq__36934 = G__37705;
chunk__36935 = G__37706;
count__36936 = G__37707;
i__36937 = G__37708;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36934);
if(temp__5735__auto__){
var seq__36934__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36934__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36934__$1);
var G__37711 = cljs.core.chunk_rest(seq__36934__$1);
var G__37712 = c__4609__auto__;
var G__37713 = cljs.core.count(c__4609__auto__);
var G__37714 = (0);
seq__36934 = G__37711;
chunk__36935 = G__37712;
count__36936 = G__37713;
i__36937 = G__37714;
continue;
} else {
var vec__36952 = cljs.core.first(seq__36934__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36952,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37715 = cljs.core.next(seq__36934__$1);
var G__37716 = null;
var G__37717 = (0);
var G__37718 = (0);
seq__36934 = G__37715;
chunk__36935 = G__37716;
count__36936 = G__37717;
i__36937 = G__37718;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36956_37719 = key;
var G__36956_37720__$1 = (((G__36956_37719 instanceof cljs.core.Keyword))?G__36956_37719.fqn:null);
switch (G__36956_37720__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37725 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_37725,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_37725,"aria-");
}
})())){
el.setAttribute(ks_37725,value);
} else {
(el[ks_37725] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36997){
var map__36998 = p__36997;
var map__36998__$1 = (((((!((map__36998 == null))))?(((((map__36998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36998):map__36998);
var props = map__36998__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36998__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37002 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37002,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37002,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37002,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37006 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37006,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37006;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37021 = arguments.length;
switch (G__37021) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37031){
var vec__37032 = p__37031;
var seq__37033 = cljs.core.seq(vec__37032);
var first__37034 = cljs.core.first(seq__37033);
var seq__37033__$1 = cljs.core.next(seq__37033);
var nn = first__37034;
var first__37034__$1 = cljs.core.first(seq__37033__$1);
var seq__37033__$2 = cljs.core.next(seq__37033__$1);
var np = first__37034__$1;
var nc = seq__37033__$2;
var node = vec__37032;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37039 = nn;
var G__37040 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37039,G__37040) : create_fn.call(null,G__37039,G__37040));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37041 = nn;
var G__37042 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37041,G__37042) : create_fn.call(null,G__37041,G__37042));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37045 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37045,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37045,(1),null);
var seq__37051_37752 = cljs.core.seq(node_children);
var chunk__37052_37753 = null;
var count__37053_37754 = (0);
var i__37054_37755 = (0);
while(true){
if((i__37054_37755 < count__37053_37754)){
var child_struct_37756 = chunk__37052_37753.cljs$core$IIndexed$_nth$arity$2(null,i__37054_37755);
var children_37757 = shadow.dom.dom_node(child_struct_37756);
if(cljs.core.seq_QMARK_(children_37757)){
var seq__37110_37758 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37757));
var chunk__37112_37759 = null;
var count__37113_37760 = (0);
var i__37114_37761 = (0);
while(true){
if((i__37114_37761 < count__37113_37760)){
var child_37762 = chunk__37112_37759.cljs$core$IIndexed$_nth$arity$2(null,i__37114_37761);
if(cljs.core.truth_(child_37762)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37762);


var G__37763 = seq__37110_37758;
var G__37764 = chunk__37112_37759;
var G__37765 = count__37113_37760;
var G__37766 = (i__37114_37761 + (1));
seq__37110_37758 = G__37763;
chunk__37112_37759 = G__37764;
count__37113_37760 = G__37765;
i__37114_37761 = G__37766;
continue;
} else {
var G__37767 = seq__37110_37758;
var G__37768 = chunk__37112_37759;
var G__37769 = count__37113_37760;
var G__37770 = (i__37114_37761 + (1));
seq__37110_37758 = G__37767;
chunk__37112_37759 = G__37768;
count__37113_37760 = G__37769;
i__37114_37761 = G__37770;
continue;
}
} else {
var temp__5735__auto___37772 = cljs.core.seq(seq__37110_37758);
if(temp__5735__auto___37772){
var seq__37110_37773__$1 = temp__5735__auto___37772;
if(cljs.core.chunked_seq_QMARK_(seq__37110_37773__$1)){
var c__4609__auto___37774 = cljs.core.chunk_first(seq__37110_37773__$1);
var G__37775 = cljs.core.chunk_rest(seq__37110_37773__$1);
var G__37776 = c__4609__auto___37774;
var G__37777 = cljs.core.count(c__4609__auto___37774);
var G__37778 = (0);
seq__37110_37758 = G__37775;
chunk__37112_37759 = G__37776;
count__37113_37760 = G__37777;
i__37114_37761 = G__37778;
continue;
} else {
var child_37779 = cljs.core.first(seq__37110_37773__$1);
if(cljs.core.truth_(child_37779)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37779);


var G__37780 = cljs.core.next(seq__37110_37773__$1);
var G__37781 = null;
var G__37782 = (0);
var G__37783 = (0);
seq__37110_37758 = G__37780;
chunk__37112_37759 = G__37781;
count__37113_37760 = G__37782;
i__37114_37761 = G__37783;
continue;
} else {
var G__37784 = cljs.core.next(seq__37110_37773__$1);
var G__37785 = null;
var G__37786 = (0);
var G__37787 = (0);
seq__37110_37758 = G__37784;
chunk__37112_37759 = G__37785;
count__37113_37760 = G__37786;
i__37114_37761 = G__37787;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37757);
}


var G__37789 = seq__37051_37752;
var G__37790 = chunk__37052_37753;
var G__37791 = count__37053_37754;
var G__37792 = (i__37054_37755 + (1));
seq__37051_37752 = G__37789;
chunk__37052_37753 = G__37790;
count__37053_37754 = G__37791;
i__37054_37755 = G__37792;
continue;
} else {
var temp__5735__auto___37794 = cljs.core.seq(seq__37051_37752);
if(temp__5735__auto___37794){
var seq__37051_37795__$1 = temp__5735__auto___37794;
if(cljs.core.chunked_seq_QMARK_(seq__37051_37795__$1)){
var c__4609__auto___37799 = cljs.core.chunk_first(seq__37051_37795__$1);
var G__37801 = cljs.core.chunk_rest(seq__37051_37795__$1);
var G__37802 = c__4609__auto___37799;
var G__37803 = cljs.core.count(c__4609__auto___37799);
var G__37804 = (0);
seq__37051_37752 = G__37801;
chunk__37052_37753 = G__37802;
count__37053_37754 = G__37803;
i__37054_37755 = G__37804;
continue;
} else {
var child_struct_37806 = cljs.core.first(seq__37051_37795__$1);
var children_37807 = shadow.dom.dom_node(child_struct_37806);
if(cljs.core.seq_QMARK_(children_37807)){
var seq__37129_37808 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37807));
var chunk__37131_37809 = null;
var count__37132_37810 = (0);
var i__37133_37811 = (0);
while(true){
if((i__37133_37811 < count__37132_37810)){
var child_37812 = chunk__37131_37809.cljs$core$IIndexed$_nth$arity$2(null,i__37133_37811);
if(cljs.core.truth_(child_37812)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37812);


var G__37813 = seq__37129_37808;
var G__37814 = chunk__37131_37809;
var G__37815 = count__37132_37810;
var G__37816 = (i__37133_37811 + (1));
seq__37129_37808 = G__37813;
chunk__37131_37809 = G__37814;
count__37132_37810 = G__37815;
i__37133_37811 = G__37816;
continue;
} else {
var G__37818 = seq__37129_37808;
var G__37819 = chunk__37131_37809;
var G__37820 = count__37132_37810;
var G__37821 = (i__37133_37811 + (1));
seq__37129_37808 = G__37818;
chunk__37131_37809 = G__37819;
count__37132_37810 = G__37820;
i__37133_37811 = G__37821;
continue;
}
} else {
var temp__5735__auto___37822__$1 = cljs.core.seq(seq__37129_37808);
if(temp__5735__auto___37822__$1){
var seq__37129_37823__$1 = temp__5735__auto___37822__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37129_37823__$1)){
var c__4609__auto___37828 = cljs.core.chunk_first(seq__37129_37823__$1);
var G__37829 = cljs.core.chunk_rest(seq__37129_37823__$1);
var G__37830 = c__4609__auto___37828;
var G__37831 = cljs.core.count(c__4609__auto___37828);
var G__37832 = (0);
seq__37129_37808 = G__37829;
chunk__37131_37809 = G__37830;
count__37132_37810 = G__37831;
i__37133_37811 = G__37832;
continue;
} else {
var child_37833 = cljs.core.first(seq__37129_37823__$1);
if(cljs.core.truth_(child_37833)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37833);


var G__37835 = cljs.core.next(seq__37129_37823__$1);
var G__37836 = null;
var G__37837 = (0);
var G__37838 = (0);
seq__37129_37808 = G__37835;
chunk__37131_37809 = G__37836;
count__37132_37810 = G__37837;
i__37133_37811 = G__37838;
continue;
} else {
var G__37839 = cljs.core.next(seq__37129_37823__$1);
var G__37840 = null;
var G__37841 = (0);
var G__37842 = (0);
seq__37129_37808 = G__37839;
chunk__37131_37809 = G__37840;
count__37132_37810 = G__37841;
i__37133_37811 = G__37842;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37807);
}


var G__37844 = cljs.core.next(seq__37051_37795__$1);
var G__37845 = null;
var G__37846 = (0);
var G__37847 = (0);
seq__37051_37752 = G__37844;
chunk__37052_37753 = G__37845;
count__37053_37754 = G__37846;
i__37054_37755 = G__37847;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37183 = cljs.core.seq(node);
var chunk__37184 = null;
var count__37185 = (0);
var i__37186 = (0);
while(true){
if((i__37186 < count__37185)){
var n = chunk__37184.cljs$core$IIndexed$_nth$arity$2(null,i__37186);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37848 = seq__37183;
var G__37849 = chunk__37184;
var G__37850 = count__37185;
var G__37851 = (i__37186 + (1));
seq__37183 = G__37848;
chunk__37184 = G__37849;
count__37185 = G__37850;
i__37186 = G__37851;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37183);
if(temp__5735__auto__){
var seq__37183__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37183__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37183__$1);
var G__37852 = cljs.core.chunk_rest(seq__37183__$1);
var G__37853 = c__4609__auto__;
var G__37854 = cljs.core.count(c__4609__auto__);
var G__37855 = (0);
seq__37183 = G__37852;
chunk__37184 = G__37853;
count__37185 = G__37854;
i__37186 = G__37855;
continue;
} else {
var n = cljs.core.first(seq__37183__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37860 = cljs.core.next(seq__37183__$1);
var G__37861 = null;
var G__37862 = (0);
var G__37863 = (0);
seq__37183 = G__37860;
chunk__37184 = G__37861;
count__37185 = G__37862;
i__37186 = G__37863;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37209 = arguments.length;
switch (G__37209) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37223 = arguments.length;
switch (G__37223) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37254 = arguments.length;
switch (G__37254) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37870 = arguments.length;
var i__4790__auto___37871 = (0);
while(true){
if((i__4790__auto___37871 < len__4789__auto___37870)){
args__4795__auto__.push((arguments[i__4790__auto___37871]));

var G__37872 = (i__4790__auto___37871 + (1));
i__4790__auto___37871 = G__37872;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37296_37876 = cljs.core.seq(nodes);
var chunk__37297_37877 = null;
var count__37298_37878 = (0);
var i__37299_37879 = (0);
while(true){
if((i__37299_37879 < count__37298_37878)){
var node_37880 = chunk__37297_37877.cljs$core$IIndexed$_nth$arity$2(null,i__37299_37879);
fragment.appendChild(shadow.dom._to_dom(node_37880));


var G__37881 = seq__37296_37876;
var G__37882 = chunk__37297_37877;
var G__37883 = count__37298_37878;
var G__37884 = (i__37299_37879 + (1));
seq__37296_37876 = G__37881;
chunk__37297_37877 = G__37882;
count__37298_37878 = G__37883;
i__37299_37879 = G__37884;
continue;
} else {
var temp__5735__auto___37885 = cljs.core.seq(seq__37296_37876);
if(temp__5735__auto___37885){
var seq__37296_37886__$1 = temp__5735__auto___37885;
if(cljs.core.chunked_seq_QMARK_(seq__37296_37886__$1)){
var c__4609__auto___37887 = cljs.core.chunk_first(seq__37296_37886__$1);
var G__37888 = cljs.core.chunk_rest(seq__37296_37886__$1);
var G__37889 = c__4609__auto___37887;
var G__37890 = cljs.core.count(c__4609__auto___37887);
var G__37891 = (0);
seq__37296_37876 = G__37888;
chunk__37297_37877 = G__37889;
count__37298_37878 = G__37890;
i__37299_37879 = G__37891;
continue;
} else {
var node_37892 = cljs.core.first(seq__37296_37886__$1);
fragment.appendChild(shadow.dom._to_dom(node_37892));


var G__37893 = cljs.core.next(seq__37296_37886__$1);
var G__37894 = null;
var G__37895 = (0);
var G__37896 = (0);
seq__37296_37876 = G__37893;
chunk__37297_37877 = G__37894;
count__37298_37878 = G__37895;
i__37299_37879 = G__37896;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37291){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37291));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37318_37897 = cljs.core.seq(scripts);
var chunk__37319_37898 = null;
var count__37320_37899 = (0);
var i__37321_37900 = (0);
while(true){
if((i__37321_37900 < count__37320_37899)){
var vec__37328_37901 = chunk__37319_37898.cljs$core$IIndexed$_nth$arity$2(null,i__37321_37900);
var script_tag_37902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37328_37901,(0),null);
var script_body_37903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37328_37901,(1),null);
eval(script_body_37903);


var G__37904 = seq__37318_37897;
var G__37905 = chunk__37319_37898;
var G__37906 = count__37320_37899;
var G__37907 = (i__37321_37900 + (1));
seq__37318_37897 = G__37904;
chunk__37319_37898 = G__37905;
count__37320_37899 = G__37906;
i__37321_37900 = G__37907;
continue;
} else {
var temp__5735__auto___37908 = cljs.core.seq(seq__37318_37897);
if(temp__5735__auto___37908){
var seq__37318_37909__$1 = temp__5735__auto___37908;
if(cljs.core.chunked_seq_QMARK_(seq__37318_37909__$1)){
var c__4609__auto___37910 = cljs.core.chunk_first(seq__37318_37909__$1);
var G__37911 = cljs.core.chunk_rest(seq__37318_37909__$1);
var G__37912 = c__4609__auto___37910;
var G__37913 = cljs.core.count(c__4609__auto___37910);
var G__37914 = (0);
seq__37318_37897 = G__37911;
chunk__37319_37898 = G__37912;
count__37320_37899 = G__37913;
i__37321_37900 = G__37914;
continue;
} else {
var vec__37331_37918 = cljs.core.first(seq__37318_37909__$1);
var script_tag_37919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37331_37918,(0),null);
var script_body_37920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37331_37918,(1),null);
eval(script_body_37920);


var G__37921 = cljs.core.next(seq__37318_37909__$1);
var G__37922 = null;
var G__37923 = (0);
var G__37924 = (0);
seq__37318_37897 = G__37921;
chunk__37319_37898 = G__37922;
count__37320_37899 = G__37923;
i__37321_37900 = G__37924;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37334){
var vec__37335 = p__37334;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37335,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37335,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37346 = arguments.length;
switch (G__37346) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37360 = cljs.core.seq(style_keys);
var chunk__37361 = null;
var count__37362 = (0);
var i__37363 = (0);
while(true){
if((i__37363 < count__37362)){
var it = chunk__37361.cljs$core$IIndexed$_nth$arity$2(null,i__37363);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37926 = seq__37360;
var G__37927 = chunk__37361;
var G__37928 = count__37362;
var G__37929 = (i__37363 + (1));
seq__37360 = G__37926;
chunk__37361 = G__37927;
count__37362 = G__37928;
i__37363 = G__37929;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37360);
if(temp__5735__auto__){
var seq__37360__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37360__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37360__$1);
var G__37930 = cljs.core.chunk_rest(seq__37360__$1);
var G__37931 = c__4609__auto__;
var G__37932 = cljs.core.count(c__4609__auto__);
var G__37933 = (0);
seq__37360 = G__37930;
chunk__37361 = G__37931;
count__37362 = G__37932;
i__37363 = G__37933;
continue;
} else {
var it = cljs.core.first(seq__37360__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37934 = cljs.core.next(seq__37360__$1);
var G__37935 = null;
var G__37936 = (0);
var G__37937 = (0);
seq__37360 = G__37934;
chunk__37361 = G__37935;
count__37362 = G__37936;
i__37363 = G__37937;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k37368,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__37377 = k37368;
var G__37377__$1 = (((G__37377 instanceof cljs.core.Keyword))?G__37377.fqn:null);
switch (G__37377__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37368,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__37382){
var vec__37383 = p__37382;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37383,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37383,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37367){
var self__ = this;
var G__37367__$1 = this;
return (new cljs.core.RecordIter((0),G__37367__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37369,other37370){
var self__ = this;
var this37369__$1 = this;
return (((!((other37370 == null)))) && ((this37369__$1.constructor === other37370.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37369__$1.x,other37370.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37369__$1.y,other37370.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37369__$1.__extmap,other37370.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__37367){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__37401 = cljs.core.keyword_identical_QMARK_;
var expr__37402 = k__4447__auto__;
if(cljs.core.truth_((pred__37401.cljs$core$IFn$_invoke$arity$2 ? pred__37401.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37402) : pred__37401.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37402)))){
return (new shadow.dom.Coordinate(G__37367,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37401.cljs$core$IFn$_invoke$arity$2 ? pred__37401.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37402) : pred__37401.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37402)))){
return (new shadow.dom.Coordinate(self__.x,G__37367,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__37367),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__37367){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37367,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37372){
var extmap__4478__auto__ = (function (){var G__37418 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37372,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37372)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37418);
} else {
return G__37418;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37372),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37372),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k37426,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__37432 = k37426;
var G__37432__$1 = (((G__37432 instanceof cljs.core.Keyword))?G__37432.fqn:null);
switch (G__37432__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37426,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__37433){
var vec__37434 = p__37433;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37434,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37434,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37425){
var self__ = this;
var G__37425__$1 = this;
return (new cljs.core.RecordIter((0),G__37425__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37427,other37428){
var self__ = this;
var this37427__$1 = this;
return (((!((other37428 == null)))) && ((this37427__$1.constructor === other37428.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37427__$1.w,other37428.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37427__$1.h,other37428.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37427__$1.__extmap,other37428.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__37425){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__37439 = cljs.core.keyword_identical_QMARK_;
var expr__37440 = k__4447__auto__;
if(cljs.core.truth_((pred__37439.cljs$core$IFn$_invoke$arity$2 ? pred__37439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37440) : pred__37439.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37440)))){
return (new shadow.dom.Size(G__37425,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37439.cljs$core$IFn$_invoke$arity$2 ? pred__37439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37440) : pred__37439.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37440)))){
return (new shadow.dom.Size(self__.w,G__37425,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__37425),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__37425){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37425,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37429){
var extmap__4478__auto__ = (function (){var G__37450 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37429,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37429)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37450);
} else {
return G__37450;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37429),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37429),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__37964 = (i + (1));
var G__37965 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37964;
ret = G__37965;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37468){
var vec__37470 = p__37468;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37470,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37470,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37476 = arguments.length;
switch (G__37476) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37970 = ps;
var G__37971 = (i + (1));
el__$1 = G__37970;
i = G__37971;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37495 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37495,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37495,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37495,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37500_37972 = cljs.core.seq(props);
var chunk__37501_37973 = null;
var count__37502_37974 = (0);
var i__37503_37975 = (0);
while(true){
if((i__37503_37975 < count__37502_37974)){
var vec__37514_37976 = chunk__37501_37973.cljs$core$IIndexed$_nth$arity$2(null,i__37503_37975);
var k_37977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37514_37976,(0),null);
var v_37978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37514_37976,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_37977);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37977),v_37978);


var G__37979 = seq__37500_37972;
var G__37980 = chunk__37501_37973;
var G__37981 = count__37502_37974;
var G__37982 = (i__37503_37975 + (1));
seq__37500_37972 = G__37979;
chunk__37501_37973 = G__37980;
count__37502_37974 = G__37981;
i__37503_37975 = G__37982;
continue;
} else {
var temp__5735__auto___37984 = cljs.core.seq(seq__37500_37972);
if(temp__5735__auto___37984){
var seq__37500_37985__$1 = temp__5735__auto___37984;
if(cljs.core.chunked_seq_QMARK_(seq__37500_37985__$1)){
var c__4609__auto___37986 = cljs.core.chunk_first(seq__37500_37985__$1);
var G__37988 = cljs.core.chunk_rest(seq__37500_37985__$1);
var G__37989 = c__4609__auto___37986;
var G__37990 = cljs.core.count(c__4609__auto___37986);
var G__37991 = (0);
seq__37500_37972 = G__37988;
chunk__37501_37973 = G__37989;
count__37502_37974 = G__37990;
i__37503_37975 = G__37991;
continue;
} else {
var vec__37520_37992 = cljs.core.first(seq__37500_37985__$1);
var k_37993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37520_37992,(0),null);
var v_37994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37520_37992,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_37993);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37993),v_37994);


var G__37995 = cljs.core.next(seq__37500_37985__$1);
var G__37996 = null;
var G__37997 = (0);
var G__37998 = (0);
seq__37500_37972 = G__37995;
chunk__37501_37973 = G__37996;
count__37502_37974 = G__37997;
i__37503_37975 = G__37998;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37529 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37529,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37529,(1),null);
var seq__37533_38000 = cljs.core.seq(node_children);
var chunk__37535_38001 = null;
var count__37536_38002 = (0);
var i__37537_38003 = (0);
while(true){
if((i__37537_38003 < count__37536_38002)){
var child_struct_38004 = chunk__37535_38001.cljs$core$IIndexed$_nth$arity$2(null,i__37537_38003);
if((!((child_struct_38004 == null)))){
if(typeof child_struct_38004 === 'string'){
var text_38005 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38005),child_struct_38004].join(''));
} else {
var children_38006 = shadow.dom.svg_node(child_struct_38004);
if(cljs.core.seq_QMARK_(children_38006)){
var seq__37574_38007 = cljs.core.seq(children_38006);
var chunk__37576_38008 = null;
var count__37577_38009 = (0);
var i__37578_38010 = (0);
while(true){
if((i__37578_38010 < count__37577_38009)){
var child_38015 = chunk__37576_38008.cljs$core$IIndexed$_nth$arity$2(null,i__37578_38010);
if(cljs.core.truth_(child_38015)){
node.appendChild(child_38015);


var G__38016 = seq__37574_38007;
var G__38017 = chunk__37576_38008;
var G__38018 = count__37577_38009;
var G__38019 = (i__37578_38010 + (1));
seq__37574_38007 = G__38016;
chunk__37576_38008 = G__38017;
count__37577_38009 = G__38018;
i__37578_38010 = G__38019;
continue;
} else {
var G__38020 = seq__37574_38007;
var G__38021 = chunk__37576_38008;
var G__38022 = count__37577_38009;
var G__38023 = (i__37578_38010 + (1));
seq__37574_38007 = G__38020;
chunk__37576_38008 = G__38021;
count__37577_38009 = G__38022;
i__37578_38010 = G__38023;
continue;
}
} else {
var temp__5735__auto___38025 = cljs.core.seq(seq__37574_38007);
if(temp__5735__auto___38025){
var seq__37574_38026__$1 = temp__5735__auto___38025;
if(cljs.core.chunked_seq_QMARK_(seq__37574_38026__$1)){
var c__4609__auto___38027 = cljs.core.chunk_first(seq__37574_38026__$1);
var G__38028 = cljs.core.chunk_rest(seq__37574_38026__$1);
var G__38029 = c__4609__auto___38027;
var G__38030 = cljs.core.count(c__4609__auto___38027);
var G__38031 = (0);
seq__37574_38007 = G__38028;
chunk__37576_38008 = G__38029;
count__37577_38009 = G__38030;
i__37578_38010 = G__38031;
continue;
} else {
var child_38032 = cljs.core.first(seq__37574_38026__$1);
if(cljs.core.truth_(child_38032)){
node.appendChild(child_38032);


var G__38033 = cljs.core.next(seq__37574_38026__$1);
var G__38034 = null;
var G__38035 = (0);
var G__38036 = (0);
seq__37574_38007 = G__38033;
chunk__37576_38008 = G__38034;
count__37577_38009 = G__38035;
i__37578_38010 = G__38036;
continue;
} else {
var G__38037 = cljs.core.next(seq__37574_38026__$1);
var G__38038 = null;
var G__38039 = (0);
var G__38040 = (0);
seq__37574_38007 = G__38037;
chunk__37576_38008 = G__38038;
count__37577_38009 = G__38039;
i__37578_38010 = G__38040;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38006);
}
}


var G__38041 = seq__37533_38000;
var G__38042 = chunk__37535_38001;
var G__38043 = count__37536_38002;
var G__38044 = (i__37537_38003 + (1));
seq__37533_38000 = G__38041;
chunk__37535_38001 = G__38042;
count__37536_38002 = G__38043;
i__37537_38003 = G__38044;
continue;
} else {
var G__38046 = seq__37533_38000;
var G__38047 = chunk__37535_38001;
var G__38048 = count__37536_38002;
var G__38049 = (i__37537_38003 + (1));
seq__37533_38000 = G__38046;
chunk__37535_38001 = G__38047;
count__37536_38002 = G__38048;
i__37537_38003 = G__38049;
continue;
}
} else {
var temp__5735__auto___38050 = cljs.core.seq(seq__37533_38000);
if(temp__5735__auto___38050){
var seq__37533_38051__$1 = temp__5735__auto___38050;
if(cljs.core.chunked_seq_QMARK_(seq__37533_38051__$1)){
var c__4609__auto___38052 = cljs.core.chunk_first(seq__37533_38051__$1);
var G__38053 = cljs.core.chunk_rest(seq__37533_38051__$1);
var G__38054 = c__4609__auto___38052;
var G__38055 = cljs.core.count(c__4609__auto___38052);
var G__38056 = (0);
seq__37533_38000 = G__38053;
chunk__37535_38001 = G__38054;
count__37536_38002 = G__38055;
i__37537_38003 = G__38056;
continue;
} else {
var child_struct_38057 = cljs.core.first(seq__37533_38051__$1);
if((!((child_struct_38057 == null)))){
if(typeof child_struct_38057 === 'string'){
var text_38062 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38062),child_struct_38057].join(''));
} else {
var children_38063 = shadow.dom.svg_node(child_struct_38057);
if(cljs.core.seq_QMARK_(children_38063)){
var seq__37580_38064 = cljs.core.seq(children_38063);
var chunk__37582_38065 = null;
var count__37583_38066 = (0);
var i__37584_38067 = (0);
while(true){
if((i__37584_38067 < count__37583_38066)){
var child_38068 = chunk__37582_38065.cljs$core$IIndexed$_nth$arity$2(null,i__37584_38067);
if(cljs.core.truth_(child_38068)){
node.appendChild(child_38068);


var G__38069 = seq__37580_38064;
var G__38070 = chunk__37582_38065;
var G__38071 = count__37583_38066;
var G__38072 = (i__37584_38067 + (1));
seq__37580_38064 = G__38069;
chunk__37582_38065 = G__38070;
count__37583_38066 = G__38071;
i__37584_38067 = G__38072;
continue;
} else {
var G__38073 = seq__37580_38064;
var G__38074 = chunk__37582_38065;
var G__38075 = count__37583_38066;
var G__38076 = (i__37584_38067 + (1));
seq__37580_38064 = G__38073;
chunk__37582_38065 = G__38074;
count__37583_38066 = G__38075;
i__37584_38067 = G__38076;
continue;
}
} else {
var temp__5735__auto___38077__$1 = cljs.core.seq(seq__37580_38064);
if(temp__5735__auto___38077__$1){
var seq__37580_38078__$1 = temp__5735__auto___38077__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37580_38078__$1)){
var c__4609__auto___38079 = cljs.core.chunk_first(seq__37580_38078__$1);
var G__38080 = cljs.core.chunk_rest(seq__37580_38078__$1);
var G__38081 = c__4609__auto___38079;
var G__38082 = cljs.core.count(c__4609__auto___38079);
var G__38083 = (0);
seq__37580_38064 = G__38080;
chunk__37582_38065 = G__38081;
count__37583_38066 = G__38082;
i__37584_38067 = G__38083;
continue;
} else {
var child_38084 = cljs.core.first(seq__37580_38078__$1);
if(cljs.core.truth_(child_38084)){
node.appendChild(child_38084);


var G__38085 = cljs.core.next(seq__37580_38078__$1);
var G__38086 = null;
var G__38087 = (0);
var G__38088 = (0);
seq__37580_38064 = G__38085;
chunk__37582_38065 = G__38086;
count__37583_38066 = G__38087;
i__37584_38067 = G__38088;
continue;
} else {
var G__38089 = cljs.core.next(seq__37580_38078__$1);
var G__38090 = null;
var G__38091 = (0);
var G__38092 = (0);
seq__37580_38064 = G__38089;
chunk__37582_38065 = G__38090;
count__37583_38066 = G__38091;
i__37584_38067 = G__38092;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38063);
}
}


var G__38093 = cljs.core.next(seq__37533_38051__$1);
var G__38094 = null;
var G__38095 = (0);
var G__38096 = (0);
seq__37533_38000 = G__38093;
chunk__37535_38001 = G__38094;
count__37536_38002 = G__38095;
i__37537_38003 = G__38096;
continue;
} else {
var G__38097 = cljs.core.next(seq__37533_38051__$1);
var G__38098 = null;
var G__38099 = (0);
var G__38100 = (0);
seq__37533_38000 = G__38097;
chunk__37535_38001 = G__38098;
count__37536_38002 = G__38099;
i__37537_38003 = G__38100;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38101 = arguments.length;
var i__4790__auto___38102 = (0);
while(true){
if((i__4790__auto___38102 < len__4789__auto___38101)){
args__4795__auto__.push((arguments[i__4790__auto___38102]));

var G__38103 = (i__4790__auto___38102 + (1));
i__4790__auto___38102 = G__38103;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37586){
var G__37587 = cljs.core.first(seq37586);
var seq37586__$1 = cljs.core.next(seq37586);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37587,seq37586__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37593 = arguments.length;
switch (G__37593) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__34451__auto___38108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34452__auto__ = (function (){var switch__34254__auto__ = (function (state_37606){
var state_val_37607 = (state_37606[(1)]);
if((state_val_37607 === (1))){
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37606__$1,(2),once_or_cleanup);
} else {
if((state_val_37607 === (2))){
var inst_37603 = (state_37606[(2)]);
var inst_37604 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37606__$1 = (function (){var statearr_37611 = state_37606;
(statearr_37611[(7)] = inst_37603);

return statearr_37611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37606__$1,inst_37604);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34255__auto__ = null;
var shadow$dom$state_machine__34255__auto____0 = (function (){
var statearr_37612 = [null,null,null,null,null,null,null,null];
(statearr_37612[(0)] = shadow$dom$state_machine__34255__auto__);

(statearr_37612[(1)] = (1));

return statearr_37612;
});
var shadow$dom$state_machine__34255__auto____1 = (function (state_37606){
while(true){
var ret_value__34256__auto__ = (function (){try{while(true){
var result__34257__auto__ = switch__34254__auto__(state_37606);
if(cljs.core.keyword_identical_QMARK_(result__34257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34257__auto__;
}
break;
}
}catch (e37613){if((e37613 instanceof Object)){
var ex__34258__auto__ = e37613;
var statearr_37615_38109 = state_37606;
(statearr_37615_38109[(5)] = ex__34258__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38110 = state_37606;
state_37606 = G__38110;
continue;
} else {
return ret_value__34256__auto__;
}
break;
}
});
shadow$dom$state_machine__34255__auto__ = function(state_37606){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34255__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34255__auto____1.call(this,state_37606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34255__auto____0;
shadow$dom$state_machine__34255__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34255__auto____1;
return shadow$dom$state_machine__34255__auto__;
})()
})();
var state__34453__auto__ = (function (){var statearr_37617 = f__34452__auto__();
(statearr_37617[(6)] = c__34451__auto___38108);

return statearr_37617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34453__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
