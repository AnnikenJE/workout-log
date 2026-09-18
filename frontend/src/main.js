import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";

const vuetify = createVuetify();

createApp(App).use(vuetify).use(router).mount("#app");
