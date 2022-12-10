import { stock } from "../db";
import { types } from "../store/StoreReducer";

const getProductsList = async (store, dispatch) => {
  await dispatch({ type: types.productsStock, payload: [...stock] })
}

export default getProductsList