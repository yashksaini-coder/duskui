"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export default function template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      exit={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
