import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Briefcase, CheckCircle } from "lucide-react";

const internshipDetails = {
  title: "Short-Term Internship Program",
  duration: "1 to 3 Months",
  eligibility: "Students, Graduates, and Beginners",
  benefits: [
    "Work on industry-relevant projects",
    "Learn from experienced mentors",
    "Gain hands-on exposure to latest technologies",
    "Internship completion certificate",
    "Boost your resume with practical experience",
  ],
};

const ShortTermInternship = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-6">
      {/* Page Header */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        {internshipDetails.title}
      </motion.h2>
      
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
        {/* Duration & Eligibility */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Calendar className="w-8 h-8 text-blue-600" />
            <span className="text-lg font-medium">{internshipDetails.duration}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Users className="w-8 h-8 text-green-600" />
            <span className="text-lg font-medium">{internshipDetails.eligibility}</span>
          </div>
        </motion.div>
        
        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Why Join Our Short-Term Internship?</h3>
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            {internshipDetails.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-blue-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="text-gray-800 dark:text-gray-200">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Apply Button */}
        {/* <motion.button 
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Apply Now
        </motion.button> */}
      </div>
    </div>
  );
};

export default ShortTermInternship;
