import React, { use, useEffect, useMemo } from 'react'
import { getBooks } from '../api/BookApi'
import { useRecoilState } from 'recoil'
import { bookState, userState } from '../store/atom'
import { useLocalStorage } from '../hooks/useLocalStorage'

const Home = () => {

    let [books, setBooks] = useRecoilState(bookState)
    let [user, setUser] = useRecoilState(userState)
    let [savedUser, setSavedUser] = useLocalStorage('user', null)

    useEffect(() => {
        (async () => {
            try {
                let data = await getBooks()
                setBooks(data)
                console.log(data)
            } catch (error) {
                console.log(error.message)
            }
        })()
    }, [])

    useEffect(() => {
        if (savedUser) {
            setUser(savedUser)
        }
    }, [user])

    const stats = useMemo(() => {
        let total = 0;
        let read = 0;
        let reading = 0;
        let unread = 0;
        books.forEach((book) => {
            total++
            if (book.status === 'read') {
                read++
            } else if (book.status === 'reading') {
                reading++
            } else {
                unread++
            }
        }
        )
        return { total, read, reading, unread }
    }, [books])

    return (
        <div >
            <h1>Thống kê</h1>
            <div className='stats-container'>
                <div className='stats-card'>Tổng sách: {stats.total}</div>
                <div className='stats-card'>Sách đã đọc: {stats.read}</div>
                <div className='stats-card'>Sách đang đọc: {stats.reading}</div>
                <div className='stats-card'>Sách chưa đọc: {stats.unread}</div>
            </div>
        </div>


    )
}

export default Home