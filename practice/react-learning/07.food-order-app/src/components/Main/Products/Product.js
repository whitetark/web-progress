import React from 'react'
import styles from './Product.module.scss'
import Button from '../../UI/Button'

const Product = ({ data }) => {
  return (
    <div className={styles.product}>
      <div className={styles['product-description']}>
        <h4>{data.name}</h4>
        <p>{data.description}</p>
        <span>{data.price}</span>
      </div>
      <div className={styles['product-actions']}>
        <div className={styles['product-actions-input']}>
          <label htmlFor='amount'>Amount</label>
          <input type='number' name='amount' value={1} />
        </div>
        <Button>+Add</Button>
      </div>
    </div>
  )
}

export default Product
