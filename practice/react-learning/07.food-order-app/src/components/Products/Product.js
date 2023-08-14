import React, { useContext, useState } from 'react'
import styles from './Product.module.scss'
import Button from '../UI/Button'
import CartContext from '../../store/cart-context'

const Product = ({ data }) => {
  const [amount, setAmount] = useState(0)
  const ctx = useContext(CartContext)

  const inputHandler = (event) => {
    setAmount(event.target.value)
  }

  const addItemToCart = (event) => {
    event.preventDefault()
    const newItem = {
      id: data.name,
      amount: +amount,
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
          <input type='number' name='amount' value={amount} onChange={inputHandler} />
        </div>
        <Button onClick={addItemToCart} className={styles.red}>
          + Add
        </Button>
      </div>
    </div>
  )
}

export default Product
