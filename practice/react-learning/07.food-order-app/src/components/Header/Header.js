import React from 'react'
import styles from './Header.module.scss'
import CartPreview from './CartPreview'
import Container from '../UI/Container'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Container className={styles['header-container']}>
        <h1>{props.companyName}</h1>
        <CartPreview />
      </Container>
    </header>
  )
}

export default Header
