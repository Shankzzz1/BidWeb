import { useState, useEffect } from "react";
import icon from "../assets/auction.png";
import img1 from "../assets/Img1.jpg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/Img3.jpg"
import img4 from "../assets/Img4.jpeg"
import Tanuja from "../assets/Tanuja.jpg"
import Sakshi from "../assets/Sakshi.jpg"
import Sahil from "../assets/sahil.jpg"
import Shashank from "../assets/Me .jpg"
import dnayni from "../assets/dnyani.jpg"
import shriniti from "../assets/Shriniti.jpg"
import Footer from "./Footer";

const About = () => {
  // Sample images - replace with your actual image paths
  const images = [
    img1,img2,img3,img4
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Team members data
  const teamMembers = [
    {
      name: "Shashank Gavale",
      title: "Founder & CEO",
      image: Shashank // Replace with actual image path
    },
    {
      name: "Shriniti Nikat",
      title: "Founder & CEO",
      image: shriniti // Replace with actual image path
    },
    {
      name: "Dnyaneshwari Ganage",
      title: "Founder & CEO",
      image: dnayni // Replace with actual image path
    },
    {
      name: "Sahil Bhalekar ",
      title: "Head of Engineering",
      image: Sahil // Replace with actual image path
    },
    {
      name: "Sakshi Dandgavhal",
      title: "Chief Operating Officer",
      image: Sakshi // Replace with actual image path
    },
    {
      name: "Tanuja Auti",
      title: "Chief Operating Officer",
      image: Tanuja // Replace with actual image path
    }
  ];

  // Why Choose Us reasons data
  const reasons = [
    {
      title: "Fair & Transparent Bidding",
      description: "We ensure real-time, competitive, and fair auctions with no hidden fees or unfair practices."
    },
    {
      title: "Wide Variety of Items",
      description: "Bid on everything from electronics, fashion, automobiles, collectibles, and more—all in one place!"
    },
    {
      title: "Secure & Verified Transactions",
      description: "Your safety is our priority. We provide secure payments, verified sellers, and fraud protection."
    },
    {
      title: "Real-Time Bidding Experience",
      description: "Enjoy fast, dynamic, and live bidding with instant updates and notifications to keep you ahead."
    },
    {
      title: "24/7 Customer Support",
      description: "Our dedicated support team is always available to assist you with any queries or concerns."
    }
];


  // Statistics data
  const statistics = [
    {
      value: "3K+",
      description: "The CVs that is viewed by businesses on our platform so far.",
    },
    {
      value: "200+",
      description: "The number of Job titles that we have worked with so far.",
    },
    {
      value: "1M+",
      description: "The tokens that is traded in our platform.",
    },
    {
      value: "100+",
      description: "The Events and conferences that we have subscribed.",
    }
  ];

  return (
    <>
      <div className="text-center font-sans">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2">About Us</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row font-sans p-8">
        {/* Slideshow Section */}
        <div className="w-full md:w-1/3 flex items-center justify-center p-8 pt-4">
          <div className="h-80 w-80 md:h-80 md:w-80 lg:h-96 lg:w-96 overflow-hidden relative">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`Slideshow image ${index + 1}`}
                className={`w-full h-full object-cover object-center absolute top-0 left-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            
            {/* Navigation dots */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? "bg-amber-300" : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 pt-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-amber-300">Who Are We ?</h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            At Biddify, we bring buyers and sellers together in a dynamic and exciting online bidding experience. Whether you're looking to win exclusive deals or auction off valuable items, our platform ensures fair, transparent, and thrilling auctions for everyone.
          </p>
        </div>
      </div>

      {/* Meet Our Team Section - FIXED */}
      <div className="w-full pb-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Meet Our Team</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-100 w-full aspect-square mb-4 overflow-hidden">
                <img 
                  src={member.image}
                  alt={`${member.name} portrait`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-center">{member.name}</h3>
              <p className="text-black-700 italic text-center">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Left column with heading and CTA */}
            <div className="w-full md:w-1/4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black-800">Why choose us</h2>
              <p className="text-black-600 mb-8">
              At Biddify, we provide a seamless, fair, and exciting bidding experience that stands out from the rest. Here's why you should choose us:
              </p>
              <button className="bg-amber-300 hover:bg-amber-400 text-black-800 font-medium py-2 px-4 rounded transition duration-200">
                Start Bidding
              </button>
            </div>
            
            {/* Right column with grid of reasons */}
            <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
                  <div className="absolute top-0 right-0 left-0 h-24 bg-amber-100 opacity-40 rounded-t-lg"></div>
                  <h3 className="text-lg font-semibold mb-3 pt-20 text-black-800">{reason.title}</h3>
                  <p className="text-black-600 mb-4">{reason.description}</p>
                  <div className="flex justify-end">
                    <button className="text-black-500 hover:text-amber-500 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="w-full py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className={` bg-amber-100 rounded-lg p-8 shadow-sm text-black`}>
                <div className="text-4xl md:text-5xl font-bold mb-4">{stat.value}</div>
                <p className="text-black-300 text-lg">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default About;