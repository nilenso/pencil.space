goog.provide('src.tube');
goog.require('cljs.core');
var module$node_modules$phoenix$priv$static$phoenix=shadow.js.require("module$node_modules$phoenix$priv$static$phoenix", {});
src.tube.socket = (new module$node_modules$phoenix$priv$static$phoenix.Socket("ws://localhost:4000/socket",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),""], null)], null))));
src.tube.channel = src.tube.socket.channel("game:eeOeXocf3MZw99aJ3Mpgy",cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY));
src.tube.joined_channel = src.tube.channel.join();
src.tube.connect = (function src$tube$connect(){
return src.tube.socket.connect();
});
src.tube.push = (function src$tube$push(var_args){
var G__34701 = arguments.length;
switch (G__34701) {
case 2:
return src.tube.push.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return src.tube.push.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return src.tube.push.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return src.tube.push.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(src.tube.push.cljs$core$IFn$_invoke$arity$2 = (function (msg_type,msg_body){
return src.tube.push.cljs$core$IFn$_invoke$arity$3(msg_type,msg_body,(function (resp){
var resp_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(resp);
return console.log("Received",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resp_clj], 0)));
}));
}));

(src.tube.push.cljs$core$IFn$_invoke$arity$3 = (function (msg_type,msg_body,on_ok){
return src.tube.push.cljs$core$IFn$_invoke$arity$4(msg_type,msg_body,on_ok,(function (resp){
var resp_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(resp);
return console.log("Received error",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resp_clj], 0)));
}));
}));

(src.tube.push.cljs$core$IFn$_invoke$arity$4 = (function (msg_type,msg_body,on_ok,on_error){
return src.tube.push.cljs$core$IFn$_invoke$arity$5(msg_type,msg_body,on_ok,on_error,(function (resp){
var resp_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(resp);
return console.log("Received Timeout",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resp_clj], 0)));
}));
}));

(src.tube.push.cljs$core$IFn$_invoke$arity$5 = (function (msg_type,msg_body,on_ok,on_error,on_timeout){
var pushEvent = src.tube.channel.push(msg_type,cljs.core.clj__GT_js(msg_body));
return pushEvent.receive("ok",(function (p1__34694_SHARP_){
var G__34717 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__34694_SHARP_);
return (on_ok.cljs$core$IFn$_invoke$arity$1 ? on_ok.cljs$core$IFn$_invoke$arity$1(G__34717) : on_ok.call(null,G__34717));
})).receive("error",(function (p1__34695_SHARP_){
var G__34720 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__34695_SHARP_);
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__34720) : on_error.call(null,G__34720));
})).receive("timeout",(function (p1__34696_SHARP_){
var G__34721 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__34696_SHARP_);
return (on_timeout.cljs$core$IFn$_invoke$arity$1 ? on_timeout.cljs$core$IFn$_invoke$arity$1(G__34721) : on_timeout.call(null,G__34721));
}));
}));

(src.tube.push.cljs$lang$maxFixedArity = 5);

src.tube.join = (function src$tube$join(event_type,callback){
src.tube.channel.on(event_type,callback);

src.tube.joined_channel.receive("ok",(function (resp){
return console.log("Joined successfully",cljs.core.clj__GT_js(resp));
}));

return src.tube.joined_channel.receive("error",(function (resp){
return console.log("Unable to join",resp);
}));
});

//# sourceMappingURL=src.tube.js.map
