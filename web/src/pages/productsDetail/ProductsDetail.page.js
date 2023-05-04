import useProductsDetail from "./useProductsDetail";

export default function ProductsDetailPage() {
  const { product } = useProductsDetail();

  if (!product) {
    return <p>loading...</p>
  }

  return <main>
    <div className="productDetail__container">
      <h1 className="h1-productsDetail">{product.name}</h1>
      <div className="productDetail__info">
        <div className="product__img">
        <img src={product.imageUrl} alt={product.id} className="productDetail__img"/></div>
        <div className="product-info">
          <p>{product.description}</p>
          <a href={`/brands/${product.brand}`} className="brandName">
            <h6>{product.brandName}</h6>
          </a>
        </div>

      </div>
    </div>
  </main>
}