<script setup>

import logo from '@/assets/icons/logo.svg'

const links = [{ name: 'about us', href: '#about' }, { name: 'menu', href: '#menu' }, { name: 'contact', href: '#contact' }]

</script>

<template>
    <div class="container">
        <nav>
            <img :src="logo" width="206" height="40" alt="The veggie king" />

            <ul>
                <li v-for="{ name, href } in links" :key="name">
                    <a class="text-caption" :href>{{ name }}</a>
                </li>
            </ul>
        </nav>
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
    padding: 20px $section-padding;
    margin: 0 auto;
}

ul {
    display: flex;
    gap: 38px;
}

a {
    text-transform: uppercase;
}
</style>
