import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Globe, Database, Brain, Server, Rocket, GraduationCap, BookOpen, Briefcase, Layers, Users } from "lucide-react";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  category: "IT Services" | "Academics";
}

const services: Service[] = [
  { icon: <Code className="w-10 h-10" />, title: "Web Development", description: "Custom websites and web applications with modern technologies.", category: "IT Services" },
  { icon: <Globe className="w-10 h-10" />, title: "Digital Marketing", description: "SEO, social media marketing, and digital branding solutions.", category: "IT Services" },
  { icon: <Database className="w-10 h-10" />, title: "Database Solutions", description: "Optimized database design and management for businesses.", category: "IT Services" },
  { icon: <Server className="w-10 h-10" />, title: "Cloud Services", description: "Cloud infrastructure setup and management for scalability.", category: "IT Services" },
  { icon: <Rocket className="w-10 h-10" />, title: "IT Consulting", description: "Expert IT guidance for digital transformation.", category: "IT Services" },
  { icon: <Brain className="w-10 h-10" />, title: "AI & Machine Learning Training", description: "Comprehensive AI and machine learning training with practical experience.", category: "Academics" },
  { icon: <GraduationCap className="w-10 h-10" />, title: "Short-Term Internships", description: "Hands-on experience in industry-relevant fields.", category: "Academics" },
  { icon: <GraduationCap className="w-10 h-10" />, title: "Long-Term Internships", description: "In-depth training programs with real-world projects.", category: "Academics" },
  { icon: <BookOpen className="w-10 h-10" />, title: "Certification Programs", description: "Industry-recognized certifications to boost your career.", category: "Academics" },
  { icon: <Briefcase className="w-10 h-10" />, title: "Job Guarantee Programs", description: "Get certified and secure a job in top IT companies.", category: "Academics" },
  { icon: <Layers className="w-10 h-10" />, title: "Academic Projects", description: "Providing top-notch academic project development and guidance.", category: "Academics" },
  { icon: <Users className="w-10 h-10" />, title: "Workshops & Seminars", description: "Expert-led workshops covering the latest industry trends and technologies.", category: "Academics" }
];

const categories = ["All", "IT Services", "Academics"] as const;

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredServices = selectedCategory === "All" ? services : services.filter(service => service.category === selectedCategory);

  return (
    <section className="relative">
      {/* Banner Section */}
      <div className="relative h-[400px] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: "url('/images/services-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl md:text-6xl font-bold text-white text-center"
        >
          Our Services
        </motion.h1>
      </div>
      
      <div className="py-20 bg-gray-100 dark:bg-gray-900 max-w-7xl mx-auto px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Cutting-edge technology solutions and academic programs to elevate your career and business.
        </motion.p>

        <div className="flex justify-center gap-4 mt-8">
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600"}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredServices.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transition-transform duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;