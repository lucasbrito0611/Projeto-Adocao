import { Outlet } from 'react-router-dom'
import Header from './componentes/Layout/Header'
import Footer from './componentes/Layout/Footer'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
