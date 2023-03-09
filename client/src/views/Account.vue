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
                    <router-link :to="{ name: 'play', params: { id: quiz.id } }" class="btn btn-primary mx-1 mb-2">Speel
                        quiz</router-link>
                    <!-- <a href="#" class="btn btn-primary mx-1 mb-2">Pas deze quiz aan</a>
                                                                                                                                            <a href="#" class="btn btn-danger mx-1 mb-2">Verwijder deze quiz</a> -->
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