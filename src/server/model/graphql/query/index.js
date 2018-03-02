const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')

const PagerType = require('./type/Pager')
const PostType = require('./type/Post')
const TagType = require('./type/Tag')

const PostEntity = require('./entity/Post')
const TagEntity = require('./entity/Tag')

// PostType = PostType()
// TagType = TagType()

const rootQueryType = new GraphQLObjectType({
  name: 'rootQueryType',
  fields: () => ({
    // 根据文章名获取指定的文章
    post: {
      type: PostType,
      args: {
        index: {
          type: GraphQLInt
        }
      },
      resolve: (blog, { id }) => PostEntity.getPostById(id)
    },
    // 根据页数获取指定的文章数
    posts: {
      type: new GraphQLList(PostType),
      args: {
        pager: {
          type: PagerType
        }
      },
      resolve: (blog, { pager }) => PostEntity.getPostList(pager)
    },
    // 根据标签名获取标签列表
    tags: {
      type: new GraphQLList(TagType),
      args: {
        name: {
          type: GraphQLString
        }
      },
      resolve: (blog, { name }) => {
        return name ? [TagEntity.getTagByName(name)] : TagEntity.getTags()
      }
    }
  })
})

module.exports = rootQueryType
