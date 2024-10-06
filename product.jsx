import React, { useContext } from 'react'
import './home.css'
import { cartContext } from '../App'


const Product = ({product}) => {
    const {cart,setCart}=useContext(cartContext)
    const title=product.title.length > 21 ?product.title.substring(0,20)+'..':product.title
  const addCart=()=>{

    setCart([...cart,product])

  }
  const removeCart=()=>{
    setCart(cart.filter((item=>item.id!==product.id)))
    
  }
  
  
    return (
    <div >
    <div className="card " style={{width:'250px',height:'350px'}}>
  <img src={product.image} className="card-img-top" width='200px' height='200px' alt={product.title}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Price: Rs. {product.price}</p>
   {cart.includes(product)?
   <a href="#" className="btn btn-primary remo" onClick={removeCart}>remove Cart</a> :
   <a href="#" className="btn btn-primary" onClick={addCart}>Add to Cart</a>
   
   
   } 
  </div>
</div>
    </div>
  )
}

export default Product