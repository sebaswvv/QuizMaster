<script setup lang="ts">
import axios from "axios";
import router from "../router";
import { ref } from "vue";
import { useLoginStore } from "../stores/useLogin";
import { useQuizStore } from "../stores/useQuiz";

const loginStore = useLoginStore();
const quizStore = useQuizStore();

const username = ref();
const password = ref();

const errorMessage = ref();

async function login() {
    try {
        if (await loginStore.login(username.value, password.value)) {
            // router.push("/");
            // close modal
            errorMessage.value = "U bent ingelogd";
            quizStore.setUserId();
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
                    <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div class="mt-3">
                    <button @click="login" type="button" class="form-control btn btn-primary rounded submit px-3">
                        Login
                    </button>
                </div>
                <div class="form-group d-md-flex">
                    <!-- <div class="w-50 text-md-right">
                                                                                                    <a href="#">Forgot Password</a>
                                                                                                </div> -->
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