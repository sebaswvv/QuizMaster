<script setup lang="ts">
import { ref, onMounted } from 'vue';
const { question, round } = defineProps(['question', 'round']);

// const timeToAnswer = question.time_to_answer;
const timeToAnswerInSeconds = 5;
const timeIsUp = ref(false);
const correctAnswer = ref('');

// on mounted, start the timer for 10 seconds
onMounted(() => {
    // reset own variables and components
    timeIsUp.value = false;
    correctAnswer.value = '';

    // log to console when time is 0
    setTimeout(() => {
        console.log('time is up');
        timeIsUp.value = true;

        // show the correct answer
        question.options.forEach((option: any) => {
            if (option.is_correct) {
                correctAnswer.value = option.text;
            }
        });
        // show a button to go to the next question
    }, timeToAnswerInSeconds * 1000);

});


</script>

<template>
    <div class="center">
        <h2>Vraag {{ round + 1 }}</h2>
        <h1>{{ question.text }}</h1>
        <div v-for="option in question.options" :key="option.id">
            <label :for="option.id">{{ option.text }}</label>
        </div>
        <div>
            <p v-if="timeIsUp">Het juiste antwoord is: {{ correctAnswer }}</p>
            <button @click="$emit('nextQuestion')" class="button" v-if="timeIsUp">Volgende vraag</button>
        </div>
    </div>
</template>

<style scoped>
.center {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button {
    font-family: 'Boogaloo', cursive;
    color: white;
    font-size: 25px;
    padding: 2vh;
    border-radius: 2rem;
    background-color: #0D5D56;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3vh;
}
</style>