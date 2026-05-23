import React from 'react'
import { useRecoilState } from 'recoil'
import { cartState, productsState } from '../store/atom'
import Product from '../components/Product'

const Cart = () => {
    let [cart,setCart]=useRecoilState(cartState)
  return (
    <div className='product-list'>
       
      
    </div>
  )
}

export default Cart
