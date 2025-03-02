import { useState, useEffect } from 'react';

const BicycleAuction = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 44, seconds: 19 });
  const [currentBid, setCurrentBid] = useState(0);
  const [favorites, setFavorites] = useState(6);
  const [isFavorite, setIsFavorite] = useState(false);

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        
        let newHours = prev.hours;
        let newMinutes = prev.minutes;
        let newSeconds = prev.seconds - 1;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        
        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(prev => prev - 1);
    } else {
      setFavorites(prev => prev + 1);
    }
    setIsFavorite(!isFavorite);
  };

  const placeBid = () => {
    const newBid = currentBid + 100;
    setCurrentBid(newBid);
  };
  

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-4 border-b">
        <h2 className="text-center text-xl font-medium text-gray-700">Leader Scout MTB 26T Mountain Bicycle</h2>
      </div>
      
      <div className="p-3 border-b text-center">
        <p className="text-gray-600">MRP : ₹7500.00</p>
      </div>
      
      <div className="p-4 flex justify-center">
        <img 
          src="https://www.bidderboy.com/images/Product/2023424191011_Cycle.jpg" 
          alt="Leader Scout MTB 26T Mountain Bicycle" 
          className="h-64 object-contain"
        />
      </div>
      
      <div className="px-4 py-2 flex justify-between items-center border-b">
        <span className="text-orange-400 text-sm">Auction ID: BB35717</span>
        <div className="flex items-center">
          <span className="text-green-500 mr-1">{favorites} x</span>
          <button onClick={toggleFavorite} className="focus:outline-none">
            <svg viewBox="0 0 24 24" className={`w-6 h-6 ${isFavorite ? 'text-green-500 fill-current' : 'text-green-500 stroke-current'}`}>
              <circle cx="12" cy="12" r="10" fill="none" strokeWidth="2" />
              {isFavorite && <path d="M12 7v10M7 12h10" strokeWidth="2" />}
            </svg>
          </button>
        </div>
      </div>
      
      <div className="px-4 py-3 flex justify-between items-center border-b">
        <div>
          <span className="text-gray-700 font-bold">₹ {currentBid.toFixed(2)}</span>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold">
            {timeLeft.hours}:{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          </div>
          <div className="text-orange-400 text-sm">Waiting For Bid</div>
        </div>
      </div>
      
      <div className="p-4 flex">
        <button className="bg-gray-700 text-white w-12 h-12 flex items-center justify-center rounded mr-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M3 3h18v18H3z M7 11v2h10v-2z" />
          </svg>
        </button>
        <button className="bg-gray-700 text-white w-12 h-12 flex items-center justify-center rounded mr-2">
          <span className="font-bold">A</span>
        </button>
        <button 
          onClick={placeBid} 
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded flex-grow text-center">
          BID NOW
        </button>
      </div>
    </div>
  );
};

export default BicycleAuction;