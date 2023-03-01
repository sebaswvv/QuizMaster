<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import { useLoginStore } from "../stores/useLogin";
import { useQuizStore } from "../stores/useQuiz";
import NewQuestionBox from "../components/NewQuestionBox.vue";

const loginStore = useLoginStore();
const quizStore = useQuizStore();

// set the questions to the questions in the quizStore
const questions: any = ref(quizStore.quiz.questions);

function publishQuiz() {
  // publish quiz to database
  quizStore.publishQuiz();
}

function addQuestion() {
  // add new empty question to questions
  const newQuestion = questions.value.push({
    text: "",
    image: "",
    timeToAnswer: 0,
    options: [{
      text: "",
      isCorrect: false,
    },
    {
      text: "",
      isCorrect: false,
    },
    {
      text: "",
      isCorrect: false,
    },
    {
      text: "",
      isCorrect: false,
    },
    ],
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

    <div v-if="loginStore.isLoggedIn" class="create-quiz">
      <h3>Hoe wil je je quiz noemen?</h3>
      <div class="mb-3 form-group">
        <input type="text" class="form-control" id="quizName" placeholder="b.v.b 'F1 quiz''"
          v-model="quizStore.quiz.name" />
      </div>
    </div>

    <!-- foreach question a new question box execpt the first one -->
    <div v-for="(question, index) in questions" :key="index">
      <NewQuestionBox :question="question" />
    </div>

    <!-- button to add new question -->
    <button v-if="quizStore.quiz.name != ''" class="btn btn-primary" @click="addQuestion">
      Voeg een vraag toe
    </button>
  </div>
  <button v-if="quizStore.quiz.name != ''" class="btn btn-primary" @click="publishQuiz">
    Maak Quiz
  </button>
</template>
  

  
<style scoped>
.question-box {
  border: 1px solid black;
  padding: 10px;
}
</style>
  