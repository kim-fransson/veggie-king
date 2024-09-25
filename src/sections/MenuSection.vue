<script setup>

import hamburgerImg from '@/assets/images/menu-section-mighty-burger.png'
import saladImg from '@/assets/images/menu-section-chickpea-salad.png'
import wrapImg from '@/assets/images/menu-section-chickpea-wrap.png'

const menuItems = [
    {
        name: 'Mighty burger',
        desc: 'Served with fried and drink',
        img: { src: hamburgerImg, alt: 'two hamburgers' }
    },
    {
        name: 'Chickpea\'s salad',
        desc: 'Served with fried and drink',
        img: { src: saladImg, alt: 'a chickpea salad' }
    },
    {
        name: 'Chickpea\'s wrap',
        desc: 'Served with fried and drink',
        img: { src: wrapImg, alt: 'a chickpea wrap' }
    }
]

</script>

<template>
    <section id="menu">
        <h2 class="text-body">Menu</h2>
        <h3 class="text-headline-l">Explore our best food</h3>
        <p class="text-body-2">Below you can see our best selling meals!</p>

        <ul class="menu-items">
            <li v-for="item in menuItems" :key="item.name">
                <div class="menu-item-card">
                    <figure>
                        <img :src="item.img.src" :alt="item.img.alt" />
                    </figure>
                    <div class="menu-item-body">
                        <h2 class="text-headline-m">{{ item.name }}</h2>
                        <p class="text-body-2">{{ item.desc }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.menu-items {
    display: flex;
    gap: 28px;
    margin-top: 48px;
}

.menu-item-card {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: $color-white;
    box-shadow: 0px 10px 20px rgba(33, 33, 33, 0.25);
    border-radius: 0px 0px 16px 16px;

    &:hover {
        >figure>img {
            scale: 1.20;
        }
    }

    >figure {
        max-width: 389px;
        overflow: hidden;

        >img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: scale 200ms ease-in-out;
        }
    }

    >.menu-item-body {
        padding: 16px;

        >h2 {
            margin-bottom: 12px;
        }
    }
}

section>h2 {
    color: $color-orange-600;
    margin-bottom: 8px;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
