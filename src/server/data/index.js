/**
 * Created by ko00 on 18-4-26.
 */

const Path = require('path')
const Fs = require('fs')
const marked = require('marked')
const POSTS = require('./posts')
const TAGS = require('./tags')

const POST_DIR = Path.join(__dirname, '/posts/')

/**
 * Data
 * @param {Array} 文章列表
 * @param {Array} 标签列表
 */
const Data = {
  posts: [],
  tags: TAGS.map((tag, index) => {
    return {
      ...tag,
      id: index
    }
  })
}

// read .md file
function getPosts() {
  return POSTS.map((post, index) => {
    const data = Fs.readFileSync(`${POST_DIR}${post.name}.md`)
    return {
      ...post,
      id: index,
      content: marked(data.toString())
    }
  })
}
Data.posts = getPosts()

module.exports = Data
