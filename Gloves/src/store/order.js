export default {
  state: {
    productId: 0,
    numberOfProduct: 0,
  },
  mutations: {
    setProductId (state, value) {
      state.productId = parseInt(value)
    },
    setNumberOfProduct (state, value) {
      state.numberOfProduct = parseInt(value)
    }
  },
  actions: {},
  getters: {
    getProductId (state) {
      return state.productId
    },
    getNumberOfProduct (state) {
      return state.numberOfProduct
    }
  }
}