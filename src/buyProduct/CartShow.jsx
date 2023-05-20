import React from 'react'

export default function CartShow({item,cartList,setCartList}) {
    
  return (
    <div style={{display:'flex',flexDirection:'row',padding:'2rem',gap:'1rem',position:'relative',fontFamily:'Poppins, sans-serif'}}>
      <div style={{width:'10vw',height:'10vw',minHeight:'10vw',minwidth:'10vw'}}> <img src={item.img} alt=""  style={{height:'100%',width:'100%',borderRadius:'50%'}}/> </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'left'}}>
        <div>{item.name}</div>
         <div>{item.desp}</div>
      </div>
      <div style={{position:'absolute',right:'1rem',bottom:'1rem',cursor:'pointer'}} onClick={()=>{console.log('clicked');setCartList(arr => arr.filter((product)=>{console.log(product);product.name !== item.name}))}}>Remove</div>
    </div>
  )
}
