"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >

            <img
              src="hire22-logo.svg"
              alt="Hire22.ai Logo"
              className="w-[70%]"
            />
            {/* <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div> */}
            {/* <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Hire22.ai
            </span> */}
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#features"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Pricing
            </a>
            <motion.button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t border-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 px-2 py-1"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 px-2 py-1"
              >
                Pricing
              </a>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 w-full">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
