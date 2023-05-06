import apiClient from './api.client'

function registerUser() {
  return apiClient.post('/register').then((res) => res.data)
}

const login = (user) => apiClient.post("/login", user)

export default {
  registerUser,
  login
}