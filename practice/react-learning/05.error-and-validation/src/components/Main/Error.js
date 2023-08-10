import React from 'react'
import styles from './Error.module.css'
import Button from '../UI/Button'

const Error = (props) => {
  const closeError = () => props.onClose()
  return (
    <div className={styles.error}>
      <header>
        <h1>Invalid input</h1>
      </header>
      <div className={styles['error-data']}>
        <p>{props.reason}</p>
        <Button onClick={closeError}>Okay</Button>
      </div>
    </div>
  )
}

export default Error
