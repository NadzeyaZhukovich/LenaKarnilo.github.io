<template>
    <header class="header"
            :class="{menuOpen: IsOpenMenu}">
        <div class="header__menu-icons"
             @click="toggleMenu">
            <BurgerMenuIcon class="icon icon--burger-menu"
                            v-if="!IsOpenMenu"/>
            <CloseIcon class="icon icon--close"
                       v-else/>
        </div>
        <div class="header__nav-wrapper">
            <Navigation class="menuClose"
                        :class="{menuOpen: IsOpenMenu}"/>
            <div class="header__nav-inner">
                <Contact v-if="IsOpenMenu"/>
                <LanguageSelector v-if="IsOpenMenu"/>
            </div>
        </div>

    </header>
</template>

<script>
    import CloseIcon from "@/assets/icons/ic_close.svg?inline";
    import BurgerMenuIcon from "@/assets/icons/ic_menu.svg?inline";

    import Navigation from "./Navigation";
    import Contact from "./Contact";
    import LanguageSelector from "./LanguageSelector";
    export default {
        name: 'Header',
        components: {
            LanguageSelector,
            Contact,
            Navigation,
            CloseIcon,
            BurgerMenuIcon
        },
        data() {
            return {
                IsOpenMenu: false,
            }
        },
        methods: {
            toggleMenu() {
                this.IsOpenMenu = !this.IsOpenMenu;
            }
        },

        watch: {
            IsOpenMenu(newValue) {
                if (newValue === true) {
                    document.body.classList.add('open');
                } else {
                    document.body.classList.remove('open');
                }
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
        opacity: 0.54;

        &:hover {
            opacity: 0.86;
            transform: scale(1.1);
        }
    }

    .header__nav-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 60px);
    }

    .header__nav-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header.menuOpen {
        height: 100vh;
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