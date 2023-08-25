// store/index.js
import axios from 'axios';
import Vuex from 'vuex'

const state = {
  products: [],
  error: null,
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setError(state, error) {
    state.error = error;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      commit('setProducts', response.data);
    } catch (error) {
      commit('setError', error);
    }
  },
};

const getters = {
  getProducts: state => state.products,
  getError: state => state.error,
  getProductById: state => id => {
    return state.products.find(product => product.id === id);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
