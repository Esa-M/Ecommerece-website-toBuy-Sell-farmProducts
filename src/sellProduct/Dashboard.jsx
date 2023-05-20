import React, { useState } from 'react'
import PublishForm from './PublishForm'
export default function Dashboard({sellCredential}) {
    const [publish,setPublish] = useState(false)
   
  return (
    <div className='sell-dash-board' id='Dashboard'>
       <div className='sell-dash-top'>
       <div className='sell-dash-pic'><img src={sellCredential.pic} alt="" /></div>
       <div style={{display:'flex',flexDirection:'column'}}>
        <span className='sell-dash-name'>{sellCredential.name}</span>
        <div className='sell-dash-email'>@{sellCredential.email}</div>
       </div>
       </div>
       <div className='sell-dash-bottom'>
          <button className='publish-product' onClick={()=>{setPublish(publish => !publish)}}>Publish product</button>
       </div>
       {(publish)?(<PublishForm setPublish={setPublish} sellCredential={sellCredential} publish={publish}></PublishForm>):''}
    </div>
  )
}
