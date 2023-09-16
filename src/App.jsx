import { } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './componentes/Nav'
import Menu from './componentes/Menu'
import Doacao from './componentes/Doacao'
import Login from './componentes/Login' 
import Footer from './componentes/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Login' element={<Login />} /> 
          <Route path='/Doacao' element={<Doacao />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
