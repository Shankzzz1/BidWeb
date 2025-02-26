import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login_and_Signup from './Components/Login_and_Signup.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login_and_Signup />
  </StrictMode>,
)
