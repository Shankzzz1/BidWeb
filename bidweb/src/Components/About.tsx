import React from 'react';
import icon from "../assets/auction.png"

const About = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col md:flex-row font-sans">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96  overflow-hidden">
            <img 
              src={icon}
              alt="Profile Image"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 ">About Us </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-amber-300">Who Are We ?</h1>
          <p className="text-lg md:text-xl lg:text-2xl">
          At Biddify, we bring buyers and sellers together in a dynamic and exciting online bidding experience. Whether you're looking to win exclusive deals or auction off valuable items, our platform ensures fair, transparent, and thrilling auctions for everyone.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;