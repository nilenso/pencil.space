goog.provide('src.components.chat');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('src.sundry');
goog.require('src.tube');
if((typeof src !== 'undefined') && (typeof src.components !== 'undefined') && (typeof src.components.chat !== 'undefined') && (typeof src.components.chat.tube_event_type !== 'undefined')){
} else {
src.components.chat.tube_event_type = "chat";
}
src.components.chat.create_msg = (function src$components$chat$create_msg(p__34723,msg){
var map__34724 = p__34723;
var map__34724__$1 = (((((!((map__34724 == null))))?(((((map__34724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34724):map__34724);
var nick_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34724__$1,new cljs.core.Keyword(null,"nick-name","nick-name",-706954142));
var avatar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34724__$1,new cljs.core.Keyword(null,"avatar","avatar",-1607499307));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"body","body",-2049205669),msg,new cljs.core.Keyword(null,"avatar","avatar",-1607499307),avatar,new cljs.core.Keyword(null,"publish-time","publish-time",-192527312),src.sundry.now(),new cljs.core.Keyword(null,"nick-name","nick-name",-706954142),nick_name], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.components.chat","send-msg","src.components.chat/send-msg",-1359274626),(function (p__34732,p__34733){
var map__34734 = p__34732;
var map__34734__$1 = (((((!((map__34734 == null))))?(((((map__34734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34734):map__34734);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34734__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34735 = p__34733;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34735,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34735,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("src.components.chat","dispatch!","src.components.chat/dispatch!",-705550250),src.components.chat.create_msg(db,msg)], null);
}));
var G__34746_34778 = new cljs.core.Keyword("src.components.chat","dispatch!","src.components.chat/dispatch!",-705550250);
var G__34747_34779 = (function (msg){
return src.tube.push.cljs$core$IFn$_invoke$arity$2(src.components.chat.tube_event_type,src.sundry.__GT_js(msg));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__34746_34778,G__34747_34779) : re_frame.core.reg_fx.call(null,G__34746_34778,G__34747_34779));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.components.chat","populate-msg","src.components.chat/populate-msg",-947512042),(function (db,p__34748){
var vec__34749 = p__34748;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34749,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34749,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"chat-history","chat-history",912746146),cljs.core.conj,msg);
}));
var G__34754_34780 = new cljs.core.Keyword("src.components.chat","chat-history","src.components.chat/chat-history",-1875606148);
var G__34755_34781 = (function (db){
return new cljs.core.Keyword(null,"chat-history","chat-history",912746146).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__34754_34780,G__34755_34781) : re_frame.core.reg_sub.call(null,G__34754_34780,G__34755_34781));
src.components.chat.receive_msg = (function src$components$chat$receive_msg(resp){
var G__34761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.components.chat","populate-msg","src.components.chat/populate-msg",-947512042),src.sundry.__GT_clj(resp)], null);
return (src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1 ? src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1(G__34761) : src.sundry._GT_evt.call(null,G__34761));
});
src.components.chat.chat_box = (function src$components$chat$chat_box(){
var value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-group.row.chat-box","form.form-group.row.chat-box",955812058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

var G__34768_34785 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.components.chat","send-msg","src.components.chat/send-msg",-1359274626),cljs.core.deref(value)], null);
(src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1 ? src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1(G__34768_34785) : src.sundry._GT_evt.call(null,G__34768_34785));

return cljs.core.reset_BANG_(value,"");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.no-resize.chat-input.col-9","input.no-resize.chat-input.col-9",-1349278760),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your msg...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34764_SHARP_){
return cljs.core.reset_BANG_(value,src.sundry.__GT_input(p1__34764_SHARP_));
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.chat-submit.border-4.col-3","button.chat-submit.border-4.col-3",644025991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Send"], null)], null);
});
});
src.components.chat.history = (function src$components$chat$history(msgs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chat-history","div.chat-history",-1277485020),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function src$components$chat$history_$_iter__34769(s__34770){
return (new cljs.core.LazySeq(null,(function (){
var s__34770__$1 = s__34770;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34770__$1);
if(temp__5735__auto__){
var s__34770__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34770__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34770__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34772 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34771 = (0);
while(true){
if((i__34771 < size__4581__auto__)){
var msg = cljs.core._nth(c__4580__auto__,i__34771);
cljs.core.chunk_append(b__34772,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"avatar","avatar",-1607499307).cljs$core$IFn$_invoke$arity$1(msg)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[" by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nick-name","nick-name",-706954142).cljs$core$IFn$_invoke$arity$1(msg))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[" at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src.sundry.epoch__GT_local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"publish-time","publish-time",-192527312).cljs$core$IFn$_invoke$arity$1(msg),true))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], null)));

var G__34793 = (i__34771 + (1));
i__34771 = G__34793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34772),src$components$chat$history_$_iter__34769(cljs.core.chunk_rest(s__34770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34772),null);
}
} else {
var msg = cljs.core.first(s__34770__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"avatar","avatar",-1607499307).cljs$core$IFn$_invoke$arity$1(msg)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[" by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nick-name","nick-name",-706954142).cljs$core$IFn$_invoke$arity$1(msg))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[" at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src.sundry.epoch__GT_local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"publish-time","publish-time",-192527312).cljs$core$IFn$_invoke$arity$1(msg),true))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], null)),src$components$chat$history_$_iter__34769(cljs.core.rest(s__34770__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(msgs);
})()], null)], null);
});
src.components.chat.page = (function src$components$chat$page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chat","div.chat",-1330405995),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src.components.chat.history,src.sundry._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.components.chat","chat-history","src.components.chat/chat-history",-1875606148)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src.components.chat.chat_box], null)], null);
});
});
src.components.chat.mount = (function src$components$chat$mount(){
src.tube.connect();

return src.tube.join(src.components.chat.tube_event_type,src.components.chat.receive_msg);
});

//# sourceMappingURL=src.components.chat.js.map
