import React, { useEffect, useState } from 'react'
import productsService from '../../../services/products'

function ProductsList() {
  const [products, setProducts] = useState()

  useEffect(() => {
    productsService.list()
    .then((products) => setProducts(products))
    .catch(error => console.error(error))
  }, [])

  return (
    <>
      <h1>PRODUCTS LIST</h1>
      {products.map((product) => {
       return (
        <div key={product.id}>
          <h1>{product.id}</h1>
        </div>
        )
      })}
    </>
  )
}

export default ProductsList