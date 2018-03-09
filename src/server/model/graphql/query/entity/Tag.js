const Data = require('../../../../data')
const { sortFn } = require('../../../../common/utils')
const PostEntity = require('./Post')

class Tag {
  constructor() {
    this.tags = Data.tags
  }
  getTags() {
    return this.tags.sort(
      sortFn(tag => PostEntity.getPostsByTagName(tag.name).length, -1)
    )
    // return this.tags
  }
  getTagByName(name) {
    return (
      this.tags.filter(tag => {
        return tag.name === name
      })[0] || {}
    )
  }
}

module.exports = new Tag()
