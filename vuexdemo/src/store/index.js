import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getter';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  getters: getters
})

export default store