import React, { useContext, useState } from 'react'
import styles from './Product.module.scss'
import Button from '../UI/Button'
import CartContext from '../../store/cart-context'

const Product = ({ data }) => {
  const [amount, setAmount] = useState(1)
  const ctx = useContext(CartContext)

  const onChangeHandler = (event) => setAmount(event.target.value)

  const addItemToCart = (event) => {
    event.preventDefault()
    if (amount <= 0) {
      return
    }
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
        <span>${data.price.toFixed(2)}</span>
      </div>
      <div className={styles['product-actions']}>
        <div className={styles['product-actions-input']}>
          <label htmlFor='amount'>Amount</label>
          <input
            value={amount}
            type='number'
            name='amount'
            min='1'
            max='5'
            step='1'
            defaultValue='1'
            onChange={onChangeHandler}
          />
        </div>
        <Button onClick={addItemToCart} className={styles.red} disabled={amount <= 0}>
          + Add
        </Button>
      </div>
    </div>
  )
}

export default Product
