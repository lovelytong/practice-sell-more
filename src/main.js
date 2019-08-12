import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { Plugin as request } from "@/service/axios";
import ElementUI from "element-ui";
import "./theme/element-variable.scss";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";

Vue.config.productionTip = false;
Vue.use(request);
Vue.use(ElementUI);
Vue.component("Authorized", Authorized);
Vue.use(Auth);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
