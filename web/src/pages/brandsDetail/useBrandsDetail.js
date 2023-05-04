import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import brandsRepository from "repositories/brands.repository"

export default function useBrandsDetail() {
  const [brand, setBrand] = useState()

  const params = useParams()

  useEffect(() => {
    brandsRepository.getBrand(params.id)
    .then(brand => setBrand(brand))
  }, [])

  return {
    brand
  }
}
