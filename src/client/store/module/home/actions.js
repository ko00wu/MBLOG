import { MUTATION_NAME } from './mutations'
import { getPosts } from '@api'

export default {
  loadPosts({ state, commit }) {
    const { posts } = state
    // 打开loading
    commit(MUTATION_NAME.TOGGLE_LOADING)
    // 成功之后的回调
    const success = data => {
      commit(MUTATION_NAME.UPDATE_POSTS, {
        posts: data.posts
      })
      // 关闭loading
      commit(MUTATION_NAME.TOGGLE_LOADING)
    }
    return getPosts(posts.pager, success)
  }
}
