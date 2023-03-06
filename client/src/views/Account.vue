<template>
    <div class="container-fluid heading">
        <HomeIcon />
        <h2 class="text-center">Welkom sebas {{ userName }}</h2>
        <p class="header-text text-center">Hier kan je je eigen quizzes inzien, aanpassen en spelen!</p>
    </div>

    <div class="container">
        <div v-for="quiz in quizzes" class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ quiz.name }}</h5>
                <p class="card-text">Vragen: {{ quiz.questions.length }}</p>
                <p class="cart-text">Opebaar: {{ quiz.public }}</p>
                <a href="#" class="btn btn-primary mx-1 mb-2">Speel quiz</a>
                <a href="#" class="btn btn-primary mx-1 mb-2">Pas deze quiz aan</a>
                <a href="#" class="btn btn-danger mx-1 mb-2">Verwijder deze quiz</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLoginStore } from '../stores/useLogin';
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

const userName = ref(loginStore.getUsername);

const quizzes = ref<quiz[]>([]);


onMounted(async () => {
    // if (!loginStore.isLoggedIn) {
    //     router.push('/');
    //     return;
    // }
    // get all quizzes from the user pass the bearer token from the login store
    const response = axios.get('http://localhost:3000/api/quizzes/user', {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNlYmFzIiwidXNlcklkIjoxLCJpYXQiOjE2NzgxMTY2OTAsImV4cCI6MTY3ODEyMDI5MCwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIn0.x4optqxYrZfFaDBzBjj8Nx6o9roeOP6OtayPxDZ5B0Q`,
        },
    });
    // add the quizzes to the quizzes array
    quizzes.value = (await response).data;
});
</script>

<style scoped>
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