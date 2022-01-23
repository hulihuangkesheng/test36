module.exports = {
    lintOnSave: 'warning',
    devServer: {
        proxy: {
            '/api': {
                target: '<url>',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}