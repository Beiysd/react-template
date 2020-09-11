/**
 * @desc axios 接口方法
 */
import axios from 'axios'
import { notification } from 'antd'

// 创建一个axios 实例

const axiosInstance = axios.create({
  responseType: 'json',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json;charset=utf-8', }
});