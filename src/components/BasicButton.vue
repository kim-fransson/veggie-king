<script setup>

const { variant = 'basic' } = defineProps(['variant'])

</script>

<template>
    <button class="text-button" :class="variant">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
button {
    border: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    gap: 10px;

    cursor: pointer;
    transition: background 200ms ease-in-out;
}

.basic {
    background: $color-orange-600;
    border-radius: 8px;
    padding: 9px 16px;

    &:hover {
        background: $color-orange-500;
    }
}

.ghost {
    background: none;
}

button:focus-visible {
    @include focus-ring;
}
</style>
