<script setup lang="ts">
import { onMounted, ref, inject } from 'vue';
const socket: any = inject('socket')

const roomId = ref('');
const username = ref('');
const message = ref('');
const quizName = ref('');
const joined = ref(false);
const started = ref(false);
const question = ref(<any>'');
const correctAnswer = ref('');
const selectedAnOption = ref(false);
const optionSelected = ref();
const correct = ref(false);
const roundIsUp = ref(false);
const gameEnded = ref(false);

onMounted(() => {
    listinToEmits();
});

function joinRoom() {
    // check if roomId and username are not empty
    if (roomId.value === '' || username.value === '') {
        message.value = 'Please enter a room ID and username';
        return;
    }

    roomId.value = roomId.value.toUpperCase();

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

    const selectedOptionElement = document.getElementById(option.id);
    selectedOptionElement?.classList.remove('option-block');
    selectedOptionElement?.classList.add('selected');

    selectedAnOption.value = true;
    optionSelected.value = option;
}

function listinToEmits() {
    socket.on('error', (data: string) => {
        message.value = data;
        joined.value = false;
    });

    socket.on('started', (data: string) => {
        started.value = true;
        quizName.value = data;
    });

    socket.on('newQuestion', (data: any) => {
        // to handle new round
        roundIsUp.value = false;
        correct.value = false;
        selectedAnOption.value = false;
        optionSelected.value = null;
        question.value = data;
    });

    socket.on('newAnswer', (data: string) => {
        correctAnswer.value = data;
        roundIsUp.value = true;

        // check if the correct answer is the same as the selected option
        if (optionSelected.value.text === data) {
            correct.value = true;
            const selectedOption = document.getElementById(optionSelected.value.id);
            selectedOption?.classList.remove('option-block');
            selectedOption?.classList.add('correct-option');
        }
    });

    socket.on('end', (data: any) => {
        // to handle end of game
        started.value = false;
        joined.value = false;
        quizName.value = '';
        roomId.value = '';
        username.value = '';
        message.value = '';
        question.value = '';
        correctAnswer.value = '';
        selectedAnOption.value = false;
        optionSelected.value = null;
        correct.value = false;
        roundIsUp.value = false;
        gameEnded.value = true;
    });
}
</script>


<template>
    <div class="center">
        <!-- ended -->
        <div class="center" v-if="gameEnded">
            <h1 class="text-center">De quiz is afgelopen</h1>
            <h2 class="text-center">Zie het scherm voor de scores</h2>
        </div>
        <!-- ended -->

        <!-- started -->
        <div v-if="!gameEnded">
            <div class="center" v-if="started && !gameEnded">
                <h3 class="mb-5">{{ quizName }}</h3>
                <h2 class="text-center">Vraag: {{ question.text }}</h2>
                <div @click="handleAnswered(option)" v-for="(option, index) in question.options" :key="option.id"
                    :id="option.id" class="option-block">
                    <div class="option-letter">{{ String.fromCharCode(index + 65) }}.</div>
                    <div class="option-text">{{ option.text }}</div>
                </div>
                <div v-if="roundIsUp">
                    <p v-if="correct" class="text-center correct-answer">Dat is goed +1 punt voor jou!</p>
                    <p v-if="!correct" class="text-center correct-answer">Helaas, het juist antwoord is: {{ correctAnswer }}
                    </p>
                </div>
            </div>
            <!-- started -->

            <!-- waiting -->
            <div class="center" v-if="joined && !started">
                <h2>quiz code: {{ roomId }}</h2>
                <h2>Wachten tot de quiz begint....</h2>
            </div>
            <!-- waiting -->

            <!-- join -->
            <div class="center" v-if="!joined">
                <h1>Quiz code:</h1>
                <input class="mt-3" type="text" v-model="roomId" placeholder="Code" />
                <input class="mt-3" type="text" v-model="username" placeholder="IGN" />
                <p class="message">{{ message }}</p>
                <button class="button" @click="joinRoom">Doe mee</button>
            </div>
            <!-- join -->
        </div>
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

.correct-option {
    background-color: #2bff01;
}

h2 {
    font-family: 'Fredoka One', cursive;
    font-size: 25px;
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
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

h1 {
    font-size: 3.5rem;
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