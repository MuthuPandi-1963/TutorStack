"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FaPlay } from "react-icons/fa";

const courses = [
  {
    title: "Full-Stack Web Development",
    desc: "Learn MERN stack with hands-on projects and real-world apps.",
    thumbnail: "/mern.jpg",
  },
  {
    title: "Python for Data Science",
    desc: "Master Python, Pandas, and Machine Learning fundamentals.",
    thumbnail: "/python.jpg",
  },
  {
    title: "Java - beginners to Advanced Level ",
    desc: "Master all Java fundamentals with DSA Concepts Also",
    thumbnail: "/java.jpg",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore Our <span className="text-purple-400">Courses</span>
        </h2>
        <p className=" max-w-2xl mx-auto mb-12">
          Learn by watching, practicing, and building real projects with our video-first learning experience.
        </p>

        {/* Course Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="hover:bg-gradient-to-b pt-0 hover:from-purple-300 hover:to-purple-500 transition rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative group">
                {/* Course Thumbnail */}
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full  object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-purple-500 p-4 rounded-full text-white shadow-lg hover:bg-purple-600 transition">
                    <FaPlay />
                  </button>
                </div>
              </div>
              <CardContent className="p-6 text-left space-y-2">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm ">{course.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

