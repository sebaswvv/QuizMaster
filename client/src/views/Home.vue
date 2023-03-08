<script setup lang="ts">
import Hero from "../components/Hero.vue";
import Search from "../components/Search.vue";
</script>


<template>
  <Hero />
  <!-- search bar -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Search />
      </div>
    </div>
  </div>
</template>

<style scoped></style>