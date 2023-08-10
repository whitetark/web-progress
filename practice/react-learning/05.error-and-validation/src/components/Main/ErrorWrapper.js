import React from 'react'
import Overlay from '../UI/Overlay'
import Error from './Error'
import styles from './ErrorWrapper.module.css'

const ErrorWrapper = (props) => {
  const closeError = () => props.onClose()
  return (
    <div className={styles['error-wrapper']}>
      <Overlay onClick={closeError} />
      <Error reason={props.reason} onClose={closeError} />
    </div>
  )
}

export default ErrorWrapper
