import axios from 'axios'

// 判断是线上环境还是测试环境
const BASE_URL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8080/'
    : 'https://imko00.com/'

const axiosIns = axios.create({
  baseURL: BASE_URL + 'api/v1'
})

/** 暴露的方法
 * fetch 查询语句
 * @param t {String}  查询标识
 * @param query {String} 查询语句
 * @param method {String} 请求方式
 * @param success {Function} 请求成功的回调函数
 */
export async function fetch({
  t = '',
  query = '',
  method = 'get',
  success = () => {}
}) {
  try {
    const { data } = await axiosIns.request({
      method,
      params: {
        query
      }
    })
    try {
      /**
       * 接受执行报错
       */
      success(data.data)
    } catch (e) {
      console.warn(`接口${t}执行报错：\n错误信息：${e.message}`)
    }
  } catch (e) {
    /**
     * 接受网路报错
     */
    console.warn(`接口${t}网路报错：\n错误信息：${e.message}`)
  }
}
