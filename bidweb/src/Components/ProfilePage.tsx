import React, { useState } from 'react';
import EditProfileModal from './EditProfileModal'; // Make sure to import the component

// Define the UserProfile type
type UserProfile = {
  name: string;
  username: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  profilePicture: string;
};

const ProfileSidebar: React.FC = () => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  
  // User profile state with initial data
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "Sakshi Dandgavhal",
    username: "sakshidandgavhal",
    bio: "Passionate collector of vintage items and antiques. Love to find unique pieces with history.",
    email: "sakshi.d@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    profilePicture: "https://cdn-icons-png.freepik.com/512/17735/17735516.png"
  });

  // Function to update the profile
  const handleProfileUpdate = (updatedProfile: UserProfile) => {
    setUserProfile(updatedProfile);
    setIsEditProfileOpen(false);
    
    // Here you would typically also send this data to your backend
    console.log('Profile updated:', updatedProfile);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8 flex flex-col items-center border-b border-gray-200">
        <img src={userProfile.profilePicture} alt="Profile Picture" className="w-40 h-40 rounded-full object-cover mb-4" />
        <h2 className="text-xl font-semibold">{userProfile.name}</h2>
        <div className="text-gray-500 mb-2">@{userProfile.username}</div>
        <div className="flex items-center gap-1 mb-4">
          <div className="text-yellow-400">★★★★☆</div>
          <span>4.8 (126 reviews)</span>
        </div>
        <button 
          className="bg-black text-amber-400 font-bold px-4 py-2 rounded-full border border-black text-sm cursor-pointer hover:bg-amber-400 hover:text-black transition-colors"
          onClick={() => setIsEditProfileOpen(true)}
        >
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
      
      {/* Edit Profile Modal */}
      <EditProfileModal 
        isOpen={isEditProfileOpen} 
        onClose={() => setIsEditProfileOpen(false)} 
        userProfile={userProfile}
        onSave={handleProfileUpdate}
      />
    </div>
  );
};

export default ProfileSidebar;