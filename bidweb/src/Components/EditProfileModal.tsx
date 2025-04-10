import React, { useState, useEffect } from 'react';

type UserProfile = {
  name: string;
  username: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  profilePicture: string;
};

type EditProfileModalProps = {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfile;
  onSave: (updatedProfile: UserProfile) => void;
};

const EditProfileModal: React.FC<EditProfileModalProps> = ({ 
  isOpen, 
  onClose, 
  userProfile, 
  onSave 
}) => {
  const [profile, setProfile] = useState<UserProfile>(userProfile);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(userProfile.profilePicture);

  // Reset form when modal opens with new userProfile data
  useEffect(() => {
    if (isOpen) {
      setProfile(userProfile);
      setPreviewUrl(userProfile.profilePicture);
      setSelectedFile(null);
    }
  }, [isOpen, userProfile]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create preview URL
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.result) {
          setPreviewUrl(fileReader.result as string);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create the updated profile
    const updatedProfile = {
      ...profile,
      profilePicture: previewUrl // Update with the new image if changed
    };
    
    // Call the onSave function with the updated profile
    onSave(updatedProfile);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Profile</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex flex-col items-center">
            <div className="relative w-32 h-32 mb-2">
              <img 
                src={previewUrl} 
                alt="Profile Preview" 
                className="w-32 h-32 rounded-full object-cover border-2 border-amber-400"
              />
              <label htmlFor="profilePicture" className="absolute bottom-0 right-0 bg-amber-400 p-2 rounded-full cursor-pointer">
                📷
              </label>
              <input 
                type="file" 
                id="profilePicture" 
                accept="image/*" 
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <span className="text-sm text-gray-500">Click on the camera icon to change your profile picture</span>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={profile.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={profile.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 flex-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-amber-400 rounded-md hover:bg-amber-400 hover:text-black transition-colors font-bold flex-1"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;