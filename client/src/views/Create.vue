<template>
  <div class="container">
    <Navbar />
    <h1>Welkom bij de pubquiz bouwer</h1>
    <p>
      Om je quiz op te maken moet je eerst
      <router-link to="/login">inloggen</router-link>
    </p>
    <div class="mb-3 form-group">
      <input
        type="text"
        class="form-control"
        id="quizName"
        placeholder="Hoe wil je je quiz noemen?"
      />
    </div>

    <!-- create question -->
    <div class="question-box mb-3 form-group">
      <!-- vraag:  -->
      <input
        type="text"
        class="form-control"
        id="question"
        placeholder="Vraag"
      />
      <!-- antwoorden -->
      <input type="text" class="form-control" id="question" placeholder="A" />

      <input type="text" class="form-control" id="question" placeholder="B" />

      <input type="text" class="form-control" id="question" placeholder="C" />

      <input type="text" class="form-control" id="question" placeholder="D" />
    </div>

    <!-- button to add new question -->
    <button class="btn btn-primary" @click="addQuestion">
      Voeg een vraag toe
    </button>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";

const questions = ref([
  {
    question: "vraag",
    answers: ["antwoord1", "antwoord2", "antwoord3", "antwoord4"],
    rightAnswer: 0,
  },
]);

function addQuestion() {
  console.log("add question");
}
</script>
  
<style scoped>
.question-box {
  border: 1px solid black;
  padding: 10px;
}
</style>
  