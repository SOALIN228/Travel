import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './ations'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})
