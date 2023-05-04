import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productsRepository from "repositories/products.repository"

export default function useProductsDetail() {
  const [product, setProduct] = useState()

  const params = useParams()

  useEffect(() => {
    productsRepository.getProduct(params.id)
    .then(product => setProduct(product))
  }, [])

  return {
    product
  }
}
