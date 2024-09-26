<script setup>
import { onMounted, onUnmounted, ref } from 'vue';


const props = defineProps(['images'])

const currentIndex = ref(0);

const slideNext = () => {
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
    <figure>
        <img :src="images[currentIndex].src" :alt="images[currentIndex].alt">
    </figure>
</template>

<style lang="scss" scoped>
figure {
    width: 386px;
    height: 335px;

    >img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (min-width: $tablet-breakpoint) {
        width: 525px;
        height: 456px;
    }
}
</style>