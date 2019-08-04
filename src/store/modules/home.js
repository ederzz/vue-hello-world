import bangDanData from '../../mockData/bangdan.json'

const state = {
    bangDanList: []
}

const mutations = {
    BANG_DAN(state, payload) {
        state.bangDanList = state.bangDanList.concat(payload)
    }
}

const actions = {
    bangDan({ commit }) {
        commit('BANG_DAN', bangDanData.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
