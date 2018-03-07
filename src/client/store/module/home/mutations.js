export const MUTATION_NAME = {
  UPDATE_POSTS: 'home/UPDATE_POSTS'
}

export default {
  [MUTATION_NAME.UPDATE_POSTS](state, { posts }) {
    if (!posts.length) {
      state.posts.isFinished = true
      return
    }
    state.posts.pager.number++
    state.posts.list = [...state.posts.list, ...posts]
  }
}
