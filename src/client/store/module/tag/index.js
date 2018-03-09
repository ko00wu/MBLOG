import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    tags: []
  },
  getters: {
    tags: state => state.tags
  },
  actions,
  mutations
}
