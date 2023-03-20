<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { useLoginStore } from "../stores/useLogin";
import { useQuizStore } from "../stores/useQuiz";

const loginStore = useLoginStore();
const quizStore = useQuizStore();
const emit = defineEmits(["close"]);
const username = ref();
const password = ref();

const errorMessage = ref();

async function login() {
    try {
        if (await loginStore.login(username.value, password.value)) {
            errorMessage.value = "U bent ingelogd";
            quizStore.setUserId();
            // wait 2 seconds
            setTimeout(() => {
                emit("close");
            }, 500);
        } else {
            errorMessage.value = "Verkeerde gebruikersnaam of wachtwoord";
        }
    } catch (error) {
        errorMessage.value = "Verkeerde gebruikersnaam of wachtwoord";
    }
}
</script>

<template>
    <div class="modal row justify-content-center">
        <div class="modal-inner col-lg-3">
            <div class="login-wrap p-100 p-md-5">
                <button class="top-right" @click="$emit('close')">X</button>
                <div class="w-100">
                    <h3 class="text-center mb-4">Log in</h3>
                </div>
                <div class="mt-3">
                    <label class="form-control-placeholder" for="username">Gebruikersnaam</label>
                    <input type="text" class="form-control" v-model="username" />
                </div>
                <div class="mt-2">
                    <label class="form-control-placeholder" for="password">Wachtwoord</label>
                    <input id="password-field" type="password" class="form-control" v-model="password" />
                </div>
                <div class="mt-3">
                    <button @click="login" type="button" class="mb-3 mt-2 button">
                        Login
                    </button>
                </div>
                <p class="text-center">
                    Nog geen account?
                    <router-link to="/register">
                        Registreer
                    </router-link>
                </p>
                <p>{{ errorMessage }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* postion top-right in top right of modal */
.top-right {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    background-color: #fff;
    border: none;
    border-radius: 0 0 0 0.5rem;
}

.modal-inner {
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
}

.button {
    display: block;
    margin: 0 auto;
    background-color: #0D5D56;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
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
</style>