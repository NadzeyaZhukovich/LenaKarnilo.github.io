<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item">Work</li>
            <li class="navigation__item">Hobby</li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

<style scoped lang="scss">
    .navigation__list {
        list-style-type: none;
        display: flex;
        flex-direction: column;

        @media (min-width: $tablet-width) {
            flex-direction: row;
            justify-content: flex-end;
        }
    }

    .navigation__item {
        padding: 20px;
        border-bottom: 1px solid #BCBCBC;
        transition: opacity 0.3s;
        opacity: 54%;

        &:hover {
            color: $text-color;
            opacity: 86%;
        }

        @media (min-width: $tablet-width) {
            border-bottom: none;
            font-size: 18px;
        }
    }
</style>