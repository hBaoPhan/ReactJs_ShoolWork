import React, { useEffect, useReducer } from 'react'
import { addBook } from '../api/BookApi'


const initialState = {
    title: '',
    author: '',
    category: '',
    status: '',
    error: ''
}
const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT':
            return { ...state, [action.field]: action.value, error: '' }
        case 'ERROR':
            return { ...state, error: action.error }
        case 'RESET':
            return initialState
    }
    return state
}

const AddBookPage = () => {
    let [form, dispatch] = useReducer(formReducer, initialState)

    useEffect(() => { console.log(form) }, [form])
    let handleChange = (e) => {

        dispatch({ type: 'INPUT', field: e.target.name, value: e.target.value })

    }
    let handleSubmit = async (e) => {
        e.preventDefault()
        let bookObj = {
            title: form.title,
            author: form.author,
            category: form.category,
            status: form.status ? form.status : 'unread',
        }
        try {
            let res = await addBook(bookObj)
            if (res.status === 201) {
                alert("Thêm sách thành công")
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='card'>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Tên sách</label>
                <input type="text" value={form.title} name='title' onChange={handleChange} />
                <label htmlFor="">Tác gỉa</label>
                <input type="text" value={form.author} name='author' onChange={handleChange} />
                <label htmlFor="">Thể loại</label>
                <input type="text" value={form.category} name='category' onChange={handleChange} />

                <label htmlFor="">Trạng thái</label>
                <select name="status" value={form.status} onChange={handleChange} >
                    <option value="reading">Đang đọc</option>
                    <option value="read">Đã đọc</option>
                    <option value="unread">Chưa đọc</option>
                </select>
                <button type='submit'>Thêm</button>

            </form>
        </div>
    )
}

export default AddBookPage