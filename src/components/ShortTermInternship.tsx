import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Users, 
  Award, 
  CheckCircle, 
  Monitor, 
  Shield, 
  Brain, 
  TrendingUp, 
  Calculator, 
  BarChart,
  GraduationCap,
  Star,
  Building2,
  FileText,
  Clock,
  Globe,
  ChevronDown,
  ChevronUp,
  Cloud
} from "lucide-react";

const internshipData = {
  title: "Short-Term Internship Program",
  duration: "1 to 3 Months",
  tagline: "Launch Your Career with Industry-Ready Skills",
  
  itCourses: [
    {
      title: "Frontend Development",
      icon: Monitor,
      description: "Master React, HTML, CSS, JavaScript",
      duration: "2-3 months",
      color: "bg-blue-500",
      modules: [
        "HTML5 & Semantic Markup",
        "CSS3 & Advanced Styling",
        "JavaScript ES6+ Fundamentals",
        "React.js & Component Architecture",
        "State Management & Hooks",
        "Responsive Web Design",
        "Version Control with Git",
        "Deployment & Hosting"
      ]
    },
    {
      title: "Python Programming",
      icon: Globe,
      description: "Learn Python, Django, Flask, Data Science",
      duration: "2-3 months",
      color: "bg-green-500",
      modules: [
        "Python Syntax & Data Structures",
        "Object-Oriented Programming",
        "File Handling & Exception Management",
        "Django Web Framework Basics",
        "Flask Microframework",
        "Database Integration (SQLite/MySQL)",
        "API Development & Testing",
        "Data Analysis with Pandas"
      ]
    },
    {
      title: "Cybersecurity Basics",
      icon: Shield,
      description: "Network Security, Risk Assessment",
      duration: "1-2 months",
      color: "bg-red-500",
      modules: [
        "Information Security Fundamentals",
        "Network Security Protocols",
        "Risk Assessment & Management",
        "Security Policies & Procedures",
        "Incident Response Basics",
        "Security Tools Overview",
        "Compliance & Governance",
        "Security Awareness Training"
      ]
    },
    {
      title: "Ethical Hacking",
      icon: Shield,
      description: "Penetration Testing, Security Auditing",
      duration: "2-3 months",
      color: "bg-purple-500",
      modules: [
        "Ethical Hacking Methodology",
        "Reconnaissance & Footprinting",
        "Vulnerability Assessment",
        "Web Application Testing",
        "Network Penetration Testing",
        "Security Tools (Nmap, Metasploit)",
        "Report Writing & Documentation",
        "Legal & Ethical Considerations"
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      description: "AI/ML Algorithms, Data Analysis",
      duration: "2-3 months",
      color: "bg-indigo-500",
      modules: [
        "Machine Learning Fundamentals",
        "Supervised Learning Algorithms",
        "Unsupervised Learning Techniques",
        "Data Preprocessing & Cleaning",
        "Model Training & Evaluation",
        "Python Libraries (Scikit-learn, Pandas)",
        "Data Visualization",
        "Basic Neural Networks"
      ]
    },
    {
      title: "AWS Basics",
      icon: Cloud,
      description: "Cloud Computing Fundamentals with AWS",
      duration: "1-2 months",
      color: "bg-orange-500",
      modules: [
        "Cloud Computing Concepts",
        "AWS Core Services (EC2, S3, RDS)",
        "Identity & Access Management (IAM)",
        "Virtual Private Cloud (VPC)",
        "AWS CLI & Management Console",
        "Basic Security & Compliance",
        "Cost Management & Billing",
        "Hands-on Labs & Projects"
      ]
    }
  ],

  nonItCourses: [
    {
      title: "Tally ERP",
      icon: Calculator,
      description: "Accounting, GST, Inventory Management",
      duration: "1-2 months",
      color: "bg-orange-500",
      modules: [
        "Tally Prime Fundamentals",
        "Company Creation & Configuration",
        "Accounting Vouchers & Entries",
        "GST Implementation & Returns",
        "Inventory Management",
        "Payroll Processing",
        "Financial Reports & Analysis",
        "Data Backup & Security"
      ]
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      description: "SEO, Social Media, Content Marketing",
      duration: "2-3 months",
      color: "bg-pink-500",
      modules: [
        "Digital Marketing Fundamentals",
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Google Ads & PPC Campaigns",
        "Email Marketing Automation",
        "Analytics & Performance Tracking",
        "Brand Building & Online Reputation"
      ]
    }
  ],

  eligibleDegrees: [
    "B.Tech", "B.Sc", "B.Com", "B.A", "M.Sc", "MCA", "MBA"
  ],

  certificationBodies: [
    { name: "APSCHE", fullName: "Andhra Pradesh State Council of Higher Education" },
    { name: "AICTE", fullName: "All India Council for Technical Education" }
  ],

  benefits: [
    "Work on industry-relevant projects",
    "Learn from experienced mentors",
    "Gain hands-on exposure to latest technologies",
    "Internship completion certificate",
    "Boost your resume with practical experience",
    "Portfolio development guidance",
    "Interview preparation support",
    "Networking opportunities with professionals"
  ]
};

const ShortTermInternship = () => {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [expandedNonItCourse, setExpandedNonItCourse] = useState<number | null>(null);

  const toggleCourse = (index: number) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  const toggleNonItCourse = (index: number) => {
    setExpandedNonItCourse(expandedNonItCourse === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="w-10 h-10 text-blue-600" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {internshipData.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {internshipData.tagline}
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
              >
                <Calendar className="w-6 h-6" />
                <span className="text-lg font-medium">{internshipData.duration}</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
              >
                <Users className="w-6 h-6" />
                <span className="text-lg font-medium">All Degree Students</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* IT Courses Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Information Technology Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Master cutting-edge technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipData.itCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`${course.color} h-2`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`${course.color} p-3 rounded-full`}>
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleCourse(index)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                      {expandedCourse === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                  
                  <AnimatePresence>
                    {expandedCourse === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t dark:border-gray-700 pt-4 mt-4"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Course Modules:</h4>
                        <div className="grid gap-2">
                          {course.modules.map((module, moduleIndex) => (
                            <motion.div
                              key={moduleIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: moduleIndex * 0.05 }}
                              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-2 rounded"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{module}</span>
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

        {/* Non-IT Courses Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Non-IT Professional Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Essential business skills for all sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {internshipData.nonItCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`${course.color} h-2`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`${course.color} p-3 rounded-full`}>
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleNonItCourse(index)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                      {expandedNonItCourse === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                  
                  <AnimatePresence>
                    {expandedNonItCourse === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t dark:border-gray-700 pt-4 mt-4"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Course Modules:</h4>
                        <div className="grid gap-2">
                          {course.modules.map((module, moduleIndex) => (
                            <motion.div
                              key={moduleIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: moduleIndex * 0.05 }}
                              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-2 rounded"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{module}</span>
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

        {/* Eligibility Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Eligible Degrees</h2>
              <p className="text-blue-100 text-lg">Open to students from all academic backgrounds</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {internshipData.eligibleDegrees.map((degree, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-all duration-300"
                >
                  <span className="text-lg font-semibold">{degree}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Certification Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Certified by Leading Bodies</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Get certificates approved by prestigious organizations</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {internshipData.certificationBodies.map((body, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{body.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{body.fullName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Approved & Recognized</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Our Program?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Comprehensive benefits for your career growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internshipData.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our professional internship program.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ShortTermInternship;