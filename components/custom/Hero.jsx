"use client";

import { Button } from "@/components/ui/button";
import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 mt-30 sm:mt-10 overflow-clip">
      
      {/* Background abstract waves or gradients */}
     

      {/* Main content */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white"
      >
        Smarter Learning <br />
        With <span className="text-purple-400">Tutor Stack</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-gray-300 mb-8"
      >
        Learn coding with live mentors, interactive projects, and real-world challenges. 
        Empower your future with AI-driven education.
      </motion.p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-6 py-5">
          Get Started Free <FiArrowRight className="" />
        </Button>
        <Button
        //   variant="outline"
          className="px-8 py-5 rounded-lg hover:bg-purple-700 cursor-pointer"
        >
          Enroll Now 🔖
        </Button>
      </div>

      {/* Feature icons row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 text-sm font-medium">
        {[
          { icon: <FiPlayCircle size={28} />, label: "Live Coding Sessions" },
          { icon: <FiPlayCircle size={28} />, label: "Build Real Projects" },
          { icon: <FiPlayCircle size={28} />, label: "Earn Certificates" },
          { icon: <FiPlayCircle size={28} />, label: "Community Support" },
        ].map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-3 bg-white/5 p-6 rounded-2xl backdrop-blur-sm shadow-md hover:shadow-lg transition"
          >
            <div className="text-purple-400">{f.icon}</div>
            <span className="text-white">{f.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
