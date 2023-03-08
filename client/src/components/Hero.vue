<script setup lang="ts">
import { useLoginStore } from "../stores/useLogin";
import { useQuizStore } from "../stores/useQuiz";

import AccountIcon from "./AccountIcon.vue";
import HomeIcon from "./HomeIcon.vue";

const loginStore = useLoginStore();
const quizStore = useQuizStore();

// set redirect for when user logs in
loginStore.redirect = "/account";

function handleLogout() {
  loginStore.logout();
  quizStore.resetQuiz();
}
</script>

<template>
  <div class="hero-section">
    <home-icon />
    <account-icon />
    <a v-if="loginStore.loggedIn" class="top-right" @click="handleLogout">Log uit</a>
    <h1 class="text-center">Maak en speel je eigen pubquiz!</h1>
    <h2 class="text-center">QuizMaster</h2>
    <div class="d-flex flex-row justify-content-center">
      <router-link to="/create">
        <button class="button mx-2">Maak je eigen quiz</button>
      </router-link>
      <router-link to="/choose">
        <button class="button mx-2">Speel een quiz</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.top-right {
  position: absolute;
  top: 4rem;
  right: 2rem;
  font-family: 'Boogaloo', cursive;
  color: #0D5D56;
  font-size: 1.5rem;
}

a:hover {
  cursor: pointer;
}

.hero-section {
  /* height: 50vh; */
  padding-top: 10vh;
  padding-bottom: 10vh;
  background-color: #F4F1DE;
}

h1 {
  font-size: 3rem;
  font-family: 'Fredoka One', cursive;
  margin-bottom: 1rem;
  color: #000000;
}

h2 {
  font-size: 2.5rem;
  font-family: 'Fredoka One', cursive;
  margin-bottom: 2rem;
  color: #000000;
}

.button {
  font-family: 'Boogaloo', cursive;
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 2rem;
  background-color: #0D5D56;
}
</style>