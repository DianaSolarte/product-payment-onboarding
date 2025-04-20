// src/store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: [],
    transactionData: null,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    addToCart(state, product) {
      state.cart.push(product)
    },
    setTransactionData(state, data) {
      state.transactionData = data
      localStorage.setItem('transaction', JSON.stringify(data))
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const res = await fetch('http://localhost:3000/api/products') // backend endpoint
      const data = await res.json()
      commit('setProducts', data)
    },
  },
  getters: {
    totalCart(state) {
      return state.cart.length
    },
  },
})
