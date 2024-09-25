<script setup>
import BasicButton from '@/components/BasicButton.vue';

import arrowIcon from '@/assets/icons/check-menu-icon.svg'
import ImageCarousel from '@/components/ImageCarousel.vue';

import slide1 from '@/assets/images/hero-section-slide-food-1.png'
import slide2 from '@/assets/images/hero-section-slide-food-2.png'
import slide3 from '@/assets/images/hero-section-slide-food-3.png'
import slide4 from '@/assets/images/hero-section-slide-food-4.png'

import chilliesAndPeppers from '@/assets/images/hero-section-food.png'

const images = [
    { src: slide1, alt: 'bowl with couscous & vegetables' },
    { src: slide2, alt: 'bowl with chicken & vegetables' },
    { src: slide3, alt: 'bowl with avocado & vegetables' },
    { src: slide4, alt: 'bowl with salmon & vegetables' }
]

const navigateToMenu = () => {
    window.location.href = "#menu"
}

</script>

<template>
    <section id="hero">
        <h1 class="text-headline-xl">Healthy & Fresh Food For You</h1>
        <p class="text-body-2">Created for lovers of healthy, delicious and non-obvious food.</p>
        <BasicButton @click="navigateToMenu()">Check menu <img :src="arrowIcon" alt="arrow pointing to the right" />
        </BasicButton>

        <div class="green-wall">
            <ImageCarousel :images class="carousel" />
        </div>

        <figure>
            <img :src="chilliesAndPeppers" alt="chillies & black peppers" />
        </figure>
    </section>
</template>

<style lang="scss" scoped>
figure {
    width: 212px;
    height: 219px;
    object-fit: contain;
    position: absolute;
    bottom: 0;
    left: 0;
    translate: 0 45%;
}

.green-wall {
    background: $color-green-600;
    width: 28%;
    right: 0;
    height: 100%;
    position: absolute;
}

.carousel {
    position: absolute;
    width: 525px;
    height: 456px;
    object-fit: contain;
    top: 50%;
    right: 60%;
    translate: 0 -50%;
}

h1 {
    max-width: 500px;
    margin-bottom: 10px;
}

p {
    max-width: 360px;
    margin-bottom: 16px;
}

section {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}
</style>
