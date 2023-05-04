import { useEffect, useState } from "react"
import productsRepository from "repositories/products.repository"

export default function useHomePage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productsRepository.listProducts()
      .then((products) => setProducts(products))
      .catch(error => console.error(error))
  }, [])


  return {
    products,
  }
}