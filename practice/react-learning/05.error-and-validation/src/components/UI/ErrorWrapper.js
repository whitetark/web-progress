import React from 'react'
import Overlay from './Overlay'
import Error from './Error'
import styles from './ErrorWrapper.module.css'
import ReactDOM from 'react-dom'

const ErrorWrapper = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={styles['error-wrapper']}>
          <Overlay onClick={props.onClose} />
          <Error reason={props.reason} onClose={props.onClose} />
        </div>,
        document.getElementById('error-root')
      )}
    </React.Fragment>
  )
}

export default ErrorWrapper
