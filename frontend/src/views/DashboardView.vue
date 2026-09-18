<template>
  <v-container>
    <h1>Dashboard</h1>
    <router-link to="/login">
      <v-btn> To login </v-btn>
    </router-link>

    <v-btn @click="modal.isopen = true">Add</v-btn>
    <AddWorkoutModal ref="modal" />
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import AddWorkoutModal from "@/components/AddWorkoutModal.vue";

const modal = ref(null);
</script>
