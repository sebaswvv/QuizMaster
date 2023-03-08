<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TimerSlider from '../components/TimerSlider.vue';
const { question, round } = defineProps(['question', 'round']);

// set time to answer in seconds
const timeParts = question.time_to_answer.split(':');
const timeToAnswerInSeconds = (+timeParts[0]) * 60 * 60 + (+timeParts[1]) * 60 + (+timeParts[2]);;

const timeIsUp = ref(false);
const correctAnswer = ref('...');

// when timer slider emits timeIsUp, set timeIsUp to true
function handleTimeIsUp() {
    timeIsUp.value = true;

    // show the correct answer
    question.options.forEach((option: any) => {
        if (option.is_correct) {
            correctAnswer.value = option.text;
            // style the correct option.id with a green background
            const element = document.getElementById(option.id);
            if (element) {
                element.style.backgroundColor = '#27f115';
            }
        }
    });
}

// on mounted, start the timer
onMounted(() => {
    // reset own variables and components
    timeIsUp.value = false;
    correctAnswer.value = '...';
});
</script>

<template>
    <TimerSlider :timeInSeconds="timeToAnswerInSeconds" @timeIsUp="handleTimeIsUp" />
    <div class="center">
        <h2>Vraag {{ round + 1 }}: {{ question.text }}</h2>
        <div v-for="(option, index) in question.options" :key="option.id" :id="option.id" class="option-block">
            <div class="option-letter">{{ String.fromCharCode(index + 65) }}.</div>
            <div class="option-text">{{ option.text }}</div>
        </div>
        <div>
            <p class="correct-answer">Het juiste antwoord is: {{ correctAnswer }}</p>
            <button v-if="timeIsUp" @click="$emit('nextQuestion')" class="px-4 button">Volgende vraag</button>
        </div>
    </div>
</template>
  
<style scoped>
.correct-answer {
    font-family: 'Fredoka One', cursive;
    font-size: 25px;
    margin-top: 10px;
}

h2 {
    font-family: 'Fredoka One', cursive;
    font-size: 50px;
    margin-bottom: 10px;
}

.option-block {
    display: flex;
    align-items: center;
    width: 50%;
    margin-bottom: 3px;
    background-color: #0D5D56;
    padding: 10px;
    box-sizing: border-box;
    color: white;
    font-weight: bold;
    text-align: center;
}

.option-letter {
    width: 20px;
    margin-right: 10px;
}

.option-text {
    margin: 0;
}

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