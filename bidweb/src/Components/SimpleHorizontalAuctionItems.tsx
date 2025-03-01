import React, { useState } from 'react';

const SimpleHorizontalAuctionItems = () => {
  // Sample auction data - this could come from an API in a real application
  const [auctionItems, setAuctionItems] = useState([
    {
      id: "BB35717",
      name: "Leader Scout MTB 26T Mountain Bicycle",
      mrp: 7500.00,
      currentBid: 0.00,
      imageUrl: "/api/placeholder/400/320",
      timeLeft: "1:43:23",
      bidders: 6
    },
    {
      id: "BB35718",
      name: "Royal Enfield Bullet 350 Helmet",
      mrp: 2500.00,
      currentBid: 500.00,
      imageUrl: "/api/placeholder/400/320",
      timeLeft: "2:15:45",
      bidders: 3
    },
    {
      id: "BB35719",
      name: "Sony WH-1000XM4 Headphones",
      mrp: 29990.00,
      currentBid: 15000.00,
      imageUrl: "/api/placeholder/400/320",
      timeLeft: "0:45:12",
      bidders: 12
    },
    {
      id: "BB35720",
      name: "Samsung Galaxy S21 Ultra",
      mrp: 105000.00,
      currentBid: 65000.00,
      imageUrl: "/api/placeholder/400/320",
      timeLeft: "3:22:09",
      bidders: 8
    },
    {
      id: "BB35721",
      name: "Nikon D3500 DSLR Camera",
      mrp: 42990.00,
      currentBid: 25000.00,
      imageUrl: "/api/placeholder/400/320",
      timeLeft: "0:32:56",
      bidders: 10
    }
  ]);
  
  // Fixed placeBid function that properly updates state
  const placeBid = (itemId: string, bidAmount: number) => {
    // Create a new array with the updated bid for the specific item
    const updatedItems = auctionItems.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          currentBid: bidAmount
        };
      }
      return item;
    });
    
    // Update state with the new array
    setAuctionItems(updatedItems);
    
    console.log(`Placed bid of ₹${bidAmount} on item ${itemId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header - Simplified */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            
          </div>
          <div>
            <button className="rounded-full bg-gray-200 p-2">
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            </button>
          </div>
        </div>
      </header>
      
      {/* Main Content - Only Horizontal Scrollable Items */}
      <main className="container mx-auto px-4 py-6">
        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-4 min-w-max">
            {auctionItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden w-80 flex-shrink-0"
              >
                <div className="p-4 border-b">
                  <h3 className="text-lg font-medium truncate">{item.name}</h3>
                  <div className="text-gray-600">MRP : ₹{item.mrp.toFixed(2)}</div>
                </div>
                
                <div className="p-4">
                  <div className="mb-4 flex justify-center">
                    <img src={item.imageUrl} alt={item.name} className="h-40 object-contain" />
                  </div>
                  
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm text-gray-600">
                      Auction ID: {item.id}
                    </div>
                    <div className="flex items-center">
                      <span>{item.bidders} x </span>
                      <div className="w-5 h-5 rounded-full bg-green-500 ml-1"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-lg font-medium">₹ {item.currentBid.toFixed(2)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{item.timeLeft}</div>
                      <div className="text-orange-500 text-xs">
                        {item.currentBid === 0 ? "Waiting For Bid" : "Current Bid"}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-700 text-white rounded text-sm">
                      <span>☰</span>
                    </button>
                    <button className="p-2 bg-gray-800 text-white rounded text-sm">
                      <span>A</span>
                    </button>
                    <button 
                      className="flex-1 p-2 bg-orange-500 text-white font-bold rounded text-sm"
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
      </main>
    </div>
  );
};

export default SimpleHorizontalAuctionItems;