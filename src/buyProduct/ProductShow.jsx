import React, { useEffect, useState } from 'react'
import { getProductImage } from '../fireassets/subFunctions';
import {BiPhoneCall} from 'react-icons/bi';import {ImLocation2} from 'react-icons/im'
export default function ProductShow({data,productShow,setCartList}) {
    const [imageUrl,setImageUrl] = useState('')
    useEffect(()=>{getProductImage(setImageUrl,data.imageName)},[imageUrl])
  return (
    <div className='product-container' ref={productShow}>
        <div className='product-top'>
            <div className='product-pic'>
                <img src={imageUrl} alt="" style={{width:'100%',height:'100%',borderRadius:'50%'}} />
            </div>
            <div>
            <div className='product-title'>{data.name}</div>
             <div className='publisher' style={{fontFamily:'var(--nstyle)',cursor:'pointer',fontSize:'2vh'}}>#{data.publisher}</div>
            </div>
            <p style={{position:'absolute',top:'2vh',right:'2vh',fontSize:'2vh'}}>@{data.price}</p>
        </div>
        <div className='product-bottom'>
            <div className='product-content' style={{padding:'2vh'}}>
                {data.desp}
            </div>
            <div className='product-bottom-bottom'>
                <div className='product-contact'>
                    <div><ImLocation2></ImLocation2>&nbsp;&nbsp;{data.landmark}</div>
                    <div><BiPhoneCall></BiPhoneCall>&nbsp;&nbsp;{data.contact}</div>
                </div>
                <div className='product-add'>
                    <span onClick={()=>{setCartList(arr=>[...arr,{name:data.name,price:data.price,desp:data.desp,img:imageUrl}])}}>Add</span>
                </div>
            </div>
        </div>
    </div>
  )
}
