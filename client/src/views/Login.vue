<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import { ref } from "vue";
import { useLoginStore } from "../stores/useLogin";
import { useQuizStore } from "../stores/useQuiz";
import router from "../router";

const loginStore = useLoginStore();
const quizStore = useQuizStore();

const username = ref();
const password = ref();

const errorMessage = ref();

async function login() {
  try {
    console.log(password.value);
    if (await loginStore.login(username.value, password.value)) {
      router.push("/");
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
  <div class="container">
    <Navbar />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-5">
          <div class="wrap">
            <div class="login-wrap p-4 p-md-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">Log in</h3>
                </div>
              </div>
              <form action="#" class="signin-form">
                <div class="form-group mt-3">
                  <label class="form-control-placeholder" for="username">Gebruikersnaam</label>
                  <input type="text" class="form-control" v-model="username" />
                </div>
                <div class="form-group">
                  <label class="form-control-placeholder" for="password">Wachtwoord</label>
                  <input id="password-field" type="password" class="form-control" v-model="password" />
                  <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div class="form-group">
                  <button @click="login" type="button" class="form-control btn btn-primary rounded submit px-3">
                    Login
                  </button>
                </div>
                <div class="form-group d-md-flex">
                  <!-- <div class="w-50 text-md-right">
                                                                                  <a href="#">Forgot Password</a>
                                                                                </div> -->
                </div>
              </form>
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
      </div>
    </div>
  </div>
</template>

<style scoped></style>