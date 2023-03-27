<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const userName = ref("");
const password = ref("");
const errorMessage = ref();

async function register() {
    // check if all fields are filled in
    if (email.value === "" || userName.value === "" || password.value === "") {
        errorMessage.value = "Vul alle velden in";
        return;
    }

    try {
        const response = await axios.post("/api/users/register", {
            email: email.value,
            username: userName.value,
            password: password.value,
        });


        if (response.status === 201) {
            errorMessage.value = "Registratie gelukt, u kunt nu inloggen";
        } else {
            errorMessage.value = "Er is iets misgegaan, probeer het later opnieuw";
        }
    } catch (error: any) {
        if (error.response.status === 409) {
            errorMessage.value = "Gebruikersnaam of email bestaat al";
        } else {
            errorMessage.value = "Er is iets misgegaan, probeer het later opnieuw";
        }
    }

}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-4">
                <div class="wrap">
                    <div class="signup login-wrap p-4 p-md-5">
                        <div class="d-flex">
                            <h3 class="text-center mb-4">Registreer je hier</h3>
                        </div>
                        <form action="#" class="signin-form">
                            <div class="form-group mt-3">
                                <label class="form-control-placeholder" for="username">Email address*</label>
                                <input type="email" class="form-control" v-model="email" required />
                            </div>
                            <div class="form-group mt-3">
                                <label class="form-control-placeholder" for="username">Gebruikersnaam*</label>
                                <input type="text" class="form-control" v-model="userName" required />
                            </div>
                            <div class="form-group">
                                <label class="form-control-placeholder" for="password">Wachtwoord*</label>
                                <input id="password-field" type="password" class="form-control" v-model="password"
                                    required />
                            </div>
                            <div class="mt-3 form-group">
                                <button @click="register" type="button" class="form-control button px-3">
                                    Registreer
                                </button>
                            </div>
                        </form>
                        <p>{{ errorMessage }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.signup {
    /* background grey */
    background-color: #f2f2f2;
    margin: 5vh;
    border-radius: 0.5rem;
    width: 50vh;
    /* middle of screen */
    margin-left: auto;
    margin-right: auto;
    margin-top: 50%;
    margin-bottom: auto;
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
</style>