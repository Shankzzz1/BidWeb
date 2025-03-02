
import React, { useState } from 'react';

interface AuctionData {
  productName: string;
  auctionId: string;
  price: string;
  shippingFees: string;
  bidResetTime: string;
  creditUsedPerBid: string;
  auctionType: string;
  auctionStatus: string;
  daysUntilOpen: number;
  currentBid: string;
}

const FastrackAuctionPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'bidding' | 'delivery'>('info');
  
  const auctionData: AuctionData = {
    productName: "Fastrack Limitless Valor Rugged Smartwatch",
    auctionId: "BB35719",
    price: "Rs 4995.00",
    shippingFees: "Rs 150.00",
    bidResetTime: "10 Second",
    creditUsedPerBid: "4x",
    auctionType: "20 Paisa",
    auctionStatus: "Auction Open",
    daysUntilOpen: 1,
    currentBid: "₹ 0.00"
  };
  
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation bar simulation */}
      <div className="bg-white p-2 flex items-center ">
        <div className="flex items-center space-x-2">
          <button className="p-1 text-black">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg> */}
          </button>
          <button className="p-1 text-black">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg> */}
          </button>
          <button className="p-1 text-black">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg> */}
          </button>
        </div>
        <div className="ml-2 flex-1 flex items-center">
          <div className="flex-1 bg-white border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-500 flex items-center">
            bidderboy.com/ProductDetail?id=6biV7m8SRzi9Lhpt3s9gpA==
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto p-4 max-w-6xl">
        <div className="flex flex-col md:flex-row">
          {/* Product Image Section */}
          <div className="md:w-1/2 p-4">
            <div className="bg-white border border-gray-200 p-4 mb-4">
              <img 
                src="https://www.bidderboy.com/images/Product/202412154843_fasttrack-smartwatch.jpg" 
                alt={auctionData.productName} 
                className="w-full object-contain"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/400x400?text=Fastrack+Smartwatch";
                }}
              />
            </div>
            <div className="flex">
              <div className="border border-gray-300 w-16 h-16 cursor-pointer">
                <img 
                  src="/smartwatch-thumb.jpg" 
                  alt="Thumbnail" 
                  className="w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/64x64?text=Thumb";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="md:w-1/2 p-4">
            <h1 className="text-2xl text-gray-700 font-medium mb-6">
              {auctionData.productName}
            </h1>

            {/* Auction Status Box */}
            <div className="flex flex-wrap mb-6">
              <div className="bg-gray-100 p-4 mr-4 mb-4 rounded">
                <div className="text-xl text-gray-700 font-medium">{auctionData.auctionStatus}</div>
                <div className="text-xl">After {auctionData.daysUntilOpen} Days</div>
                <div className="text-orange-500 mt-2">Waiting For Bid</div>
              </div>
              
              <div className="flex flex-col">
                <div className="bg-white p-4 border border-gray-200 rounded mb-2">
                  <div className="text-gray-700">
                    Auction price <span className="text-orange-500 font-medium">{auctionData.currentBid}</span>
                  </div>
                </div>
                <button className="bg-gray-700 text-white p-2 rounded flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-4">
              <div className="flex border-b border-gray-200">
                <button 
                  className={`px-4 py-2 font-medium ${activeTab === 'info' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('info')}
                >
                  Auction Information
                </button>
                <button 
                  className={`px-4 py-2 font-medium ${activeTab === 'bidding' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('bidding')}
                >
                  Bidding History
                </button>
                <button 
                  className={`px-4 py-2 font-medium ${activeTab === 'delivery' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('delivery')}
                >
                  Delivery Information
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white border border-gray-200 rounded p-4">
              {activeTab === 'info' && (
                <div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
                    <div className="text-gray-600">Auction ID</div>
                    <div className="text-right font-medium">{auctionData.auctionId}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
                    <div className="text-gray-600">Price</div>
                    <div className="text-right font-medium">{auctionData.price}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
                    <div className="text-gray-600">Shipping & Processing Fees</div>
                    <div className="text-right font-medium">{auctionData.shippingFees}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
                    <div className="text-gray-600">Bid Reset Time</div>
                    <div className="text-right font-medium">{auctionData.bidResetTime}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
                    <div className="text-gray-600">Credit used per bid</div>
                    <div className="text-right font-medium">{auctionData.creditUsedPerBid}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2">
                    <div className="text-gray-600">Auction Type</div>
                    <div className="text-right font-medium">{auctionData.auctionType}</div>
                  </div>
                </div>
              )}
              {activeTab === 'bidding' && (
                <div className="py-4 text-center text-gray-500">No bidding history available</div>
              )}
              {activeTab === 'delivery' && (
                <div className="py-4 text-center text-gray-500">Delivery information will be available after auction</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastrackAuctionPage;