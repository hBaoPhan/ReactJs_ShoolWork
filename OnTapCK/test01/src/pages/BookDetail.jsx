import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBooksByID } from '../api/BookApi'

const BookDetail = () => {
    let { id } = useParams()
    let [book, setBook] = useState({})
    let [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            try {
                let data = await getBooksByID(id)
                setBook(data ? data : null)
                setLoading(false)
            } catch (error) {

            }
        })()
    }, [id])

    return (

        <div>
            {loading && <p>Đang tải...</p>}
            {!loading && (<div className='book-item'>
                <h2 >{book.title}</h2>

            </div>)}
        </div>

    )
}

export default BookDetail