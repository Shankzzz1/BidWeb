import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t pt-8 pb-4 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and newsletter section */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-amber-300 rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Biddify</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Enter your email to get notified for latest updates
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-gray-100 rounded-l-lg px-4 py-2 w-full focus:outline-none"
              />
              <button className="bg-amber-300 text-white rounded-r-lg px-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Biddify Links */}
          <div className="col-span-1">
            <h4 className="font-bold mb-4">Biddify</h4>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-gray-600 hover:text-amber-500">Explore</Link></li>
              <li><Link to="/all-nfts" className="text-gray-600 hover:text-amber-500">All NFTs</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-amber-500">About</Link></li>
            </ul>
          </div>

          {/* My Account Links */}
          <div className="col-span-1">
            <h4 className="font-bold mb-4">My Account</h4>
            <ul className="space-y-2">
              <li><Link to="/profile" className="text-gray-600 hover:text-amber-500">Profile</Link></li>
              <li><Link to="/favorites" className="text-gray-600 hover:text-amber-500">Favorites</Link></li>
              <li><Link to="/watchlist" className="text-gray-600 hover:text-amber-500">Watchlist</Link></li>
              <li><Link to="/my-collections" className="text-gray-600 hover:text-amber-500">My Collections</Link></li>
              <li><Link to="/settings" className="text-gray-600 hover:text-amber-500">Settings</Link></li>
            </ul>
          </div>

          {/* Resources and Community Links */}
          <div className="col-span-1">
            <div className="mb-6">
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/platform-status" className="text-gray-600 hover:text-amber-500">Platform Status</Link></li>
                <li><Link to="/partners" className="text-gray-600 hover:text-amber-500">Partners</Link></li>
                <li><Link to="/fees" className="text-gray-600 hover:text-amber-500">Fees</Link></li>
                <li><Link to="/newsletter" className="text-gray-600 hover:text-amber-500">Newsletter</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><Link to="/help-center" className="text-gray-600 hover:text-amber-500">Help Center</Link></li>
                <li><Link to="/discord" className="text-gray-600 hover:text-amber-500">Discord Server</Link></li>
                <li><Link to="/suggest-feature" className="text-gray-600 hover:text-amber-500">Suggest Feature</Link></li>
                <li><Link to="/subscribe" className="text-gray-600 hover:text-amber-500">Subscribe</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section with terms and policy */}
        <div className="border-t mt-8 pt-4 flex justify-end">
          <div className="space-x-6">
            <Link to="/terms" className="text-gray-600 hover:text-amber-500">Terms</Link>
            <Link to="/privacy-policy" className="text-gray-600 hover:text-amber-500">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;