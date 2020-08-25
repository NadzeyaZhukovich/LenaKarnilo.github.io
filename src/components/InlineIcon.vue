<template>
    <div ref="iconWrapper"></div>
</template>

<script>
    const iconCache = new Map();

    function getIconPath(icon) {
        const images = require.context('@/assets/icons/', false, /\.svg$/);
        return images(`./${icon}.svg`);
    }

    export default {
        name: 'inline-icon',
        components: {},
        props: ['iconName'],
        watch: {
            iconName() {
                this.setIcon();
            },
        },
        mounted() {
            this.setIcon();
        },
        methods: {
            fetchOnce(request) {
                if (!iconCache.has(request)) {
                    iconCache.set(
                        request,
                        fetch(request).then((v) => v.text())
                    );
                }
                return iconCache.get(request);
            },

            getIconContent(iconName) {
                const iconPath = getIconPath(iconName);
                return this.fetchOnce(iconPath);
            },

            async setIcon() {
                const iconContent = await this.getIconContent(this.iconName);
                if (iconContent && this.$refs.iconWrapper) {
                    this.$refs.iconWrapper.innerHTML = iconContent;
                }
            },
        },
    };
</script>

<style lang="scss" scoped></style>
