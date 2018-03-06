import Vue from 'vue'
import Vuex from 'vuex'

import createModule from './module'
import createRoot from './root'

Vue.use(Vuex)

export const UPDATE_TIME_DIFF = 'UPDATE_TIME_DIFF'

export const createStore = () =>
  new Vuex.Store({
    ...createRoot(),
    modules: createModule(),
    strict: true
  })
