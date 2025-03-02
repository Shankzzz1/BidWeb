import React, { useState } from 'react';

// Types
type ActivityItem = {
  icon: string;
  title: string;
  time: string;
};

type BidItem = {
  title: string;
  details: string[];
  status: 'active' | 'pending' | 'won' | 'lost';
};

type WatchlistItem = {
  id: string;
  title: string;
  price: string;
  time: string;
  imageUrl: string;
};

// Components
const ProfileSidebar: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8 flex flex-col items-center border-b border-gray-200">
        <img src="https://cdn-icons-png.freepik.com/512/17735/17735516.png" alt="Profile Picture" className="w-40 h-40 rounded-full object-cover mb-4" />
        <h2 className="text-xl font-semibold">Sakshi Dandgavhal</h2>
        <div className="text-gray-500 mb-2">@sakshidandgavhal</div>
        <div className="flex items-center gap-1 mb-4">
          <div className="text-yellow-400">★★★★☆</div>
          <span>4.8 (126 reviews)</span>
        </div>
        <button className="bg-black text-amber-400 font-bold px-4 py-2 rounded-full border border-black text-sm cursor-pointer">
          Edit Profile
        </button>
      </div>
      
      <div className="flex justify-between px-4 py-4">
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold text-amber-400">43</div>
          <div className="text-sm text-gray-500">Bids</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold text-amber-400">12</div>
          <div className="text-sm text-gray-500">Listings</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold text-amber-400">18</div>
          <div className="text-sm text-gray-500">Won</div>
        </div>
      </div>
      
      <ul className="list-none p-0">
        <li className="border-b border-gray-200 bg-gray-100 border-l-4 border-l-amber-400">
          <a href="#" className="flex items-center gap-2 p-4 text-amber-400 font-medium">
            <span>📊</span> Dashboard
          </a>
        </li>
        <li className="border-b border-gray-200 hover:bg-gray-100">
          <a href="#" className="flex items-center gap-2 p-4 text-gray-800">
            <span>🎯</span> My Bids
          </a>
        </li>
        <li className="border-b border-gray-200 hover:bg-gray-100">
          <a href="#" className="flex items-center gap-2 p-4 text-gray-800">
            <span>📦</span> My Listings
          </a>
        </li>
        <li className="border-b border-gray-200 hover:bg-gray-100">
          <a href="#" className="flex items-center gap-2 p-4 text-gray-800">
            <span>⭐</span> Watchlist
          </a>
        </li>
        <li className="border-b border-gray-200 hover:bg-gray-100">
          <a href="#" className="flex items-center gap-2 p-4 text-gray-800">
            <span>💰</span> Payments
          </a>
        </li>
        <li className="border-b border-gray-200 hover:bg-gray-100">
          <a href="#" className="flex items-center gap-2 p-4 text-gray-800">
            <span>🔔</span> Notifications
          </a>
        </li>
        <li className="hover:bg-gray-100">
          <a href="#" className="flex items-center gap-2 p-4 text-gray-800">
            <span>⚙️</span> Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

const ActivityCard: React.FC = () => {
  const activities: ActivityItem[] = [
    {
      icon: '🎯',
      title: 'You placed a bid on Vintage Camera Set',
      time: '2 hours ago',
    },
    {
      icon: '🏆',
      title: 'You won the bid for Antique Desk Lamp',
      time: 'Yesterday',
    },
    {
      icon: '📦',
      title: 'You listed Mechanical Keyboard for auction',
      time: '3 days ago',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-5 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <a href="#" className="text-amber-400 font-bold text-sm">View All</a>
      </div>
      {activities.map((activity, index) => (
        <div key={index} className="flex gap-4 py-4 border-b border-gray-200 last:border-b-0 last:pb-0">
          <div className="w-10 h-10 rounded-full bg-amber-50 text-blue-700 flex justify-center items-center">
            {activity.icon}
          </div>
          <div>
            <div className="font-medium">{activity.title}</div>
            <div className="text-gray-500 text-sm mt-1">{activity.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const WatchlistCard: React.FC = () => {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([
    {
      id: '1',
      title: "Collector's Edition Book Set",
      price: '$120',
      time: 'Ends in 2d 14h',
      imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_6d5fc25a-adbe-4025-9b5d-29aecc8419b7?qlt=65&fmt=pjpeg&hei=350&wid=350',
    },
    {
      id: '2',
      title: 'Handmade Ceramic Vase',
      price: '$65',
      time: 'Ends in 6h 22m',
      imageUrl: 'https://images.stockcake.com/public/6/5/7/6578ee16-c5df-45cd-8955-39996a0b9c2e_large/sunflower-ceramic-vase-stockcake.jpg',
    },
    {
      id: '3',
      title: 'Vintage Film Camera',
      price: '$180',
      time: 'Ends in 4d 3h',
      imageUrl: 'https://png.pngtree.com/png-clipart/20250111/original/pngtree-vintage-film-camera-showcasing-a-classic-design-png-image_19048120.png',
    },
  ]);

  const removeFromWatchlist = (id: string) => {
    setWatchlist(watchlist.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Watchlist</h3>
        <a href="#" className="text-amber-400 font-bold text-sm">View All</a>
      </div>
      <div className="space-y-4">
        {watchlist.map(item => (
          <div key={item.id} className="flex bg-gray-100 rounded-lg overflow-hidden">
            <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover" />
            <div className="p-2 px-4 flex-1 relative">
              <div className="font-medium truncate">{item.title}</div>
              <div className="font-semibold text-amber-400">{item.price}</div>
              <div className="text-sm text-gray-500">{item.time}</div>
              <button 
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 transition-colors"
                onClick={() => removeFromWatchlist(item.id)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App
const ProfilePage: React.FC = () => {
  const recentWins: BidItem[] = [
    {
      title: 'Antique Desk Lamp',
      details: ['Won for: $78', 'Yesterday'],
      status: 'won',
    },
    {
      title: 'Professional Camera Lens',
      details: ['Won for: $350', 'Last week'],
      status: 'won',
    },
    {
      title: 'Mid-century Modern Chair',
      details: ['Won for: $125', 'Last month'],
      status: 'won',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header component removed */}
      
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-1">
              My <span className="text-amber-400">Account ,</span>
              </h1>
              <p>Manage your profile, bids, and listings</p>
            </div>
            <div>
              <button className="bg-black hover:bg-amber-400 text-white py-2 px-5 rounded font-medium transition-colors">
                + Create New Listing
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            <ProfileSidebar />
            
            <div className="space-y-8">
              <div className="flex flex-col space-y-8">
                <ActivityCard />
                <WatchlistCard />
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;