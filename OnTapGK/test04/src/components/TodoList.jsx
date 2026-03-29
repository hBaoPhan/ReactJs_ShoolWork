import React from 'react'
import './TodoList.css'

const TodoList = ({ data, loading, error }) => {



    return (
        <div className='list'>
            {loading && <p>Loading...</p>}
            {error && <p>Erorr</p>}
            {!loading && !error && (
                data.map((product) => {
                    return <div className='card' key={product.id}>
                        <img style={{ width: '100px' }} src={product.image} alt="" /> <br />
                        <h2>{product.name}</h2> <br />
                        <p>{product.price}</p> <br />
                        <p>{product.category}</p>
                    </div>
                })
            )}






        </div>
    )
}

export default TodoList