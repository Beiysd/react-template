/**
 * @name 路由配置项
 * 
 */
import Home from '@/pages/Home'
import DateSelect from '@/pages/DateSelect'
import Swiper from '@/pages/Swiper'


export default [
  {
    path: '/',
    exact: true,
    name: '首页',
    component: Home,
    children:[
      {
        path: '/swiper',
        exact: true,
        name: 'Swiper滑动',
        component: Swiper,
      }
    ]
  },
  {
    path: '/date-select',
    exact: true,
    name: '时间类型选择',
    component: DateSelect
  },
]