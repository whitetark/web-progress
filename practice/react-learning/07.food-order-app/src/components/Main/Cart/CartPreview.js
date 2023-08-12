import React, { useState } from 'react'
import styles from './CartPreview.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartPreview = () => {
  const[counter, ]useState(0)
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} style={{ color: '#ffffff' }} />
      <span>Your Cart</span>
      <span id='counter'>{}</span>
    </div>
  )
}

export default CartPreview
