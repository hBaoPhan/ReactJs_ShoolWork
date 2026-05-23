import React, { useEffect, useState } from 'react'
import { getBooks, deleteBook } from '../api/BookApi'
import { useRecoilState } from 'recoil'
import { bookState, filterState } from '../store/atom'
import SearchBar from '../components/SearchBar'
import BookItem from '../components/BookItem'
import { useNavigate } from 'react-router-dom'

const BookList = () => {
    let [books, setBooks] = useRecoilState(bookState)
    let [loading, setLoading] = useState(true)
    let [searchTerm, setSearch] = useState('')
    let [filter, setFilter] = useRecoilState(filterState)
    let navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                let data = await getBooks()
                setBooks(data)
                setLoading(false)
                console.log(data)
            } catch (error) {

            }
        })()
    }, [])

    let displayedBooks = books.filter((book) => {
        let matchFilter = filter === 'all' || book.status === filter
        let matchSearch = !searchTerm || book.title.toLowerCase().includes(searchTerm.toLowerCase())
        // console.log(filter)
        // console.log(searchTerm)
        return matchFilter && matchSearch
    })

    let handleView = (id) => {
        navigate(`/book/${id}`)
    }
    let handleDelete = async (id) => {
        try {
            let res = await deleteBook(id)
            if (res.status === 200) {
                setBooks(books.filter((book) => {
                    return book.id != id
                }))
                alert("xóa thành công")
            }
        } catch (error) {
            console.log("xóa thất bại do:" + error.message)
        }
    }

    return (
        <div>
            <div className='search-bar'>
                <SearchBar value={searchTerm} onChange={setSearch}></SearchBar>

                <select name="" id="" value={filter} onChange={(e) => setFilter(e.target.value)} >
                    <option value="all">Tất cả</option>
                    <option value="read">Đã đọc</option>
                    <option value="reading">Đang đọc</option>
                    <option value="unread">Chưa đọc</option>
                </select>

            </div>
            <div className='card'>
                {loading && <p>Đang tải...</p>}
                {!loading && (<div>
                    <table>
                        <thead>
                            <tr>
                                <th>Tên sách</th>
                                <th>Tác giả</th>
                                <th>Thể loại</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayedBooks.length < 0 ?
                                    (<tr>
                                        <td colSpan={5}>Không có sách nào phù hợp</td>
                                    </tr>
                                    ) :
                                    (displayedBooks.map((book) => {
                                        return <BookItem onView={handleView} onDelete={handleDelete} key={book.id} book={book}></BookItem>
                                    }))
                            }
                        </tbody>

                    </table>

                </div>)}


            </div>


        </div>
    )
}

export default BookList