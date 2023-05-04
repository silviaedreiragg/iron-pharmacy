import useBrandsDetail from "./useBrandsDetail";

export default function BrandsDetailPage() {
  const { brand } = useBrandsDetail();

  if (!brand) {
    return <p>loading...</p>
  }

  return <main>
    <div className="brandDetail__container">
      <h1 className="h1-brandsDetail">{brand.name}</h1>
      <div className="brand__info">
        <img src={brand.logo} alt={brand.id} className="brandDetail__img"/>
        <div className="brand-info">
          <p>{brand.description}</p>
        </div>

      </div>
    </div>
  </main>
}