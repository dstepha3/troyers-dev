import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/global.css";
import "./assets/css/global-mobile.css";

import "./assets/css/tool-tip.css";

createApp(App).use(store).use(router).mount("#app");
