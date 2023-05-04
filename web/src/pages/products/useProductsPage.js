import { useEffect, useState } from "react"
import productsRepository from "repositories/products.repository"

export default function useProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productsRepository.listProducts()
      .then(products => setProducts(products))
  }, [])

  return {
    products,
  }
}