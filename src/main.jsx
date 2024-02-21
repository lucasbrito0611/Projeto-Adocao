import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';

import Home from './paginas/Home/Home.jsx'
import Adote from './paginas/Adote/Adote.jsx';
import QuemSomos from './paginas/QuemSomos/Quemsomos.jsx';
import QuemAdotou from './paginas/QuemAdotou/Quemadotou.jsx';
import Animal from './paginas/Animal/Animal.jsx';
 
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/quemsomos' element={<QuemSomos />}/>
          <Route path='/adote' element={<Adote />}/>
          <Route path='/quemadotou' element={<QuemAdotou />}/>
          <Route path='/animal/:nome' element={<Animal />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
