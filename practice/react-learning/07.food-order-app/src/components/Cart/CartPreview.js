import React, { useContext, useState, useEffect } from 'react'
import styles from './CartPreview.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Button from '../UI/Button'
import CartContext from '../../store/cart-context'
import OverlayRender from '../Layout/OverlayRender'

const CartPreview = () => {
  const [isCartShown, setIsCartShown] = useState(false)
  const [btnIsTriggered, setBtnIsHighlighted] = useState(false)
  const ctx = useContext(CartContext)
  let totalAmount = 0
  let items = ctx.items

  const btnClasses = `${styles.preview} ${btnIsTriggered ? styles.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  if (items.length > 0) {
    items.forEach((item) => {
      totalAmount += item.amount
    })
  }

  const clickHandler = (event) => {
    event.preventDefault()
    setIsCartShown(true)
    document.body.classList.add('modal-active')
  }

  const closeHandler = () => {
    setIsCartShown(false)
    document.body.classList.remove('modal-active')
  }
  return (
    <React.Fragment>
      {isCartShown && <OverlayRender onClose={closeHandler} />}
      <Button className={btnClasses} onClick={clickHandler} disabled={items.length === 0}>
        <FontAwesomeIcon icon={faCartShopping} style={{ color: '#ffffff', textAlign: 'center' }} />
        <span id={styles.text}>Your Cart</span>
        <span id={styles.counter}>{totalAmount}</span>
      </Button>
    </React.Fragment>
  )
}

export default CartPreview
