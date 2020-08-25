<template>
    <section class="about-me">
        <h2 class="about-me__header">{{aboutMe.header}}</h2>
        <p class="about-me__text"
           v-for="(contentItem, index) in aboutMe.content"
           :key="index"
           v-html="contentItem.text"></p>
    </section>
</template>

<script>
    import AboutMeEN from "../services/AboutMeEN";

    export default {
        name: 'AboutMe',
        data() {
            return {
                aboutMe: []
            }
        },
        created() {
            AboutMeEN.getAboutMe('en')
                .then(response => {
                    this.aboutMe = response.data.aboutMe
                })
        }
    }

</script>

<style scoped lang="scss">
    .about-me {
        max-width: 600px;
    }

    .about-me__header {
        font-size: 30px;
        font-weight: 400;
        margin: 20px 0;

        @media (min-width: $tablet-width) {
            margin: 40px 0;
            font-size: 50px;
        }
    }

    .about-me__text {
        margin-bottom: 20px;
        line-height: 24px;

        @media (min-width: $tablet-width) {
            font-size: 20px;
            line-height: 30px;
        }
    }
</style>