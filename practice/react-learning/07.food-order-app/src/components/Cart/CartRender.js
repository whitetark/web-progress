import React, { useContext } from 'react'
import styles from './CartRender.module.scss'
import CartContext from '../../store/cart-context'
import Card from '../UI/Card'
import Button from '../UI/Button'
import CartItem from './CartItem'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

const CartRender = (props) => {
  const ctx = useContext(CartContext)
  const items = ctx.items

  const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    content: '';
    background-color: black;
    height: 100vh;
    width: 100%;
    opacity: 0.75;
    z-index: 101;
  `
  const onCloseHandler = () => {
    props.onClose()
  }

  const onOrderHandler = () => {}

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={styles['render-wrapper']}>
          <Overlay onClick={onCloseHandler} />
          <Card className={styles.cart}>
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
            <div className={styles['cart-info']}>
              <p>Total Amount:</p>
              <span>${ctx.totalPrice.toFixed(2)}</span>
            </div>
            <div className={styles['cart-actions']}>
              <Button className={styles.close} onClick={onCloseHandler}>
                Close
              </Button>
              <Button className={styles.order} onClick={onOrderHandler}>
                Order
              </Button>
            </div>
          </Card>
        </div>,
        document.getElementById('cart-root')
      )}
    </React.Fragment>
  )
}

export default CartRender
