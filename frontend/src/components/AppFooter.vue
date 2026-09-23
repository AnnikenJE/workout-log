<template>
  <v-footer class="flex-grow-0">
    <v-spacer />
    <!-- About Modal -->
    <v-btn variant="text" size="small" @click="modal.isOpen = true"
      >About</v-btn
    >
    <AboutModal ref="modal" />

    <!-- Theme Toggle -->
    <v-btn
      variant="text"
      size="small"
      :prepend-icon="
        theme.global.name.value === 'light'
          ? 'mdi-weather-sunny'
          : 'mdi-weather-night'
      "
      @click="toggleTheme"
    >
      Change theme
    </v-btn>
  </v-footer>
</template>

<script setup>
import AboutModal from "@/components/AboutModal.vue";
import { ref } from "vue";
import { useTheme } from "vuetify";

const modal = ref(null);
const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === "light" ? "dark" : "light";
};
</script>
