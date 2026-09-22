<template>
  <v-container>
    <h1>Dashboard</h1>

    <v-btn @click="modal.isOpen = true">Add</v-btn>

    <AddWorkoutModal ref="modal" />
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import AddWorkoutModal from "@/components/AddWorkoutModal.vue";

const modal = ref(null);
</script>
