import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { Plugin as request } from "@/service/axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Authorized from "./components/Authorized";

Vue.config.productionTip = false;
Vue.use(request);
Vue.use(ElementUI);
Vue.component("Authorized", Authorized);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
