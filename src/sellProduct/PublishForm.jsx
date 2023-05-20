import React, { useState } from 'react'
import { pushProduct } from '../fireassets/subFunctions'
import {BsImages} from 'react-icons/bs'
import LabelInputs from './LabelInputs'

export default function PublishForm({setPublish,publish,sellCredential}) {
 
  const [productName,setProductName] = useState('')
  const [productCost,setProductCost] = useState(0)
  const [productDesp,setProductDesp] = useState('')
  const [productContact,setProductContact] = useState('')
  const [productLandMark,setProductLandMark] = useState('')
  const [productCity,setProductCity] = useState('')
  const [productImage,setProductImage] = useState()
  const [productImageName,setProductImageName] = useState(0)
  const [productList,setProductList] = useState([])

  const submitForm =(e)=>{
     e.preventDefault()
     pushProduct(productName,productCost,productContact,productDesp,productCity,productLandMark,productImage,productImageName,setProductList).then(()=>{
      setPublish(publish => !publish)
     })
    }
  const selectImage =(e)=>{
        setProductImage(e.target.files[0])
        setProductImageName(e.target.files[0].name)

  }
  console.log(productContact,productCost,productDesp,productLandMark,productName)
  return (
    <div className='publish-form-container'>
        <form action="" className='publish-form' onSubmit={(e)=>{submitForm(e)}}>
         <div style={{display:'flex',flexDirection:'row',gap:'5vh',marginTop:'5vh'}}>
         <LabelInputs label={'Product Name'} inputType={'text'} setFunction ={setProductName} val={productName}></LabelInputs>
         <LabelInputs label={'Product Price'} inputType={'text'} setFunction ={setProductCost} val={productCost}></LabelInputs>
         </div>
         <div style={{display:'flex',flexDirection:'row',gap:'5vh',marginTop:'5vh'}}>
         <LabelInputs label={'Land Mark'} inputType={'text'} setFunction ={setProductLandMark} val={productLandMark} ></LabelInputs>
         <LabelInputs label={'Contact'} inputType={'text'} setFunction ={setProductContact} val={productContact}></LabelInputs>
         </div>''
         <div style={{display:'flex',flexDirection:'column',gap:'1vh',marginTop:'5vh'}}>
         <LabelInputs label={'City'} inputType={'text'} setFunction ={setProductCity} val={productCity}></LabelInputs>
         <label className='form-label'>Product Description</label><br />
         <textarea  className='drop-box' cols="30" rows="8" onChange={(e)=>{setProductDesp(e.target.value)}} val={productDesp}></textarea>
         </div>
         <div style={{display:'flex',flexDirection:'column',gap:'1vh',marginTop:'5vh'}}>
         <label className='form-label'>upload image</label><br />
         <div className='drop-image' draggable >
           <input type="file" accept='image/*' onChange={(e)=>{selectImage(e)}}/>
         </div>

         </div>
         <button style={{alignSelf:'center'}} className='submit-form' type='submit' onSubmit={(e)=>{submitForm(e)}}>Publish</button>
        </form>
    </div>
  )
}
