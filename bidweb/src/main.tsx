import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Components/ProductDetailPage.tsx'
import './Components/FastrackAuctionPage.tsx'
// import App from './App.tsx'
import FastrackAuctionPage from './Components/FastrackAuctionPage.tsx'
import ProductDetailPage from './Components/ProductDetailPage.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
