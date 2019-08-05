import fictionalBooksData from '@/mockData/books1.json'
import nonFfictionalBooksData from '@/mockData/books2.json'
import booksData from '@/mockData/books3.json'

const state = {
    fictionalBooks: [],
    nonFictionalBooks: [],
    books: [],
}

const mutations = {
    FICTIONAL_BOOKS(state, payload) {
        state.fictionalBooks = payload 
    },
    NON_FICTIONAL_BOOKS(state, payload) {
        state.nonFictionalBooks = payload 
    },
    BOOKS(state, payload) {
        state.books = payload 
    },
}

const actions = {
    fetchFictionalBooks({ commit }) {
        commit('FICTIONAL_BOOKS', fictionalBooksData.subject_collection_items)
    },
    fetchNonFictionalBooks({ commit }) {
        commit('NON_FICTIONAL_BOOKS', nonFfictionalBooksData.subject_collection_items)
    },
    fetchBooks({ commit }) {
        commit('BOOKS', booksData.subject_collection_items)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}