"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FaChalkboardTeacher, FaCode, FaCertificate, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher className="text-purple-500 text-3xl" />,
    title: "Expert Tutors",
    desc: "Learn from industry experts with real-world experience.",
  },
  {
    icon: <FaCode className="text-purple-500 text-3xl" />,
    title: "Hands-on Coding",
    desc: "Practice coding with live examples and interactive projects.",
  },
  {
    icon: <FaCertificate className="text-purple-500 text-3xl" />,
    title: "Certification",
    desc: "Earn certificates to showcase your skills and achievements.",
  },
  {
    icon: <FaUsers className="text-purple-500 text-3xl" />,
    title: "Community Support",
    desc: "Join a vibrant community of learners and mentors.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative min-h-fit py-20 px-6 bg-gradient-to-b  ">
         <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 bg-purple-900/30 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/20 blur-[150px] rounded-full"></div>
              </div>
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose <span className="text-purple-400">Tutor Stack</span>?
        </h2>
        <p className="text-gray-800 max-w-2xl mx-auto mb-12">
          Our platform empowers you to learn coding effectively with structured lessons, expert guidance, and real-world projects.
        </p>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className=" border hover:border-purple-500 transition rounded-2xl shadow-lg"
            >
              <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                {feature.icon}
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm ">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
