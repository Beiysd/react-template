import { encrypt, decrypt } from "@/utils/aes";

/**
 * @name proxy
 * @desc 域名地址，代理前缀
 */
function proxys() {
  return ({
    "devProxy": "http://edu1.zhzy.net.cn",
    "testProxy": "http://test.guoli-edu.com",
    "provProxy": "http://edu.guoli-edu.com"
  })

}


/**
 * @name objectToSearch
 * @param {Object} value 地址栏传递内容
 * @desc 将value转化为加密字符串拼接到url后缀
 */
function objectToSearch(value) {
  if (value) {
    let encrypted = '?' + encrypt(value)
    return encrypted
  }
}

/**
 * @name getSearchObject
 * @param {String} window.location.search
 * @desc 获取url中search参数,并转化为对象
 */
function getSearchObject() {
  let value = window.location.search.split('?')
  if (value.length > 1) {
    let str = value[1]
    let decrypted = decrypt(str)
    return decrypted
  } else {
    return {}
  }
}
/**
 * @name randomNum
 * @param {Number} num 生成几位随机数
 * @param Math.random() 0-1之间的随机数
 * @param Math.floor() 向下取整
 * @description 随机数生成
 */

function randomNum(num) {
  let index = num && Number(num) ? Number(num) : 18 //默认生成18位随机数
  let randoms = ''
  for (let i = 0; i < index; i++) {
    randoms += JSON.stringify(Math.floor(Math.random() * 10))
  }
  return randoms
}

export {
  proxys,
  objectToSearch,
  getSearchObject,
  randomNum
}