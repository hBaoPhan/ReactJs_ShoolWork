import axios from 'axios'

const API_URL = 'https://69831cd79c3efeb892a4738c.mockapi.io/wwa/book'

export const getBooks = async () => {
    return axios.get(API_URL).then((res) => { return res.data })
}
export const getBooksByID = async (id) => {
    return axios.get(`${API_URL}/${id}`).then((res) => { return res.data })
}
export const addBook = async (book) => {
    return axios.post(API_URL, book)
}
export const deleteBook = async (id) => {
    return axios.delete(`${API_URL}/${id}`)
}