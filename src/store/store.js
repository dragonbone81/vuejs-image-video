import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: "",
        username: "",
        loggedIn: false,
    },
    actions: {
        login({commit}, {access_token, account_username}) {
            commit('setToken', access_token);
            commit('setUsername', account_username);
            commit('setLoggedIn');
        },
        logout({commit}){
            commit('setToken', "");
            commit('setUsername', "");
            commit('setLoggedIn');
        }
    },
    getters: {
        getToken: state => {
            return state.token;
        }
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token;
        },
        setUsername: (state, username) => {
            state.username = username;
        },
        setLoggedIn: (state) => {
            state.loggedIn = !state.loggedIn;
        }
    },
});