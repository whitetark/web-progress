import React from 'react'
import styles from './Error.module.css'
import Button from './Button'
import Card from './Card'

const Error = ({ reason, onClose }) => {
  const closeError = () => onClose()
  return (
    <Card className={styles.error}>
      <header>
        <h1>Invalid input</h1>
      </header>
      <div className={styles['error-data']}>
        <p>{reason}</p>
        <Button onClick={closeError}>Okay</Button>
      </div>
    </Card>
  )
}

export default Error
