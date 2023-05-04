import apiClient from "./api.client"

function listProducts() {
  return apiClient.get('/products').then((res) => res.data)
}

function getProduct(id) {
  return apiClient.get(`/products/${id}`).then((res) => res.data)
}

export default {
  listProducts,
  getProduct,
}