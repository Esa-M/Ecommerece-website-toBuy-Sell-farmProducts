import React from 'react'

export default function LabelInputs({label,inputType,setFunction,val}) {
  return (
    <div className='form-input'>
        <label>{label}</label><br />
        <input type={inputType}  onChange={(e)=>{setFunction(e.target.value)}} value={val} required/>
    </div>
  )
}
