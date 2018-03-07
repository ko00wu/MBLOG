import { fetch } from './utils'

/**
 * 请求文章列表
 * @param {Object} pager - 请求页面的参数
 * @param {Function} success - 成功的回调函数
 */
export const getPosts = (pager = { number: 1, size: 5 }, success) => {
  const query = `{
    posts(
      pager:{
        number:${pager.number},
        size:${pager.size}
    }){
      id,
      title,
      subtitle,
      createdTime,
      tags{
        id,
        name,
        label
      }
    }
  }`

  return fetch({
    t: 'posts',
    query,
    success
  })
}

/**
 * 请求文章列表
 * @param {*} id - 请求文章的id
 * @param {Function} success - 成功的回调函数
 */
export const getPostById = (id, success) => {
  const query = `{
    post(id:${Number(id)}){
      id,
      name,
      title,
      subtitle,
      createdTime,
      content,
      tags{
        id,
        name,
        label
      }
    }
  }`
  return fetch({
    t: 'post',
    query,
    success
  })
}

/**
 * 获取标签列表
 * @param {Function} success - 成功的回调函数
 */
export const getTags = success => {
  const query = `{
    tags(name:${''}){
      id,
      name,
      label,
      posts{
        id,
        title,
      }
    }
  }`
  return fetch({
    t: 'tags',
    query,
    success
  })
}

/**
 * 获取指定标签
 * @param {String} tagName - 标签名
 * @param {Function} success - 成功的回调函数
 */
export const getTagByName = (tagName, success) => {
  const query = `{
    tags(name:${tagName}){
      id,
      name,
      label,
      posts{
        id,
        title
      }
    }
  }`
  return fetch({
    t: 'tag',
    query,
    success
  })
}
