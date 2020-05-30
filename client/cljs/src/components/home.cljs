(ns src.components.home
  (:require ["roughjs/bin/rough" :default rough]
            [re-frame.core :as re-frame]
            [reitit.frontend.easy :as rfe]
            [src.api]
            [src.sundry :refer [>evt <sub
                                ->js ->input
                                random-hex-color]]))

(declare random-color)
(declare points)
(declare canvas)
(declare nick-canvas)
(declare clear-canvas)

(re-frame/reg-event-fx
 ::navigate
 (fn [db [_ & route]]
   {::navigate! route}))

(re-frame/reg-fx
 ::navigate!
 (fn [route]
   (apply rfe/push-state route)))

(re-frame/reg-event-fx
 ::nick-change
 (fn [{:keys [db] :as cofx} [_ name]]
   {:db (assoc db
               :nick-name name
               :avatar (.toDataURL (.getElementById js/document
                                                    "nick-sine")
                                   "image/jpeg,"
                                   0.1))
    ::draw-sine! [(empty? name) (random-hex-color)]}))

(re-frame/reg-fx
 ::draw-sine!
 (fn [[clear? color]]
   (if clear?
     (clear-canvas (canvas))
     (.curve (nick-canvas)
             (->js (points))
             (->js {:roughness 1.2,
                    :stroke color,
                    :strokeWidth 5})))))

(re-frame/reg-sub
 ::nick-name
 (fn [{:keys [db] :as cofx}]
   (:nick-name db)))

(defn canvas
  []
  (.getElementById js/document "nick-sine"))

(defn nick-canvas
  []
  (.canvas rough (canvas)))

(defn clear-canvas
  [canvas]
  (.clearRect (.getContext canvas "2d") 0 0 (.-width canvas) (.-height canvas)))

(defn points []
  (reduce (fn [acc v]
            (let [x (+ 10 (* v (/ 800 20)))
                  x-deg (* (/ (.-PI js/Math) (rand 50)) x)
                  y-deg (* (.sin js/Math x-deg) 90)
                  y (+ (.round js/Math y-deg) 50)]
              (conj acc [x y])))
          []
          (range 0 20)))

(defn page []
  (let [nick (<sub [::nick-name])]
    (fn []
      [:div.row.flex-center
       [:div.sm-4.col
        [:h1 "✏ This is pencil.space"]
        [:div.form-group
         [:div.row.flex-right
          [:div.sm-4.col
           [:label {:for "paperInputs1"}]
           [:input#paperInputs1 {:placeholder "Enter a nick name...",
                                 :type "text"
                                 :auto-focus true
                                 :on-change #(>evt [::nick-change (->input %)])}]]
          [:div.sm-8.col
           [:canvas#nick-sine {:width "800" :height "100"}]]]
         [:button.btn-success.btn-block
          {:on-click #(>evt [::src.api/create-game])}
          "Start a new game"]]]])))
