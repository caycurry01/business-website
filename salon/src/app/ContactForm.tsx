'use client';

import { useState } from 'react';

export default function ContactForm({ greatVibes }: { greatVibes: any }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    
    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-white text-gray-800 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`${greatVibes.className} text-6xl sm:text-7xl text-center mb-16`}>
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-6 py-3 bg-pink-400 text-white rounded-lg hover:opacity-90 transition disabled:opacity-50"
                disabled={status === 'Sending...'}
              >
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>
              {status && status !== 'Sending...' && (
                <p className="text-green-600 text-sm">{status}</p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-600">
                We'd love to hear from you! Whether you have questions about our services or want to book a consultation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-pink-400 mr-3">📧</span>
                <span>info@example.com</span>
              </div>
              <div className="flex items-start">
                <span className="text-pink-400 mr-3">📱</span>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <span className="text-pink-400 mr-3">📍</span>
                <span>123 Main Street, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-pink-400 text-white p-4 rounded-full shadow-lg hover:bg-pink-500 transition-all hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </section>
  );
}