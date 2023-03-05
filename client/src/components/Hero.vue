<script setup lang="ts">
import { useLoginStore } from "../stores/useLogin";
import { useQuizStore } from "../stores/useQuiz";

const loginStore = useLoginStore();
const quizStore = useQuizStore();

// function handleLogout() {
//   // wipe states
//   loginStore.logout();
//   quizStore.resetQuiz();
// }
</script>

<template>
  <div class="hero-section d-flex flex-column justify-content-center align-items-center">
    <!-- login icon -->
    <router-link v-if="!loginStore.isLoggedIn" class="nav-item nav-link" to="/login">
      <div class="top-right">
        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
            stroke-width="0.144">
          </g>
          <g id="SVGRepo_iconCarrier">
            <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd"
              d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 16.3106 20.4627 18.6515 18.5549 19.8557L18.2395 18.878C17.9043 17.6699 17.2931 16.8681 16.262 16.3834C15.2532 15.9092 13.8644 15.75 12 15.75C10.134 15.75 8.74481 15.922 7.73554 16.4097C6.70593 16.9073 6.09582 17.7207 5.7608 18.927L5.45019 19.8589C3.53829 18.6556 3 16.3144 3 12ZM8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10Z"
              fill="#0D5D56"></path>
            <path
              d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
              stroke="#0D5D56" stroke-width="2"></path>
            <path
              d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
              stroke="#0D5D56" stroke-width="2"></path>
            <path d="M6 19C6.63819 16.6928 8.27998 16 12 16C15.72 16 17.3618 16.6425 18 18.9497" stroke="#0D5D56"
              stroke-width="2" stroke-linecap="round"></path>
          </g>
        </svg>
      </div>
    </router-link>
    <!-- login icon -->
    <h1 class="text-center">Maak en speel je eigen pubquiz!</h1>
    <h2 class="text-center">QuizMaster</h2>
    <div class="d-flex flex-row justify-content-center">
      <router-link to="/create">
        <button class="button mx-2">Maak je eigen quiz</button>
      </router-link>
      <router-link to="/play">
        <button class="button mx-2">Speel een quiz</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.top-right {
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-family: 'Boogaloo', cursive;
  color: #0D5D56;
  font-size: 1.5rem;
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