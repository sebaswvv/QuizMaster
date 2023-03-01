<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import { useLoginStore } from "../stores/useLogin";
import NewQuestionBox from "../components/NewQuestionBox.vue";

const loginStore = useLoginStore();

// const questions = ref([null]);
// empty array of questions
const questions: any = ref([]);

const quizName = ref("");

function addQuestion() {
  // add new empty question to questions
  questions.value.push({
    question: "",
    answers: ["", "", "", ""],
    rightAnswer: 0,
  });
}
</script>

<template>
  <div class="container">
    <Navbar />
    <h1>Welkom bij de pubquiz bouwer</h1>
    <p v-if="!loginStore.isLoggedIn">
      Om je quiz op te maken moet je eerst
      <router-link to="/login">inloggen</router-link>
    </p>

    <!-- v-if="loginStore.isLoggedIn" -->
    <div class="create-quiz">
      <h3>Hoe wil je je quiz noemen?</h3>
      <div class="mb-3 form-group">
        <input type="text" class="form-control" id="quizName" placeholder="b.v.b 'F1 quiz''" v-model="quizName" />
      </div>
    </div>

    <!-- foreach question a new question box execpt the first one -->
    <div v-for="(question, index) in questions" :key="index">
      <NewQuestionBox :question="question" />
    </div>

    <!-- button to add new question -->
    <button v-if="quizName != ''" class="btn btn-primary" @click="addQuestion">
      Voeg een vraag toe
    </button>
  </div>
</template>
  

  
<style scoped>
.question-box {
  border: 1px solid black;
  padding: 10px;
}
</style>
  