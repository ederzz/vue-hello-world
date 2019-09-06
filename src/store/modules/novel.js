import * as services from '@/services/novel'

const state = {
    bookList: [],
    chapters: []
}

const mutations = {
    BOOK_LIST(state, { pageNo, rows }) {
        state.bookList = pageNo === 1 
            ? rows
            : state.bookList.concat(rows)
    },
    ADD_CHAPTERS(state, {
        data,
        type
    }) {
        if (type === 'load') {
            state.chapters = state.chapters.concat( data )
        } else if (type === 'refresh') {
            state.chapters = data
        }
    }
}

const actions = {
    async searchBooks({ commit }, payload) {
        const ret = await services.fetchBookList(payload)
        if (ret && ret.success === 0) {
            commit('BOOK_LIST', ret.data)
        }
        return ret && ret.data || {}
    },
    async fetchChapters({ commit }, {
        type,
        ...payload
    }) {
        const ret = await services.fetchChapters(payload)
        if (ret.errno === 0) {
            commit('ADD_CHAPTERS', {
                data: ret.data.rows,
                type
            })
        }
        return ret
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
