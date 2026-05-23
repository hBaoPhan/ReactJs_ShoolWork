import axios from "axios";

const API_URL='http://localhost:3000/products'

export const getProducts=()=>{
    return axios.get(API_URL).then(res=>res.data)
}
export const getProductById=(id)=>{
   return axios.get(`${API_URL}/${id}`).then(res=>res.data)
}
export const addProduct=(product)=>{
    return axios.post(API_URL,product)
}
export const deleteProduct=(id)=>{
    return axios.delete(`${API_URL}/${id}`)
}