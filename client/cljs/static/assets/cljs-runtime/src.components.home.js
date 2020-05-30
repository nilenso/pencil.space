goog.provide('src.components.home');
goog.require('cljs.core');
var module$node_modules$roughjs$bin$rough=shadow.js.require("module$node_modules$roughjs$bin$rough", {});
goog.require('re_frame.core');
goog.require('reitit.frontend.easy');
goog.require('src.api');
goog.require('src.sundry');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.components.home","navigate","src.components.home/navigate",-2048875478),(function (db,p__34141){
var vec__34142 = p__34141;
var seq__34143 = cljs.core.seq(vec__34142);
var first__34144 = cljs.core.first(seq__34143);
var seq__34143__$1 = cljs.core.next(seq__34143);
var _ = first__34144;
var route = seq__34143__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("src.components.home","navigate!","src.components.home/navigate!",1553281269),route], null);
}));
var G__34145_34169 = new cljs.core.Keyword("src.components.home","navigate!","src.components.home/navigate!",1553281269);
var G__34146_34170 = (function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__34145_34169,G__34146_34170) : re_frame.core.reg_fx.call(null,G__34145_34169,G__34146_34170));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.components.home","nick-change","src.components.home/nick-change",-323257291),(function (p__34147,p__34148){
var map__34149 = p__34147;
var map__34149__$1 = (((((!((map__34149 == null))))?(((((map__34149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34149):map__34149);
var cofx = map__34149__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34149__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34150 = p__34148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34150,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34150,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"nick-name","nick-name",-706954142),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"avatar","avatar",-1607499307),document.getElementById("nick-sine").toDataURL("image/jpeg,",0.1)], 0)),new cljs.core.Keyword("src.components.home","draw-sine!","src.components.home/draw-sine!",-220187800),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty_QMARK_(name),src.sundry.random_hex_color()], null)], null);
}));
var G__34154_34175 = new cljs.core.Keyword("src.components.home","draw-sine!","src.components.home/draw-sine!",-220187800);
var G__34155_34176 = (function (p__34156){
var vec__34157 = p__34156;
var clear_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34157,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34157,(1),null);
if(cljs.core.truth_(clear_QMARK_)){
var G__34160 = (src.components.home.canvas.cljs$core$IFn$_invoke$arity$0 ? src.components.home.canvas.cljs$core$IFn$_invoke$arity$0() : src.components.home.canvas.call(null));
return (src.components.home.clear_canvas.cljs$core$IFn$_invoke$arity$1 ? src.components.home.clear_canvas.cljs$core$IFn$_invoke$arity$1(G__34160) : src.components.home.clear_canvas.call(null,G__34160));
} else {
return (src.components.home.nick_canvas.cljs$core$IFn$_invoke$arity$0 ? src.components.home.nick_canvas.cljs$core$IFn$_invoke$arity$0() : src.components.home.nick_canvas.call(null)).curve(src.sundry.__GT_js((src.components.home.points.cljs$core$IFn$_invoke$arity$0 ? src.components.home.points.cljs$core$IFn$_invoke$arity$0() : src.components.home.points.call(null))),src.sundry.__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"roughness","roughness",1590413194),1.2,new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(5)], null)));
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__34154_34175,G__34155_34176) : re_frame.core.reg_fx.call(null,G__34154_34175,G__34155_34176));
var G__34161_34177 = new cljs.core.Keyword("src.components.home","nick-name","src.components.home/nick-name",-313705675);
var G__34162_34178 = (function (p__34163){
var map__34164 = p__34163;
var map__34164__$1 = (((((!((map__34164 == null))))?(((((map__34164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34164):map__34164);
var cofx = map__34164__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34164__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.Keyword(null,"nick-name","nick-name",-706954142).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__34161_34177,G__34162_34178) : re_frame.core.reg_sub.call(null,G__34161_34177,G__34162_34178));
src.components.home.canvas = (function src$components$home$canvas(){
return document.getElementById("nick-sine");
});
src.components.home.nick_canvas = (function src$components$home$nick_canvas(){
return module$node_modules$roughjs$bin$rough.default.canvas(src.components.home.canvas());
});
src.components.home.clear_canvas = (function src$components$home$clear_canvas(canvas){
return canvas.getContext("2d").clearRect((0),(0),canvas.width,canvas.height);
});
src.components.home.points = (function src$components$home$points(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
var x = ((10) + (v * ((800) / (20))));
var x_deg = ((Math.PI / cljs.core.rand.cljs$core$IFn$_invoke$arity$1((50))) * x);
var y_deg = (Math.sin(x_deg) * (90));
var y = (Math.round(y_deg) + (50));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(20)));
});
src.components.home.page = (function src$components$home$page(){
var nick = src.sundry._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.components.home","nick-name","src.components.home/nick-name",-313705675)], null));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.flex-center","div.row.flex-center",1208371590),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm-4.col","div.sm-4.col",-1513177236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u270F This is pencil.space"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.flex-right","div.row.flex-right",54692339),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm-4.col","div.sm-4.col",-1513177236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"paperInputs1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#paperInputs1","input#paperInputs1",-1248646770),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter a nick name...",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34166_SHARP_){
var G__34167 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.components.home","nick-change","src.components.home/nick-change",-323257291),src.sundry.__GT_input(p1__34166_SHARP_)], null);
return (src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1 ? src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1(G__34167) : src.sundry._GT_evt.call(null,G__34167));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm-8.col","div.sm-8.col",2129984558),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#nick-sine","canvas#nick-sine",-1557804419),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"800",new cljs.core.Keyword(null,"height","height",1025178622),"100"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-success.btn-block","button.btn-success.btn-block",870643200),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__34168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.api","create-game","src.api/create-game",462532274)], null);
return (src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1 ? src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1(G__34168) : src.sundry._GT_evt.call(null,G__34168));
})], null),"Start a new game"], null)], null)], null)], null);
});
});

//# sourceMappingURL=src.components.home.js.map
