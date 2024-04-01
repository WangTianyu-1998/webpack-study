import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import { routerMode } from "./config/env";
import "./config/rem";
const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");

// new Vue({
// 	router,
// 	store,
// }).$mount('#app')
