import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsRepository from "repositories/products.repository";

export default function useProductsPage() {
  const [search] = useSearchParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsRepository.listProducts().then((products) => {
      if (!search.has("query")) {
        setProducts(products);
        return;
      }

      const filteredProducts = products.filter((product) => {
        const query = search.get("query").toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.type.toLowerCase().includes(query) ||
          product.brandName.toLowerCase().includes(query)
        );
      });

      setProducts(filteredProducts);
    });
  }, [search]);

  return {
    products,
  };
}
