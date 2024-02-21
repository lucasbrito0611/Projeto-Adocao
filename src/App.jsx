import { Outlet } from 'react-router-dom'
import Header from './componentes/Header-Footer/Header'
import Footer from './componentes/Header-Footer/Footer'

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
