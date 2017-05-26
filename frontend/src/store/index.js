import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)


export const store = new Vuex.Store({
  state: {
    articles: [],
    article: {},
    comments: [],
    user: {}
  },
  getters,
  actions,
  mutations
});