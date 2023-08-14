import React from 'react'
import styles from './Header.module.scss'
import CartPreview from '../Cart/CartPreview'
import Container from '../UI/Container'
import mealsImage from '../../assets/meals.jpg'

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <Container className={styles['header-container']}>
          <h1>{props.companyName}</h1>
          <CartPreview />
        </Container>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food' />
      </div>
    </React.Fragment>
  )
}

export default Header
