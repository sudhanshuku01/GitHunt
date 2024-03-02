import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { MyContextProvider } from './context/LoaderContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <MyContextProvider>
    <App />
    </MyContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
