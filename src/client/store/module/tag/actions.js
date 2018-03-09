import { MUTATION_NAME } from './mutations'
import { getTags } from '@api'
import { UPDATE_TIME_DIFF, TOGGLE_LOADING } from '@store/root/mutations'

export default {
  loadTags({ state, commit }, { tag = '' }) {
    const { posts } = state
    const requestTimeOnBefore = Date.now()
    // 打开loading
    commit(TOGGLE_LOADING, {}, { root: true })
    // 成功之后的回调
    const success = data => {
      commit(MUTATION_NAME.UPDATE_TAGS, {
        tags: data.tags
      })
      // 更新请求的时间差
      const nowTime = Date.now()
      commit(
        UPDATE_TIME_DIFF,
        {
          timeDiff: nowTime - requestTimeOnBefore
        },
        { root: true }
      )
      // 关闭loading
      commit(TOGGLE_LOADING, {}, { root: true })
    }
    return getTags(success, tag)
  }
}
