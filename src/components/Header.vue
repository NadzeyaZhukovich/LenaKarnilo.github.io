<template>
    <header class="header">
        <div class="header__menu-icons" @click="toggleMenu">
            <BurgerMenuIcon class="icon icon--burger-menu" v-if="!openedMenu"/>
            <CloseIcon class="icon icon--close" v-else/>
        </div>
        <Navigation class="menuClose" :class="{menuOpen: openedMenu}"/>
    </header>
</template>

<script>
    import CloseIcon from "@/assets/icons/ic_close.svg?inline";
    import BurgerMenuIcon from "@/assets/icons/ic_menu.svg?inline";

    import Navigation from "./Navigation";
    export default {
        name: 'Header',
        components: {
            Navigation,
            CloseIcon,
            BurgerMenuIcon
        },
        data() {
            return {
                openedMenu: false,
            }
        },
        methods: {
            toggleMenu() {
                this.openedMenu = !this.openedMenu;
            }
        }
    }
</script>

<style scoped lang="scss">
    .header__menu-icons {
        display: flex;
        justify-content: flex-end;

        @media (min-width: $tablet-width) {
            display: none;
        }
    }

    .icon {
        transition: opacity 0.3s, transform 0.5s;
        opacity: 54%;

        &:hover {
            opacity: 86%;
            transform: scale(1.1);
        }
    }

    .menuClose {
        display: none;

        @media (min-width: $tablet-width) {
            display: block;
        }
    }

    .menuOpen {
        display: block;
    }
</style>