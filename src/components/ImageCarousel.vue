<script setup>
import { onMounted, onUnmounted, ref } from 'vue';


const props = defineProps(['images'])

const currentIndex = ref(0);

const slideNext = () => {
    console.log(currentIndex.value)
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
}

const interval = ref(null);

onMounted(() => {
    interval.value = setInterval(slideNext, 3000)
})

onUnmounted(() => {
    if (interval.value) {
        clearInterval(interval.value)
    }
})

</script>

<template>
    <img :src="images[currentIndex].src" :alt="images[currentIndex].alt">
</template>

<style lang="scss" scoped></style>