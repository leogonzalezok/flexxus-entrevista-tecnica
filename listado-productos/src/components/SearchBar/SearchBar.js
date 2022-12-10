import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearch } from '../../hooks/useSearch';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useStore } from '../../store/StoreProvider';
import getProductsList from '../../helpers/getProductsList';

const SearchBar = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const [ inputText, setInputText ] = useState('');
  const { getProductsSearched } = useSearch();

  function handleSearchBtn(e){
    e.preventDefault();
    getProductsList(store, dispatch);
    getProductsSearched(inputText, store, dispatch);
  }

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function cleanInput() {
    setInputText('');
    getProductsSearched('', store, dispatch);
  }

  return (
    <div className={styles.searchBarContainer}>
      <form className={styles.searchBar}>

        <input
          placeholder='Busca un producto por nombre o código'
          className={styles.input}
          value={inputText}
          onChange={e => handleInputChange(e)} />

        <button type='submit' onClick={ (e) => handleSearchBtn(e) } className={styles.btn}><AiOutlineSearch className={styles.searchIcon} />Buscar</button>
      </form>
      {
        inputText 
        ? 
        <div className={styles.label}>{ inputText }
          <AiOutlineClose onClick={ () => cleanInput() } className={styles.closeLabelBtn}/>
        </div>
        : null
      }
    </div>
  )
}

export default SearchBar;