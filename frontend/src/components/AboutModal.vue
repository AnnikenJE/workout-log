<template>
  <v-dialog v-model="isOpen">
    <v-card>
      <v-card-title>About Workout Log</v-card-title>

      <v-card-text
        >Workout app is a simple application for tracking your workouts.
      </v-card-text>

      <v-card-text
        >I mainly made this for fun, but I'm happy to share it with others who
        might find it useful. This is my first Vue.js application, to learn more
        about the framework.
      </v-card-text>

      <v-card-actions>
        <v-btn @click="isOpen = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

defineExpose({ isOpen });
</script>
