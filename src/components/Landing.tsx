import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, GraduationCap, Code, Globe, Star } from "lucide-react";
import Hero from "./Hero";

const services = [
  { icon: <GraduationCap className="w-12 h-12 text-blue-600" />, title: "Comprehensive Courses", desc: "Learn AI, Web Development, and IT solutions from industry experts." },
  { icon: <Code className="w-12 h-12 text-green-600" />, title: "Academic Projects", desc: "Get expert guidance on final-year and research-based projects." },
  { icon: <Globe className="w-12 h-12 text-purple-600" />, title: "IT & Digital Services", desc: "Web design, hosting, SEO, and cutting-edge business solutions." },
];

const testimonials = [
  { name: "John Doe", review: "The AI courses transformed my career! Highly recommended." },
  { name: "Jane Smith", review: "Excellent guidance on academic projects. Truly professional." },
  { name: "David Lee", review: "Their web development services boosted my business online!" },
];

const LandingPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Hero />
      
      {/* Brief Introduction */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">
        <motion.h2 className="text-4xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Welcome to NexGenEduTech
        </motion.h2>
        <motion.p className="mt-4 text-lg text-gray-600 dark:text-gray-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          Bridging the gap between education and technology, offering innovative courses, project guidance, and IT solutions.
        </motion.p>
      </section>
      
      {/* Key Services */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div key={index} className="p-8 bg-gray-50 dark:bg-gray-700 shadow-md rounded-xl text-center"
              whileHover={{ scale: 1.05 }}>
              {service.icon}
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">Why Choose Us?</h2>
        <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-8">
          {["Experienced Trainers", "AI-Powered Learning", "End-to-End IT Solutions"].map((item, index) => (
            <motion.div key={index} className="p-6 bg-blue-100 dark:bg-blue-900 shadow-lg rounded-lg flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }}>
              <CheckCircle className="w-10 h-10 text-blue-600 dark:text-blue-300" />
              <span className="text-lg font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Testimonials */}
      {/* <section className="py-20 bg-gray-200 dark:bg-gray-800 text-center">
        <h2 className="text-4xl font-bold">What Our Students Say</h2>
        <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-xl"
              whileHover={{ scale: 1.05 }}>
              <Star className="w-10 h-10 text-yellow-500 mx-auto" />
              <p className="mt-4 text-gray-700 dark:text-gray-300 italic">"{testimonial.review}"</p>
              <h4 className="mt-2 font-semibold">- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default LandingPage;
