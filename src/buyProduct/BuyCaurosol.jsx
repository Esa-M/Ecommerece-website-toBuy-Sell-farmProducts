import React, { useRef } from 'react'
import ProductShow from './ProductShow'
import {RiMapPinFill} from 'react-icons/ri'

export default function BuyCaurosol({productList,title,setCartList}) {
    const productShow = useRef(0)
    const caurosolRef = useRef(0)
    
    
    const slideRight = ()=>{
      const width = productShow.current.clientWidth
      caurosolRef.current.scrollLeft = caurosolRef.current.scrollLeft + width
    }
    const  slideLeft =()=>{
      const width = productShow.current.clientWidth
      caurosolRef.current.scrollLeft = caurosolRef.current.scrollLeft - width
    }
  return (
    <div className='buy-caurosol'>
        <span className='buy-title' style={{backgroundColor:'white',color:'black'}}><RiMapPinFill></RiMapPinFill>&nbsp;&nbsp;{title}</span> 
        <div className='buy-caurosol-container'  ref={caurosolRef}>
          {productList.map((product,i)=>{
            if(product.data().city == title.toLowerCase()){
              return (<ProductShow key={i} data={product.data()} productShow={productShow} setCartList={setCartList}></ProductShow>)
            }
          })}
          <button style={{left:'3vh'}}  onClick={()=>{ slideLeft()}}>{'<'}</button>
          <button style={{right:'3vh'}} onClick={()=>{slideRight()}}>{'>'}</button>
        </div>
      
    </div>
  )
}
