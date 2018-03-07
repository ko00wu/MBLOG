export const MUTATION_NAME = {
  UPDATE_POST: 'post/UPDATE_POST'
}

export default {
  [MUTATION_NAME.UPDATE_POST](state, { post }) {
    state.post = post
  }
}
