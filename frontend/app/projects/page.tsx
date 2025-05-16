'use client'; // This component uses client-side features (filtering)

import { useState } from 'react';
import Image from 'next/image';

// Project data
const projects = [
  {
    id: 1,
    title: "KaruMarket E-commerce",
    description: "A student marketplace platform connecting buyers and sellers within the university.",
    category: "web",
    image: "/static/images/projects/e-commerce.jpg",
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Smart Attendance",
    description: "Android app using facial recognition for automated class attendance.",
    category: "mobile",
    image: "/static/images/projects/attendance.jpg",
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "KaruBot Assistant",
    description: "AI-powered chatbot answering student queries about university services.",
    category: "ai",
    image: "/static/images/projects/chatbot.jpg",
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "Smart Farming System",
    description: "IoT solution monitoring soil conditions and automating irrigation.",
    category: "iot",
    image: "/static/images/projects/smart-farm.jpg",
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 5,
    title: "Student Portfolio Builder",
    description: "Web app helping students create professional portfolios quickly.",
    category: "web",
    image: "/static/images/projects/portfolio.jpg",
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 6,
    title: "Digital Library Access",
    description: "Mobile app for browsing and reserving university library resources.",
    category: "mobile",
    image: "/static/images/projects/library.jpg",
    demoLink: "#",
    codeLink: "#"
  }
];

// Category labels
const categoryLabels = {
  web: "Web Development",
  mobile: "Mobile App",
  ai: "AI/ML",
  iot: "IoT"
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main>
      {/* Projects Hero Section */}
      <section className="relative bg-green-500 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Student Projects</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Showcasing innovative solutions created by Karatina University students
          </p>
        </div>
      </section>

      {/* Projects Container */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === "all" 
                  ? "bg-green-500 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter("web")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === "web" 
                  ? "bg-green-500 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveFilter("mobile")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === "mobile" 
                  ? "bg-green-500 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Mobile Apps
            </button>
            <button
              onClick={() => setActiveFilter("ai")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === "ai" 
                  ? "bg-green-500 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              AI/ML
            </button>
            <button
              onClick={() => setActiveFilter("iot")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === "iot" 
                  ? "bg-green-500 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              IoT
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Project Image */}
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-amber-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {categoryLabels[project.category]}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center text-green-500 hover:text-green-600 font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="flex items-center text-gray-700 hover:text-gray-900 font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}