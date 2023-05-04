import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import brandsRepository from "repositories/brands.repository";

export default function useBrandsPage() {
  const [brands, setBrands] = useState([]);
  const [search] = useSearchParams();

  useEffect(() => {
    brandsRepository.listBrands().then((brands) => {
      
      if (!search.has("query")) {
        setBrands(brands);
        return;
      } 

      const query = search.get("query");
      const filteredBrands = brands.filter((brand) => {
        return brand.name.toLowerCase().includes(query.toLowerCase());
      });


      setBrands(filteredBrands);
    });
  }, [search]);

  return {
    brands,
  };
}
