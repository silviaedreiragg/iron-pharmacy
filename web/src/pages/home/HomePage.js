import React from 'react'

import useHomePage from './useHomePage'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { products } = useHomePage()

  const navigate = useNavigate()

  return (
    <>
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.laroche-posay.us/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lrp-us-Library/default/dw740d6e24/images/homepage/Toleriane-banner_960x548.Mobile.jpg?sw=480&sh=274&sm=cut&q=70" className="d-block" alt="larocheposay-img" />
    </div>
    <div className="carousel-item">
      <img src="https://i.makeup.es/p/pe/pegbmld4nsgm.jpg" className="d-block" alt="nuxe-img" />
    </div>
    <div className="carousel-item">
      <img src="https://www.vitis.es/wp-content/uploads/2019/02/seda-dental-vitis-web2.jpg" className="d-block" alt="larocheposay-img" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="buttons">
  <button className="btn btn-outline-success" onClick={() => navigate("/login")}>log in</button>
  <button className="btn btn-outline-info" onClick={() => navigate("/register")}>Sign up</button>
</div>

    </>
  )
}

export default Home