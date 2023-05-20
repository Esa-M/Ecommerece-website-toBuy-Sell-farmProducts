import React, { useEffect, useState } from 'react'
import { getProduct,getDist } from '../fireassets/subFunctions'
import BuyCaurosol from './BuyCaurosol'
import Cart from './Cart'

export default function BuyContainer() {
  const [productList,setProductList] = useState([])
  const [productDist,setProductDist] = useState([])
  const [cartList,setCartList] = useState([])
 useEffect(()=>{
  getProduct(setProductList)
  getDist(setProductDist)},[])
 
  console.log(productDist)
  return (
    <div className='buy-container' id='Products'>
        <span>Products</span>
         {productDist.map((district,i)=>{
          return (<BuyCaurosol productList={productList} title={district} key={i} setCartList={setCartList}></BuyCaurosol>)
         })}
   <Cart cartList={cartList} setCartList={setCartList}></Cart>
    </div>
  )
}
