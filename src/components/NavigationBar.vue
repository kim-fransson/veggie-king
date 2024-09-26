<script setup>

import logo from '@/assets/icons/logo.svg'
import { links } from '@/config'
import BasicButton from './BasicButton.vue';

import menuIcon from '@/assets/icons/menu-icon.svg'
import closeMenuIcon from '@/assets/icons/close-menu-icon.svg'
import { ref } from 'vue';

const menuOpen = ref(false)

const toggleMenu = () => {
    if (menuOpen.value) {
        menuOpen.value = false;
    } else {
        menuOpen.value = true;
    }
}


</script>

<template>
    <div class="container" :class="{ open: menuOpen }">
        <nav>
            <img :src="logo" width="206" height="40" alt="The veggie king" />
            <ul>
                <li v-for="{ name, href } in links" :key="name">
                    <a class="text-caption" :href>{{ name }}</a>
                </li>
            </ul>
            <BasicButton @click="toggleMenu()" variant="ghost" aria-label="open menu">
                <img :src="menuOpen ? closeMenuIcon : menuIcon" width="24" height="24"
                    :alt="menuOpen ? 'an X' : 'three lines'" />
            </BasicButton>
        </nav>
        <Transition name="menu">
            <div v-if="menuOpen" class="menu-content">
                <ul class="menu-links">
                    <li @click="toggleMenu" v-for="{ name, href } in links" :key="name">
                        <a class="text-caption" :href>{{ name }}</a>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    background: $color-gray-50;
    box-shadow: 0px 10px 20px rgba(33, 33, 33, 0.25);
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px $section-padding-mobile;
    margin: 0 auto;

    @media (min-width: $tablet-breakpoint) {
        padding: 20px $section-padding-tablet;
    }

    @media (min-width: $desktop-breakpoint) {
        padding: 20px $section-padding-desktop;
    }


    >ul {
        display: flex;
        gap: 38px;

        @media (max-width: $tablet-breakpoint) {
            display: none;
        }
    }

    >button {
        display: none;

        @media (max-width: $tablet-breakpoint) {
            display: flex;
        }
    }
}

.menu-content {
    background: $color-gray-50;
    box-shadow: 0px 10px 10px rgba(33, 33, 33, 0.25);
    position: fixed;
    z-index: 90;
    height: 50%;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    >ul {
        opacity: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 80px;
        height: 100%;
    }
}

.menu-enter-active {
    transition: height 0.3s ease-in;
}

.menu-enter-active .menu-links {
    transition: opacity 0.1s ease-in;
}

.menu-enter-active .menu-links {
    transition-delay: 0.2s;
}

.menu-leave-active {
    transition: height 0.2s ease-out;
}

.menu-leave-active .menu-links {
    transition: opacity 0.1s ease-out;
}

.menu-enter-from,
.menu-leave-to {
    height: 0px;
}

.menu-enter-from .menu-links,
.menu-leave-to .menu-links {
    opacity: 0;
}
</style>
