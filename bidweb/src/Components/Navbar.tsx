import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/auction.png";
import { MdAccountCircle, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("mobile-sidebar");
      const menuButton = document.getElementById("menu-button");
      
      if (
        isSidebarOpen && 
        sidebar && 
        !sidebar.contains(event.target) && 
        menuButton && 
        !menuButton.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <nav className="bg-white text-black p-4 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] sticky top-0 z-40 mx-4 my-6 md:m-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Left section with icon and brand name */}
            <div className="flex items-center">
              <img src={icon} alt="Biddify Logo" className="h-8 w-8 mr-2" />
              <h1 className="text-2xl font-bold">Biddify</h1>
            </div>
            
            {/* Center section with navigation links - visible on medium screens and up */}
            <div className="hidden md:flex flex-grow justify-center">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="hover:text-gray-500 transition">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-500 transition">About</Link>
                </li>
                <li>
                  <Link to="/auction" className="hover:text-gray-500 transition">Auction</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-500 transition">Contact</Link>
                </li>
              </ul>
            </div>
            
            {/* Right section with account icon */}
            <div className="flex items-center">
              <Link to="/account" className="hover:text-gray-500 transition mr-2 md:mr-0">
                <MdAccountCircle className="text-3xl" />
              </Link>
              {/* Hamburger menu button - visible only on small screens */}
              <button 
                id="menu-button"
                className="ml-4 md:hidden text-black"
                onClick={toggleSidebar}
                aria-label="Toggle sidebar menu"
              >
                <MdMenu className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        id="mobile-sidebar"
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button 
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
              <MdClose className="text-2xl" />
            </button>
          </div>
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="block py-2 hover:text-gray-500 transition"
                onClick={toggleSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block py-2 hover:text-gray-500 transition"
                onClick={toggleSidebar}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/auction" 
                className="block py-2 hover:text-gray-500 transition"
                onClick={toggleSidebar}
              >
                Auction
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block py-2 hover:text-gray-500 transition"
                onClick={toggleSidebar}
              >
                Contact
              </Link>
            </li>
            <li className="pt-4 border-t">
              <Link 
                to="/account" 
                className="flex items-center py-2 hover:text-gray-500 transition"
                onClick={toggleSidebar}
              >
                <MdAccountCircle className="text-2xl mr-2" />
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;