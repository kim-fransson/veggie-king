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
    width: 358px;
    border-radius: 100%;

    object-fit: contain;
    bottom: 0;
    right: 0;
    translate: 50% 15%;

    >img {
        height: 253px;
        width: 259px;
        position: absolute;
        top: 50%;
        translate: -20% -50%;
        transform: scaleX(-1);
    }

    @media (min-width: $tablet-breakpoint) and (max-width: $desktop-breakpoint) {
        width: 478px;
        translate: -60% 0;
        bottom: auto;
        left: 0;
        right: auto;

        >img {
            height: 357px;
            width: 349px;
            left: 7%;
            translate: 50% -50%;
        }
    }

    @media (min-width: $desktop-breakpoint) {
        width: 646px;
        translate: -40% 0;
        bottom: auto;
        right: auto;
        left: 0;

        >img {
            height: 445px;
            width: 456px;
            right: 15%;
            translate: 50% -50%;
        }
    }
}

#text-container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    max-width: 264px;

    h2 {
        color: $color-orange-600;
    }

    @media (min-width: $tablet-breakpoint) and (max-width: $desktop-breakpoint) {
        max-width: 430px;
    }

    @media (min-width: $desktop-breakpoint) {
        max-width: 600px;
    }
}

section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    @media (min-width: $tablet-breakpoint) {
        align-items: end;
    }
}
</style>