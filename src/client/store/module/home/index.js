import actions from './actions'
import mutations from './mutations'

export default {
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
  },
  getters: {
    posts: state => state.posts
  },
  actions,
  mutations
}
