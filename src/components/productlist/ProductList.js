import React from 'react';
import products from "../../api/products.json"
import "./ProductList.css";
import {useSelector} from"react-redux"
import CartButton from './CartButton';

function ProductList() {
    const {cartlist}=useSelector((state)=>state.cart)
    console.log("thrrr", cartlist);
  return (
  <section className='container'>
 {
    products.map((items,key)=>{
       return(<div className='product-container' key={key}>
        <img src={items?.image}/>
        <h2>{items?.title}</h2>
        
         <CartButton   products={items}/>
        </div>
       )
    })
 }
  </section>
  )
}

export default ProductList