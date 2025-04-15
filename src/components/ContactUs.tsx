import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-6">
      {/* Page Header */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        Contact Us
      </motion.h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Reach out to us for any queries or assistance. We are here to help!
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300">
              <Mail className="w-6 h-6 text-blue-600" />
              <span>info@nexgenedutech.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300">
              <Phone className="w-6 h-6 text-green-600" />
              <span>+91 8919432627</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300">
              <MapPin className="w-6 h-6 text-red-600" />
              <span>Pm Palem, Near Last Bus stand, Visakhapatnam </span>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600"
            />
            <textarea 
              name="message" 
              rows="4"
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              type="submit" 
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message <Send className="w-5 h-5" />
            </motion.button>
          </form>
          {submitted && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }} 
              className="mt-4 text-green-600"
            >
              Thank you! Your message has been sent.
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
