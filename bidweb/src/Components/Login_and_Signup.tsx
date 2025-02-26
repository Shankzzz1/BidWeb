import { useState } from "react";
import LoginWallpaper from "../assets/LoginWallpaper.jpg";

export default function Login_and_Signup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl border border-gray-200 transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-4xl font-bold text-black">Bidify</h1>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center text-black">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-gray-500 text-center mt-2 text-sm">
              {isLogin ? "Enter your details to log in" : "Fill in your information to get started"}
            </p>
          </div>
          
          <form className="space-y-5">
            {!isLogin && (
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-300 text-black py-3 rounded-lg hover:bg-amber-400 transition-colors font-medium text-sm mt-2"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-black font-semibold hover:underline ml-2 transition-all"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Section - Full Image */}
      <div className="hidden md:block w-full md:w-1/2 h-screen">
        <img src={LoginWallpaper} alt="Login Illustration" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
