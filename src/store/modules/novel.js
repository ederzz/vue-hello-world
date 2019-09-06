import * as services from '@/services/novel'

const state = {
    bookList: [],
    chapters: [],
    chapterContent: {
        title: '',
        content: '',
        pt: {}
    }
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
    },
    UPDATE_CONTENT(state, data) {
        state.chapterContent = data
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
        if (ret.success === 0) {
            commit('ADD_CHAPTERS', {
                data: ret.data.rows,
                type
            })
        }
        return ret
    },
    async fetchContent({ commit }, payload) {
        const ret = await services.chapterContent(payload)
        if (ret.success === 0) {
            commit('UPDATE_CONTENT', ret.data)
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
