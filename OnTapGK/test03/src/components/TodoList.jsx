import React from 'react'
import './TodoList.css'

const TodoList = ({ data, error, loading }) => {
    return (
        <div className='list'>
            {error && <p>Lỗi khi loading dữ liệu</p>}
            {loading && <p>Loading...</p>}
            {!loading && !error && (data.map((todo) => {
                return <div key={todo.id} className='card'>
                    <h2>{todo.name}</h2>
                    <p>{todo.description}</p>
                    <p>{todo.dueDate}</p>
                    <p>{todo.status}</p>
                </div>
            }))}

        </div>
    )
}

export default TodoList