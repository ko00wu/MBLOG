export const MUTATION_NAME = {
  TOGGLE_LOADING: 'TOGGLE_LOADING',
  UPDATE_POSTS: 'UPDATE_POSTS'
}

export default {
  [MUTATION_NAME.TOGGLE_LOADING](state) {
    state.loading = !state.loading
  },
  [MUTATION_NAME.UPDATE_POSTS](state, payload) {
    const { posts } = payload
    if (!posts.length) {
      state.posts.isFinished = true
      return
    }
    state.posts.pager.number++
    state.posts.list = [...state.posts.list, ...posts]
  }
}
