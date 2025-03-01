import React from "react";
import FastrackAuctionPage from "./FastrackAuctionPage";
import ProductDetailPage from "./ProductDetailPage";
import "../style.css"; // Import custom CSS for hiding scrollbar

const MergedPage: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-y-auto bg-gray-100 p-4 hide-scrollbar">
      {/* Fastrack Auction Page Section */}
      <div className="mb-6 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Fastrack Auction</h2>
        <FastrackAuctionPage />
      </div>

      {/* Product Details Section */}
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Product Details</h2>
        <ProductDetailPage />
      </div>
    </div>
  );
};

export default MergedPage;
