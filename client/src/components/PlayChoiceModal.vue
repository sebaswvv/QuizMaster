<template>
    <div class="modal">
        <div class="modal-inner">
            <div class="d-flex flex-row justify-content-center">
                <button class="button mx-2" @click="handleParticipate">Deelnemen aan een quiz</button>
                <button class="button mx-2" @click="handlePlayOwnQuiz">Speel een eigen quiz</button>
                <button class="button mx-2" @click="handleSearchQuiz">Zoek een openbare quiz om te spelen</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '../router';
import { useLoginStore } from '../stores/useLogin';

const loginStore = useLoginStore();

function handleParticipate() {
    console.log('participate');
}

function handlePlayOwnQuiz() {
    // set user to account to see and play their own quizzes
    if (loginStore.isLoggedIn) {
        router.push('/account');
    } else {
        router.push('/login');
    }
}

function handleSearchQuiz() {
    console.log('search');
}
</script>

<style scoped>
.modal-inner {
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
}

.modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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