import React, { useContext, useState } from 'react'
import styles from './Cart.module.scss'
import Card from '../UI/Card'
import CartItem from './CartItem'
import CartContext from '../../store/cart-context'
import Button from '../UI/Button'
import useInput from '../../hooks/use-input'
import useRequest from '../../hooks/use-request'

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const postalRegex = /^[0-9]{5}(?:-[0-9]{4})?$/
const isPostal = (value) => value.match(postalRegex)
const isEmail = (value) => value.match(emailRegex)
const isNotEmpty = (value) => value.trim() !== ''

const Cart = (props) => {
  const [isOrdered, setIsOrdered] = useState(true)
  const { isLoading, error, sendRequest } = useRequest()

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: nameReset,
  } = useInput(isNotEmpty)

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput(isEmail)

  const {
    value: postal,
    isValid: postalIsValid,
    hasError: postalHasError,
    valueBlurHandler: postalBlurHandler,
    valueChangeHandler: postalChangeHandler,
    reset: postalReset,
  } = useInput(isPostal)

  const formIsValid = nameIsValid && emailIsValid && postalIsValid

  const ctx = useContext(CartContext)
  const items = ctx.items

  const onOrderHandler = () => setIsOrdered(true)

  const onAcceptHandler = () => {
    const check = {
      clientName: name,
      clientEmail: email,
      clientPostal: postal,
      order: ctx.items,
    }
    sendRequest(
      {
        url: 'https://react-learn-f58b2-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
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

    nameReset()
    emailReset()
    postalReset()
  }

  const nameControlClasses = nameHasError
    ? `${styles['cart-form-item-control']} ${styles.invalid}`
    : styles['cart-form-item-control']

  const emailControlClasses = emailHasError
    ? `${styles['cart-form-item-control']} ${styles.invalid}`
    : styles['cart-form-item-control']

  const postalControlClasses = postalHasError
    ? `${styles['cart-form-item-control']} ${styles.invalid}`
    : styles['cart-form-item-control']

  let content = (
    <div className={styles['cart-actions']}>
      <Button className={styles.close} onClick={props.onClose}>
        Close
      </Button>
      <Button className={styles.order} onClick={onOrderHandler}>
        Order
      </Button>
    </div>
  )

  if (isOrdered) {
    content = (
      <React.Fragment>
        <div className={styles['cart-form']}>
          <div className={styles['cart-form-item']}>
            <div className={nameControlClasses}>
              <label htmlFor='name'>Your Name:</label>
              <input
                type='text'
                id='name'
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={name}
              />
            </div>
            {nameHasError && (
              <div className={styles['cart-form-item-error']}>
                <p>Name cannot be empty</p>
              </div>
            )}
          </div>
          <div className={styles['cart-form-item']}>
            <div className={emailControlClasses}>
              <label htmlFor='email'>Your Email:</label>
              <input
                type='text'
                id='email'
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={email}
              />
            </div>
            {emailHasError && (
              <div className={styles['cart-form-item-error']}>
                <p>Email is incorrect</p>
              </div>
            )}
          </div>
          <div className={styles['cart-form-item']}>
            <div className={postalControlClasses}>
              <label htmlFor='postal'>Your Postal Code:</label>
              <input
                type='number'
                id='postal'
                onChange={postalChangeHandler}
                onBlur={postalBlurHandler}
                value={postal}
              />
            </div>
            {postalHasError && (
              <div className={styles['cart-form-item-error']}>
                <p>Postal is incorrect</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles['cart-actions']}>
          <Button className={styles.close} onClick={props.onClose}>
            Close
          </Button>
          <Button className={styles.order} onClick={onAcceptHandler} disabled={!formIsValid}>
            Accept
          </Button>
        </div>
        {error !== null && <div className={styles['cart-error']}>{error}</div>}
      </React.Fragment>
    )
  }
  return (
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
      {content}
    </Card>
  )
}

export default Cart
