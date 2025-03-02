import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Components/AuctionForms.tsx'
// import App from './App.tsx'
import AuctionForms from './Components/AuctionForms.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < AuctionForms/>

  </StrictMode>,
)
