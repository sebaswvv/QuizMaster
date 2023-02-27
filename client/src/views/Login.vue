<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import { AxiosResponse, AxiosError } from "axios";
import { ref } from "vue";

const username = ref();
const password = ref();

const errorMessage = ref();

// do POST to http://localhost:3000/api/users/login
// with in the body the username and password

async function login() {
  try {
    const response = await axios.post("http://localhost:3000/api/users/login", {
      username: username.value,
      password: password.value,
    });

    // check if response is 200
    if (response.status === 200) {
      // store the token in the local storage
      localStorage.setItem("token", response.data.token);
      // redirect to the home page
      window.location.href = "/";
    }
  } catch (error: any) {
    // check if error is 401
    if (error.response.status === 401) {
      errorMessage.value = "Verkeerde gebruikersnaam of wachtwoord";
    } else {
      errorMessage.value = "Er is iets misgegaan, probeer het later opnieuw";
    }
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
                  <label class="form-control-placeholder" for="username"
                    >Gebruikersnaam</label
                  >
                  <input type="text" class="form-control" v-model="username" />
                </div>
                <div class="form-group">
                  <label class="form-control-placeholder" for="password"
                    >Wachtwoord</label
                  >
                  <input
                    id="password-field"
                    type="password"
                    class="form-control"
                    v-model="password"
                  />
                  <span
                    toggle="#password-field"
                    class="fa fa-fw fa-eye field-icon toggle-password"
                  ></span>
                </div>
                <div class="form-group">
                  <button
                    @click="login"
                    type="button"
                    class="form-control btn btn-primary rounded submit px-3"
                  >
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
                <a data-toggle="tab" href="/signup">Registreer</a>
              </p>
              <p>{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>