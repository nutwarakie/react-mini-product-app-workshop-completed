

import api from "./axios";

 const _rootURL = '/product-list'
export async function fetchProductList() {
  const response = await api.get(_rootURL);
  return response.data;
}

export async function fetchProductByID(id:string) {
  const response = await api.get(`${_rootURL}/${id}`)
  return response.data
}
