import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import store from '../utils/store'
import FoodItem from './FoodItem'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    
    const handleClearCartItems = () => {
        dispatch(clearCart())
    }
    return (
      <div>
            <h1 className='font-bold text-3xl'>Cart Items</h1>
            <button
                className='bg-pink-300 p-2 m-5'
                onClick={()=>handleClearCartItems()}
            >
                Clear Cart
            </button>
            <div className='flex'>
                {cartItems.map((item) => (<FoodItem key={item.id} {...item} />))}
                </div>
    </div>
  )
}

export default Cart;