goog.provide('src.api');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('reitit.frontend.easy');
goog.require('re_frame.core');
if((typeof src !== 'undefined') && (typeof src.api !== 'undefined') && (typeof src.api.game_api !== 'undefined')){
} else {
src.api.game_api = "http://localhost:8080/api/v1/game";
}
var G__34692_34718 = new cljs.core.Keyword("src.api","navigate!","src.api/navigate!",927415900);
var G__34693_34719 = (function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__34692_34718,G__34693_34719) : re_frame.core.reg_fx.call(null,G__34692_34718,G__34693_34719));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.api","create-game-success","src.api/create-game-success",-1536074572),(function (p__34698,p__34699){
var map__34703 = p__34698;
var map__34703__$1 = (((((!((map__34703 == null))))?(((((map__34703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34703):map__34703);
var cofx = map__34703__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34703__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34704 = p__34699;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34704,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34704,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hi2u"], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"lobby","lobby",1193995861),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(result)], 0)),new cljs.core.Keyword("src.api","navigate!","src.api/navigate!",927415900),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.routes","lobby","src.routes/lobby",14718945)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.api","create-game-failure","src.api/create-game-failure",-477482614),(function (db,p__34710){
var vec__34711 = p__34710;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34711,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34711,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"failed","failed",-1397425762));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.api","create-game","src.api/create-game",462532274),(function (p__34714,_){
var map__34715 = p__34714;
var map__34715__$1 = (((((!((map__34715 == null))))?(((((map__34715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34715):map__34715);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34715__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),src.api.game_api,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"nick-name","nick-name",-706954142).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"avatar","avatar",-1607499307),new cljs.core.Keyword(null,"avatar","avatar",-1607499307).cljs$core$IFn$_invoke$arity$1(db)], null)], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.api","create-game-success","src.api/create-game-success",-1536074572)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.api","create-game-failure","src.api/create-game-failure",-477482614)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"starting","starting",-1852141466))], null);
}));

//# sourceMappingURL=src.api.js.map
