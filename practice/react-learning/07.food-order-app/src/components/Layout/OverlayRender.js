import React from 'react'
import styles from './OverlayRender.module.scss'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import Cart from '../Cart/Cart'

const CartRender = (props) => {
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

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={styles['render-wrapper']}>
          <Overlay onClick={onCloseHandler} />
          <Cart onClose={onCloseHandler} />
        </div>,
        document.getElementById('cart-root')
      )}
    </React.Fragment>
  )
}

export default CartRender
