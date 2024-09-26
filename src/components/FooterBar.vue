<script setup>

import logo from '@/assets/icons/logo.svg'
import { links, socials } from '@/config';


</script>

<template>
    <footer>
        <ul class="content-grid">
            <img :src="logo" alt="The veggie king" width="206" height="40" loading="lazy" />

            <ul class="link-list">
                <li v-for="{ name, href } in links" :key="name">
                    <a class="text-caption" :href>{{ name }}</a>
                </li>
            </ul>

            <div>
                <p class="text-body-2">Stay up to date with our new openings, upcoming events, seasonal specials and
                    promotions. Check our
                    socials.</p>
                <ul class="social-list">
                    <li v-for="social in socials" :key="social.name">
                        <a :href="social.href">
                            <component :is="social.icon"></component>
                        </a>
                    </li>
                </ul>
            </div>
        </ul>

        <div class="divider" />

        <span class="text-body-2">© 2023 The Veggie King</span>
    </footer>
</template>

<style lang="scss" scoped>
.social-list {
    margin-top: 24px;
    display: flex;
    gap: 20px;
}

.link-list {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 12px;

    >li>a {
        text-transform: uppercase;
    }

    @media (min-width: $tablet-breakpoint) {
        flex-direction: row;
        gap: 40px;
    }
}

.content-grid {
    display: grid;
    gap: 40px;

    @media (min-width: $tablet-breakpoint) {
        grid-template-columns: auto auto minmax(0, 495px);
    }
}

footer {
    background: $color-gray-300;
    padding: 20px $section-padding-mobile;

    @media (min-width: $tablet-breakpoint) {
        padding: 20px $section-padding-tablet;
    }

    @media (min-width: $desktop-breakpoint) {
        padding: 20px $section-padding-desktop;
    }
}

.divider {
    background: $color-gray-900-32;
    height: 1px;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-right: -$section-padding-desktop;
    margin-left: -$section-padding-desktop;
}
</style>