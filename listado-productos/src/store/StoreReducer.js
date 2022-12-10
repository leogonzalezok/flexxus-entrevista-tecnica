
const types = {
  productsStock: 'PRODUCTS_STOCK',
  productsFiltered: 'PRODUCTS_FILTERED',
}

const initialStore = {
  products: []
}

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.productsStock:
      return {
        products: action.payload
      }
    case types.productsFiltered:
      return {
        products: action.payload
      }
    default:
      return state;
  }
}

export { initialStore, types }
export default storeReducer