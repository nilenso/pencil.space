goog.provide('src.components.home');
goog.require('cljs.core');
var module$node_modules$roughjs$bin$rough=shadow.js.require("module$node_modules$roughjs$bin$rough", {});
goog.require('re_frame.core');
goog.require('reitit.frontend.easy');
goog.require('src.api');
goog.require('src.sundry');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.components.home","navigate","src.components.home/navigate",-2048875478),(function (db,p__34726){
var vec__34727 = p__34726;
var seq__34728 = cljs.core.seq(vec__34727);
var first__34729 = cljs.core.first(seq__34728);
var seq__34728__$1 = cljs.core.next(seq__34728);
var _ = first__34729;
var route = seq__34728__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("src.components.home","navigate!","src.components.home/navigate!",1553281269),route], null);
}));
var G__34730_34776 = new cljs.core.Keyword("src.components.home","navigate!","src.components.home/navigate!",1553281269);
var G__34731_34777 = (function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__34730_34776,G__34731_34777) : re_frame.core.reg_fx.call(null,G__34730_34776,G__34731_34777));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.components.home","nick-change","src.components.home/nick-change",-323257291),(function (p__34739,p__34740){
var map__34741 = p__34739;
var map__34741__$1 = (((((!((map__34741 == null))))?(((((map__34741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34741):map__34741);
var cofx = map__34741__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34741__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34742 = p__34740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34742,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34742,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"nick-name","nick-name",-706954142),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"avatar","avatar",-1607499307),document.getElementById("nick-sine").toDataURL("image/jpeg,",0.1)], 0)),new cljs.core.Keyword("src.components.home","draw-sine!","src.components.home/draw-sine!",-220187800),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty_QMARK_(name),src.sundry.random_hex_color()], null)], null);
}));
var G__34752_34782 = new cljs.core.Keyword("src.components.home","draw-sine!","src.components.home/draw-sine!",-220187800);
var G__34753_34783 = (function (p__34756){
var vec__34757 = p__34756;
var clear_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34757,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34757,(1),null);
if(cljs.core.truth_(clear_QMARK_)){
var G__34760 = (src.components.home.canvas.cljs$core$IFn$_invoke$arity$0 ? src.components.home.canvas.cljs$core$IFn$_invoke$arity$0() : src.components.home.canvas.call(null));
return (src.components.home.clear_canvas.cljs$core$IFn$_invoke$arity$1 ? src.components.home.clear_canvas.cljs$core$IFn$_invoke$arity$1(G__34760) : src.components.home.clear_canvas.call(null,G__34760));
} else {
return (src.components.home.nick_canvas.cljs$core$IFn$_invoke$arity$0 ? src.components.home.nick_canvas.cljs$core$IFn$_invoke$arity$0() : src.components.home.nick_canvas.call(null)).curve(src.sundry.__GT_js((src.components.home.points.cljs$core$IFn$_invoke$arity$0 ? src.components.home.points.cljs$core$IFn$_invoke$arity$0() : src.components.home.points.call(null))),src.sundry.__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"roughness","roughness",1590413194),1.2,new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(5)], null)));
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__34752_34782,G__34753_34783) : re_frame.core.reg_fx.call(null,G__34752_34782,G__34753_34783));
var G__34762_34786 = new cljs.core.Keyword("src.components.home","nick-name","src.components.home/nick-name",-313705675);
var G__34763_34787 = (function (p__34765){
var map__34766 = p__34765;
var map__34766__$1 = (((((!((map__34766 == null))))?(((((map__34766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34766):map__34766);
var cofx = map__34766__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34766__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.Keyword(null,"nick-name","nick-name",-706954142).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__34762_34786,G__34763_34787) : re_frame.core.reg_sub.call(null,G__34762_34786,G__34763_34787));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.flex-center","div.row.flex-center",1208371590),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm-4.col","div.sm-4.col",-1513177236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u270F This is pencil.space"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.flex-right","div.row.flex-right",54692339),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm-4.col","div.sm-4.col",-1513177236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"paperInputs1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#paperInputs1","input#paperInputs1",-1248646770),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter a nick name...",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34773_SHARP_){
var G__34774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.components.home","nick-change","src.components.home/nick-change",-323257291),src.sundry.__GT_input(p1__34773_SHARP_)], null);
return (src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1 ? src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1(G__34774) : src.sundry._GT_evt.call(null,G__34774));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm-8.col","div.sm-8.col",2129984558),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#nick-sine","canvas#nick-sine",-1557804419),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"800",new cljs.core.Keyword(null,"height","height",1025178622),"100"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-success.btn-block","button.btn-success.btn-block",870643200),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__34775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.api","create-game","src.api/create-game",462532274)], null);
return (src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1 ? src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1(G__34775) : src.sundry._GT_evt.call(null,G__34775));
})], null),"Start a new game"], null)], null)], null)], null);
});
});

//# sourceMappingURL=src.components.home.js.map
