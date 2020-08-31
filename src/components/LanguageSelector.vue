<template>
    <ul class="language-selector__list">
        <li class="language-selector__item"
            :class="{activeLanguage: lang.key === currentLanguage.key}"
            v-for="lang in languages"
            :key="lang.key"
            @click=setLanguage(lang)>{{lang.value}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'LanguageSelector',
        data() {
            return {
                languages: [
                    { key: "en", value: "en"},
                    { key: "ru", value: "ru"}
                ]
            }
        },
        computed: {
            currentLanguage: function() {
                return this.languages.find(lang => lang.key === this.$i18n.locale);
            }
        },
        methods: {
            setLanguage(lang) {
                if (this.currentLanguage.key !== lang.key ) {
                    this.$router.push({name: this.$route.name, params: {locale: lang.key}});
                    this.$i18n.locale = lang.key;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .language-selector__list {
        list-style-type: none;
        padding: 0;
        display: flex;
        align-items: center;
    }

    .language-selector__item {
        padding: 3px 5px;
        border-right: 1px solid $border-color;
        opacity: 0.54;
        font-weight: 600;
        cursor: pointer;

        &:last-child {
            border-right: none;
        }

        &:hover {
            opacity: 0.86;
        }
    }

    .activeLanguage {
        opacity: 0.86;
    }
</style>