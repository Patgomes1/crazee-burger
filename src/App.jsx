import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/pages/login/LoginPage.jsx'
import OrderPage from './components/pages/commande/OrderPage.jsx'
import ErrorPage from './components/pages/error/ErrorPage.jsx'
import { Route, Routes } from 'react-router-dom'

  function App() {

    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/error" element={<ErrorPage />} /> 
      </Routes>
    )
  }

export default App
