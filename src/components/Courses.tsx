import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Clock, Award, ArrowRight } from 'lucide-react';
import CourseModal from './CourseModal';
import mern from "../banners/MERN.webp"
import python from "../banners/python.jpg"
import ML from "../banners/ML.gif"

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  image: string;
  description: string;
  category: string;
  syllabus: string[];
}

const courses: Course[] = [
  {
    id: 'mern',
    title: "MERN Stack Development",
    duration: "4 months",
    level: "Intermediate",
    image: mern,
    category: "Web Development",
    description: "Master the MERN (MongoDB, Express.js, React.js, Node.js) stack and build full-stack web applications.",
    syllabus: [
      "JavaScript ES6+ and TypeScript",
      "React.js with Hooks and Context",
      "Node.js and Express.js",
      "MongoDB and Mongoose",
      "REST API Development",
      "Authentication and Authorization",
      "Deployment and DevOps basics"
    ]
  },
  {
    id: 'python-fullstack',
    title: "Python Full Stack",
    duration: "5 months",
    level: "Intermediate",
    image: python,
    category: "Web Development",
    description: "Complete Python web development course covering both frontend and backend technologies.",
    syllabus: [
      "Python Programming Fundamentals",
      "Django Framework",
      "Flask Framework",
      "Frontend Development",
      "Database Design",
      "API Development",
      "Web Security"
    ]
  },
  {
    id: 'machine-learning',
    title: "Machine Learning",
    duration: "6 months",
    level: "Advanced",
    image: ML,
    category: "AI & Data Science",
    description: "Comprehensive machine learning course covering algorithms, implementation, and real-world applications.",
    syllabus: [
      "Mathematics for ML",
      "Supervised Learning",
      "Unsupervised Learning",
      "Neural Networks",
      "Model Deployment",
      "Python for ML",
      "ML Libraries and Tools"
    ]
  },
  {
    id: 'deep-learning',
    title: "Deep Learning",
    duration: "4 months",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "AI & Data Science",
    description: "Advanced deep learning course focusing on neural networks and their applications.",
    syllabus: [
      "Neural Network Architectures",
      "CNN and RNN",
      "Transfer Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Deep Learning Frameworks",
      "Model Optimization"
    ]
  },
  {
    id: 'data-science',
    title: "Data Science",
    duration: "6 months",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "AI & Data Science",
    description: "Complete data science bootcamp covering statistics, programming, and machine learning.",
    syllabus: [
      "Statistics and Probability",
      "Data Analysis with Python",
      "Data Visualization",
      "Machine Learning Basics",
      "Big Data Technologies",
      "Data Engineering",
      "Business Analytics"
    ]
  },
  {
    id: 'flutter',
    title: "Flutter Development",
    duration: "3 months",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mobile Development",
    description: "Learn to build beautiful, native mobile applications for iOS and Android using Flutter.",
    syllabus: [
      "Dart Programming",
      "Flutter Widgets",
      "State Management",
      "UI/UX Design",
      "API Integration",
      "Firebase Integration",
      "App Publishing"
    ]
  },
  {
    id: 'devops-aws',
    title: "DevOps with AWS",
    duration: "5 months",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cloud & DevOps",
    description: "Master DevOps practices and AWS cloud services for modern application deployment.",
    syllabus: [
      "DevOps Fundamentals",
      "AWS Services",
      "CI/CD Pipeline",
      "Docker and Kubernetes",
      "Infrastructure as Code",
      "Monitoring and Logging",
      "Security Best Practices"
    ]
  },
  {
    id: 'iot-embedded',
    title: "IoT & Embedded Systems",
    duration: "4 months",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "IoT & Embedded",
    description: "Learn to design and develop IoT solutions and embedded systems for real-world applications.",
    syllabus: [
      "Embedded C Programming",
      "Microcontroller Architecture",
      "Sensor Integration",
      "IoT Protocols",
      "PCB Design Basics",
      "Real-time Operating Systems",
      "IoT Project Development"
    ]
  },
  {
    id: '3d-printing',
    title: "3D Printing & Design",
    duration: "3 months",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "3D Technology",
    description: "Master the fundamentals of 3D printing, modeling, and design for various applications.",
    syllabus: [
      "3D Modeling Fundamentals",
      "CAD Software Usage",
      "3D Printer Operations",
      "Material Science",
      "Post-processing Techniques",
      "Design for Manufacturing",
      "Project Implementation"
    ]
  },
  {
    id: 'media-editing',
    title: "Digital Media Editing",
    duration: "3 months",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Digital Media",
    description: "Comprehensive course on photo and video editing for professional content creation.",
    syllabus: [
      "Adobe Photoshop Mastery",
      "Video Editing Techniques",
      "Color Grading",
      "Motion Graphics",
      "Audio Editing",
      "Digital Asset Management",
      "Portfolio Development"
    ]
  },
  {
    id: 'cyber-security',
    title: "Cyber Security",
    duration: "5 months",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cyber Security",
    description: "Learn comprehensive cyber security concepts and practices to protect digital assets.",
    syllabus: [
      "Network Security",
      "Cryptography",
      "Security Operations",
      "Threat Analysis",
      "Incident Response",
      "Security Compliance",
      "Security Tools & Technologies"
    ]
  },
  {
    id: 'ethical-hacking',
    title: "Ethical Hacking",
    duration: "4 months",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cyber Security",
    description: "Master ethical hacking techniques and tools for securing systems and networks.",
    syllabus: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Web Application Security",
      "Wireless Network Security",
      "Social Engineering",
      "Malware Analysis",
      "Security Report Writing"
    ]
  }
];

const categories = [
  "All",
  "Web Development",
  "AI & Data Science",
  "Mobile Development",
  "Cloud & DevOps",
  "IoT & Embedded",
  "3D Technology",
  "Digital Media",
  "Cyber Security"
];


const Courses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const filteredCourses = selectedCategory === "All"
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your career with our industry-focused technology courses
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${course.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <BookOpen className="w-4 h-4 mr-1" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Award className="w-4 h-4 mr-1" />
                      <span>Certificate</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </section>
  );
};

export default Courses;