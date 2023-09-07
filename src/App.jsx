import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer.jsx"
import Header  from "./components/Header/Header.jsx"
import './App.css'

function App() {
  

  return (
    <>
      <Header/>

      <Outlet/>

      <Footer/>
    </>
  )
}

export default App
