import React, { useEffect, useState } from 'react'
import { useDispatch, useStore } from '../../store/StoreProvider';
import Card from '../Card/Card';
import styles from './CardsContainer.module.css';

const CardsContainer = () => {
  const store = useStore();
  const { products } = store;
  const [ count, setCount ] = useState(products?.length)
  useEffect(() => setCount(products.length), [products]);

  return (
    <>
      <main className={styles.cardsContainer}>
        {
          products?.map(product => <Card key={product.id} product={product} />)
        }
      </main>
      <p className={styles.count}>{count} Resultados</p>
    </>
  )
}

export default CardsContainer