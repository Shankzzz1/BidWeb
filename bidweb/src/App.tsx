import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login_and_Signup from "./Components/Login_and_Signup";
import About from "./Components/About";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login_and_Signup />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  )
}
