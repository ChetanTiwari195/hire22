"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is CoNCT work?",
      answer:
        "CoNCT is our AI-powered connection system that matches employers with the right candidates based on multiple factors including skills, experience, and preferences.",
    },
    {
      question: "How does Job CoNCT work?",
      answer:
        "Job CoNCT analyzes your job requirements and matches them with candidate profiles using our advanced AI algorithms. It ensures precise matching while maintaining candidate anonymity until mutual interest is established.",
    },
    {
      question: "Why Job CoNCT?",
      answer:
        "Job CoNCT provides efficient, accurate matching while protecting candidate privacy. It saves time and resources by connecting you only with highly relevant candidates.",
    },
    {
      question: "What is SARA AI?",
      answer:
        "SARA AI is our Smart Automated Recruitment Assistant that helps screen candidates, schedule interviews, and provide insights during the hiring process.",
    },
    {
      question: "What is Super Profile?",
      answer:
        "Super Profile is an enhanced candidate profile that includes AI-verified skills, assessment scores, and detailed work history for better matching accuracy.",
    },
    {
      question: "How does the JoinX Score work?",
      answer:
        "JoinX Score is our proprietary scoring system that evaluates the match between a job posting and a candidate's profile, considering multiple parameters for optimal hiring outcomes.",
    },
    {
      question: "How many credits do I get when I register?",
      answer:
        "New employers receive 50 complimentary credits upon registration, which can be used for various hiring activities on the platform.",
    },
    {
      question: "Can I Create a job CoNCT without using credits?",
      answer:
        "While basic job postings are free, using the CoNCT feature requires credits to ensure quality matches and serious engagement.",
    },
    {
      question: "How can I monitor my credit usage?",
      answer:
        "You can track your credit usage in real-time through your employer dashboard, which shows detailed usage history and remaining balance.",
    },
    {
      question: "What should I do once my trial credits run out?",
      answer:
        "Once trial credits are exhausted, you can purchase additional credits through our flexible pricing plans tailored to your hiring needs.",
    },
    {
      question: "Are there any hidden costs with Hire22.ai?",
      answer:
        "No, Hire22.ai maintains complete transparency in pricing. All costs are clearly displayed, and you only pay for the services you use.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Detailed Employer FAQ About Hire22
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our AI-powered hiring
            platform
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
