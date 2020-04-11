(ns src.home
  (:require ["roughjs/bin/rough" :default rough]
            [re-frame.core :as re-frame]
            [reitit.frontend.easy :as rfe]))

(defn random-color
  []
  (str "#" (-> (.random js/Math)
               (* (bit-shift-left 1 24))
               (bit-or 0)
               (.toString 16))))

(defn nick-canvas
  []
  (.canvas rough
           (.getElementById js/document
                            "nick-sine")))

(re-frame/reg-event-fx
 ::navigate
 (fn [db [_ & route]]
   {::navigate! route}))

(re-frame/reg-event-fx
 ::nick-change
 (fn [{:keys [db] :as cofx} [_ _]]
   {:db (assoc db
               :nick-name "foobar"
               :avatar (.toDataURL (.getElementById js/document "nick-sine") "image/jpeg," 0.1))
    ::draw-sine! (random-color)}))


(re-frame/reg-sub
 ::nick-name
 (fn [{:keys [db] :as cofx}]
   (:nick-name db)))

(defn points []
  (reduce (fn [acc v]
            (let [x (+ 10 (* v (/ 800 20)))
                  x-deg (* (/ (.-PI js/Math) (rand 50)) x)
                  y-deg (* (.sin js/Math x-deg) 90)
                  y (+ (.round js/Math y-deg) 50)]
              (conj acc [x y])))
          []
          (range 0 20)))

(re-frame/reg-fx
 ::draw-sine!
 (fn [color]
   (.curve (nick-canvas)
           (clj->js (points))
           (clj->js {:roughness 1.2,
                     :stroke color,
                     :strokeWidth 5}))))

(re-frame/reg-fx
 ::navigate!
 (fn [route]
   (apply rfe/push-state route)))

(defn page []
  (let [nick (re-frame/subscribe [::nick-name])]
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
                                 :on-change #(re-frame/dispatch [::nick-change])}]]
          [:div.sm-8.col
           [:canvas#nick-sine {:width "800" :height "100"}]]]
         [:button.btn-success.btn-block
          {:on-click #(re-frame/dispatch [::navigate :src.routes/sub-page2 @nick])}
          "Start a new game"]]]])))

;; let points = [];

;; for (let i = 0; i < 20; i++) {
;;   // 4pi - 400px
;;   let x = (400 / 20) * i + 10;
;;   let xdeg = (Math.PI / 100) * x;
;;   let y = Math.round(Math.sin(xdeg) * 90) + 500;
;;   points.push([x, y]);
;; }
