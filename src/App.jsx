import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Auth from './Auth'
import BuyProduct from './buyProduct/BuyProduct'
import SellProduct from './sellProduct/SellProduct'
import './App.css'
import './buy.css'
import './sell.css'
import './auth.css'
import Logo from './Logo'
function App() {
  
  const[credantial,setCredantial] = useState('')
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Auth setCredantial={setCredantial}/>}></Route>
          <Route path='/buyproducts' element={<BuyProduct logo ={(<Logo></Logo>)} credantial={credantial} />}></Route>
          <Route path='/sellProducts' element={<SellProduct logo ={(<Logo></Logo>)}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
