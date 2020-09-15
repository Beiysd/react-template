/**
 * @desc 配置开发环境代理
 */
const { createProxyMiddleware } = require('http-proxy-middleware')


const createProxy = (url = '', target = '') =>
  createProxyMiddleware(url, {
    target,
    changeOrigin: true,
    pathRewrite: {
      [`^${url}`]: '',
    },
  })



/**
 * 1.默认代理
 * const url = '/xxx'
 * await get(url)
 * 
 * 2.自定义代理
 * await get('/api-abc'+url)
 */
module.exports = function (app) {
  app.use(
    // createProxy('/proxy', `http://XXX`),开发
    // createProxy('/api-test', `http://XXX`),测试
    // createProxy('/api-prov', `http://XXX`),生产
    createProxy('/api-juhe', `http://apis.juhe.cn`)
  )
}


