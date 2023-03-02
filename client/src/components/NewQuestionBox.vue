<script setup lang="ts">
const { question } = defineProps(["question"]);
</script>

<template>
  <!-- create question -->
  <div class="question-box mb-3 form-group">
    <!-- question name:  -->
    <input type="text" class="form-control mb-3" id="question" placeholder="Wat is de vraag?" v-model="question.text" />

    <!-- answers -->
    <div class="col-md-6">
      <input type="text" class="form-control" id="question" placeholder="A" v-model="question.options[0].text" />
      Juist? <input type="checkbox" v-model="question.options[0].isCorrect" :value="true">

      <input type="text" class="form-control" id="question" placeholder="B" v-model="question.options[1].text" />
      Juist? <input type="checkbox" v-model="question.options[1].isCorrect" :value="true">

      <input type="text" class="form-control" id="question" placeholder="C" v-model="question.options[2].text" />
      Juist? <input type="checkbox" v-model="question.options[2].isCorrect" :value="true">

      <input type="text" class="form-control" id="question" placeholder="D" v-model="question.options[3].text" />
      Juist? <input type="checkbox" v-model="question.options[3].isCorrect" :value="true">
    </div>
  </div>
</template>

<style scoped>
.question-box {
  /* rounded border */
  /* border: 1px solid #0D5D56; */
  border-radius: 20px;
  padding: 20px;
  /* back shadow */
  box-shadow: 1px 2px 5px #555454;
}
</style>