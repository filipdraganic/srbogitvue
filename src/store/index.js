import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: localStorage.getItem("loggedIn") || null,


  },
  mutations: {
    setLoggedIn(state,loggedIn){
      state.loggedIn = loggedIn
    }
  },
  getters: {
    getLoggedIn : state => state.loggedIn
  },
  actions: {
    setLoggedIn({commit}, payload){
      localStorage.setItem("loggedIn", "1")
      commit('setLoggedIn', payload.loggedIn)
    },

    logout({commit}, payload){
      localStorage.setItem("loggedIn", "")
      commit("setLoggedIn", null)
    }
  },
  modules: {

  },

})
