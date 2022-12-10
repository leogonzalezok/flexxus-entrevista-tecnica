import React, { useState, useEffect } from 'react';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';
import getProductsList from '../../helpers/getProductsList';
import { useDispatch, useStore } from '../../store/StoreProvider';
import styles from './Home.module.css';
import { types } from '../../store/StoreReducer';

const Home = () => {

  const store = useStore();
  const dispatch = useDispatch();
  const { products } = store;
  const [ isLoading, setLoading ] = useState(true);

  useEffect( () => {
    getProductsList(store, dispatch)
    setTimeout(() => {
      setLoading(false);
    }, 3000);

  }, [] );

  return (
    <section className={styles.home}>
      <SearchBar />
      {
        isLoading
          ? <Spinner/>
          : <CardsContainer/>

      }
    </section>
  )
}

export default Home