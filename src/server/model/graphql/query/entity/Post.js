const Data = require('../../../../data')
const { sortFn } = require('../../../../common/utils')

class Post {
  constructor() {
    this.posts = Data.posts
  }

  // 根据坐标查找指定文章
  getPostById(id) {
    return this.posts[id]
  }

  // 根据tagName得到文章列表
  getPostsByTagName(tagName) {
    // return this.posts
    return this.posts.filter(post => post.tags.includes(tagName))
  }

  // 根据页码获取文章列表
  getPostList({ number, size }) {
    return this.posts
      .sort(sortFn('createdTime', -1))
      .slice((number - 1) * size, number * size)
  }
}

module.exports = new Post()
