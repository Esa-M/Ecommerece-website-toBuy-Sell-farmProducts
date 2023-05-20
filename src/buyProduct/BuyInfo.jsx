import {React, useEffect, useRef } from 'react'
import bg5 from '/src/assets/5.jpg'
import bg6 from '/src/assets/6.jpg'
import bg7 from '/src/assets/7.jpg'
import bg8 from '/src/assets/8.jpg'
import bg9 from '/src/assets/9.jpg'
import bg10 from '/src/assets/10.jpg'
export default function BuyInfo() {
    const imageRef = useRef(0)

    const imageSlide =()=>{
        const width = imageRef.current.clientWidth
        if(imageRef.current.scrollLeft >= width * 4){
          return  imageRef.current.scrollLeft = 0
        }
        imageRef.current.scrollLeft =  imageRef.current.scrollLeft + width
    }

  useEffect(()=>{
    const slideInterval = setInterval(()=>{imageSlide()}, 4000);
    return()=>{
        clearInterval(slideInterval)
    }
  },[])
  return (
    <div className='buy-info' style={{height:'80vh'}}>
        <div className='buy-info-image' ref={imageRef} data-aos="zoom-in">
          <div className='buy-image-slide' style={{backgroundImage:`url(${bg5})`,backgroundRepeat:'no-repeat',backgroundSize:`cover`,boxShadow:`inset 0 0 0 1000px rgba(0,0,0,.2)`}} ></div>
          <div className='buy-image-slide' style={{backgroundImage:`url(${bg6})`,backgroundRepeat:'no-repeat',backgroundSize:`cover`,boxShadow:`inset 0 0 0 1000px rgba(0,0,0,.2)`}} ></div>
          <div className='buy-image-slide' style={{backgroundImage:`url(${bg7})`,backgroundRepeat:'no-repeat',backgroundSize:`cover`,boxShadow:`inset 0 0 0 1000px rgba(0,0,0,.2)`}} ></div>
          <div className='buy-image-slide' style={{backgroundImage:`url(${bg8})`,backgroundRepeat:'no-repeat',backgroundSize:`cover`,boxShadow:`inset 0 0 0 1000px rgba(0,0,0,.2)`}} ></div>
          <div className='buy-image-slide' style={{backgroundImage:`url(${bg10})`,backgroundRepeat:'no-repeat',backgroundSize:`cover`,boxShadow:`inset 0 0 0 1000px rgba(0,0,0,.2)`}} ></div>
          <div className='buy-image-slide' style={{backgroundImage:`url(${bg7})`,backgroundRepeat:'no-repeat',backgroundSize:`cover`,boxShadow:`inset 0 0 0 1000px rgba(0,0,0,.2)`}} ></div>
        </div>
        <div className='buy-info-txt' data-aos="fade-left" data-aos-delay='200'>
            <span data-aos="fade-left" data-aos-delay='0'>About</span><br />
            Again Welocome, you all to this webpage. which is specially build for the farmers who want's to make their 
            farm products to sell or buy through online, with full of free of additional charge.
          
        </div>
    </div>
  )
}
