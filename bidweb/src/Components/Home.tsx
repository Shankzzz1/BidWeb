import Home1 from "../assets/Home1.jpg";
import Map from "../assets/Map.png";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 font-sans">
        {/* Left section with taglines */}
        <div className="w-full md:w-1/2 space-y-4 mb-8 md:mb-0 p-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Bid <span className="text-amber-300">Anything</span>,
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold">
            Win <span className="text-amber-300">Everything</span>! 🚀
          </h1>
          <p className="mt-6 text-lg text-black-600">
            Join our online auction platform and discover amazing deals on unique items.
            Start bidding today and experience the thrill of winning!
          </p>
          <button className="mt-6 hover:bg-black bg-amber-300 text-black hover:text-white font-bold py-3 px-6 rounded-lg transition">
            Start Bidding Now
          </button>
        </div>
        
        {/* Right section with image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={Home1}
            alt="Auction bidding illustration" 
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Protection Section - Added based on the image */}
      <div className="py-16 ">
        <div className="container mx-auto px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-800">
              We're Ready <br /> To Protect <br /> Your Props.
            </h2>
            <div className="w-8 h-16 border-l-2 border-gray-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Certified Platform */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Platform</h3>
              <p className="text-gray-600 text-sm">
                We are an officially certified platform for secure bidding transactions.
              </p>
            </div>

            {/* Customer Support */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Support</h3>
              <p className="text-gray-600 text-sm">
                We have the best support for you on that your needs can be met properly. And very friendly.
              </p>
            </div>

            {/* High Security */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">High Security</h3>
              <p className="text-gray-600 text-sm">
                Equipped with security features and high standards to ensure your auctions proceed safer.
              </p>
            </div>

            {/* Friendly Budget */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Friendly Budget</h3>
              <p className="text-gray-600 text-sm">
                Don't worry, this insurance fee won't cost you your money.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map section similar to the provided image */}
      <div className="py-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Map image with location pins */}
            <div className="w-full md:w-1/2">
              <div className=" rounded-lg p-2 relative">
                {/* Map background */}
                <img 
                  src={Map} 
                  alt="Location map" 
                  className="w-full rounded-lg"
                />
                
                {/* Location pins */}
                <div className="absolute top-1/4 left-1/4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-1/3 right-1/3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-1/5">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-1/3 right-1/4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-black-700 mb-2">
                Where they are based now & there <span className="text-amber-300">Map</span> details.
              </h2>
              <p className="text-black-500 mb-6">
                Leveraging real-time location data enables us to boost brand awareness, the extent to which customers and the general public are familiar with and recognize a particular brand.
              </p>
              <p className="text-black-500 mb-8">
                Combining social sentiment assessment & Geotargeted digital marketing, and marketing in general.
              </p>
              
              {/* Stats section */}
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-amber-400">13+</span>
                  <span className="text-sm text-black-500">COUNTRIES</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-blue-500">87+</span>
                  <span className="text-sm text-black-500">MAJOR CITIES</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-green-400">135+</span>
                  <span className="text-sm text-black-500">TRUSTED CUSTOMERS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Building Bidding CTA Banner - Added based on the image */}
      <div className="bg-amber-300 py-12 px-8 rounded-lg mx-4 md:mx-16 my-16 text-black text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-8 left-12 w-8 h-8 bg-white opacity-30 rounded-full"></div>
        <div className="absolute top-16 right-16 w-6 h-6 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-8 right-32 w-4 h-4 bg-green-300 rounded-full"></div>
        
        {/* Avatar group */}
        <div className="flex justify-center mb-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-red-400 border-2 border-white z-50"></div>
            <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white z-40"></div>
            <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white z-30"></div>
            <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white z-20"></div>
            <div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-white z-10"></div>
          </div>
        </div>
        
        {/* Text content */}
        <p className="text-sm text-black mb-1">Ready to collaborate?</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Start Bidding on Buildings!</h2>
        
        {/* Button */}
        <button className="bg-black text-amber-300 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors">
          Get Started
        </button>
      </div>

      <Footer/>
    </>
  );
}