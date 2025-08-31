"use client";

import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

const Toast = ({
  isVisible,
  type,
  title,
  message,
  onClose,
}: {
  isVisible: boolean;
  type: "success" | "error";
  title: string;
  message: string;
  onClose: () => void;
}) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const Icon = type === "success" ? CheckCircle : AlertCircle;

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : { x: 400, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="bg-white rounded-lg shadow-2xl p-4 min-w-80 border border-gray-200">
        <div className="flex items-center">
          <div
            className={`w-8 h-8 ${bgColor} rounded-full flex items-center justify-center mr-3`}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">{title}</div>
            <div className="text-sm text-gray-600">{message}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Toast;
