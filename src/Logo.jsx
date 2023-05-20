import React from 'react'
import logo from '/src/assets/logo.png'
export default function Logo() {
  return (
    <>
      <div className='auth-logo-conatainer'>
         <div className='auth-logo' data-aos="zoom-in">
            <img src={logo} alt="" />
          </div>
          <div className='logo-txt'>Aqua</div>
         </div>
         </>
  )
}
