import * as services from '@/services/novel'

const state = {
    bookList: [],
}

const mutations = {
    BOOK_LIST(state, { pageNo, rows }) {
        state.bookList = pageNo === 1 
            ? rows
            : state.bookList.concat(rows)
    },
}

const actions = {
    async searchBooks({ commit }, payload) {
        const ret = await services.fetchBookList(payload)
        if (ret && ret.success === 0) {
            commit('BOOK_LIST', ret.data)
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
