/**
 * @desc AES加解密公共方法
 */

import CryptoJS from 'crypto-js'

//密钥
const key = 'sirenruocaihong'
const iv = 'yushangfangzhiyou'
/**
 * @name encrypt
 * @param {String} value 需要加密内容
 * @return {String} encrypted 加密后内容
 * @desc 加密
 */
export function encrypt(value) {
  if (value === undefined) {
    console.error("aes encrypt error: param:'value' is required")
    return ''
  }

  try {
    const str = JSON.stringify(value)
    const ciphertext = CryptoJS.AES.encrypt(str, key, { iv })
    const encrypted = ciphertext.toString()
    return encrypted
  } catch (err) {
    console.error('aes encrypt error: fail')
    return ''
  }
}

/**
 * @name decrypt
 * @param {String} str 需要解密内容
 * @return {String} decrypted 解密后内容
 * @desc 解密
 */
export function decrypt(str) {
  if (!str) {
    console.error("aes decrypt error: param:'str' is required")
    return ''
  }
  try {
    var bytes = CryptoJS.AES.decrypt(str, key, { iv })
    var plaintext = bytes.toString(CryptoJS.enc.Utf8)
    const decrypted = JSON.parse(plaintext)
    return decrypted
  } catch (err) {
    console.error('aes encrypt error: fail')
    return ''
  }
}