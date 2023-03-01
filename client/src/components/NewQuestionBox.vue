<script setup lang="ts">
const { question } = defineProps(["question"]);
</script>

<template>
  <!-- create question -->
  <div class="question-box mb-3 form-group">
    <!-- vraag:  -->
    <input type="text" class="form-control" id="question" placeholder="Vraag" />
    <!-- antwoorden -->
    <input type="text" class="form-control" id="question" placeholder="A" />

    <input type="text" class="form-control" id="question" placeholder="B" />

    <input type="text" class="form-control" id="question" placeholder="C" />

    <input type="text" class="form-control" id="question" placeholder="D" />
  </div>
</template>

<style scoped></style>