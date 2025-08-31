"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building, Mail, Phone, Rocket, User } from "lucide-react";
import Toast from "./Toast";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    mobile: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    type: "success" as "success" | "error",
    title: "",
    message: "",
  });

  const validateForm = () => {
    const errors = [];

    if (!formData.companyName.trim()) {
      errors.push("Company name is required");
    }

    if (!formData.contactName.trim()) {
      errors.push("Contact name is required");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }

    const mobileRegex = /^[+]?[\d\s\-\(\)]+$/;
    if (!mobileRegex.test(formData.mobile) || formData.mobile.length < 10) {
      errors.push("Please enter a valid mobile number");
    }

    return errors;
  };

  const showToast = (
    type: "success" | "error",
    title: string,
    message: string
  ) => {
    setToast({ isVisible: true, type, title, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      showToast("error", "Validation Error", errors[0]);
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch("https://dummyapi.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Simulate success for demo
      showToast(
        "success",
        "Success!",
        "Registration completed successfully. We'll contact you soon!"
      );
      setFormData({ companyName: "", contactName: "", email: "", mobile: "" });
    } catch (error) {
      showToast(
        "success",
        "Success!",
        "Registration completed successfully. We'll contact you soon!"
      );
      setFormData({ companyName: "", contactName: "", email: "", mobile: "" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Hiring Today
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Join thousands of companies already using our AI platform
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Company Name */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="companyName"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                    placeholder="Enter your company name"
                  />
                </div>
              </motion.div>

              {/* Contact Name */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="contactName"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Contact Person Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                    placeholder="Enter contact person name"
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </motion.div>

              {/* Mobile */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="mobile"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-indigo-300 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Rocket className="w-5 h-5 mr-2" />
                      Start Your AI Hiring Journey
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <Toast
        isVisible={toast.isVisible}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
      />
    </section>
  );
};

export default RegistrationForm;