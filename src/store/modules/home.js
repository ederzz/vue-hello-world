import bangDanData from '../../mockData/bangdan.json'
import topicsData from '../../mockData/topics.json'

const state = {
    bangDanList: [],
    topicsList: []
}

const mutations = {
    BANG_DAN(state, payload) {
        state.bangDanList = payload
    },
    TOPICS(state, payload) {
        state.topicsList = payload
    }
}

const actions = {
    bangDan({ commit }) {
        commit('BANG_DAN', bangDanData.data)
    },
    topics({ commit }) {
        commit('TOPICS', topicsData.topics)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
