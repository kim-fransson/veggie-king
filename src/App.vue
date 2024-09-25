<script setup>
import FooterBar from './components/FooterBar.vue';
import NavigationBar from './components/NavigationBar.vue';
import AboutUsSection from './sections/AboutUsSection.vue';
import ContactSection from './sections/ContactSection.vue';
import GallerySection from './sections/GallerySection.vue';
import HeroSection from './sections/HeroSection.vue';
import MenuSection from './sections/MenuSection.vue';
</script>

<template>
  <NavigationBar />
  <main>
    <HeroSection />
    <AboutUsSection />
    <MenuSection />
    <GallerySection />
    <ContactSection />
  </main>
  <FooterBar />
</template>

<style scoped></style>
