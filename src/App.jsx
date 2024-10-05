import { useState } from 'react'
import './App.css'
import Signup from './components/SingUp/SingUp'
import Login from './components/Login/Login'
import BlogPage from  './components/Blogpag/BlogPage'
import Header from './components/Header/Header'
import Footer from './components/Footer.jsx/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
 /* dynaminc routing const SayUser=({userId})=>{
    return(
      <div>
        <h1>your name {userId}</h1>
      </div>
    )
  } */
   

  return (
    <>
    <BrowserRouter>
    <Routes>
  {/* dynaminc routing <Route path="/user/:userId" element={SayUser}/>*/}
     <Route path="/" element={ <Header/>}/>
      <Route path="/" element={ <BlogPage/>}/>
      <Route path="/logout" element={ <Login/>}/>
      <Route path="/signup" element={ <Signup/>}/>
    </Routes>
     <BlogPage/>
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
