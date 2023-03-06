<script setup lang="ts">
import Hero from "../components/Hero.vue";
</script>


<template>
  <Hero />
  <!-- search bar -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3 class="text-center mt-5">Search for a quiz:</h3>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search for a quiz" aria-label="Search for a quiz"
            aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 2rem;
  font-family: 'Fredoka One', cursive;
  color: #000000;
}
</style>