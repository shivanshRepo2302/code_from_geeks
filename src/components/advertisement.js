import {React} from 'react';
import './advertisement.css';
const  Advertisement =() =>{
    return (
    <div className="ad-container">
        <div className="product-card">
    <div className="logo-cart">
      <img src="images/logo.jpg" alt="logo" />
        <i className='bx bx-shopping-bag'></i>
    </div>
   
    <div className="shoe-details">
      <span className="shoe_name">Your central hub to buy/sell second hand item</span>
      
     
    </div>
   
    <div className="button">
      <div className="button-layer"></div>
      <button>Start exploring</button>
    </div>
  </div>
  </div>
    )
}

export default Advertisement;