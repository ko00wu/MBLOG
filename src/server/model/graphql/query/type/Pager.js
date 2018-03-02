const { GraphQLInputObjectType, GraphQLInt } = require('graphql')

const PagerType = new GraphQLInputObjectType({
  name: 'PagerType',
  fields: () => ({
    number: {
      type: GraphQLInt,
      defaultValue: 1
    },
    size: {
      type: GraphQLInt,
      defaultValue: 5
    }
  })
})

module.exports = PagerType
