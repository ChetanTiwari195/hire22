"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const hrTools = [
    { name: "HR Checklists", href: "#" },
    { name: "HR Policies", href: "#" },
    { name: "HR Calculators", href: "#" },
    { name: "Job Descriptions", href: "#" },
    { name: "HR Frameworks", href: "#" },
    { name: "HR Email Playbook", href: "#" },
    { name: "Performance Review", href: "#" },
    { name: "Interview Questions", href: "#" },
  ];

  const infoLinks = [
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Sitemap", href: "#" },
    { name: "Anonymous Policy", href: "#" },
  ];

  const candidateLinks = [
    { name: "How it works", href: "#" },
    { name: "Register to Hire", href: "#" },
  ];

  const employerLinks = [
    { name: "How it works for Employers", href: "#" },
    { name: "SARA AI Recruiter", href: "#" },
  ];

  return (
    <footer className="bg-white text-gray-600 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            About Hire22
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600">
            India's first anonymous job connect platform for mid and senior
            professionals. Discover secure, confidential, and fast connections
            with top employers without sharing your contact details until you
            accept JobCoNCT.
          </p>
        </motion.div>

        {/* HR Tools Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <span className="font-semibold text-gray-800">HR Tools:</span>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {hrTools.map((tool, index) => (
                <span key={index}>
                  <a
                    href={tool.href}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    {tool.name}
                  </a>
                  {index < hrTools.length - 1 && (
                    <span className="mx-2">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Need Help */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Need Help?
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:support@hire22.ai"
                className="block text-blue-500"
              >
                support@hire22.ai
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 888 45 333 45</span>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Information
            </h3>
            <ul className="space-y-2">
              {infoLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Candidate Zone */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Candidate Zone
            </h3>
            <ul className="space-y-2">
              {candidateLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 mt-4">
              <img src="googleplay.svg" alt="Google Play" className="h-8" />
              <img src="apple.svg" alt="App Store" className="h-8" />
            </div>
          </div>

          {/* Employer Zone */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Employer Zone
            </h3>
            <ul className="space-y-2">
              {employerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-200 pt-8 text-center text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {new Date().getFullYear()} Hire22.ai | All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
