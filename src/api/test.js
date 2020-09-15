/**
 * 测试接口
 */
import { post, get } from '@/utils/axios'
import { message } from 'antd'

export async function testGet(area) {
  const url = `/api-juhe/simpleWeather/query?city=${area}&key=a955e4bef62b5d3a70fc852ada4dab5c`

  const { type, res, msg } = await post(url)
  if (type) {
    return { type, res }//正常数据
  } else {
    message.error(msg)
    return { type: false, msg: '系统异常' }//空数据,返回自己需要的格式
  }
}