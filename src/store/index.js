import Vue from 'vue'
import Vuex from 'vuex'
import Users from '../services/Users';
import {SET_USERINFO, SET_USERS} from "./mutation.types";
import {ADD_USER_INFO, LOAD_USERS} from "./action.types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users:[],
    userinfo:[],
  },
  mutations: {
    [SET_USERS](state, users){
      state.users = users;
    },
    [SET_USERINFO](state, user){
      state.userinfo = user;
    }
  },
  actions: {
    async [LOAD_USERS]({commit}){
      commit(SET_USERS, await Users.getAllUsers())
    },
    async [ADD_USER_INFO]({commit}, data){
      commit(SET_USERINFO, data)
    }
  },
  modules: {
  }
})
