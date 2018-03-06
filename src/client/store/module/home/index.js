import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    posts: {
      isFinished: false,
      pager: {
        number: 1,
        size: 5
      },
      list: []
    },
    loading: false
    // // 请求的时间差
    // timeDiff: 0
  },
  getters: {
    posts: state => state.posts
  },
  actions,
  mutations
}
