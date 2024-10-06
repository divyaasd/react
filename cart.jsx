import React, { useEffect, useState,useContext } from 'react'
import './cart.css'
import { cartContext } from '../App'
function Cart() {
  const {cart,setCart}=useContext(cartContext)
  const [total,setTotal]=useState(0)

  useEffect(()=>{
    setTotal(cart.reduce((accu,current)=>
      accu+parseInt(current.price),0
    ))
  },[cart])
  
  return (
    <div>
      <h1 className='cart-heading'>Cart products</h1>
      <div className="cart-container">

        {
          cart.map((product)=>(
            <div className="cart-product" key={product.id}>
          <div className="img">
            <img src={product.image} alt="" />
          </div>
          <div className="cart-product-detail">
            <h3>{product.title}</h3>
            <p>price Rs: {product.price}</p>
            <a href="#" className="btn btn-primary remo" onClick={()=> setCart(cart.filter((item=>item.id!==product.id)))}>remove Cart</a>
          </div>
        </div>
          ))
        }
        
       
       

      </div>
      <h2 className='cart-price'>Total amount Rs:{total}</h2>
    </div>
  )
}

export default Cart