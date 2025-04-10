import React from 'react';

const BuySellButtonsHorizontal = () => {
  const handleBuy = () => {
    alert('Redirecting to Buy page');
    // Add your buy functionality here
  };

  const handleSell = () => {
    alert('Redirecting to Sell page');
    // Add your sell functionality here
  };

  return (
    <div className="flex flex-row gap-4 mt-5 mb-4 justify-end pr-3" >
      <button
        onClick={handleBuy}
        className="bg-amber-400 hover:bg-amber-400 text-white font-bold py-2 px-6 rounded shadow-md transition-colors duration-200"
      >
        BUY
      </button>
      <button
        onClick={handleSell} 
        className="bg-amber-400 hover:bg-amber-400 text-white font-bold py-2 px-6 rounded shadow-md transition-colors duration-200"
      >
        SELL
      </button>
    </div>
  );
};

export default BuySellButtonsHorizontal;