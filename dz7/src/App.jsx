import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/homePage/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
import About from './pages/aboutPage/About'
import Detail from "./pages/detailPage/Detail"

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/detail/:id' element={<Detail />}/>

      
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
