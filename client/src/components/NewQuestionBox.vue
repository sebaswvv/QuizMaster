<script setup lang="ts">
const { question } = defineProps(["question"]);

// to make sure the standard value isnt 0
question.timeToAnswer = 20;

const emit = defineEmits(["error", "remove-question"]);

function handleFileUpload(event: any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    // check file size
    if (file.size > 1000000) {
      emit("error", "Afbeelding is te groot");
      return;
    }
    question.image = e.target?.result;
  };
}
</script>

<template>
  <!-- create question -->
  <div class="question-box mb-3 form-group">
    <button class="remove-button mb-1" @click="$emit('remove-question', question)">&#10005;</button>
    <!-- answers -->
    <div class="row">
      <div class="col-md-8">
        <div class="answer-container">
          <input type="text" class="form-control mb-2" id="question" placeholder="Wat is de vraag?"
            v-model="question.text" />
          <div class="form-check">
            <input type="checkbox" class="form-check-input" v-model="question.options[0].isCorrect" :value="true">
            <input type="text" class="form-control" id="question" placeholder="A" v-model="question.options[0].text" />
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" v-model="question.options[1].isCorrect" :value="true">
            <input type="text" class="form-control" id="question" placeholder="B" v-model="question.options[1].text" />
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" v-model="question.options[2].isCorrect" :value="true">
            <input type="text" class="form-control" id="question" placeholder="C" v-model="question.options[2].text" />
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" v-model="question.options[3].isCorrect" :value="true">
            <input type="text" class="form-control" id="question" placeholder="D" v-model="question.options[3].text" />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <p id="text">Aantal seconden om te antwoorden:</p>
        <input type="text" class="form-control mb-3" v-model="question.timeToAnswer"
          placeholder="Seconden om te antwoorden">
        <!-- plus button to add an image -->
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <p>Optioneel; Voeg een afbeelding toe:</p>
          </div>
          <div class="custom-file">
            <input @change="handleFileUpload" accept="image/*" type="file" class="custom-file-input" id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01">
            <label class="custom-file-label" for="inputGroupFile01">Kies afbeelding</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#text {
  margin-bottom: 1px;
}

.remove-button {
  background-color: #0D5D56;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  float: right;
}

.question-box {
  /* rounded border */
  /* border: 1px solid #0D5D56; */
  border-radius: 20px;
  padding: 20px;
  /* back shadow */
  box-shadow: 1px 2px 5px #555454;
}

.answer-container {
  display: flex;
  flex-direction: column;
}

.form-check {
  display: flex;
  align-items: center;
}

.form-check-input {
  margin-right: 10px;
}
</style>
