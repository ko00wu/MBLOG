import { MUTATION_NAME } from './mutations'
import { getPosts } from '@api'
import { UPDATE_TIME_DIFF } from '@store/root/mutations'

export default {
  loadPosts({ state, commit }) {
    const { posts } = state
    const requestTimeOnBefore = Date.now()
    // 打开loading
    commit(MUTATION_NAME.TOGGLE_LOADING)
    // 成功之后的回调
    const success = data => {
      commit(MUTATION_NAME.UPDATE_POSTS, {
        posts: data.posts
      })
      // 更新请求的时间差
      const nowTime = Date.now()
      // console.log(
      //   `timeDiff\nbefore:${requestTimeOnBefore}\nafter:${nowTime}\ntimeDiff:${nowTime -
      //     requestTimeOnBefore}`
      // )
      commit(
        UPDATE_TIME_DIFF,
        {
          timeDiff: nowTime - requestTimeOnBefore
        },
        { root: true }
      )
      // 关闭loading
      commit(MUTATION_NAME.TOGGLE_LOADING)
    }
    // commit(MUTATION_NAME.UPDATE_REQUEST_TIME, Date.now())
    return getPosts(posts.pager, success)
  }
}
