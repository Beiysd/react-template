/**
 * @desc axios 接口方法
 */
import axios from 'axios'
import { notification } from 'antd'
import { proxys } from '@/utils'

//时间戳
const date = new Date().getTime()
const token = '3355ef284f8045f1b9770deed57175fd'

const DEV_PROXY = proxys().devProxy//开发
const TEST_PROXY = proxys().testProxy//测试
const PROV_PROXY = proxys().provProxy//生产


const isDev = process.env.NODE_ENV === 'development'

//默认代理
const defaultProxy = '/proxy'
//校验条件-01,是否含有自定义代理
const proxyRegx = /^\/api-/
//校验条件-02,是否有http代理
const httpRegx = /^http(s?):\/\//
//状态类型
const status = {
  success: 0,//成功
  tokenfail: '1001',//token失效
  logexpire: '4001',//登录已过期
}

function urlTest(url = "") {
  let urls = ""
  if (httpRegx.test(url) || proxyRegx.test(url)) {
    urls = url
  } else {
    urls = isDev ? defaultProxy + url : PROV_PROXY + url
  }
  return urls
}

// 创建一个axios 实例
const axiosInstance = axios.create({
  baseURL: isDev ? "" : PROV_PROXY,
  timeout: 30000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    // Authorization: token//如需token验证，在此处添加token
  },

});
/**
 * @name post
 * @param {String} url 请求地址
 * @param {Object} param 请求参数
 * @return {Object} 返回值
 * @description post请求的公共方法
 */
async function post(url, param) {
  try {
    const response = await axiosInstance.post(urlTest(url), param)
    const res = response.data
    //可在此处添加特殊code标记，如过期提示-返回登录
    if (res.error_code === status.success) {
      return { type: true, res: res }
    } else {
      return { type: false, msg: res ? res.reason : '系统异常' }
    }
  } catch (error) {
    console.log('axios-post', error)
    return { type: true, msg: '系统异常' }
  }
}

/**
 * @name get
 * @param {String} url+date 请求地址+参数+时间戳
 * @return {Object} 返回值
 * @description get请求的公共方法
 */
async function get(url) {
  try {
    const response = await axiosInstance.get(`${urlTest(url)}`)
    const res = response.data
    //可在此处添加特殊code标记，如过期提示-返回登录
    if (res.error_code === status.success) {
      return { type: true, res: res }
    } else {
      return { type: false, msg: res ? res.reason : '系统异常' }
    }
  } catch (error) {
    console.log('axios-get', error)
    return { type: false, msg: '系统异常' }
  }
}

export {
  post, get
}