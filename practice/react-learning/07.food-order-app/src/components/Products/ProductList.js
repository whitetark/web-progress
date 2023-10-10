import React, { useEffect, useState } from 'react'
import styles from './ProductList.module.scss'
import Card from '../UI/Card'
import Product from './Product'
import useRequest from '../../hooks/use-request'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const { isLoading, error, sendRequest } = useRequest()

  useEffect(() => {
    const transformProducts = (productsObj) => {
      const loadedProducts = []

      for (const product in productsObj) {
        loadedProducts.push({
          id: product,
          name: productsObj[product].name,
          description: productsObj[product].description,
          price: productsObj[product].price,
        })
      }

      setProducts(loadedProducts)
    }

    sendRequest(
      {
        url: 'https://react-learning-f58b2-default-rtdb.europe-west1.firebasedatabase.app/products.json',
      },
      transformProducts
    )
  }, [sendRequest])

  let content = <div>Menu is under work</div>

  if (isLoading) {
    content = <div>Loading...</div>
  }

  if (products.length > 0) {
    content = products.map((product) => {
      return (
        <React.Fragment key={product.id}>
          <Product data={product} />
          <hr className={styles.divider}></hr>
        </React.Fragment>
      )
    })
  }

  if (error !== null) {
    content = <div>{error}</div>
  }
  return <Card className={styles['list']}>{content}</Card>
}

export default ProductList
