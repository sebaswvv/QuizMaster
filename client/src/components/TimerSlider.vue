<template>
    <div class="slider" ref="slider"></div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from "vue";

const timeInSeconds = ref(10);

const slider = ref<HTMLElement | null>(null);
let timerId: ReturnType<typeof setInterval> | null = null;
let startTime = 0;
let elapsedTime = 0;
let totalWidth = 0;
let elapsedWidth = 0;

onMounted(async () => {
    await nextTick();
    totalWidth = slider.value?.clientWidth ?? 0;
    startTime = new Date().getTime() - elapsedTime;

    timerId = setInterval(() => {
        const currentTime = new Date().getTime();
        elapsedTime = currentTime - startTime;
        elapsedWidth = totalWidth * (elapsedTime / (timeInSeconds.value * 1000));
        slider.value!.style.width = `${elapsedWidth}px`;
    }, 100);

});

watch(timeInSeconds, (newValue, oldValue) => {
    clearInterval(timerId!);
    slider.value!.style.width = '0px';
    elapsedTime = 0;
    startTime = new Date().getTime();
    totalWidth = slider.value?.clientWidth ?? 0;
    timerId = setInterval(() => {
        const currentTime = new Date().getTime();
        elapsedTime = currentTime - startTime;
        elapsedWidth = totalWidth * (elapsedTime / (newValue * 1000));
        slider.value!.style.width = `${elapsedWidth}px`;
    }, 100);
});
</script>
  
<style scoped>
.slider {
    width: 100%;
    height: 10px;
    background-color: #ccc;
    border-radius: 5px;
}
</style>
  