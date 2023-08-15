import React, { useContext, useState, useRef } from 'react'
import styles from './Product.module.scss'
import Button from '../UI/Button'
import CartContext from '../../store/cart-context'

const Product = ({ data }) => {
  const amountRef = useRef()
  const ctx = useContext(CartContext)

  const addItemToCart = (event) => {
    event.preventDefault()
    const newItem = {
      id: data.name,
      amount: +amountRef.current.value,
      price: data.price,
    }

    ctx.onAdd(newItem)
  }
  return (
    <div className={styles.product}>
      <div className={styles['product-description']}>
        <h4>{data.name}</h4>
        <p>{data.description}</p>
        <span>${data.price}</span>
      </div>
      <div className={styles['product-actions']}>
        <div className={styles['product-actions-input']}>
          <label htmlFor='amount'>Amount</label>
          <input
            ref={amountRef}
            type='number'
            name='amount'
            min='1'
            max='5'
            step='1'
            defaultValue='1'
          />
        </div>
        <Button onClick={addItemToCart} className={styles.red}>
          + Add
        </Button>
      </div>
    </div>
  )
}

export default Product
