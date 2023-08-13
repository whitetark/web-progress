import React from 'react'
import styles from './ProductList.module.scss'
import Card from '../../UI/Card'
import Product from './Product'

const ProductList = ({ data }) => {
  return (
    <Card>
      {data.map((product) => {
        return (
          <>
            <Product className={styles.product} data={product} />
            <div className={styles.divider}></div>
          </>
        )
      })}
    </Card>
  )
}

export default ProductList
