<template>
    <section class="contact">
        <ul class="contact__list">
            <li class="contact__item"
                v-for="media in socialMedia"
                :key="media.name">
                <a :href="media.link" target="_blank">
                    <span class="visually-hidden">{{media.name}}</span>
                    <InlineIcon :icon-name="media.name"
                                class="contact__icon"></InlineIcon>
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
    import SocialMedia from "../services/SocialMedia";
    import InlineIcon from "./InlineIcon";

    export default {
        name: 'Contact',
        components: { InlineIcon },
        data() {
            return {
                socialMedia: null
            }
        },
        created() {
            SocialMedia.getSocialMedia()
            .then(response => {
                this.socialMedia = response.data.socialMedia
            })
        }
    }
</script>

<style scoped lang="scss">
    .contact {
        padding-top: 20px;

        @media (min-width: $tablet-width) {
            padding-top: 40px;
        }
    }

    .contact__list {
        list-style-type: none;
        display: flex;
    }

    .contact__item {
        margin-right: 10px;
    }

    .contact__icon {
        & > /deep/ svg {
            opacity: 54%;
            transition: opacity 0.3s, transform 0.5s;
            cursor: pointer;

            @media (min-width: $tablet-width) {
                width: 30px;
                height: 30px;
            }

            &:hover {
                opacity: 86%;
                transform: scale(1.1);
            }
        }
    }
</style>