import React, { useContext } from 'react'
import styles from './CartForm.module.scss'
import CartContext from '../../store/cart-context'
import useInput from '../../hooks/use-input'
import Button from '../UI/Button'

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const postalRegex = /^[0-9]{5}(?:-[0-9]{4})?$/
const isPostal = (value) => value.match(postalRegex)
const isEmail = (value) => value.match(emailRegex)
const isNotEmpty = (value) => value.trim() !== ''

const CartForm = (props) => {
  const ctx = useContext(CartContext)
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
  } = useInput(isNotEmpty)

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
  } = useInput(isEmail)

  const {
    value: postal,
    isValid: postalIsValid,
    hasError: postalHasError,
    valueBlurHandler: postalBlurHandler,
    valueChangeHandler: postalChangeHandler,
  } = useInput(isPostal)

  const nameControlClasses = nameHasError
    ? `${styles['form-item-control']} ${styles.invalid}`
    : styles['form-item-control']

  const emailControlClasses = emailHasError
    ? `${styles['form-item-control']} ${styles.invalid}`
    : styles['form-item-control']

  const postalControlClasses = postalHasError
    ? `${styles['form-item-control']} ${styles.invalid}`
    : styles['form-item-control']

  const formIsValid = nameIsValid && emailIsValid && postalIsValid

  const onAcceptHandler = () => {
    const check = {
      clientName: name,
      clientEmail: email,
      clientPostal: postal,
      order: [...ctx.items],
    }
    props.onAccept(check)
  }
  return (
    <>
      <div className={styles.form}>
        <div className={styles['form-item']}>
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
            <div className={styles['form-item-error']}>
              <p>Name cannot be empty</p>
            </div>
          )}
        </div>
        <div className={styles['form-item']}>
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
            <div className={styles['form-item-error']}>
              <p>Email is incorrect</p>
            </div>
          )}
        </div>
        <div className={styles['form-item']}>
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
            <div className={styles['form-item-error']}>
              <p>Postal is incorrect</p>
            </div>
          )}
        </div>
      </div>
      <div className={props.buttonClass.main}>
        <Button className={props.buttonClass.close} onClick={props.onClose}>
          Close
        </Button>
        <Button
          className={props.buttonClass.order}
          onClick={onAcceptHandler}
          disabled={!formIsValid}
        >
          Accept
        </Button>
      </div>
    </>
  )
}

export default CartForm
