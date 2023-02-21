import React from 'react';
import "./CartButton.css";
import {useDispatch} from"react-redux";
import {addTocart} from"../../../redux/cart"

function BeforeCart({ products}) {
    const dispatch=useDispatch()
  return (
    <div className="before-cart">
         <button className="add-cart-button" onClick={()=>dispatch(addTocart( products))}>
            Add to cart
         </button>
      </div>
  )
}

export default BeforeCart