"use client";

import { FileText, Search, Users } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Create a JobCoNCT",
      description:
        "Post your job in a few simple steps with our AI-guided form. Describe your requirements and let our system work.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Search,
      title: "AI Scores Profiles",
      description:
        "Our AI analyzes thousands of profiles and ranks candidates based on skills, experience, and compatibility.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Get Super Profiles",
      description:
        "Receive top-rated profiles with detailed insights and interview scheduling in just 22 hours.",
      gradient: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Three simple steps to transform your hiring
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <step.icon className="w-8 md:w-10 h-8 md:h-10 text-white" />
              </motion.div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;