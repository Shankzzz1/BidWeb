import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login_and_Signup from "./Components/Login_and_Signup";
import FastrackAuctionPage from "./Components/FastrackAuctionPage";
import BicycleAuction from "./Components/BicycleAuction";
import About from "./Components/About";
import ScrollablePages from './Components/ScrollablePages'
import ProductDetailPage from "./Components/ProductDetailPage";
import ProfilePage from "./Components/ProfilePage";
import ProductPage from "./Components/ProductPage";
import ContactPage from "./Components/ContactPage";
//import MyBids from './components/MyBids';
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login_and_Signup />} />
        <Route path="/prodinfo" element={<FastrackAuctionPage/>} />
        <Route path="/proddetails" element={<ProductDetailPage/>} />
        <Route path="/productdetails" element={<ScrollablePages/>} />
        <Route path="/product" element={<BicycleAuction/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/account" element={<ProfilePage/>} />
        <Route path="/auction" element={<ProductPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        

      
      </Routes>
    </Router>
  )
}



