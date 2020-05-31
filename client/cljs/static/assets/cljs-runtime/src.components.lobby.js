goog.provide('src.components.lobby');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('src.sundry');
var G__34690_34708 = new cljs.core.Keyword("src.components.lobby","players","src.components.lobby/players",92472623);
var G__34691_34709 = (function (db){
return cljs.core.select_keys(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nick-name","nick-name",-706954142),new cljs.core.Keyword(null,"avatar","avatar",-1607499307),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__34690_34708,G__34691_34709) : re_frame.core.reg_sub.call(null,G__34690_34708,G__34691_34709));
src.components.lobby.page = (function src$components$lobby$page(){
var map__34700 = src.sundry._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.components.lobby","players","src.components.lobby/players",92472623)], null));
var map__34700__$1 = (((((!((map__34700 == null))))?(((((map__34700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34700):map__34700);
var nick_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34700__$1,new cljs.core.Keyword(null,"nick-name","nick-name",-706954142));
var avatar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34700__$1,new cljs.core.Keyword(null,"avatar","avatar",-1607499307));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34700__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Lobby"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),nick_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),avatar], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),id], null)], null)], null)], null);
});

//# sourceMappingURL=src.components.lobby.js.map
