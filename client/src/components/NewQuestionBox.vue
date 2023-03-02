<script setup lang="ts">
const { question } = defineProps(["question"]);
</script>

<template>
  <!-- create question -->
  <div class="question-box mb-3 form-group">
    <!-- question name:  -->


    <!-- answers -->
    <div class="row">
      <div class="col-md-8">
        <input type="text" class="form-control mb-3" id="question" placeholder="Wat is de vraag?"
          v-model="question.text" />
        <input type="text" class="form-control" id="question" placeholder="A" v-model="question.options[0].text" />
        Juist? <input type="checkbox" v-model="question.options[0].isCorrect" :value="true">

        <input type="text" class="form-control" id="question" placeholder="B" v-model="question.options[1].text" />
        Juist? <input type="checkbox" v-model="question.options[1].isCorrect" :value="true">

        <input type="text" class="form-control" id="question" placeholder="C" v-model="question.options[2].text" />
        Juist? <input type="checkbox" v-model="question.options[2].isCorrect" :value="true">

        <input type="text" class="form-control" id="question" placeholder="D" v-model="question.options[3].text" />
        Juist? <input type="checkbox" v-model="question.options[3].isCorrect" :value="true">
      </div>
      <div class="col-md-4">
        <input type="number" class="form-control mb-3" v-model="question.timeToAnswer"
          placeholder="Seconden om te antwoorden">
        <!-- plus button to add an image -->
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <p>Optioneel; Voeg een afbeelding toe:</p>
          </div>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
            <label class="custom-file-label" for="inputGroupFile01">Kies afbeelding</label>
          </div>
        </div>
      </div>
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