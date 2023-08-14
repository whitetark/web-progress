import React, { useContext, useState } from 'react'
import styles from './CartPreview.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Button from '../UI/Button'
import CartContext from '../../store/cart-context'
import CartRender from './CartRender'

const CartPreview = () => {
  const [isCartShown, setIsCartShown] = useState(false)
  const ctx = useContext(CartContext)
  let totalAmount = 0

  if (ctx.items.length > 0) {
    ctx.items.forEach((item) => {
      totalAmount += item.amount
    })
  }

  const clickHandler = (event) => {
    event.preventDefault()
    setIsCartShown(true)
  }

  const closeHandler = () => {
    setIsCartShown(false)
  }
  return (
    <React.Fragment>
      {isCartShown && <CartRender onClose={closeHandler} />}
      <Button className={styles.preview} onClick={clickHandler}>
        <FontAwesomeIcon icon={faCartShopping} style={{ color: '#ffffff', textAlign: 'center' }} />
        <span>Your Cart</span>
        <span id={styles.counter}>{totalAmount}</span>
      </Button>
    </React.Fragment>
  )
}

export default CartPreview
