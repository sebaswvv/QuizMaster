<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLoginStore } from '../stores/useLogin';
import { useQuizStore } from '../stores/useQuiz';
import HomeIcon from '../components/HomeIcon.vue';
import router from '../router';
import axios from 'axios';

interface quiz {
    id: number;
    userId: number;
    name: string;
    public: boolean;
    questions: [];
}

const loginStore = useLoginStore();
const quizStore = useQuizStore();

const userName = ref(loginStore.getUsername);

const quizzes = ref<quiz[]>([]);

const imageSrc = ref('');

onMounted(async () => {
    if (!loginStore.isLoggedIn) {
        router.push('/');
        return;
    }
    // get all quizzes from the user pass the bearer token from the login store
    const response = axios.get('/api/quizzes/user', {
        headers: {
            Authorization: `Bearer ${loginStore.getToken}`,
        },
    });
    // add the quizzes to the quizzes array
    quizzes.value = (await response).data;
    // imageSrc.value = quizzes.value[0].questions[0].image;
});
function handleLogout() {
    loginStore.logout();
    quizStore.resetQuiz();
    router.push('/');
}

function handleEditEvent(quizId: number) {
    // open the edit quiz page
    router.push(`/edit/${quizId}`);
}

async function handleQuizDelete(quizId: number) {
    const respone = await axios.delete(`/api/quizzes/${quizId}`, {
        headers: {
            Authorization: `Bearer ${loginStore.getToken}`,
        },
    });

    // remove the quiz from the quizzes array
    quizzes.value = quizzes.value.filter((quiz) => quiz.id !== quizId);
}
</script>

<template>
    <div class="container-fluid heading">
        <HomeIcon />
        <a class="top-right" @click="handleLogout">Log uit</a>
        <h2 class="text-center">Welkom {{ userName }}</h2>
        <p class="header-text text-center">Hier kan je je eigen quizzes inzien, aanpassen en spelen!</p>
    </div>

    <!-- <img :src="imageSrc" alt="Image"> -->
    <div class="container">
        <div class="row">
            <div v-for="quiz in quizzes" class="mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ quiz.name }}</h5>
                    <p class="card-text">Vragen: {{ quiz.questions.length }}</p>
                    <p class="cart-text">Opebaar: {{ quiz.public }}</p>
                    <router-link :to="{ name: 'play', params: { id: quiz.id } }" class="button mx-1 mb-2">Speel
                        quiz</router-link>

                    <a @click="handleEditEvent(quiz.id)">
                        <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z"
                                    fill="#0D5D56"></path>
                            </g>
                        </svg>
                    </a>

                    <!-- delete button -->
                    <a @click="handleQuizDelete(quiz.id)">
                        <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M4 7H20" stroke="#c2001d" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path
                                    d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                                    stroke="#c2001d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#c2001d"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                    </a>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
a:hover {
    /* cursor */
    cursor: pointer;
}

.button {
    font-family: 'Boogaloo', cursive;
    color: white;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    background-color: #0D5D56;
}

.top-right {
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-family: 'Boogaloo', cursive;
    color: #0D5D56;
    font-size: 1.5rem;
}

h2 {
    font-size: 2.5rem;
    font-family: 'Fredoka One', cursive;
    margin-bottom: 1rem;
    color: #000000;
}

header-text {
    font-size: 1.5rem;
    font-family: 'Fredoka One', cursive;
    margin-bottom: 2rem;
    color: #000000;
}

.heading {
    padding-top: 5vh;
    padding: 5vh;
    padding-bottom: 5vh;
    margin-bottom: 3vh;
    background-color: #F4F1DE;
}
</style>