import React from 'react';
import styles from './Card.module.css';

const Card = ( { product } ) => {
  const { id, name, img, desc, price, stock} = product;
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={img}/>
      </div>
      <div className={styles.description}>
        <h3>{name}</h3>
        <p>{ id }</p>
        <p> Precio: ${price} </p>
      </div>
    </div>
  )

}

export default Card