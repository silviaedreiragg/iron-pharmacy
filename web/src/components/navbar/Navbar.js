import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom"

function Navbar() {
  const [navigate, setNavigate] = useState(false)

  const handleClick = () => {
    setNavigate(true)
  }
  if (navigate) {
    return <Navigate to="/products" />
  }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
      <div className="container-fluid">
        <button className="navbar-toggler" onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Pharmacy</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Log in</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </Link>
              <ul class="dropdown-menu">
                <li><Link className="dropdown-item" to="/brands">For brand</Link></li>
                <li><Link className="dropdown-item" to="/products">For type</Link></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><Link className="dropdown-item" tk="/products">Sooner expiration date</Link></li>

              </ul>
            </li>
          
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar