/**
 * @desc 配置开发环境代理
 */

const proxy = require('http-proxy-middleware')

const createProxy = (url = "", target = "") =>
  proxy(url, {
    target,
    changeOrigin: true,
    pathRewrite: {
      [`^${url}`]: '',
    }
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
    createProxy('/proxy', `http://edu1.zhzy.net.cn`),
    createProxy('/api-test', 'http://test.guoli-edu.com')
  )
}



// module.exports = function (app) {
//   app.use(proxy(
//     "/zhzy-edu-it-system",
//     {
//       target: "http://edu1.zhzy.net.cn",
//       changeOrigin: true
//     }
//   ))
//   //app.use(proxy(...)) //可以配置多个代理
// }