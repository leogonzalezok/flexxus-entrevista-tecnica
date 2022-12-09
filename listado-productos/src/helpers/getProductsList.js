import { stock } from "../db";

export const getProductsList = () => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 3000);
  });
}