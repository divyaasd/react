import React from 'react';
import './head.css';
import { IoFastFoodSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';
function Header({cart}) {
  return (
    <div className='full'>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand text-light fs-1" to='/' ><IoFastFoodSharp /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <Link class="nav-link active text-light" aria-current="page" to='/' >Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link text-light" aria-current="page" to='/cart' ><button type="button" class="btn btn-primary position-relative">
        <FaShoppingCart />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
  </span>
</button>cart</Link>
        </li>
       </ul>
       
      
    </div>
  </div>
</nav>
    

    </div>
  )
}

export default Header