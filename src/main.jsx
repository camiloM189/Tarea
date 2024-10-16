import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import './page/DesarrolloDeSotware/StyleDesarrollo.css'

import { Home } from './page/home/Home'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  </StrictMode>,
)
