import * as React from 'react'
// import App from './App.tsx'
import './index.css'
import Home from './assets/pages/Home'
import Header from "./assets/Componentes/Header"
import * as ReactDOM from 'react-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
   
    <Header/>
  </React.StrictMode>,
)
