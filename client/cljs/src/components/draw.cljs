(ns src.components.draw
  (:require["paper" :as paper]
            [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [reagent.dom :as reagent-dom]
            [src.utils.sundry :as sundry :refer [>evt <sub ->clj ->js ->input]]
            [src.components.chat :as chat]
            [src.tube :as tube]))

(defonce ^:private tube-event-type "[DRAW]")

(def current-path (atom nil))
(def path-buffer (atom nil))
(def buffer-duration-ms 100)

(defn current-time []
  (.getTime (js/Date.)))

(defn new-path [& [options]]
  (new paper/Path (clj->js (merge {:strokeColor "red"
                                   :strokeWidth 4
                                   :strokeJoin  "round"
                                   :strokeCap   "round"}
                                  options))))

(defn new-path-buffer [& [options]]
  (merge {:segments  []
          :path-id   (.-id @current-path)
          :timestamp (current-time)}
         options))

;; temporary: draw sent path
(def external-current-path (atom nil))
(def external-current-path-id (atom nil))

(defn new-external-path
  [path-id segments]
  (reset! external-current-path-id path-id)
  (reset! external-current-path (new-path {:segments segments})))

(defn draw-received-drawing
  [path-data]
  (let [{:keys [segments path-id timestamp]} (js->clj path-data :keywordize-keys true)]
    (js/console.log path-data)
    (js/console.log segments)
    (js/console.log path-id)
    (js/console.log timestamp)
    (if (= @external-current-path-id path-id)
      (.addSegments @external-current-path (clj->js segments))
      (new-external-path path-id segments))))
;;;;;;

;;; effects

(re-frame/reg-event-fx
 ::send-new-path
 (fn [db [_ path]]
   {::send! path}))

(re-frame/reg-fx
 ::send!
 (fn [path]
   (tube/push "[DRAW]" path)))

(defn clear-path-buffer! []
  (reset! path-buffer (new-path-buffer)))

(defn send-buffer! []
  (when (not-empty (:segments @path-buffer))
    (>evt [::send-new-path @path-buffer])
    (clear-path-buffer!)))

(defn send-buffer-if-time! []
  (if (> (- (current-time) (:timestamp @path-buffer)) buffer-duration-ms)
    (send-buffer!)))

(defn serialize-point
  [point]
  [(.-x point) (.-y point)])

(defn add-to-buffer!
  [point]
  (swap! path-buffer update :segments conj (serialize-point point)))

(defn add-to-current-path!
  [point]
  (-> @current-path
      (.add point)
      .smooth))

(defn on-mouse-down
  [event]
  (let [point (.-point event)]
    (reset! current-path (new-path {:segments [point]}))
    (reset! path-buffer (new-path-buffer {:segments [(serialize-point point)]}))))

(defn on-mouse-drag
  [event]
  (let [point (.-point event)]
    (add-to-current-path! point)
    (add-to-buffer! point)
    (send-buffer-if-time!)))

(defn on-mouse-up
  [event]
  (let [point (.-point event)]
    (add-to-current-path! point)
    (send-buffer!)))

(defn page []
  (let [dom-node (reagent/atom nil)]
    (reagent/create-class
     {:component-did-update
      (fn [this] (js/console.log "did update"))

      :component-did-mount
      (fn [this]
        (reset! dom-node (reagent-dom/dom-node this))
        (.setup paper (js/document.getElementById "drawing-board"))
        (set! (.-onMouseUp paper/view)   on-mouse-up)
        (set! (.-onMouseDown paper/view) on-mouse-down)
        (set! (.-onMouseDrag paper/view) on-mouse-drag)
        (new-external-path 0 []))

      :reagent-render
      (fn []
        [:div.row
         [:div.xs-1.sm-2.md-3]
         [:div.xs-10.sm-8.md-6
          [:div.board.row
           [:div.xs-12.lg-8
            [:canvas#drawing-board :resize]]
           [:div.xs-12.lg-4
            [:div.chat
             [chat/history (repeat 20 (chat/create-msg {} "hello"))]
             [chat/chat-box]]]]]
         [:div.xs-1.sm-2.md-3]])})))

(defn mount []
  (tube/connect)
  (tube/join tube-event-type draw-received-drawing))
