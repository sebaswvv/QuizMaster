<script setup lang="ts">
const { question } = defineProps(["question"]);
</script>

<template>
  <!-- create question -->
  <div class="question-box mb-3 form-group">
    <!-- question name:  -->
    <input type="text" class="form-control" id="question" placeholder="Vraag" v-model="question.text" />

    <!-- answers -->
    <input type="text" class="form-control" id="question" placeholder="A" v-model="question.options[0].text" />
    <input type="checkbox" v-model="question.options[0].isCorrect" :value="true">

    <input type="text" class="form-control" id="question" placeholder="B" v-model="question.options[1].text" />
    <input type="checkbox" v-model="question.options[1].isCorrect" :value="true">

    <input type="text" class="form-control" id="question" placeholder="C" v-model="question.options[2].text" />
    <input type="checkbox" v-model="question.options[2].isCorrect" :value="true">

    <input type="text" class="form-control" id="question" placeholder="D" v-model="question.options[3].text" />
    <input type="checkbox" v-model="question.options[3].isCorrect" :value="true">
  </div>
</template>

<style scoped></style>