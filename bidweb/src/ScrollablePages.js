import React from 'react';
import FastrackAuctionPage from './FastrackAuctionPage'; // Import your first page
import ProductDetails from './ProductDetails'; // Import your second page

// JavaScript version without TypeScript interfaces
const MergedScrollablePages = ({
  auctionId,
  productId,
  // Destructure other props here
}) => {
  return (
    <div className="h-screen overflow-y-auto">
      {/* Container with scrollable content */}
      <div className="flex flex-col items-center py-6 space-y-8">
        {/* First page - Fastrack Auction Page */}
        <div className="w-full max-w-4xl">
          <FastrackAuctionPage 
            auctionId={auctionId} 
            // Pass other props as needed
          />
        </div>
        
        {/* Divider between pages (optional) */}
        <div className="w-full max-w-4xl border-t border-gray-300"></div>
        
        {/* Second page - Product Details */}
        <div className="w-full max-w-4xl">
          <ProductDetails 
            productId={productId}
            // Pass other props as needed
          />
        </div>
      </div>
    </div>
  );
};

export default MergedScrollablePages;