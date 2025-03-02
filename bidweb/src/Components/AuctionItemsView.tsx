import React, { useState } from 'react';

const AuctionItemsView = () => {
  // Sample auction data based on your screenshot
  const [auctionItems, setAuctionItems] = useState([
    {
      id: "BB35717",
      name: "Leader Scout MTB 26T Mountain Bicycle",
      mrp: 7500.00,
      currentBid: 0.00,
      imageUrl: "/api/placeholder/200/200",
      timeLeft: "1:43:23",
      bidders: 6,
      status: "Waiting For Bid"
    },
    {
      id: "BB35718",
      name: "Royal Enfield Bullet 350 Helmet",
      mrp: 2500.00,
      currentBid: 500.00,
      imageUrl: "/api/placeholder/200/200",
      timeLeft: "2:15:45",
      bidders: 3,
      status: "Current Bid"
    },
    {
      id: "BB35719",
      name: "Sony WH-1000XM4 Headphones",
      mrp: 29990.00,
      currentBid: 15000.00,
      imageUrl: "/api/placeholder/200/200",
      timeLeft: "0:45:12",
      bidders: 12,
      status: "Current Bid"
    },
    {
      id: "BB35720",
      name: "Samsung Galaxy S21 Ultra",
      mrp: 105000.00,
      currentBid: 65000.00,
      imageUrl: "/api/placeholder/200/200",
      timeLeft: "3:22:09",
      bidders: 8,
      status: "Current Bid"
    },
    {
      id: "BB35721",
      name: "Nikon D3500 DSLR Camera",
      mrp: 42990.00,
      currentBid: 25000.00,
      imageUrl: "/api/placeholder/200/200",
      timeLeft: "3:22:09",
      bidders: 10,
      status: "Current Bid"
    }
  ]);
  
  // Function to handle bidding
  const placeBid = (itemId: string, bidAmount: number) => {
    const updatedItems = auctionItems.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          currentBid: bidAmount,
          status: "Current Bid"
        };
      }
      return item;
    });
    
    setAuctionItems(updatedItems);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content - Horizontal Scrollable Items */}
      <div className="overflow-x-auto">
        <div className="flex space-x-4 min-w-max p-4">
          {auctionItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md w-72 flex-shrink-0"
            >
              <div className="p-3 border-b">
                <h3 className="text-base font-medium truncate">{item.name}</h3>
                <div className="text-gray-600 text-sm">MRP : ₹{item.mrp.toFixed(2)}</div>
              </div>
              
              <div className="p-4">
                <div className="mb-4 flex justify-center">
                  <img src={item.imageUrl} alt={item.name} className="h-40 object-contain" />
                </div>
                
                <div className="flex justify-between items-center mb-3">
                  <div className="text-xs text-gray-600">
                    Auction ID: {item.id}
                  </div>
                  <div className="text-xs">
                    {item.bidders} x
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-base font-medium">₹ {item.currentBid.toFixed(2)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-bold">{item.timeLeft}</div>
                    <div className="text-orange-500 text-xs">
                      {item.status}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  <button className="p-2 bg-gray-700 text-white rounded text-xs">
                    <span>☰</span>
                  </button>
                  <button className="p-2 bg-gray-800 text-white rounded text-xs">
                    <span>A</span>
                  </button>
                  <button 
                    className="flex-1 p-2 bg-amber-400 text-white font-bold rounded text-xs"
                    onClick={() => placeBid(item.id, item.currentBid + 100)}
                  >
                    BID NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Optional slider controls - can be removed if not needed */}
      
    </div>
  );
};

export default AuctionItemsView;