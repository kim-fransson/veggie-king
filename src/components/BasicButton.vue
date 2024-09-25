<template>
    <button class="text-button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
button {
    padding: 9px 16px;
    border: none;
    display: inline-block;
    text-decoration: none;
    display: flex;
    outline: none;
    gap: 10px;
    background: $color-orange-600;
    border-radius: 8px;
    cursor: pointer;
    transition: background 200ms ease-in-out;
}

button:hover {
    background: $color-orange-500;
}

button:focus-visible {
    @include focus-ring;
}
</style>
