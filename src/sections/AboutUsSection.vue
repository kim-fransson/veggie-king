<script setup>

import sectionImage from '@/assets/images/about-us-section-food.png'

</script>

<template>
    <section id="about">
        <div id="text-container">
            <h2 class="text-body">About Us</h2>
            <h3 class="text-headline-l">Few words about us</h3>
            <p class="text-body">
                We are not ordinary food truck.
                We create a place overflowing with positive energy that it expresses important to us values.
                Get to know them specifically.
            </p>
        </div>

        <div class="green-ball">
            <img :src="sectionImage" alt="bowl of chickpeas and vegetables" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.green-ball {
    position: absolute;
    background: $color-green-600;
    aspect-ratio: 1 / 1;
    width: 646px;
    border-radius: 100%;
    left: 0;
    translate: -40% 0;
    object-fit: contain;

    >img {
        position: absolute;
        top: 50%;
        right: 15%;
        translate: 50% -50%;
    }
}

#text-container {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        color: $color-orange-600;
    }
}

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
}
</style>