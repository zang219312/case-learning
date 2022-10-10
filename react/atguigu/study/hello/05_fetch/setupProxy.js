const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://localhost:5000',
      changeOrigin: true, // 控制请求头中的host
      pathRewrite: { '^/api1': '' }
    })
  )
}
