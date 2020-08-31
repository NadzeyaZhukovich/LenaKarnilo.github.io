<template>
    <div class="navigation">
        <nav class="navigation__inner">
            <ul class="navigation__list">
                <li class="navigation__item">
                    <router-link to="/">{{$t("homeLink")}}</router-link>
                </li>
                <li class="navigation__item">
                    <LocalizedLink to="/work">
                        {{$t("workLink")}}
                    </LocalizedLink>
                </li>
                <li class="navigation__item">
                    Hobby
                </li>
            </ul>
            <LanguageSelector class="navigation__language-selector"/>
        </nav>
    </div>
</template>

<script>
    import LanguageSelector from "./LanguageSelector";
    import LocalizedLink from "./LocalizedLink";
    export default {
        name: 'Navigation',
        components: {LocalizedLink, LanguageSelector}
    }
</script>

<style scoped lang="scss">
    .navigation__inner {

        @media (min-width: $tablet-width) {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }

    .navigation__language-selector {
        display: none;

        @media (min-width: $tablet-width) {
            display: flex;
        }
    }

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
        opacity: 0.54;
        cursor: pointer;
        font-weight: 600;

        &:hover {
            color: $text-color;
            opacity: 0.86;
        }

        @media (min-width: $tablet-width) {
            border-bottom: none;
            font-size: 18px;
        }
    }
</style>