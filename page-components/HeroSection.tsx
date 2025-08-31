"use client";

import { Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {

  const scrollToRegistration = () => {
    const element = document.querySelector("#registration");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-white/40 mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 text-indigo-500 mr-2" />
              <span className="text-sm text-gray-700 font-medium">
                India's First AI-Powered Hiring Platform
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Instant
            <span className="block">JobCoNCT</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transform your hiring process with AI. Get interview-ready
            candidates in just 22 hours with our intelligent matching system.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={scrollToRegistration}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Register & CoNCT Instantly
            </motion.button>
            <motion.button
              className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center group">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-indigo-600 mb-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                22
              </motion.div>
              <div className="text-gray-600 text-sm md:text-base">
                Hours to Hire
              </div>
            </div>
            <div className="text-center group">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-purple-600 mb-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                10K+
              </motion.div>
              <div className="text-gray-600 text-sm md:text-base">
                Companies Trust Us
              </div>
            </div>
            <div className="text-center group">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-indigo-600 mb-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                98%
              </motion.div>
              <div className="text-gray-600 text-sm md:text-base">
                Match Accuracy
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-4 md:left-10 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-4 md:right-10 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 md:right-20 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </section>
  );
};

export default HeroSection;