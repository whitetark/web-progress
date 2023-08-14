import React from 'react'
import styles from './ProductList.module.scss'
import Card from '../UI/Card'
import Product from './Product'

const ProductList = ({ data }) => {
  return (
    <Card className={styles['list']}>
      {data.map((product) => {
        return (
          <React.Fragment key={product.name}>
            <Product data={product} />
            <hr className={styles.divider}></hr>
          </React.Fragment>
        )
      })}
    </Card>
  )
}

export default ProductList
