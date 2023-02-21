import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartlist:[],
    cartCount:0,
}
const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addTocart:(state,action)=>{
       
        state.cartlist.push({
            ...action.payload,
            count:1
        })
        },
        inc:(state,action)=>{
         const productId=action.payload;
         state.cartlist.forEach(item=>{
            if(item.id===productId){
                item.count++
            }
         })
        },
        dec:(state,action)=>{
            const productId=action.payload;
            state.cartlist.forEach(item=>{
               if(item.id===productId){
                   item.count--
               }
            })
        }
    }
})

export const {addTocart,inc,dec}=cartSlice.actions;
export default cartSlice.reducer