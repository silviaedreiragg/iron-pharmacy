import useBrandsPage from "./useBrandsPage";

export default function BrandsPage() {
  const { brands } = useBrandsPage();

  return <main>
    <h1 className="h1-brands">Brands</h1>
    {brands.map(brand =>
    (<div className="card" key={brand.id}>
      <div class="card-body">
        <div className="img-logo"><img className='logo' src={brand.logo} alt={brand.name}></img></div>        <div className="text">
          <a href={`/brands/${brand.id}`} className="brand-link">
            <h5 class="card-title">{brand.name}</h5>
          </a>
          <p class="card-text">{brand.description}</p>
          <a href="#" class="card-link">{brand.oficial_web}</a>
        </div>
      </div>
    </div>))}
  </main>
}