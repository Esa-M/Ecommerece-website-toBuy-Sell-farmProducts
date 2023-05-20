import React, { useState ,useRef, useEffect} from 'react'
import {GiBuyCard} from 'react-icons/gi'
import {MdOutlineSell} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { auth ,provider} from './fireassets/firebaseconfig'
import { signIn } from './fireassets/subFunctions'
import bg1 from '/src/assets/1.jpg'
import bg2 from '/src/assets/2.jpg'
import bg3 from '/src/assets/3.jpg'
import Logo from './Logo'
export default function Auth({setCredantial}) {
    const images = [bg1,bg2,bg3]
    const [image,setImage] = useState(bg1)
    const[count,setCount] = useState(0)
    
    const authNavigate = useNavigate('') 
   useEffect(()=>{
    const interval = setInterval(() => {
      if (count == 2){
        setCount(count => count - 2)
        setImage(images[count])  
      }
     if(count < images.length){
      setCount(count + 1)
      setImage(images[count])
     }
    }, 2000);
    return ()=>{
      clearInterval(interval)
    }
   },[count])

   
  return (
    <div className='root-auth'>
        <div className='root-auth-text'>
         <div>
         <Logo></Logo>
          {/* <span>AQUA</span> */}
          <div className='auth-txt-content' data-aos="fade-up" data-aos-delay='150'>
            welcome to the Market place where you can Buy and Sell farm products at free of Chargers
          </div>
          <div className='auth-txt--quotes' data-aos="fade-up" data-aos-delay='300'>“Cultivators are the most valuable citizens… they are tied to their country.” – Thomas Jefferson</div>
         <div className='root-auth-button-container'>
          <button data-aos="fade-up" data-aos-delay='600' onClick={()=>{signIn(auth,provider,setCredantial,authNavigate,'/buyproducts')}}>Buy&nbsp;Products&nbsp;<GiBuyCard></GiBuyCard></button>
          <button data-aos="fade-up" data-aos-delay='900'  onClick={()=>{signIn(auth,provider,setCredantial,authNavigate,'/sellProducts')}}>Sell&nbsp;Products&nbsp;<MdOutlineSell></MdOutlineSell></button>
         </div>
         </div>
        </div>
        <div className='root-auth-bg' style={{backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:`cover`,boxShadow:`inset 0 0 0 1000px rgba(0,0,0,.2)`}}>
          {/* <span> freashly from the farms</span> */}
        </div>
    </div>
  )
}
