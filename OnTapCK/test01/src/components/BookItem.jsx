import React from 'react'

const BookItem = ({ book, onView, onDelete }) => {
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.category}</td>
            <td>{book.status}</td>
            <td>
                <button onClick={() => onView(book.id)}>Xem</button>
                <button onClick={() => onDelete(book.id)}>Xóa</button>
            </td>
        </tr>
    )
}

export default BookItem