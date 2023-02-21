import React from 'react';
import BeforeCart from './BeforeCart';
import AfterCart from './AfterCart';
import {useSelector} from"react-redux"

function CartButton({ products}) {
    const {cartlist}=useSelector((state)=>state.cart)
    const cartCount=cartlist?.find((item)=>item?.id===products.id)?.count;
    console.log('eeee',cartCount);
  return (
    <>{cartCount > 0 ? (<AfterCart  cartCount={cartCount} productId={products.id}products={products}/>):(<BeforeCart products={products}/>)}</>
  )
}

export default CartButton