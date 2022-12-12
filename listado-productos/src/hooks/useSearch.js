import { stock } from "../db";
import { useDispatch } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";

export const useSearch = () => {

  const dispatch = useDispatch();
  async function getProductsSearched(input) {
    const products = [...stock];

    if (input === '') {
      return dispatch({ type: types.productsFiltered, payload: products });
    };

    const productsByCode = products.filter(
      item => item.id.includes(input.toUpperCase())
    );

    const productsByName = products.filter(
      item => item.name.includes(input.toUpperCase())
    );

    const productsResult = [...productsByCode, ...productsByName];
    dispatch({ type: types.productsFiltered, payload: productsResult });
  }

  return {
    getProductsSearched,
  }

}