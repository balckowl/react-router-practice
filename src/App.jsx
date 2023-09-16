import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Home from './Home'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './Context/AuthContext'

function App() {

  const { user } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to='/login/' />
    }

    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
