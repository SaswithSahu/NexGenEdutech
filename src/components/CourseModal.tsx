import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Course } from './Courses';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{course.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="aspect-video mb-6">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Course Overview</h3>
              <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">What You'll Learn</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {course.syllabus.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <span className="font-semibold">Duration:</span> {course.duration}
              </div>
              <div>
                <span className="font-semibold">Level:</span> {course.level}
              </div>
             
            </div>

            {/* <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
              Enroll Now
            </button> */}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CourseModal;