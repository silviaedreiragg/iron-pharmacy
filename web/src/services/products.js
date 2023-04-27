import http from './base-api'
// o export function list()

const list = () => { http.get('/products')
.then((res) => res.data) }

export default {
  list
}