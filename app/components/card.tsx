"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  className = "",
  icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`glass rounded-2xl p-6 hover-lift ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
            {icon}
          </div>
        )}
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      {description && (
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      )}
      {children}
    </motion.div>
  );
};
