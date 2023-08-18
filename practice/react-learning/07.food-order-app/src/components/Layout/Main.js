import React from 'react'
import styles from './Main.module.scss'
import Hero from '../Hero/Hero'
import ProductList from '../Products/ProductList'
import Container from '../UI/Container'

const Main = () => {
  const heroData = {
    title: 'Delicious Food, Delivered To You',
    content: [
      'Choose Your Favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home',
      'All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!',
    ],
  }

  return (
    <Container className={styles.main}>
      <Hero data={heroData} />
      <ProductList />
    </Container>
  )
}

export default Main
