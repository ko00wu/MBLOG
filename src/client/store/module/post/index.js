import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    post: {}
  },
  getters: {
    post: state => state.post
  },
  actions,
  mutations
}
