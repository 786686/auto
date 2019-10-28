module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // /api/xxx => http://official.wufen21.com/api/xxx
                target: 'http://official.wufen21.com/',
                ws: true,
                changeOrigin: true
            }
        }
    }
};
