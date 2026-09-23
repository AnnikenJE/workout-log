import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import colors from "vuetify/util/colors";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        colors: {
          primary: colors.orange.darken4,
          background: colors.yellow.lighten5,
        },
      },
      dark: {
        colors: { primary: colors.orange.darken4 },
      },
    },
  },
});

createApp(App).use(vuetify).use(router).mount("#app");
