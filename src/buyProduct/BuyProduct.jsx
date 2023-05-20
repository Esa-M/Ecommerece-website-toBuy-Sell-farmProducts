import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Link as Scroll}  from 'react-scroll'
import { getUserData,signoutRedirect } from '../fireassets/subFunctions'
import BuyInfo from './BuyInfo'
import BuyContainer from './BuyContainer'
export default function BuyProduct({logo}) {
  const[key,setKey] = useState('')
  const[userCredential,setUserCredential] = useState({})
  const sellNavigate = useNavigate('')
  useEffect(()=>{
   setKey(localStorage.getItem('key'))
   if(key !=''){
    getUserData(key,setUserCredential)
   }
  },[key])
  const rootDirect = useNavigate('')
  return (
    <>
   <div className='buy-root-container'>
     <div className='buy-root-nav'>
      {logo}
      <div className='buy-root-nav-elements'>
        <Scroll to='Products' offset={100} smooth={true}><div className="buy-elements">Products</div></Scroll>
        <div className="buy-elements">Cart</div>
        <div className="buy-elements">orders</div>
        <div className="buy-elements" onClick={()=>{sellNavigate('/sellProducts')}}>sell product</div>
        <div className="buy-elements" onClick={()=>{signoutRedirect(rootDirect,'/')}}>sign out</div>
        <div className="buy-root-profile">
          <img src={userCredential.pic} alt="" />
        </div>
      </div>
     
     </div>
   </div>
   <BuyInfo></BuyInfo>
   <BuyContainer></BuyContainer>
   </>
  )
}
