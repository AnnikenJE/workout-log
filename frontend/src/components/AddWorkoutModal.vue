<template>
  <!-- Add workout -->
  <v-dialog v-model="isopen">
    <v-card>
      <v-card-title>Modal</v-card-title>

      <v-card-text></v-card-text>
      <v-card-actions>
        <v-btn @click="isopen = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

const isopen = ref(false);
defineExpose({ isopen });
</script>
