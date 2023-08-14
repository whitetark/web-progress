import React, { useContext } from 'react'
import styles from './CartItem.module.scss'
import Button from '../UI/Button'
import CartContext from '../../store/cart-context'

const CartItem = ({ order }) => {
  const ctx = useContext(CartContext)

  const minusHandler = () => {
    ctx.onRemove(order.name)
  }

  const plusHandler = () => {
    const newOrder = {
      ...order,
      amount: 1,
    }
    ctx.onAdd(newOrder)
  }

  return (
    <div key={order.id} className={styles['item']}>
      <div className={styles['item-info']}>
        <h2>{order.id}</h2>
        <div className={styles['item-info-more']}>
          <span id={styles.price}>{order.price}</span>
          <span id={styles.amount}>{order.amount}</span>
        </div>
      </div>
      <div className={styles['item-actions']}>
        <Button onClick={minusHandler}>-</Button>
        <Button onClick={plusHandler}>+</Button>
      </div>
    </div>
  )
}

export default CartItem
