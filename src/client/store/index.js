import Vue from 'vue'
import Vuex from 'vuex'

import createModule from './module'

Vue.use(Vuex)

export const createStore = () =>
  new Vuex.Store({
    modules: createModule(),
    strict: true
  })
