import productData from '@/mockData/product.json'

const state = {
    products: []
}

const mutations = {
    PRODUCT_LIST(state, payload) {
        state.products = payload
    }
}

const actions = {
    fetchProducts({ commit }) {
        const {
            product_items
        } = productData.data.modules[2].data
        commit('PRODUCT_LIST', product_items.map(d => {
            d.tag = d.tags && d.tags[0] && d.tags[0].text || ''

            return d
        }))
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}