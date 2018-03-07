// 时间差
export const UPDATE_TIME_DIFF = 'UPDATE_TIME_DIFF'
// 控制loading
export const TOGGLE_LOADING = 'TOGGLE_LOADING'

export default {
  [UPDATE_TIME_DIFF](state, { timeDiff }) {
    state.timeDiff = timeDiff
  },
  [TOGGLE_LOADING](state) {
    state.loading = !state.loading
  }
}
