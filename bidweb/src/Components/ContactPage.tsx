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
    <div className="flex bg-white text-black min-h-screen w-full font-sans">
      {/* Left Section */}
      <div className="flex-1 p-10 flex flex-col">
        <h1 className="text-amber-400 text-2xl mb-10 font-bold">Get In Touch</h1>
        
        <div className="mb-10 space-y-6">
          <p className="leading-relaxed">
           We’d love to hear from you! Whether you have questions, feedback, or need assistance,
           our team is here to help. Reach out to us through the form below, email us, or give 
           us a call.
          </p>
          <p className="leading-relaxed">
          Alternatively, you can fill out the contact form, and we’ll get back to you as soon as possible. 
          Your inquiries are important to us, and we strive to respond promptly.
          Looking forward to connecting with you!
          </p>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center mb-4">
            <span className="mr-2">✉️</span>
            <span>biddify@gmail.com</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2">📞</span>
            <span>7447372539</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2">📍</span>
            <span>Pune, India</span>
          </div>
          
          <div className="flex justify-center gap-5 mt-8">
            <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
              <span>📷</span>
            </div>
            <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
              <span>in</span>
            </div>
            <div className="w-8 h-8 border border-amber-400 rounded-full flex items-center justify-center">
              <span>🐦</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="flex-1 p-10 flex items-center justify-center">
        <div className="bg-amber-50 text-black p-8 rounded w-full max-w-md">
          <h2 className="text-amber-400 text-xl mb-6 text-center font-bold">Contact Form</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-bold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-bold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1 font-bold">Phone No</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-1 font-bold">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-1 font-bold">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded h-32"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full p-3 bg-amber-400 text-white rounded hover:bg-amber-400 transition-colors"
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


