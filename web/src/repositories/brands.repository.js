import apiClient from "./api.client"

function listBrands() {
  return apiClient.get('/brands').then((res) => res.data)
}

function getBrand(id) {
  return apiClient.get(`/brands/${id}`).then((res) => res.data)
}

export default {
  listBrands,
  getBrand,
}