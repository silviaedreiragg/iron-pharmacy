import useProductsPage from "./useProductsPage";

export default function ProductsPage() {
  const { products } = useProductsPage();

  return <main className="products">
    <h1 className='h1-products'>Products</h1>

    <div className="productCard__container">
    {products.map(product => (
    <div className="productCard" key={product.id}>
    <div className="productCard_text">
    <a href={`/products/${product.id}`}  className="productCard__link">
      <h5 class="card-title-product">{product.name}</h5>
      <p>{product.type}</p>
    </a>
      </div>
      <img className='productCard__img' src={product.imageUrl} alt={product.name} />

    </div>
    ))}
    </div>
  </main>
}