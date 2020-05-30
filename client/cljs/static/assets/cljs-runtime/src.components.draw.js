goog.provide('src.components.draw');
goog.require('cljs.core');
var module$node_modules$paper$dist$paper_full=shadow.js.require("module$node_modules$paper$dist$paper_full", {});
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('src.components.chat');
goog.require('src.sundry');
goog.require('src.tube');
if((typeof src !== 'undefined') && (typeof src.components !== 'undefined') && (typeof src.components.draw !== 'undefined') && (typeof src.components.draw.tube_event_type !== 'undefined')){
} else {
src.components.draw.tube_event_type = "draw";
}
src.components.draw.current_path = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
src.components.draw.path_buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
src.components.draw.buffer_duration_ms = (30);
src.components.draw.current_time = (function src$components$draw$current_time(){
return (new Date()).getTime();
});
src.components.draw.new_path = (function src$components$draw$new_path(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38356 = arguments.length;
var i__4790__auto___38357 = (0);
while(true){
if((i__4790__auto___38357 < len__4789__auto___38356)){
args__4795__auto__.push((arguments[i__4790__auto___38357]));

var G__38358 = (i__4790__auto___38357 + (1));
i__4790__auto___38357 = G__38358;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return src.components.draw.new_path.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(src.components.draw.new_path.cljs$core$IFn$_invoke$arity$variadic = (function (p__38337){
var vec__38339 = p__38337;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38339,(0),null);
return (new module$node_modules$paper$dist$paper_full.Path(cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"strokeColor","strokeColor",-1017463338),"red",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(4),new cljs.core.Keyword(null,"strokeJoin","strokeJoin",1985071765),"round",new cljs.core.Keyword(null,"strokeCap","strokeCap",1424205752),"round"], null),options], 0)))));
}));

(src.components.draw.new_path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(src.components.draw.new_path.cljs$lang$applyTo = (function (seq38336){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38336));
}));

src.components.draw.new_path_buffer = (function src$components$draw$new_path_buffer(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38359 = arguments.length;
var i__4790__auto___38360 = (0);
while(true){
if((i__4790__auto___38360 < len__4789__auto___38359)){
args__4795__auto__.push((arguments[i__4790__auto___38360]));

var G__38361 = (i__4790__auto___38360 + (1));
i__4790__auto___38360 = G__38361;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return src.components.draw.new_path_buffer.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(src.components.draw.new_path_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (p__38343){
var vec__38344 = p__38343;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38344,(0),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"segments","segments",1937535949),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-id","path-id",-73169688),cljs.core.deref(src.components.draw.current_path).id,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),src.components.draw.current_time()], null),options], 0));
}));

(src.components.draw.new_path_buffer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(src.components.draw.new_path_buffer.cljs$lang$applyTo = (function (seq38342){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38342));
}));

src.components.draw.external_current_path = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
src.components.draw.external_current_path_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
src.components.draw.new_external_path = (function src$components$draw$new_external_path(path_id,segments){
cljs.core.reset_BANG_(src.components.draw.external_current_path_id,path_id);

return cljs.core.reset_BANG_(src.components.draw.external_current_path,src.components.draw.new_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",1937535949),segments], null)], 0)));
});
src.components.draw.draw_received_drawing = (function src$components$draw$draw_received_drawing(path_data){
var map__38347 = src.sundry.__GT_clj(path_data);
var map__38347__$1 = (((((!((map__38347 == null))))?(((((map__38347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38347):map__38347);
var segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38347__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var path_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38347__$1,new cljs.core.Keyword(null,"path-id","path-id",-73169688));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38347__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(src.components.draw.external_current_path_id),path_id)){
return cljs.core.deref(src.components.draw.external_current_path).addSegments(src.sundry.__GT_js(segments));
} else {
return src.components.draw.new_external_path(path_id,segments);
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("src.components.draw","send-new-path","src.components.draw/send-new-path",833946092),(function (db,p__38349){
var vec__38350 = p__38349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38350,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38350,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("src.components.draw","send!","src.components.draw/send!",1961631412),path], null);
}));
var G__38353_38364 = new cljs.core.Keyword("src.components.draw","send!","src.components.draw/send!",1961631412);
var G__38354_38365 = (function (path){
return src.tube.push.cljs$core$IFn$_invoke$arity$2(src.components.draw.tube_event_type,path);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__38353_38364,G__38354_38365) : re_frame.core.reg_fx.call(null,G__38353_38364,G__38354_38365));
src.components.draw.clear_path_buffer_BANG_ = (function src$components$draw$clear_path_buffer_BANG_(){
return cljs.core.reset_BANG_(src.components.draw.path_buffer,src.components.draw.new_path_buffer());
});
src.components.draw.send_buffer_BANG_ = (function src$components$draw$send_buffer_BANG_(){
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(src.components.draw.path_buffer))))){
var G__38355_38366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("src.components.draw","send-new-path","src.components.draw/send-new-path",833946092),cljs.core.deref(src.components.draw.path_buffer)], null);
(src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1 ? src.sundry._GT_evt.cljs$core$IFn$_invoke$arity$1(G__38355_38366) : src.sundry._GT_evt.call(null,G__38355_38366));

return src.components.draw.clear_path_buffer_BANG_();
} else {
return null;
}
});
src.components.draw.send_buffer_if_time_BANG_ = (function src$components$draw$send_buffer_if_time_BANG_(){
if(((src.components.draw.current_time() - new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(src.components.draw.path_buffer))) > src.components.draw.buffer_duration_ms)){
return src.components.draw.send_buffer_BANG_();
} else {
return null;
}
});
src.components.draw.serialize_point = (function src$components$draw$serialize_point(point){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point.x,point.y], null);
});
src.components.draw.add_to_buffer_BANG_ = (function src$components$draw$add_to_buffer_BANG_(point){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(src.components.draw.path_buffer,cljs.core.update,new cljs.core.Keyword(null,"segments","segments",1937535949),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src.components.draw.serialize_point(point)], 0));
});
src.components.draw.add_to_current_path_BANG_ = (function src$components$draw$add_to_current_path_BANG_(point){
return cljs.core.deref(src.components.draw.current_path).add(point).smooth();
});
src.components.draw.on_mouse_down = (function src$components$draw$on_mouse_down(event){
var point = event.point;
cljs.core.reset_BANG_(src.components.draw.current_path,src.components.draw.new_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [point], null)], null)], 0)));

return cljs.core.reset_BANG_(src.components.draw.path_buffer,src.components.draw.new_path_buffer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src.components.draw.serialize_point(point)], null)], null)], 0)));
});
src.components.draw.on_mouse_drag = (function src$components$draw$on_mouse_drag(event){
var point = event.point;
src.components.draw.add_to_current_path_BANG_(point);

src.components.draw.add_to_buffer_BANG_(point);

return src.components.draw.send_buffer_if_time_BANG_();
});
src.components.draw.on_mouse_up = (function src$components$draw$on_mouse_up(event){
var point = event.point;
src.components.draw.add_to_current_path_BANG_(point);

return src.components.draw.send_buffer_BANG_();
});
src.components.draw.page = (function src$components$draw$page(){
var dom_node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
cljs.core.reset_BANG_(dom_node,reagent.dom.dom_node(this$));

module$node_modules$paper$dist$paper_full.setup(document.getElementById("drawing-board"));

(module$node_modules$paper$dist$paper_full.view.onMouseUp = src.components.draw.on_mouse_up);

(module$node_modules$paper$dist$paper_full.view.onMouseDown = src.components.draw.on_mouse_down);

(module$node_modules$paper$dist$paper_full.view.onMouseDrag = src.components.draw.on_mouse_drag);

return src.components.draw.new_external_path((0),cljs.core.PersistentVector.EMPTY);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.xs-1.sm-2.md-2","div.xs-1.sm-2.md-2",-2044765027)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.xs-10.sm-8.md-8","div.xs-10.sm-8.md-8",-807080350),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board.row","div.board.row",325687187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.xs-12.lg-8","div.xs-12.lg-8",-931183746),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#drawing-board","canvas#drawing-board",1441698757)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.xs-12.lg-4","div.xs-12.lg-4",-1898536107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src.components.chat.page], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.xs-1.sm-2.md-2","div.xs-1.sm-2.md-2",-2044765027)], null)], null);
})], null));
});
src.components.draw.mount = (function src$components$draw$mount(){
src.tube.connect();

src.tube.join(src.components.draw.tube_event_type,src.components.draw.draw_received_drawing);

return src.components.chat.mount();
});

//# sourceMappingURL=src.components.draw.js.map
