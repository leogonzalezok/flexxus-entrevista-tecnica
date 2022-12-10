import getProductsList from "../helpers/getProductsList";
import { useDispatch, useStore } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";

export const useSearch = () => {

  const store = useStore();
  const dispatch = useDispatch();
  
  async function getProductsSearched(input) {
    await getProductsList(store, dispatch);
    const { products } = store;
    if (input === '') return;

    const productsByCode = products.filter(
      item => item.id.includes(input.toUpperCase())
    );

    const productsByName = products.filter(
      item => item.name.includes(input.toUpperCase())
    );

    const productsResult = [...productsByCode, ...productsByName];
    await dispatch({ type: types.productsFiltered, payload: productsResult });

  }

  return {
    getProductsSearched,
  }

}