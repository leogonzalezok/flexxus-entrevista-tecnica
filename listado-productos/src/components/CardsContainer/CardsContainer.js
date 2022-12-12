import React, { useEffect, useState } from 'react'
import { useDispatch, useStore } from '../../store/StoreProvider';
import Card from '../Card/Card';
import styles from './CardsContainer.module.css';

const CardsContainer = () => {
  const store = useStore();
  const [ products, setProducts ] = useState(store.products);
  const [ count, setCount ] = useState(store.products.length)
  useEffect(() => setCount(store.products.length), [store]);
  useEffect(() => setProducts(store.products), [store]);

  return (
    <>
      <main className={styles.cardsContainer}>
        {
          products.map(product => <Card key={product.id} product={product} />)
        }
      </main>
      <p className={styles.count}>{count} Resultados</p>
    </>
  )
}

export default CardsContainer