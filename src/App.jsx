import { Routes,Route } from "react-router-dom"
import Home from "./Components/Home"
import Support from "./Components/Support"

import Enterprise from "./Components/Enterprise"
import Footer from "./Components/Footer"
import Features from "./Components/features"
import Navbar from "./Components/header"
function App() {
  return (
    <>

      <Navbar/>
   
      <Routes>
       
       
        <Route path='Features' element={<Features/>}></Route>
        <Route path='Enterprise' element={<Enterprise/>}></Route>
        <Route path='Support' element={<Support/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        
      </Routes>
    <Footer/>
      </>
 

  )
}

export default App
