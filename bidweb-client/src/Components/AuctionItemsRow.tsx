import React, { useState, useEffect } from 'react';

// Define the auction item interface
interface AuctionItem {
  id: string;
  auctionId: string;
  name: string;
  mrp: number;
  currentBid: number;
  image: string;
  timeLeft: { hours: number; minutes: number; seconds: number };
  favorites: number;
  status: 'active' | 'ended' | 'waiting';
}

const AuctionItemsRow: React.FC = () => {
  // Sample auction items data
  const [auctionItems, setAuctionItems] = useState<AuctionItem[]>([
    {
      id: '1',
      auctionId: 'BB35717',
      name: 'Leader Scout MTB 26T Mountain Bicycle',
      mrp: 7500.00,
      currentBid: 0.00,
      image: 'https://www.bidderboy.com/images/Product/2023424191011_Cycle.jpg',
      timeLeft: { hours: 1, minutes: 44, seconds: 19 },
      favorites: 6,
      status: 'waiting'
    },
    {
      id: '2',
      auctionId: 'BB35718',
      name: 'Samsung Galaxy S22 Ultra',
      mrp: 109999.00,
      currentBid: 75000.00,
      image: 'https://m.media-amazon.com/images/I/61KqH7ojMtL._SL1500_.jpg',
      timeLeft: { hours: 0, minutes: 55, seconds: 32 },
      favorites: 12,
      status: 'active'
    },
    {
      id: '3',
      auctionId: 'BB35719',
      name: 'Sony PlayStation 5 Digital Edition',
      mrp: 39990.00,
      currentBid: 32500.00,
      image: 'https://m.media-amazon.com/images/I/51afJC92cgL._SL1000_.jpg',
      timeLeft: { hours: 2, minutes: 15, seconds: 45 },
      favorites: 8,
      status: 'active'
    }
  ]);

  // State for user interactions
  const [favoriteItems, setFavoriteItems] = useState<Set<string>>(new Set());
  const [bidAmount, setBidAmount] = useState<Record<string, number>>({});

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setAuctionItems(prevItems => 
        prevItems.map(item => {
          let { hours, minutes, seconds } = item.timeLeft;
          
          if (hours === 0 && minutes === 0 && seconds === 0) {
            return { ...item, status: 'ended' };
          }
          
          seconds--;
          if (seconds < 0) {
            seconds = 59;
            minutes--;
          }
          if (minutes < 0) {
            minutes = 59;
            hours--;
          }
          if (hours < 0) {
            hours = 0;
            minutes = 0;
            seconds = 0;
            return { ...item, status: 'ended' };
          }
          
          return {
            ...item,
            timeLeft: { hours, minutes, seconds }
          };
        })
      );
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Initialize bid amounts based on current bids
  useEffect(() => {
    const initialBids: Record<string, number> = {};
    auctionItems.forEach(item => {
      const minBid = item.currentBid === 0 ? 100 : item.currentBid + calculateBidIncrement(item.currentBid);
      initialBids[item.id] = minBid;
    });
    setBidAmount(initialBids);
  }, []);

  // Calculate bid increment based on current price
  const calculateBidIncrement = (currentBid: number): number => {
    if (currentBid < 1000) return 100;
    if (currentBid < 10000) return 500;
    if (currentBid < 100000) return 1000;
    return 2000;
  };

  // Toggle favorite status
  const toggleFavorite = (itemId: string) => {
    setFavoriteItems(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(itemId)) {
        newFavorites.delete(itemId);
        // Update favorites count in auction items
        setAuctionItems(prevItems => 
          prevItems.map(item => 
            item.id === itemId ? { ...item, favorites: item.favorites - 1 } : item
          )
        );
      } else {
        newFavorites.add(itemId);
        // Update favorites count in auction items
        setAuctionItems(prevItems => 
          prevItems.map(item => 
            item.id === itemId ? { ...item, favorites: item.favorites + 1 } : item
          )
        );
      }
      return newFavorites;
    });
  };

  // Update bid amount for a specific item
  const handleBidChange = (itemId: string, value: number) => {
    setBidAmount(prev => ({
      ...prev,
      [itemId]: value
    }));
  };

  // Place a bid
  const placeBid = (itemId: string) => {
    const item = auctionItems.find(item => item.id === itemId);
    if (!item || item.status === 'ended') return;
    
    const newBid = bidAmount[itemId] || item.currentBid + calculateBidIncrement(item.currentBid);
    
    // Ensure bid is higher than current bid by at least the increment
    if (newBid <= item.currentBid) {
      alert(`Bid must be higher than current bid by at least ${calculateBidIncrement(item.currentBid)}`);
      return;
    }
    
    setAuctionItems(prevItems => 
      prevItems.map(item => {
        if (item.id === itemId) {
          return { 
            ...item, 
            currentBid: newBid,
            status: 'active' 
          };
        }
        return item;
      })
    );
    
    // Update the bid input to show the next minimum bid
    const nextMinBid = newBid + calculateBidIncrement(newBid);
    setBidAmount(prev => ({
      ...prev,
      [itemId]: nextMinBid
    }));
  };

  // Format time as HH:MM:SS
  const formatTime = (time: { hours: number; minutes: number; seconds: number }) => {
    const { hours, minutes, seconds } = time;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Get status text and color
  const getStatusInfo = (item: AuctionItem) => {
    if (item.status === 'ended') {
      return { text: 'Auction Ended', color: 'text-red-500' };
    }
    if (item.status === 'waiting' || item.currentBid === 0) {
      return { text: 'Waiting For Bid', color: 'text-orange-500' };
    }
    return { text: 'Bidding Active', color: 'text-green-500' };
  };

  // Get minimum bid for an item
  const getMinimumBid = (item: AuctionItem) => {
    if (item.currentBid === 0) return 100;
    return item.currentBid + calculateBidIncrement(item.currentBid);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Live Auctions</h1>
      
      {/* Desktop view - Table format */}
      <div className="hidden lg:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-center">MRP</th>
              <th className="p-3 text-center">Current Bid</th>
              <th className="p-3 text-center">Time Left</th>
              <th className="p-3 text-center">Favorites</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {auctionItems.map((item) => {
              const statusInfo = getStatusInfo(item);
              return (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-50 h-50 object-contain mr-4" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-amber-400">Auction ID: {item.auctionId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-center">₹{item.mrp.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  <td className="p-3 text-center font-bold">₹{item.currentBid.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  <td className="p-3 text-center">
                    <div className="font-mono font-bold">{formatTime(item.timeLeft)}</div>
                    <div className={statusInfo.color + " text-sm"}>{statusInfo.text}</div>
                  </td>
                  <td className="p-3 text-center">
                    <button 
                      onClick={() => toggleFavorite(item.id)} 
                      className="inline-flex items-center focus:outline-none"
                    >
                      <span className="text-green-500 mr-1">{item.favorites} x</span>
                      <svg 
                        viewBox="0 0 24 24" 
                        className={`w-6 h-6 ${favoriteItems.has(item.id) ? 'text-green-500 fill-current' : 'text-green-500 stroke-current'}`}
                      >
                        <circle cx="12" cy="12" r="10" fill="none" strokeWidth="2" />
                        {favoriteItems.has(item.id) && <path d="M12 7v10M7 12h10" strokeWidth="2" />}
                      </svg>
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex flex-col space-y-2 items-center">
                      {item.status !== 'ended' && (
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            value={bidAmount[item.id] || getMinimumBid(item)}
                            onChange={(e) => handleBidChange(item.id, Number(e.target.value))}
                            className="w-24 h-10 border border-gray-300 rounded px-2 text-center"
                            min={getMinimumBid(item)}
                            step={calculateBidIncrement(item.currentBid)}
                          />
                          <button 
                            onClick={() => placeBid(item.id)} 
                            className="bg-amber-400 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded"
                            //disabled={item.status === 'ended'}
                          >
                            BID NOW
                          </button>
                        </div>
                      )}
                      <div className="flex justify-center space-x-2">
                        <button className="bg-black text-white w-10 h-10 flex items-center justify-center rounded">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M3 3h18v18H3z M7 11v2h10v-2z" />
                          </svg>
                        </button>
                        <button className="bg-black text-white w-10 h-10 flex items-center justify-center rounded">
                          <span className="font-bold">A</span>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* Mobile view - Card format */}
      <div className="lg:hidden space-y-6">
        {auctionItems.map((item) => {
          const statusInfo = getStatusInfo(item);
          return (
            <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-center text-xl font-medium text-gray-700">{item.name}</h2>
              </div>
              
              <div className="p-3 border-b text-center">
                <p className="text-gray-600">MRP : ₹{item.mrp.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              
              <div className="p-4 flex justify-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="h-48 object-contain"
                />
              </div>
              
              <div className="px-4 py-2 flex justify-between items-center border-b">
                <span className="text-amber-400 text-sm">Auction ID: {item.auctionId}</span>
                <div className="flex items-center">
                  <span className="text-green-500 mr-1">{item.favorites} x</span>
                  <button onClick={() => toggleFavorite(item.id)} className="focus:outline-none">
                    <svg 
                      viewBox="0 0 24 24" 
                      className={`w-6 h-6 ${favoriteItems.has(item.id) ? 'text-green-500 fill-current' : 'text-green-500 stroke-current'}`}
                    >
                      <circle cx="12" cy="12" r="10" fill="none" strokeWidth="2" />
                      {favoriteItems.has(item.id) && <path d="M12 7v10M7 12h10" strokeWidth="2" />}
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="px-4 py-3 flex justify-between items-center border-b">
                <div>
                  <span className="text-gray-700 font-bold">₹{item.currentBid.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-mono">{formatTime(item.timeLeft)}</div>
                  <div className={statusInfo.color + " text-sm"}>{statusInfo.text}</div>
                </div>
              </div>
              
              {item.status !== 'ended' && (
                <div className="px-4 py-3 border-b flex items-center justify-between">
                  <div className="text-sm text-gray-600">Min bid: ₹{getMinimumBid(item).toLocaleString('en-IN')}</div>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={bidAmount[item.id] || getMinimumBid(item)}
                      onChange={(e) => handleBidChange(item.id, Number(e.target.value))}
                      className="w-24 h-10 border border-gray-300 rounded px-2 text-center"
                      min={getMinimumBid(item)}
                      step={calculateBidIncrement(item.currentBid)}
                    />
                  </div>
                </div>
              )}
              
              <div className="p-4 flex">
                <button className="bg-gray-700 text-white w-12 h-12 flex items-center justify-center rounded mr-2">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M3 3h18v18H3z M7 11v2h10v-2z" />
                  </svg>
                </button>
                <button className="bg-gray-700 text-white w-12 h-12 flex items-center justify-center rounded mr-2">
                  <span className="font-bold">A</span>
                </button>
                {item.status !== 'ended' ? (
                  <button 
                    onClick={() => placeBid(item.id)} 
                    className="bg-amber-400 hover:bg-amber-400 text-white font-bold py-3 px-4 rounded flex-grow text-center"
                  >
                    BID NOW
                  </button>
                ) : (
                  <button 
                    className="bg-gray-400 text-white font-bold py-3 px-4 rounded flex-grow text-center cursor-not-allowed"
                    disabled
                  >
                    AUCTION ENDED
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuctionItemsRow;