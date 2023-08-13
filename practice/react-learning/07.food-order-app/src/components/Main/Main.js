import React from 'react'
import styles from './Main.module.scss'
import Hero from './Hero/Hero'
import ProductList from './Products/ProductList'

const Main = () => {
  const heroData = {
    title: 'Delicious Food, Delivered To You',
    content: [
      'Choose Your Favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home',
      'All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!',
    ],
  }

  const productsData = [
    {
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: '22.99',
    },
    {
      name: 'Schnitzel',
      description: 'A german specialty',
      price: '16.50',
    },
    {
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: '12.99',
    },
    {
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: '18.99',
    },
  ]

  return (
    <div className={styles.main}>
      <Hero data={heroData} />
      <ProductList data={productsData} />
    </div>
  )
}

export default Main
