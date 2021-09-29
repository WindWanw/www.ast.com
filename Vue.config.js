module.exports = {
    publicPath: "./",
    devServer: {
        proxy: {
            "/ys": {
                target: "https://hk4e-api.mihoyo.com/",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/ys': ''
                }
            }
        },
        open: true
    },
    lintOnSave: false,
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    }
};