import { useEffect, useState } from "react"
import brandsRepository from "repositories/brands.repository"

export default function useBrandsPage() {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    brandsRepository.listBrands()
      .then(brands => setBrands(brands))
  }, [])

  return {
    brands,
  }
}