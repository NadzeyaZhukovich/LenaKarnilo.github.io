const path = require('path');

function addStyleResource(rule) {
    rule
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [path.resolve(__dirname, './src/assets/scss/_variables.scss')],
        });
}

module.exports = {
    chainWebpack: (config) => {

    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    // or if you use scss
    types.forEach((type) => {
        addStyleResource(config.module.rule('scss').oneOf(type));
    });

    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
        .oneOf('raw')
        .resourceQuery(/raw/)
        .use('raw-loader')
        .loader('raw-loader')
        .end()
        .end()
        .oneOf('base64')
        .resourceQuery(/base64/)
        .use('url-loader')
        .loader('url-loader')
        .end()
        .end()
        .oneOf('inline')
        .resourceQuery(/inline/)
        .use('babel-loader')
        .loader('babel-loader')
        .end()
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
        .options({
            svgo: {
                plugins: [
                    // { cleanupAttrs: false },
                    { removeDoctype: true },
                    { removeComments: true },
                    {
                        cleanupIDs: false,
                    },
                    {
                        removeViewBox: false,
                    },
                ],
                removeViewBox: false,
            },
        })
        .end()
        .end()
        .oneOf('external')
        .use('file-loader')
        .loader('file-loader')
        .options({
            name: 'assets/[name].[hash:8].[ext]',
        });
    },
}