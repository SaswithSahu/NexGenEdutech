import React from "react";
import { motion } from "framer-motion";
import { Users, Target, History, Lightbulb, Briefcase, Globe } from "lucide-react";

const teamMembers = [
  { name: "John Doe", role: "Lead Instructor", image: "/images/team1.jpg" },
  { name: "Jane Smith", role: "AI Specialist", image: "/images/team2.jpg" },
  { name: "Robert Brown", role: "Software Engineer", image: "/images/team3.jpg" },
];

const About = () => {
  return (
    <section id="about" className="relative">
      {/* Banner Section */}
      <div className="relative h-[400px] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: "url('/images/about-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl md:text-6xl font-bold text-white text-center"
        >
          About NexGenEduTech
        </motion.h1>
      </div>
      
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Our Mission & Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Our Mission & Vision
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Bridging education and technology by providing world-class learning solutions, 
            academic guidance, and IT services to empower future innovators.
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/** Mission **/}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center"
          >
            <Lightbulb className="w-16 h-16 text-yellow-500 dark:text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Innovation in Education</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We combine technology and education to create immersive, hands-on learning experiences.
            </p>
          </motion.div>
          
          {/** IT Services **/}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center"
          >
            <Globe className="w-16 h-16 text-blue-500 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Global Tech Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We provide AI-powered digital solutions, web development, and cloud services.
            </p>
          </motion.div>
          
          {/** Our Story **/}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center"
          >
            <Briefcase className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Our Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Started with a vision to revolutionize education through technology and expert mentorship.
            </p>
          </motion.div>
        </div>

        {/* Our Team */}
        {/* <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our team of experts is dedicated to delivering cutting-edge education and IT solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
                whileHover={{ scale: 1.05 }}>
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;