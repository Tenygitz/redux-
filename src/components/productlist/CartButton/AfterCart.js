import React from 'react';
import {inc,dec} from"../../../redux/cart";
import {useDispatch} from"react-redux";
import "./CartButton.css";

function AfterCart({cartCount,productId}) {
    const dispatch=useDispatch()
  return (
    <div className="after-cart">
    <button className="cart-counter-button" onClick={()=>dispatch(dec(productId))}>
       -
    </button>
    <div className="cart-count">{cartCount}</div>
    <button className="cart-counter-button" onClick={()=>dispatch(inc(productId))} >
       +
    </button>
 </div>
  )
}

export default AfterCart