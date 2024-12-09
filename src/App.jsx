import { Routes,Route } from "react-router-dom"
import Home from "./Components/Home"
import Support from "./Components/Support"
import Header from "./Components/Header"
import Enterprise from "./Components/Enterprise"
import Footer from "./Components/Footer"
import Features from "./Components/features"

function App() {
  return (
    <>

  <Header/>
   
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