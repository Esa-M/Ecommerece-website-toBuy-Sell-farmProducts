import React, { useEffect } from 'react'
import CartShow from './CartShow'
export default function Cart({cartList,setCartList}) {
useEffect(()=>{
console.log(cartList)
},[cartList])
  return (
    <div className='cart-root' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'left',marginTop:'5rem'}}>
        <span style={{alignSelf:'center'}}>Cart</span>
         {
            cartList.map((item,index)=>{
                console.log(item)
                return (<CartShow item={item} key={index} cartList={cartList} setCartList={setCartList}></CartShow>)
            })
         }

    </div>
  )
}
