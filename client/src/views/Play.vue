<script setup lang="ts">
import router from '../router';
import axios from 'axios';
import { ref, onMounted, inject } from 'vue';
import { useLoginStore } from '../stores/useLogin';
import Question from '../components/Question.vue';
const socket: any = inject('socket')
const loginStore = useLoginStore();

interface Player {
    username: string;
    score: number;
}

interface TempAnswer {
    username: string;
    answer: string;
}

const { id } = router.currentRoute.value.params;

const quizName = ref('');
const questions = ref(<any>[]);
const started = ref(false);
const ended = ref(false);
const currentQuestion = ref(<any>null);
const round = ref(0);
const roomId = ref('');
const players = ref<Player[]>([]);
const tempAnswers = ref<TempAnswer[]>([]);


function timeIsUp(answer: string) {
    // check foreach player if the answer is correct
    players.value.forEach(player => {
        // check player name in tempAnswers
        const tempAnswer = tempAnswers.value.find(tempAnswer => tempAnswer.username === player.username);

        if (tempAnswer) {
            if (tempAnswer.answer === answer) {
                player.score++;
            }
        }
    });
    tempAnswers.value = [];
    // to send the correct answer to the players
    socket.emit('newAnswer', { roomId: roomId.value, answer: answer });
}

function nextQuestion() {
    // next round
    round.value++
    // if round is equal to the amount of questions, the game is finished
    if (round.value === questions.value.length) {
        // sort the players by score, if draw, the first player to join is the winner
        players.value.sort((a, b) => b.score - a.score);

        // game is finished
        socket.emit('end', { roomId: roomId.value });
        started.value = false;
        round.value = 0;
        ended.value = true;
    } else {
        // load the next question
        currentQuestion.value = questions.value[round.value];
        socket.emit('newQuestion', { roomId: roomId.value, question: currentQuestion.value });
    }
}

function startGame() {
    // notify the players that the game has started
    socket.emit('start', { roomId: roomId.value, quizName: quizName.value });

    // emit the question to the players
    currentQuestion.value = questions.value[round.value];
    socket.emit('newQuestion', { roomId: roomId.value, question: currentQuestion.value });

    // start the game to show the component
    started.value = true;
}

onMounted(async () => {
    // get the quiz with that id as query param and pass the bearer token from the login store if it exists
    try {
        await getQuiz();
        generateRoomId();
        createRoom();
        listenToEmits();
    } catch (error: any) {
        // check if the error is a 401 unauthorized
        if (error.response.status === 401) {
            // redirect to login
            router.push('/');
        }
    }
});

function listenToEmits() {
    socket.on("joined", (data: any) => {
        const player = {
            username: data,
            score: 0
        }
        players.value.push(player);
    });

    socket.on("answer", (data: any) => {
        const tempAnswer = {
            username: data.username,
            answer: data.answer
        }
        tempAnswers.value.push(tempAnswer);
    });
}

function createRoom() {
    // room id to upper
    const data = {
        roomId: roomId.value,
        username: "master"
    }
    socket.emit("join", data);
}

function generateRoomId() {
    const randomNumbers = [];
    const randomLetters = [];

    // generate 4 random numbers
    for (let i = 0; i < 4; i++) {
        randomNumbers.push(Math.floor(Math.random() * 10));
    }

    // generate 2 random letters
    for (let i = 0; i < 2; i++) {
        randomLetters.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    }

    roomId.value = randomNumbers.join('') + randomLetters.join('');
}

async function getQuiz() {
    const response = await axios.get(`/api/quizzes/${id}`, {
        headers: {
            Authorization: `Bearer ${loginStore.token}`,
        },
    });
    const quiz = response.data;
    questions.value = quiz.questions;
    quizName.value = quiz.name;
}
</script>

<template>
    <!-- ended -->
    <div class="center" v-if="ended">
        <h2 class="text-center">Dat was hem, bedankt voor het spelen</h2>
        <h2 class="mt-3 text-center">De winnaar is: {{ players[0].username }}</h2>
        <u class="list">
            <li v-for="player in players" :key="player.username">{{ player.username }} heeft {{ player.score }} punten</li>
        </u>
        <button class="button" @click="$router.push('/')">Terug naar home</button>
    </div>
    <!-- ended -->

    <!-- starting.. -->
    <div class="center" v-if="!started && !ended">
        <h2 class="mb-5 text-center">{{ quizName }}</h2>
        <h3>Ga naar /participate en voer deze code in om mee te doen:</h3>
        <h2>{{ roomId }}</h2>
        <h1>Deelnemers:</h1>
        <div class="players">
            <ul class="player-list">
                <li v-for="player in players" :key="player.username">{{ player.username }}</li>
            </ul>
        </div>
        <button class="button" @click="startGame">SPEEL</button>
    </div>
    <!-- starting.. -->

    <!-- game -->
    <div class="center">
        <Question v-if="started" :question="currentQuestion" :round="round" :key="round" @nextQuestion="nextQuestion"
            @timeIsUp="timeIsUp" />
    </div>
    <!-- game -->
</template>

<style scoped>
.player-list li {
    display: inline-block;
    width: 18%;
    margin-right: 15vh;
    margin-bottom: 10px;
    font-family: 'Boogaloo', cursive;
    font-size: 5rem;
}

.player-list li:nth-child(5n) {
    margin-right: 0;
}

.list {
    list-style-type: none;
    text-decoration: none;
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Boogaloo', cursive;
    font-size: 5rem;
    color: #000000;
}

.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;
    height: 100vh;
    background-color: #F4F1DE;
}

h2 {
    font-size: 4rem;
    font-family: 'Fredoka One', cursive;
    /* margin-bottom: 2rem; */
    color: #000000;
}

.button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Boogaloo', cursive;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: #0D5D56;
}
</style>