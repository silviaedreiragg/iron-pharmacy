import apiClient from './api.client'

function registerUser() {
  return apiClient.post('/register').then((res) => res.data)
}

export default {
  registerUser
}