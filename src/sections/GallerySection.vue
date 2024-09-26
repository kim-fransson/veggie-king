<script setup>

import galleryPhoto1 from '@/assets/images/gallery-photo-1.png'
import galleryPhoto2 from '@/assets/images/gallery-photo-2.png'
import galleryPhoto3 from '@/assets/images/gallery-photo-3.png'
import galleryPhoto4 from '@/assets/images/gallery-photo-4.png'
import galleryPhoto5 from '@/assets/images/gallery-photo-5.png'
import galleryPhoto6 from '@/assets/images/gallery-photo-6.png'

const images = [
    { src: galleryPhoto1, alt: "a person holding a bun filled with vegetables" },
    { src: galleryPhoto2, alt: "a person serving a falafel burger to three ladies" },
    { src: galleryPhoto3, alt: "boxes of chickpeas salads" },
    { src: galleryPhoto4, alt: "a woman eating a hamburger" },
    { src: galleryPhoto5, alt: "a woman getting served a salad" },
    { src: galleryPhoto6, alt: "a hamburger and two portions of fries" }
]

</script>

<template>
    <section>
        <h2 class="text-headline-l">Good food = happy clients</h2>

        <div class="gallery">
            <figure v-for="(image, index) in images" :key="`gallery-image-${index}`">
                <img loading="lazy" :src="image.src" :alt="image.alt" />
            </figure>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.gallery {
    margin-top: 28px;
    width: calc(100% + 2 * $section-padding-desktop);
    display: grid;
    max-height: 1200px;

    @media (min-width: $tablet-breakpoint) {
        grid-template-columns: repeat(3, 1fr);
        max-height: 624px;
    }

    >figure {
        overflow: hidden;

        >img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: scale 200ms ease-in-out;
        }

        &:hover>img {
            scale: 1.20;
        }
    }
}

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>