import React from 'react'
import styles from './CartPreview.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Button from '../UI/Button'

const CartPreview = () => {
  return (
    <Button className={styles.preview}>
      <FontAwesomeIcon icon={faCartShopping} style={{ color: '#ffffff', textAlign: 'center' }} />
      <span>Your Cart</span>
      <span id={styles.counter}>{0}</span>
    </Button>
  )
}

export default CartPreview
