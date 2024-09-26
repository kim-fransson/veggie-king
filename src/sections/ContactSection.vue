<script setup>

import clockIcon from "@/assets/icons/time-icon.svg"
import mapIcon from "@/assets/icons/map-icon.svg"
import phoneIcon from "@/assets/icons/phone-icon.svg"

const contactInformation = [
    { icon: { src: clockIcon, alt: 'clock' }, name: 'Working Hours', value: 'Today 12 pm - 9pm' },
    { icon: { src: mapIcon, alt: 'map pin' }, name: 'Find Us', value: '3883 Rupert St, Vancouver' },
    { icon: { src: phoneIcon, alt: 'phone' }, name: 'Call to Us', value: '(604) 569-2198' }
]

</script>

<template>
    <section id="contact">
        <h2 class="text-body">Contact</h2>
        <h3 class="text-headline-l">We're waiting for you!</h3>
        <ul class="contact-information">
            <li v-for="item in contactInformation" :key="item.name">
                <div class="contact-card">
                    <img width="48" height="48" :src="item.icon.src" :alt="item.icon.alt" />
                    <span class="text-headline-m">{{ item.value }}</span>
                    <h2 class="text-body-2">{{ item.name }}</h2>
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.contact-information {
    display: grid;
    justify-items: stretch;
    width: 100%;
    gap: 28px;
    margin-top: 48px;

    @media (min-width: $tablet-breakpoint) {
        grid-template-columns: repeat(3, 1fr);
    }
}

.contact-card {
    background: $color-white;
    box-shadow: 0px 10px 20px rgba(33, 33, 33, 0.25);
    border-radius: 95.5px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
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