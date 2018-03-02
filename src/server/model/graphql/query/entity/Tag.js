const Data = require('../../../../data')
const { sortFn } = require('../../../../common/utils')

class Tag {
  constructor() {
    this.tags = Data.tags
  }
  getTags() {
    return this.tags.sort(sortFn(tag => tag.posts.length, -1))
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
