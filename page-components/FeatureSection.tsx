"use client";

import { ArrowRight, Brain, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Lightning Fast Hiring",
      description:
        "Get interview-ready candidates in just 22 hours. Our AI processes thousands of profiles instantly.",
      highlight: "22 Hour Guarantee",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "AI-Ranked Candidates",
      description:
        "SARA AI ranks candidates using advanced algorithms, ensuring perfect job-skill alignment.",
      highlight: "98% Match Accuracy",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: ShieldCheck,
      title: "Interview-Ready Talent",
      description:
        "Pre-screened professionals ready for immediate interviews with detailed skill assessments.",
      highlight: "Verified Profiles",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Hire22.ai?
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Powered by advanced AI for superior hiring outcomes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className={`w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <feature.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </motion.div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
              <motion.div
                className="flex items-center text-sm text-indigo-600 font-medium"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span>{feature.highlight}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;