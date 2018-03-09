export const MUTATION_NAME = {
  UPDATE_TAGS: 'tag/tags'
}

export default {
  [MUTATION_NAME.UPDATE_TAGS](state, { tags }) {
    state.tags = tags
  }
}
