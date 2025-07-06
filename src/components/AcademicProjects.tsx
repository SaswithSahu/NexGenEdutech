import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ChevronUp,
  Brain,
  Code,
  Database,
  Shield,
  Cpu,
  Globe,
  Award,
  FileText,
  Presentation,
  BookOpen,
  Users,
  CheckCircle,
  Star,
  Clock,
  Target,
  Zap,
  TrendingUp,
  Monitor,
  Settings,
  Lightbulb,
  GraduationCap,
  Building2,
  Search,
  BarChart,
  Phone,
  MessageCircle,
  Mail
} from "lucide-react";

const projectDomains = {
  "Machine Learning & AI": {
    icon: Brain,
    color: "bg-purple-500",
    projects: [
      { 
        title: "Advanced Computer Vision for Medical Diagnosis", 
        description: "Deep learning model for automated medical image analysis using CNNs and transfer learning",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["Python", "TensorFlow", "OpenCV", "Flask"]
      },
      { 
        title: "Natural Language Processing for Sentiment Analysis", 
        description: "Multi-class sentiment classification using BERT and transformer models",
        complexity: "Intermediate",
        duration: "2-3 months",
        technologies: ["Python", "NLTK", "Transformers", "PyTorch"]
      },
      { 
        title: "Predictive Analytics for Financial Markets", 
        description: "Time series forecasting using LSTM networks and ensemble methods",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["Python", "Pandas", "Scikit-learn", "Keras"]
      },
      { 
        title: "Intelligent Recommendation System", 
        description: "Hybrid recommendation engine using collaborative and content-based filtering",
        complexity: "Intermediate",
        duration: "2-3 months",
        technologies: ["Python", "Surprise", "MongoDB", "FastAPI"]
      },
      { 
        title: "Autonomous Drone Navigation System", 
        description: "Computer vision-based obstacle detection and path planning for drones",
        complexity: "Advanced",
        duration: "4-5 months",
        technologies: ["Python", "ROS", "OpenCV", "TensorFlow"]
      }
    ]
  },
  "Deep Learning & Neural Networks": {
    icon: Cpu,
    color: "bg-indigo-500",
    projects: [
      { 
        title: "Generative Adversarial Networks for Art Creation", 
        description: "StyleGAN implementation for generating realistic artwork and digital art",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["Python", "PyTorch", "CUDA", "Streamlit"]
      },
      { 
        title: "Real-time Object Detection and Tracking", 
        description: "YOLO-based system for multi-object detection in video streams",
        complexity: "Intermediate",
        duration: "2-3 months",
        technologies: ["Python", "YOLO", "OpenCV", "Flask"]
      },
      { 
        title: "Speech Recognition and Voice Assistant", 
        description: "End-to-end speech processing system with wake word detection",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["Python", "PyTorch", "librosa", "FastAPI"]
      },
      { 
        title: "Neural Style Transfer for Video Processing", 
        description: "Real-time artistic style transfer for video content using CNNs",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["Python", "TensorFlow", "OpenCV", "CUDA"]
      },
      { 
        title: "Automated Code Generation using Transformers", 
        description: "AI-powered code completion and generation using GPT-based models",
        complexity: "Advanced",
        duration: "4-5 months",
        technologies: ["Python", "Transformers", "CodeBERT", "Django"]
      }
    ]
  },
  "MERN Stack Development": {
    icon: Code,
    color: "bg-blue-500",
    projects: [
      { 
        title: "Enterprise E-commerce Platform", 
        description: "Full-featured online marketplace with payment integration and admin dashboard",
        complexity: "Advanced",
        duration: "4-5 months",
        technologies: ["React", "Node.js", "MongoDB", "Express"]
      },
      { 
        title: "Real-time Collaboration Platform", 
        description: "Team productivity app with live editing, chat, and project management",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["React", "Socket.io", "Node.js", "MongoDB"]
      },
      { 
        title: "Social Media Analytics Dashboard", 
        description: "Comprehensive social media monitoring and analytics platform",
        complexity: "Intermediate",
        duration: "2-3 months",
        technologies: ["React", "D3.js", "Node.js", "MongoDB"]
      },
      { 
        title: "Learning Management System", 
        description: "Complete LMS with course creation, progress tracking, and assessments",
        complexity: "Advanced",
        duration: "4-5 months",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
      },
      { 
        title: "Healthcare Management System", 
        description: "Patient management system with appointment scheduling and medical records",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["React", "Node.js", "MongoDB", "JWT"]
      }
    ]
  },
  "Python Full Stack": {
    icon: Database,
    color: "bg-green-500",
    projects: [
      { 
        title: "AI-Powered Content Management System", 
        description: "CMS with automated content generation and SEO optimization",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["Django", "PostgreSQL", "Celery", "Redis"]
      },
      { 
        title: "Financial Portfolio Management Platform", 
        description: "Investment tracking and analysis platform with real-time data",
        complexity: "Advanced",
        duration: "4-5 months",
        technologies: ["Flask", "SQLAlchemy", "Pandas", "Plotly"]
      },
      { 
        title: "Smart City IoT Data Platform", 
        description: "IoT data collection and visualization platform for smart city applications",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["Django", "InfluxDB", "Grafana", "MQTT"]
      },
      { 
        title: "Automated Testing Framework", 
        description: "Comprehensive testing suite with CI/CD integration and reporting",
        complexity: "Intermediate",
        duration: "2-3 months",
        technologies: ["Python", "Selenium", "Pytest", "Jenkins"]
      },
      { 
        title: "Blockchain-based Supply Chain Tracker", 
        description: "Transparent supply chain management using blockchain technology",
        complexity: "Advanced",
        duration: "4-5 months",
        technologies: ["Django", "Web3.py", "Ethereum", "PostgreSQL"]
      }
    ]
  },
  "Cybersecurity & Ethical Hacking": {
    icon: Shield,
    color: "bg-red-500",
    projects: [
      { 
        title: "Advanced Penetration Testing Framework", 
        description: "Automated vulnerability assessment and penetration testing toolkit",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["Python", "Nmap", "Metasploit", "Burp Suite"]
      },
      { 
        title: "Network Intrusion Detection System", 
        description: "ML-based network monitoring and threat detection system",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["Python", "Scapy", "Scikit-learn", "ELK Stack"]
      },
      { 
        title: "Secure Communication Platform", 
        description: "End-to-end encrypted messaging platform with advanced security features",
        complexity: "Advanced",
        duration: "4-5 months",
        technologies: ["Python", "Cryptography", "Flask", "WebRTC"]
      },
      { 
        title: "Digital Forensics Analysis Tool", 
        description: "Comprehensive digital evidence analysis and reporting system",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["Python", "Volatility", "Autopsy", "SQLite"]
      },
      { 
        title: "Blockchain Security Audit Platform", 
        description: "Smart contract vulnerability detection and security assessment tool",
        complexity: "Advanced",
        duration: "4-5 months",
        technologies: ["Python", "Solidity", "Web3.py", "Mythril"]
      }
    ]
  },
  "IoT & Embedded Systems": {
    icon: Cpu,
    color: "bg-orange-500",
    projects: [
      { 
        title: "Smart Home Automation System", 
        description: "Complete IoT ecosystem for home automation with mobile app control",
        complexity: "Advanced",
        duration: "4-5 months",
        technologies: ["Arduino", "Raspberry Pi", "MQTT", "React Native"]
      },
      { 
        title: "Industrial IoT Monitoring Platform", 
        description: "Real-time industrial equipment monitoring and predictive maintenance",
        complexity: "Advanced",
        duration: "3-4 months",
        technologies: ["ESP32", "InfluxDB", "Grafana", "Python"]
      },
      { 
        title: "Agricultural Precision Farming System", 
        description: "IoT-based crop monitoring with automated irrigation and fertilization",
        complexity: "Advanced",
        duration: "4-5 months",
        technologies: ["Arduino", "LoRaWAN", "ThingSpeak", "Machine Learning"]
      },
      { 
        title: "Wearable Health Monitoring Device", 
        description: "Real-time health parameter tracking with cloud analytics",
        complexity: "Intermediate",
        duration: "3-4 months",
        technologies: ["ESP32", "Sensors", "Firebase", "Flutter"]
      },
      { 
        title: "Smart Traffic Management System", 
        description: "AI-powered traffic optimization using IoT sensors and computer vision",
        complexity: "Advanced",
        duration: "4-5 months",
        technologies: ["Raspberry Pi", "OpenCV", "MQTT", "TensorFlow"]
      }
    ]
  }
};

const services = [
  {
    title: "Project Explanation Sessions",
    icon: Presentation,
    description: "Detailed project walkthrough and concept explanation sessions",
    features: ["One-on-one mentoring", "Concept clarification", "Technical guidance", "Q&A sessions"]
  },
  {
    title: "Code Review & Optimization",
    icon: Code,
    description: "Professional code review and performance optimization",
    features: ["Code quality assessment", "Best practices implementation", "Performance tuning", "Security review"]
  },
  {
    title: "Professional Documentation",
    icon: FileText,
    description: "Comprehensive project documentation and technical reports",
    features: ["Technical documentation", "User manuals", "API documentation", "Deployment guides"]
  },
  {
    title: "Presentation & PPT Creation",
    icon: Monitor,
    description: "Professional presentation materials for project defense",
    features: ["Custom PPT design", "Technical diagrams", "Demo videos", "Presentation coaching"]
  },
  {
    title: "Research Paper Publication",
    icon: BookOpen,
    description: "Support for academic paper writing and journal publication",
    features: ["Paper writing assistance", "Journal selection", "Peer review support", "Publication guidance"]
  },
  {
    title: "Industry Certification",
    icon: Award,
    description: "Project completion certificates and skill validation",
    features: ["Project certificates", "Skill assessments", "Industry recognition", "Portfolio building"]
  }
];

const supportFeatures = [
  "24/7 Technical Support",
  "Live Code Debugging Sessions",
  "Industry Expert Mentorship",
  "Career Guidance & Placement Support",
  "GitHub Portfolio Development",
  "Interview Preparation",
  "Technology Stack Training",
  "Project Deployment Assistance"
];

const contactNumbers = [
  { number: "8919432627", label: "Project Coordinator" },
  { number: "7816018698", label: "Technical Support" },
  { number: "6301263825", label: "Admissions Office" }
];

const AcademicProjects = () => {
  const [selectedDomain, setSelectedDomain] = useState("Machine Learning & AI");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleProject = (projectTitle: string) => {
    setExpandedProject(expandedProject === projectTitle ? null : projectTitle);
  };

  const toggleService = (serviceTitle: string) => {
    setExpandedService(expandedService === serviceTitle ? null : serviceTitle);
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 min-h-screen">
      {/* Marquee for Offers */}
      {/* <div className="overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 pt-10">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-lg font-semibold "
        >
          🎉 Special Offer: Enroll in any academic project and get 25% discount + Free certification! Limited time only. 🚀
        </motion.div>
      </div> */}
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Advanced Academic Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Industry-grade projects with end-to-end support, professional documentation, and publication assistance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
            >
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Completed Projects</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
            >
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Research Papers Published</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
            >
              <div className="text-3xl font-bold text-green-600">95%</div>
              <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Domain Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Choose Your Technology Domain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(projectDomains).map(([domain, data]) => (
              <motion.button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  selectedDomain === domain
                    ? `${data.color} text-white shadow-lg`
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700"
                }`}
              >
                <data.icon className="w-6 h-6" />
                <span className="text-left">{domain}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Project List */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedDomain} Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Advanced projects designed for academic excellence and industry readiness
            </p>
          </div>
          
          <div className="grid gap-6">
            {projectDomains[selectedDomain].projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`${projectDomains[selectedDomain].color} h-1`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(project.complexity)}`}>
                          {project.complexity}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => toggleProject(project.title)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors ml-4"
                    >
                      {expandedProject === project.title ? (
                        <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <AnimatePresence>
                    {expandedProject === project.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t dark:border-gray-700 pt-4 mt-4"
                      >
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Project Features:</h4>
                            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                Complete source code with documentation
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                Professional project report
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                Presentation materials (PPT)
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                Live demo and explanation
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Support Included:</h4>
                            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-500" />
                                1-on-1 mentoring sessions
                              </li>
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-500" />
                                Code review and optimization
                              </li>
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-500" />
                                Deployment assistance
                              </li>
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-500" />
                                Publication support (if applicable)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4 flex gap-3">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                          >
                            Get Quote
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-blue-600 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            View Demo
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Project Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              End-to-end support for your academic project success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                    </div>
                    <button
                      onClick={() => toggleService(service.title)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                      {expandedService === service.title ? (
                        <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  
                  <AnimatePresence>
                    {expandedService === service.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t dark:border-gray-700 pt-4 mt-4"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Service Features:</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: featureIndex * 0.05 }}
                              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Support Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">End-to-End Project Support</h2>
              <p className="text-purple-100 text-lg">Complete assistance from concept to completion</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 justify-center">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <span className="font-medium">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Certification Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Certification & Recognition</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Industry-recognized certificates and academic validation</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Certificate</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Completion Certificate</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Industry Recognized</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Research Publication</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Journal Publication Support</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Academic Recognition</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Portfolio Building</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Professional Portfolio</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Career Ready</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Phone className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Contact our expert team for project consultation and support</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {contactNumbers.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700 text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{contact.number}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{contact.label}</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Call Now
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get professional guidance, complete documentation, and industry-ready projects that stand out in your academic journey.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AcademicProjects;