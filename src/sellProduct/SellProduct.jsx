import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Link as Scroll}  from 'react-scroll'
import { getUserData,signoutRedirect} from '../fireassets/subFunctions'
import BuyInfo from '../buyProduct/BuyInfo'
import Dashboard from './Dashboard';
export default function SellProduct({logo}) {
  const[sellKey,setsellKey] = useState('')
  const[SellUsercredential,setSellUsercredential] = useState({})
  const buyNavigate = useNavigate('')
  useEffect(()=>{
   setsellKey(localStorage.getItem('key'))
   if(sellKey !=''){
    getUserData(sellKey,setSellUsercredential)
   }
  },[sellKey])

 const navigateHome = useNavigate('')
  return (
    <div className='sell-container'>
    <div className='buy-root-container'>
      <div className='buy-root-nav'>
       {logo}
       <div className='buy-root-nav-elements'>
         <Scroll to='Dashboard' offset={100} smooth={true}><div className="buy-elements">dash board</div></Scroll>
         <div className="buy-elements" onClick={()=>{buyNavigate('/buyproducts')}}>buy product</div>
         <div className="buy-elements" onClick={()=>{signoutRedirect(navigateHome,'/')}}>sign out</div>
         <div className="buy-root-profile">
           <img src={SellUsercredential.pic} alt="" />
         </div>
       </div> 
      </div>
    </div>
    <BuyInfo></BuyInfo>
    <Dashboard sellCredential = {SellUsercredential}></Dashboard>
    </div>
  )
}
