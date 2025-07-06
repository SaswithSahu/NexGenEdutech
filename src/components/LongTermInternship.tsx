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
  Code,
  Database,
  Cloud,
  Cpu,
  Network,
  Lock,
  Zap,
  Server,
  Smartphone
} from "lucide-react";

const internshipData = {
  title: "Long-Term Internship Program",
  duration: "6 to 12 Months",
  tagline: "Master Complete Technology Stacks & Launch Your Career",
  
  techStacks: [
    {
      title: "MERN Stack Development",
      icon: Code,
      description: "Full-stack web development with MongoDB, Express, React, Node.js",
      duration: "8-10 months",
      color: "bg-blue-500",
      modules: [
        "MongoDB - Database Design & Operations",
        "Express.js - Server-side Development",
        "React.js - Frontend Development & Hooks",
        "Node.js - Backend API Development",
        "Authentication & Authorization",
        "State Management (Redux/Context)",
        "RESTful API Design",
        "Deployment & DevOps Basics"
      ]
    },
    {
      title: "MEAN Stack Development",
      icon: Globe,
      description: "Enterprise web applications with MongoDB, Express, Angular, Node.js",
      duration: "8-10 months",
      color: "bg-red-500",
      modules: [
        "MongoDB - Advanced Database Operations",
        "Express.js - Enterprise Server Architecture",
        "Angular - Component-based Frontend",
        "Node.js - Scalable Backend Services",
        "TypeScript - Type-safe Development",
        "Angular Material - UI Components",
        "RxJS - Reactive Programming",
        "Testing & Quality Assurance"
      ]
    },
    {
      title: "Python Full Stack",
      icon: Database,
      description: "Complete Python ecosystem with Django/Flask, databases, and frontend",
      duration: "8-12 months",
      color: "bg-green-500",
      modules: [
        "Python Advanced Programming",
        "Django - Web Framework & ORM",
        "Flask - Microservices Development",
        "PostgreSQL/MySQL - Database Management",
        "REST API Development",
        "Frontend Integration (React/Vue)",
        "Celery - Task Queue Management",
        "Docker & Containerization"
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: BarChart,
      description: "Complete data pipeline from collection to visualization and ML",
      duration: "10-12 months",
      color: "bg-purple-500",
      modules: [
        "Python for Data Science",
        "Pandas & NumPy - Data Manipulation",
        "Matplotlib & Seaborn - Visualization",
        "SQL & Database Analytics",
        "Machine Learning Algorithms",
        "Statistical Analysis & Hypothesis Testing",
        "Big Data Tools (Spark, Hadoop)",
        "Business Intelligence & Reporting"
      ]
    },
    {
      title: "Generative AI & Machine Learning",
      icon: Brain,
      description: "Advanced AI/ML with focus on generative models and LLMs",
      duration: "10-12 months",
      color: "bg-indigo-500",
      modules: [
        "Machine Learning Fundamentals",
        "Deep Learning & Neural Networks",
        "Natural Language Processing",
        "Computer Vision & Image Processing",
        "Generative AI Models (GPT, DALL-E)",
        "LangChain & AI Application Development",
        "MLOps & Model Deployment",
        "Ethics in AI & Responsible Development"
      ]
    },
    {
      title: "DevOps with AWS",
      icon: Cloud,
      description: "Complete DevOps pipeline with AWS cloud services and automation",
      duration: "8-10 months",
      color: "bg-orange-500",
      modules: [
        "AWS Core Services (EC2, S3, RDS)",
        "Docker & Kubernetes Orchestration",
        "CI/CD Pipeline Development",
        "Infrastructure as Code (Terraform)",
        "Monitoring & Logging (CloudWatch)",
        "Security & Compliance",
        "Serverless Architecture (Lambda)",
        "Cost Optimization & Best Practices"
      ]
    },
    {
      title: "Cloud Computing & Architecture",
      icon: Server,
      description: "Multi-cloud expertise with AWS, Azure, and Google Cloud",
      duration: "8-12 months",
      color: "bg-cyan-500",
      modules: [
        "Cloud Fundamentals & Service Models",
        "AWS Solutions Architecture",
        "Microsoft Azure Services",
        "Google Cloud Platform",
        "Cloud Security & Governance",
        "Microservices Architecture",
        "Cloud Migration Strategies",
        "Cost Management & Optimization"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      icon: Shield,
      description: "Comprehensive security from network to application level",
      duration: "10-12 months",
      color: "bg-red-600",
      modules: [
        "Network Security & Protocols",
        "Web Application Security",
        "Incident Response & Forensics",
        "Security Risk Assessment",
        "Compliance & Governance (ISO 27001)",
        "Security Tools & SIEM",
        "Vulnerability Management",
        "Security Awareness & Training"
      ]
    },
    {
      title: "Ethical Hacking & Penetration Testing",
      icon: Lock,
      description: "Advanced penetration testing and security assessment",
      duration: "8-10 months",
      color: "bg-gray-700",
      modules: [
        "Reconnaissance & Information Gathering",
        "Vulnerability Assessment Tools",
        "Web Application Penetration Testing",
        "Network Penetration Testing",
        "Wireless Security Testing",
        "Social Engineering Techniques",
        "Report Writing & Communication",
        "Legal & Ethical Considerations"
      ]
    },
    {
      title: "IoT & Embedded Systems",
      icon: Cpu,
      description: "Internet of Things development with hardware and software integration",
      duration: "10-12 months",
      color: "bg-teal-500",
      modules: [
        "IoT Architecture & Protocols",
        "Microcontroller Programming (Arduino/Raspberry Pi)",
        "Sensor Integration & Data Collection",
        "Wireless Communication (WiFi, Bluetooth, LoRa)",
        "Cloud IoT Platforms (AWS IoT, Azure IoT)",
        "Edge Computing & Processing",
        "IoT Security & Privacy",
        "Industrial IoT Applications"
      ]
    }
  ],

  eligibleDegrees: [
    "B.Tech", "B.Sc", "B.Com", "B.A", "M.Sc", "MCA", "MBA", "M.Tech"
  ],

  certificationBodies: [
    { name: "APSCHE", fullName: "Andhra Pradesh State Council of Higher Education" },
    { name: "AICTE", fullName: "All India Council for Technical Education" },
    { name: "Industry Partners", fullName: "Leading Technology Companies & Startups" }
  ],

  benefits: [
    "Work on real-world industry projects",
    "Mentorship from senior developers & architects",
    "Complete technology stack mastery",
    "Industry-recognized certification",
    "Portfolio development with live projects",
    "Interview preparation & soft skills training",
    "Networking with industry professionals",
    "Placement assistance & career guidance",
    "Hands-on experience with latest tools",
    "Agile development methodology training",
    "Code review & best practices",
    "Open source contribution opportunities"
  ],

  placementStats: {
    placementRate: "85%",
    averageSalary: "₹4.5-8 LPA",
    topCompanies: ["TCS", "Infosys", "Wipro", "Accenture", "Startups"]
  }
};

const LongTermInternship = () => {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

  const toggleCourse = (index: number) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-700 dark:from-purple-800 dark:to-blue-900 text-white">
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
                <GraduationCap className="w-10 h-10 text-purple-600" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {internshipData.title}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
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
                <span className="text-lg font-medium">Advanced Professionals</span>
              </motion.div>
            </div>

            {/* Placement Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="text-3xl font-bold text-yellow-300">{internshipData.placementStats.placementRate}</div>
                <div className="text-purple-100">Placement Rate</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="text-3xl font-bold text-green-300">{internshipData.placementStats.averageSalary}</div>
                <div className="text-purple-100">Average Package</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="text-3xl font-bold text-blue-300">50+</div>
                <div className="text-purple-100">Hiring Partners</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Technology Stacks Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Technology Stacks
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Master end-to-end development with industry-standard technologies</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {internshipData.techStacks.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`${stack.color} h-2`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`${stack.color} p-3 rounded-full`}>
                      <stack.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{stack.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{stack.duration}</span>
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
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{stack.description}</p>
                  
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
                          {stack.modules.map((module, moduleIndex) => (
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
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Eligible Degrees</h2>
              <p className="text-purple-100 text-lg">Advanced program for graduates and final-year students</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Industry-Recognized Certifications</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Get certificates from prestigious organizations and industry leaders</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {internshipData.certificationBodies.map((body, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Our Long-Term Program?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Comprehensive career transformation with industry-ready skills</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join our comprehensive long-term internship program and become an industry-ready professional with complete technology stack expertise.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default LongTermInternship;