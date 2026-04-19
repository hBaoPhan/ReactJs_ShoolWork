import React from 'react'
import './ProductCard.css'

export const ProductCard = ({ product, onClick, showAddButton = true }) => {
  return (
    <div className='card'>
        <img className='productImage' src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        {product.quantity ? <p>Quantity: {product.quantity}</p> : null}
        {showAddButton ? (
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => onClick(product)}
          >
            Add to cart
          </button>
        ) : null}
    </div>
    
  )
}
