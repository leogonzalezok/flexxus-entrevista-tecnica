import React from 'react';
import styles from './SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input className={styles.input}/>
        <button className={styles.btn}><AiOutlineSearch className={styles.searchIcon}/>Buscar</button>
      </div>
    </div>
  )
}

export default SearchBar;