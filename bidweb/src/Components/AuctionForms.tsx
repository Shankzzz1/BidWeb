import React, { useState } from 'react';

const AuctionForms = () => {
  const [activeTab, setActiveTab] = useState('sell');
  const [sellFormData, setSellFormData] = useState({
    title: '',
    description: '',
    startingPrice: '',
    reservePrice: '',
    duration: '7',
    category: '',
    photos: []
  });
  
  const [buyFormData, setBuyFormData] = useState({
    searchTerm: '',
    category: '',
    priceMin: '',
    priceMax: '',
    sortBy: 'relevance'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const categories = [
    'Electronics', 'Collectibles', 'Fashion', 'Home & Garden', 
    'Art', 'Vehicles', 'Toys', 'Sports', 'Business & Industrial', 'Jewelry'
  ];
  
  const handleSellSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Item listed successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    }, 1000);
  };
  
  const handleBuySubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Search completed!');
      setTimeout(() => setSuccessMessage(''), 3000);
    }, 1000);
  };
  
  const handleSellInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setSellFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleBuyInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setBuyFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFileChange = (e: { target: { files: any; }; }) => {
    // In a real app, you'd handle file uploads here
    setSellFormData(prev => ({
      ...prev,
      photos: Array.from(e.target.files || [])
    }));
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md transition-all">
          {successMessage}
        </div>
      )}
      
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('sell')}
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === 'sell'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Sell an Item
        </button>
        <button
          onClick={() => setActiveTab('buy')}
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === 'buy'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Find Items
        </button>
      </div>
      
      {activeTab === 'sell' ? (
        <form onSubmit={handleSellSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Item Title</label>
            <input
              type="text"
              name="title"
              value={sellFormData.title}
              onChange={handleSellInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={sellFormData.description}
              onChange={handleSellInputChange}
              rows={4}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Starting Price ($)</label>
              <input
                type="number"
                name="startingPrice"
                value={sellFormData.startingPrice}
                onChange={handleSellInputChange}
                required
                min="0.01"
                step="0.01"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Reserve Price ($)</label>
              <input
                type="number"
                name="reservePrice"
                value={sellFormData.reservePrice}
                onChange={handleSellInputChange}
                min="0.01"
                step="0.01"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="mt-1 text-xs text-gray-500">Optional. The minimum price you'll accept.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Duration</label>
              <select
                name="duration"
                value={sellFormData.duration}
                onChange={handleSellInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="3">3 days</option>
                <option value="5">5 days</option>
                <option value="7">7 days</option>
                <option value="10">10 days</option>
                <option value="14">14 days</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={sellFormData.category}
                onChange={handleSellInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Photos</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                  >
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      multiple
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
                {sellFormData.photos.length > 0 && (
                  <p className="text-sm text-green-600">{sellFormData.photos.length} files selected</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Listing...' : 'List Item for Auction'}
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleBuySubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Search</label>
            <input
              type="text"
              name="searchTerm"
              value={buyFormData.searchTerm}
              onChange={handleBuyInputChange}
              placeholder="What are you looking for?"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={buyFormData.category}
              onChange={handleBuyInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Min Price ($)</label>
              <input
                type="number"
                name="priceMin"
                value={buyFormData.priceMin}
                onChange={handleBuyInputChange}
                min="0"
                step="0.01"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Max Price ($)</label>
              <input
                type="number"
                name="priceMax"
                value={buyFormData.priceMax}
                onChange={handleBuyInputChange}
                min="0"
                step="0.01"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Sort By</label>
            <select
              name="sortBy"
              value={buyFormData.sortBy}
              onChange={handleBuyInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="relevance">Relevance</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="endingSoon">Ending Soon</option>
              <option value="newlyListed">Newly Listed</option>
            </select>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Searching....' : 'Search Auctions'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AuctionForms;