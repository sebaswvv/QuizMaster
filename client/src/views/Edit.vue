<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";

import HomeIcon from "../components/HomeIcon.vue";
import AccountIcon from "../components/AccountIcon.vue";
import NewQuestionBox from "../components/NewQuestionBox.vue";
import router from "../router";

import { useLoginStore } from "../stores/useLogin";
import { useQuizStore } from "../stores/useQuiz";

const loginStore = useLoginStore();
const quizStore = useQuizStore();

const questions: any = ref(quizStore.quiz.questions);
const errorMessage = ref("");

const modalIsOpen = ref(false);

onMounted(async () => {
    if (!loginStore.isLoggedIn) {
        router.push("/");
    }

    const quizId = router.currentRoute.value.params.id;
    try {
        const respone = await axios.get(`/api/quizzes/${quizId}`, {
            headers: {
                Authorization: `Bearer ${loginStore.getToken}`,
            },
        });
        const quiz = respone.data;
        quizStore.setQuiz(quiz);
        questions.value = quiz.questions;

        // if quiz is public set the switch to true
        if (quizStore.quiz.public) {
            const switchElement = document.querySelector(".switch input");
            switchElement?.setAttribute("checked", "true");
        }

        // foreach question, set the time from 00:00:00 to seconds
        questions.value.forEach((question: any) => {
            const time = question.timeToAnswer.split(":");
            const seconds =
                parseInt(time[0]) * 3600 +
                parseInt(time[1]) * 60 +
                parseInt(time[2]);
            question.timeToAnswer = seconds;
        });
    } catch (error) {
        errorMessage.value = "Er is iets fout gegaan";
    }
});

function handleSetPublic() {
    quizStore.togglePublic();
}

function updateQuiz() {
    quizStore.updateQuiz();
}

function addQuestion() {
    // add new empty question to questions
    questions.value.push({
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
            <h1 class="text-center mb-5">Hier kunt u de pubquiz aanpassen</h1>

            <div class="create-quiz">
                <h3>Naam van je quiz aanpassen:</h3>
                <div class="mb-3 form-group">
                    <input type="text" class="form-control mb-3" id="quizName" placeholder="b.v.b 'F1 quiz''"
                        v-model="quizStore.quiz.name" />
                </div>
                <p id="private-text">Maak je quiz publiekelijk beschikbaar?</p>
                <label class="switch">
                    <input @change="handleSetPublic" type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
        </div>

        <div v-for="(question, index) in questions" :key="index">
            <NewQuestionBox :question="question" @remove-question="removeQuestion" />
        </div>

        <!-- button to add new question -->
        <button class="button" @click="addQuestion">
            Voeg een vraag toe
        </button>

        <button class="button mb-3" @click="updateQuiz">
            Pas quiz aan
        </button>

        <p class="fault">{{ errorMessage }}</p>
    </div>
</template>
  

  
<style scoped>
#private-text {
    margin-bottom: 5px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #0D5D56;
}

input:focus+.slider {
    box-shadow: 0 0 1px #0D5D56;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

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

.href {
    color: #0D5D56;
    /* underlined */
    text-decoration: underline;
}

.href:hover {
    color: #0D5D56;
    /* mouse pointer */
    cursor: pointer;
    text-decoration: underline;
}
</style>
  