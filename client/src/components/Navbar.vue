<script setup lang="ts">
import { useLoginStore } from "../stores/useLogin";

const loginStore = useLoginStore();

function handleLogout() {
  loginStore.logout();
}
</script>


<template>
  <nav class="navbar navbar-expand-lg">
    <router-link class="navbar-brand" to="/">QuizMaster</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link v-if="!loginStore.isLoggedIn" class="nav-item nav-link" to="/login">
          Login
        </router-link>
        <router-link v-else class="nav-item nav-link" @click="handleLogout" to="/">
          Logout
        </router-link>
      </div>
    </div>
  </nav>
</template>