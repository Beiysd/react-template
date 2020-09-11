import { encrypt, decrypt } from "@/utils/aes";

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

export {
  objectToSearch,
  getSearchObject
}