import groupData from '@/mockData/group.json'

const state = {
    groupList: []
}

const mutations = {
    GROUP_LIST(state, payload) {
        state.groupList = payload
    }
}

const actions = {
    fetchGroups({ commit }) {
        commit('GROUP_LIST', groupData.rec_groups[0].classified_groups)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}