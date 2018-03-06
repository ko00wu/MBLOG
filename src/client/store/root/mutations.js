export const UPDATE_TIME_DIFF = 'UPDATE_TIME_DIFF'

export default {
  [UPDATE_TIME_DIFF](state, { timeDiff }) {
    state.timeDiff = timeDiff
  }
}
