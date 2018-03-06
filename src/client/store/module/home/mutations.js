export const MUTATION_NAME = {
  TOGGLE_LOADING: 'home/TOGGLE_LOADING',
  UPDATE_POSTS: 'home/UPDATE_POSTS'
}

export default {
  [MUTATION_NAME.TOGGLE_LOADING](state) {
    state.loading = !state.loading
  },
  [MUTATION_NAME.UPDATE_POSTS](state, { posts }) {
    if (!posts.length) {
      state.posts.isFinished = true
      return
    }
    state.posts.pager.number++
    state.posts.list = [...state.posts.list, ...posts]
  }
}
