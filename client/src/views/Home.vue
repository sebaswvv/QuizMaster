<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>


<template>
  <div class="container-fluid">
    <Navbar />
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="./../assets/pubquiz.jpg"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">QuizMater</h1>
          <p class="lead">Maak en speel je eigen pubquizes met QuizMater!</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Maak een quiz
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Zoek een quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>