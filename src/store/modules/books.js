import fictionalBooksData from '@/mockData/books1.json'
import nonFfictionalBooksData from '@/mockData/books2.json'
import booksData from '@/mockData/books3.json'

const state = {
    fictionalBooks: [],
    nonFictionalBooks: [],
    books: [],
    suggestedBooks1: [
        {
            text: '小波看书',
            color: '#2384E8'
        },
        {
            text: '村上春树周边',
            color: '#42BD56'
        },
        {
            text: '我凭名字认定了你',
            color: '#4F9DED'
        },
        {
            text: '不可饶恕的女人们',
            color: '#FF4055'
        }
    ],
    suggestedBooks2: [
        {
            text: '爱欲书',
            color: '#FFC46C'
        },
        {
            text: '他们还写侦探小说',
            color: '#CC3344'
        },
        {
            text: '人生识字始忧患',
            color: '#FFAC2D'
        },
        {
            text: '詩歌書店',
            color: '#3BA94D'
        },
    ],
    types: [
        {
            text: '小说'
        },
        {
            text: '爱情'
        },
        {
            text: '历史'
        },
        {
            text: '外国文学'
        },
        {
            text: '青春'
        },
        {
            text: '励志'
        },
        {
            text: '随笔'
        },
        {
            text: '传记'
        },
        {
            text: '推理'
        },
        {
            text: '旅行'
        },
        {
            text: '奇幻'
        },
        {
            text: '经管'
        },
    ]
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