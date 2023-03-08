<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import router from '../router';

interface Quiz {
    id: number;
    name: string;
}

const searchQuery = ref('');
const searchedQuizzes = ref<Quiz[]>([]);
const searched = ref(false);

async function handleSearchQuiz() {
    // check if search query is empty
    if (searchQuery.value === '') {
        return;
    }
    const response = await axios.get('http://localhost:3000/api/quizzes/search', {
        params: {
            search: searchQuery.value,
        },
    });
    searchedQuizzes.value = response.data;
    searched.value = true;
}

function handlePlayQuiz(id: number) {
    router.push(`/play/${id}`);
}
</script>

<template>
    <h3 class="text-center mt-5">Zoek een openbare quiz om te spelen:</h3>
    <div class="input-group mb-3">
        <input v-model="searchQuery" type="text" class="form-control" placeholder="Zoek naar een quiz naam"
            aria-label="Search for a quiz" aria-describedby="button-addon2">
        <div class="input-group-append">
            <button @click="handleSearchQuiz" class="button-small" type="button" id="button-addon2">Zoek</button>
        </div>
    </div>
    <!-- searched quizzes -->
    <div v-if="searched" class="container mt-5">
        <h3 class="text-center mb-4">Zoekresultaten:</h3>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div v-if="searchedQuizzes.length === 0" class="alert alert-info" role="alert">
                    Geen quizzen gevonden.
                </div>
                <div v-else class="list-group">
                    <a @click="handlePlayQuiz(quiz.id)" v-for="quiz in searchedQuizzes" :key="quiz.id"
                        class="mt-3 list-group-item">
                        {{ quiz.name }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
a:hover {
    cursor: pointer;
}

.alert-info {
    font-family: 'Boogaloo', cursive;
    font-size: 1.5rem;
}

.list-group {
    font-family: 'Boogaloo', cursive;
    font-size: 1.5rem;
}

.list-group-item {
    background-color: #0D5D56;
    color: #ffffff;
    border-color: #0D5D56;
}

h3 {
    font-size: 2rem;
    font-family: 'Fredoka One', cursive;
    color: #000000;
}

.button-small {
    font-family: 'Boogaloo', cursive;
    color: white;
    font-size: 2rem;
    padding: 0.5px 15px;
    background-color: #0D5D56;
}
</style>