<script setup lang="ts">
import { ref } from "vue";
import HomeIcon from "../components/HomeIcon.vue";
import AccountIcon from "../components/AccountIcon.vue";
import { useLoginStore } from "../stores/useLogin";
import { useQuizStore } from "../stores/useQuiz";
import NewQuestionBox from "../components/NewQuestionBox.vue";

const loginStore = useLoginStore();
const quizStore = useQuizStore();

// set the questions to the questions in the quizStore
const questions: any = ref(quizStore.quiz.questions);
const errorMessage = ref("");

function publishQuiz() {
  // check if each question has a question, answers and at least one correct answer
  let hasError = false;
  // check if there is at least one question
  if (questions.value.length === 0) {
    hasError = true;
  }
  questions.value.forEach((question: any) => {
    if (question.text === "") {
      hasError = true;
    }
    question.options.forEach((option: any) => {
      if (option.text === "") {
        hasError = true;
      }
    });
    let hasCorrectAnswer = false;
    question.options.forEach((option: any) => {
      if (option.isCorrect) {
        hasCorrectAnswer = true;
      }
    });
    if (!hasCorrectAnswer) {
      hasError = true;
    }
  });

  if (hasError) {
    errorMessage.value = "Vul a.u.b. alle velden in";
    return;
  }

  // check if timeToAnswer is a number
  questions.value.forEach((question: any) => {
    if (isNaN(question.timeToAnswer)) {
      errorMessage.value = "Vul a.u.b. een geldig getal in bij de tijd";
      return;
    }
  });

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
function removeQuestion(question: any) {
  // remove question from questions
  const index = questions.value.indexOf(question);
  questions.value.splice(index, 1);
}
</script>

<template>
  <div class="container-fluid">
    <HomeIcon />
    <AccountIcon />
    <div class="intro">
      <h1 class="text-center mb-5">Welkom bij de pubquiz bouwer</h1>
      <p class="text-center" v-if="!loginStore.isLoggedIn">
        Om een quiz op te maken moet je eerst
        <router-link to="/login">inloggen</router-link>
      </p>

      <div v-if="loginStore.isLoggedIn" class="create-quiz">
        <h3>Hoe wil je je quiz noemen?</h3>
        <div class="mb-3 form-group">
          <input type="text" class="form-control mb-3" id="quizName" placeholder="b.v.b 'F1 quiz''"
            v-model="quizStore.quiz.name" />
          <p>Voeg een vraag toe; geef de vraag een naam, antwoorden en vink het juiste antwoord aan.</p>
        </div>
      </div>
    </div>
    <!-- foreach question a new question box execpt the first one -->
    <div v-for="(question, index) in questions" :key="index">
      <NewQuestionBox :question="question" @remove-question="removeQuestion" />
    </div>

    <!-- button to add new question -->
    <button v-if="quizStore.quiz.name != ''" class="button" @click="addQuestion">
      Voeg een vraag toe
    </button>

    <button v-if="quizStore.quiz.questions.length > 0" class="button mb-3" @click="publishQuiz">
      Publiceer Quiz
    </button>
    <p class="fault">{{ errorMessage }}</p>
  </div>
</template>
  

  
<style scoped>
.fault {
  color: red;
}

.succes {
  color: green;
}

h1 {
  font-family: 'Fredoka One', cursive;
}

.intro {
  padding-top: 5vh;
  padding: 5vh;
  padding-bottom: 5vh;
  margin-bottom: 3vh;
  background-color: #F4F1DE;
}

.button {
  font-family: 'Boogaloo', cursive;
  color: white;
  font-size: 25px;
  padding: 1.5vh;
  border-radius: 2rem;
  background-color: #0D5D56;
}
</style>
  