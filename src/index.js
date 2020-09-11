import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import axios from 'axios'
import { ConfigProvider } from 'antd';//全局化配置
import zh_CN from 'antd/lib/locale-provider/zh_CN'//antd中文
import 'moment/locale/zh-cn'//moment时间格式中文

import * as serviceWorker from './serviceWorker';

import RouteList from '@/pages/RouteList'
import 'antd/dist/antd.css';
import './index.css';


// 获取项目配置
axios.get(window.location.origin + '/config.json').then((res) => {
  console.log('获取项目配置==', res)
  window.APP_CONFIG = res.data
})


ReactDOM.render(
  (<ConfigProvider locale={zh_CN}>
    <BrowserRouter> <RouteList /><App /></BrowserRouter>
  </ConfigProvider>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
