<template>
    <div class="slider" ref="slider"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick, defineEmits } from "vue";

const { timeInSeconds } = defineProps(['timeInSeconds']);

const emit = defineEmits(['timeIsUp']);

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
        elapsedWidth = totalWidth * (elapsedTime / (timeInSeconds * 1000));
        if (elapsedTime >= timeInSeconds * 1000) {
            clearInterval(timerId!);
            emit('timeIsUp');
        }
        slider.value!.style.width = `${elapsedWidth}px`;
    }, 10);

});

const timeInSecondsRef = ref(timeInSeconds);

watch(timeInSecondsRef, (newValue: any) => {
    clearInterval(timerId!);
    slider.value!.style.width = '0px';
    elapsedTime = 0;
    startTime = new Date().getTime();
    totalWidth = slider.value?.clientWidth ?? 0;
    timerId = setInterval(() => {
        const currentTime = new Date().getTime();
        elapsedTime = currentTime - startTime;
        elapsedWidth = totalWidth * (elapsedTime / (newValue * 1000));
        if (elapsedTime >= newValue * 1000) {
            clearInterval(timerId!);
        }
        slider.value!.style.width = `${elapsedWidth}px`;
    }, 10);
});
</script>

<style scoped>
.slider {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: #0D5D56;
    border-radius: 5px;
}
</style>
