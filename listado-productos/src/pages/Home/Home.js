import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.home}>
      <SearchBar/>      
    </section>
  )
}

export default Home