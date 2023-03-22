<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { io } from "socket.io-client";
const socket = io('http://localhost:3000');

const roomId = ref('');
const username = ref('');
const message = ref('');
const quizName = ref('');
const joined = ref(false);
const started = ref(false);

const question = ref(<any>'');
const correctAnswer = ref('');

const selectedAnOption = ref(false);
const optionSelected = ref('');

onMounted(() => {
    listinToEmits();
});

function joinRoom() {
    // check if roomId and username are not empty
    if (roomId.value === '' || username.value === '') {
        message.value = 'Please enter a room ID and username';
        return;
    }

    const data = {
        roomId: roomId.value,
        username: username.value
    };
    socket.emit('join', data);

    joined.value = true;
}

function handleAnswered(option: any) {
    if (selectedAnOption.value) {
        return;
    }
    socket.emit('answer', { roomId: roomId.value, username: username.value, answer: option.text });

    // give light green background to the selected option
    const selectedOption = document.getElementById(option.id);
    selectedOption?.classList.remove('option-block');
    selectedOption?.classList.add('selected');

    selectedAnOption.value = true;
    optionSelected.value = option.text;
}

function listinToEmits() {
    socket.on('started', data => {
        started.value = true;
        quizName.value = data;
    });

    socket.on('newQuestion', data => {
        console.log('new question');
        selectedAnOption.value = false;
        optionSelected.value = '';
        question.value = data;
    });

    socket.on('newAnswer', data => {
        correctAnswer.value = data;

        // check if the correct answer is the same as the selected option
        if (optionSelected.value === data) {
            console.log('right answer');
        } else {
            console.log('wrong answer');
        }
    });
}
</script>


<template>
    <div class="center">
        <!-- started -->
        <h1>quiz: {{ quizName }}</h1>
        <div class="center" v-if="started">
            <h2>Vraag: {{ question.text }}</h2>
            <div @click="handleAnswered(option)" v-for="(option, index) in question.options" :key="option.id"
                :id="option.id" class="option-block">
                <div class="option-letter">{{ String.fromCharCode(index + 65) }}.</div>
                <div class="option-text">{{ option.text }}</div>
            </div>
            <div>
                <p class="correct-answer">Het juiste antwoord is: {{ correctAnswer }}</p>
            </div>
        </div>
        <!-- started -->

        <!-- waiting -->
        <div class="center" v-if="joined && !started">
            <h1>quiz code: {{ roomId }}</h1>
            <h2>Wachten tot de quiz begint....</h2>
        </div>
        <!-- waiting -->

        <!-- join -->
        <div class="center" v-if="!joined">
            <h1>Code:</h1>
            <input class="mt-3" type="text" v-model="roomId" placeholder="Room ID" />
            <input class="mt-3" type="text" v-model="username" placeholder="IGN" />
            <p class="message">{{ message }}</p>
            <button class="button" @click="joinRoom">Join</button>
        </div>
        <!-- join -->
    </div>
</template>

<style scoped>
.selected {
    display: flex;
    align-items: center;
    width: 50%;
    margin-bottom: 3px;
    background-color: #ffa600;
    padding: 10px;
    box-sizing: border-box;
    color: white;
    font-weight: bold;
    text-align: center;
}

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

.option-block:hover {
    cursor: pointer;
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

.message {
    color: red;
}

.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;
    height: 100vh;
    background-color: #F4F1DE;
}

input {
    font-size: 2rem;
    font-family: 'Boogaloo', cursive;
    color: #000000;
    padding: 1rem 2rem;
    border-radius: 2rem;
    border: none;
    margin-bottom: 2rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

h1 {
    font-size: 4rem;
    font-family: 'Fredoka One', cursive;
    color: #000000;
}

.button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Boogaloo', cursive;
    color: white;
    font-size: 2rem;
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: #0D5D56;
}
</style>