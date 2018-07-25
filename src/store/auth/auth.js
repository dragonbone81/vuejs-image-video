const state = {
    token: "old_token",
};
const actions = {
    login({commit}, token) {
        commit('setToken', token);
    }
};
const getters = {
    getToken: state => {
        return state.token;
    }
};
const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}