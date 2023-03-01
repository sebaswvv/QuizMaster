<script setup lang="ts">
</script>


<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand nav-item nav-link active" to="/"
      >QuizMaster</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link active" to="/login"
          >Login</router-link
        >
      </div>
    </div>
  </nav>
</template>