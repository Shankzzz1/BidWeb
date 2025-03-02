import React, { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col md:flex-row bg-amber-50 text-black min-h-screen w-full font-sans">
      {/* Left Section */}
      <div className="md:flex-1 p-6 md:p-10 flex flex-col">
        <h1 className="text-amber-500 text-2xl md:text-3xl mb-6 md:mb-10 font-bold">Get In Touch</h1>
        
        <div className="mb-8 md:mb-10 space-y-4 md:space-y-6">
          <p className="leading-relaxed text-gray-800">
           We'd love to hear from you! Whether you have questions, feedback, or need assistance,
           our team is here to help. Reach out to us through the form below, email us, or give 
           us a call.
          </p>
          <p className="leading-relaxed text-gray-800">
          Alternatively, you can fill out the contact form, and we'll get back to you as soon as possible. 
          Your inquiries are important to us, and we strive to respond promptly.
          Looking forward to connecting with you!
          </p>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center mb-4">
            <span className="mr-3 text-amber-500">✉️</span>
            <span className="text-gray-700">biddify@gmail.com</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-3 text-amber-500">📞</span>
            <span className="text-gray-700">7447372539</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-3 text-amber-500">📍</span>
            <span className="text-gray-700">Pune, India</span>
          </div>
          
          <div className="flex justify-center md:justify-start gap-5 mt-8">
            <div className="w-10 h-10 border border-amber-500 rounded-full flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-colors cursor-pointer">
              <span>📷</span>
            </div>
            <div className="w-10 h-10 border border-amber-500 rounded-full flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-colors cursor-pointer">
              <span>in</span>
            </div>
            <div className="w-10 h-10 border border-amber-500 rounded-full flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-colors cursor-pointer">
              <span>🐦</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="md:flex-1 p-6 md:p-10 flex items-center justify-center bg-amber-50 md:bg-amber-50">
        <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-amber-500 text-xl mb-6 text-center font-bold">Contact Form</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Phone No</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent h-32 resize-y"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full p-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition-colors font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;