<template>
    <div class="container-fluid heading">
        <AccountIcon />
        <HomeIcon />
        <h2 class="text-center">Welkom sebas {{ userName }}</h2>
        <p class="text-center">Hier kan je je eigen quizzes inzien, aanpassen en spelen!</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLoginStore } from '../stores/useLogin';
import HomeIcon from '../components/HomeIcon.vue';
import AccountIcon from '../components/AccountIcon.vue';
import router from '../router';

const loginStore = useLoginStore();

// check if user is logged in
// if (!loginStore.isLoggedIn) {
//     router.push('/login');
// }

const userName = ref(loginStore.getUsername);
</script>

<style scoped>
h2 {
    font-size: 2.5rem;
    font-family: 'Fredoka One', cursive;
    margin-bottom: 1rem;
    color: #000000;
}

P {
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