import React from 'react'
import styles from './Header.module.scss'
import CartPreview from '../Main/Cart/CartPreview'
import Container from '../UI/Container'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Container>
        <h1>{props.companyName}</h1>
        <CartPreview />
      </Container>
    </header>
  )
}

export default Header
