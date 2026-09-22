<template>
  <!-- TODO Add workout -->
  <v-dialog v-model="isOpen">
    <v-card>
      <v-card-title>Add workout</v-card-title>

      <v-card-text>Text</v-card-text>

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
