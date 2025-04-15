import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import LandingPage from './components/Landing';
import AcademicProjects from './components/AcademicProjects';
import ContactUs from './components/ContactUs';
import LongTermInternship from './components/LongTermInternship';
import Workshops from './components/Workshops';
import ShortTermInternship from './components/ShortTermInternship';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <LandingPage />
                <About />
                <Services />
                <Courses />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/internships/long-term" element={<LongTermInternship/>} />
            <Route path="/internships/short-term" element={<ShortTermInternship/>} />
            <Route path="/workshops" element={<Workshops/>} />
            <Route path="/academic-projects" element={<AcademicProjects/>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;