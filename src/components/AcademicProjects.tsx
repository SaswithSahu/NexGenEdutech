import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const domains = {
  "Machine Learning": [
    { title: "Handwritten Digit Recognition", description: "Build an ML model using CNN to classify handwritten digits." },
    { title: "House Price Prediction", description: "Predict real estate prices using regression models." },
    { title: "Stock Market Analysis", description: "Use ML to analyze stock trends and make predictions." },
    { title: "Spam Email Detection", description: "Create a classifier to detect spam emails using NLP." },
    { title: "Sentiment Analysis", description: "Analyze user sentiments on social media using AI models." },
    { title: "Credit Card Fraud Detection", description: "Develop an ML system to detect fraudulent transactions." },
    { title: "Customer Churn Prediction", description: "Predict customer retention using ML techniques." },
    { title: "Chatbot Development", description: "Build an AI chatbot for automated customer service." },
    { title: "Face Recognition System", description: "Develop a system for face detection and authentication." },
    { title: "Autonomous Vehicle Simulation", description: "Implement ML for self-driving car simulations." },
  ],
  "Deep Learning": [
    { title: "Image Caption Generator", description: "Develop a model that generates captions for images." },
    { title: "Object Detection System", description: "Use YOLO and Faster R-CNN for object detection." },
    { title: "Neural Style Transfer", description: "Apply artistic styles to images using deep learning." },
    { title: "Speech Emotion Recognition", description: "Detect emotions from voice recordings using AI." },
    { title: "Pose Estimation System", description: "Identify human poses using deep learning models." },
    { title: "Text Summarization", description: "Use NLP to summarize large texts automatically." },
    { title: "Medical Image Diagnosis", description: "Analyze X-ray and MRI scans using CNNs." },
    { title: "Fake News Detection", description: "Build an AI model to detect misinformation online." },
    { title: "Self-learning AI Agent", description: "Develop an AI agent that learns from interactions." },
    { title: "Music Genre Classification", description: "Classify music into genres using deep learning." },
  ],
};

const AcademicProjects = () => {
  const [selectedDomain, setSelectedDomain] = useState("Machine Learning");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10 px-6">
      {/* Marquee for Offers */}
      <div className="overflow-hidden bg-blue-600 text-white py-2 mt-4" >
        <marquee behavior="scroll" direction="left" className="text-lg font-semibold">
          Special Offer: Enroll in any academic project and get a 20% discount! Limited time only.
        </marquee>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white my-8">
          Academic Projects
        </h2>
        
        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-8">
          {Object.keys(domains).map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedDomain === domain
                  ? "bg-blue-600 text-white scale-110"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
        
        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains[selectedDomain].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <button onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}>
                  <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300 transition-transform" style={{ transform: expandedProject === project.title ? "rotate(180deg)" : "rotate(0)" }} />
                </button>
              </div>
              {expandedProject === project.title && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 text-gray-600 dark:text-gray-300"
                >
                  {project.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicProjects;
