// import ProductsList from "./components/products/products-list/ProductsList";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/HomePage";
import ProductsPage from "pages/products/Products.page";
import RegisterPage from "pages/register/RegisterPage";
import ProductsDetailPage from "pages/productsDetail/ProductsDetail.page";
import BrandsPage from "pages/brands/Brands.page";
import BrandsDetailPage from "pages/brandsDetail/BrandsDetail.page";
import LoginPage from "pages/login/LoginPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/products/:id" element={<ProductsDetailPage />} />
        <Route path="/brands/:id" element={<BrandsDetailPage />} />
        <Route path="/users/:id" element={<h1>User detail</h1>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
