import React, { useContext, useState } from 'react'
import styles from './Cart.module.scss'
import Card from '../UI/Card'
import Button from '../UI/Button'
import CartContext from '../../store/cart-context'
import useRequest from '../../hooks/use-request'
import CartForm from './CartForm'
import CartItem from './CartItem'

const Cart = (props) => {
  const [isOrdered, setIsOrdered] = useState(false)
  const [isAccepting, setIsAccepting] = useState(false)
  const [isAccepted, setIsAccepted] = useState(false)
  const { isLoading, error, sendRequest } = useRequest()

  const ctx = useContext(CartContext)
  const items = ctx.items

  const onOrderHandler = () => setIsOrdered(true)

  const onAcceptHandler = (check) => {
    setIsAccepting(true)
    sendRequest(
      {
        url: 'https://react-learning-f58b2-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { check },
      },
      (data) => {
        console.log(data)
      }
    )
    setIsAccepting(false)
    setIsAccepted(true)
    ctx.onReset()
  }

  const modalActions = (
    <div className={styles['cart-actions']}>
      <Button className={styles.close} onClick={props.onClose}>
        Close
      </Button>
      <Button className={styles.order} onClick={onOrderHandler}>
        Order
      </Button>
    </div>
  )

  const cartList = (
    <div className={styles['cart-list']}>
      {items.map((order) => {
        return (
          <React.Fragment key={order.id}>
            <CartItem order={order} />
            <div className={styles.divider}></div>
          </React.Fragment>
        )
      })}
    </div>
  )

  const buttonClasses = {
    main: styles['cart-actions'],
    order: styles.order,
    close: styles.close,
  }

  const submittingModalContent = <p className={styles['modal-content']}>Sending order data...</p>

  const orderForm = (
    <CartForm onAccept={onAcceptHandler} onClose={props.onClose} buttonClass={buttonClasses} />
  )

  const didSubmitModalContent = (
    <>
      <p className={styles['modal-content']}>Successfully sent the order!</p>
      <div className={styles['cart-actions']}>
        <button className={styles.close} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  )

  const cartModalContent = (
    <>
      {cartList}
      <div className={styles['cart-info']}>
        <p>Total Amount:</p>
        <span>${ctx.totalPrice.toFixed(2)}</span>
      </div>
      {isOrdered ? orderForm : modalActions}
      {error !== null && <div className={styles['cart-error']}>{error}</div>}
    </>
  )

  return (
    <Card className={styles.cart}>
      {!isAccepting && !isAccepted && cartModalContent}
      {isAccepting && submittingModalContent}
      {!isAccepting && isAccepted && didSubmitModalContent}
    </Card>
  )
}

export default Cart
