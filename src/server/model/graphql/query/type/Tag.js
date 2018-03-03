const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = require('graphql')

const PostEntity = require('../entity/Post')

const TagType = new GraphQLObjectType({
  name: 'TagType',
  fields: () => {
    // 在此引用，避免循序引用出现空对象
    const PostType = require('./Post')
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      label: {
        type: new GraphQLNonNull(GraphQLString)
      },
      createdTime: {
        type: GraphQLString
      },
      posts: {
        type: new GraphQLList(PostType),
        resolve: tag => PostEntity.getPostsByTagName(tag.name)
      }
    }
  }
})
module.exports = TagType
