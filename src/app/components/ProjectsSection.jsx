"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A personal portfolio built with React, showcasing my projects, skills, and contact form.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/er-vivekkhedkar/portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Sikhley - Course Website",
    description: "Developed using React, Next.js, TypeScript, and Tailwind CSS. Emphasized clean, responsive UI for an intuitive learning experience.",
    image: "/images/projects/lmsp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShivamPal7/sikhley",
    previewUrl: "https://sikhley.vercel.app",
  },
  {
    id: 3,
    title: "Bg-Removal SaaS",
    description: "Built an AI-powered background removal tool with authentication, payment integration, and both credit-based and free-tier access models.",
    image: "/images/projects/bgremoval.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/er-vivekkhedkar/bgremoval-pro",
    previewUrl: "https://bgremoval-pro.vercel.app",
  },
  {
    id: 4,
    title: "AI YouTube Summarizer",
    description: "Automated AI-based summaries of YouTube videos using natural language processing to deliver concise content understanding.",
    image: "/images/projects/yt.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/er-vivekkhedkar/YT-Summarizer",
    previewUrl: "https://youtubesummarizer.vercel.app",
  },
  {
    id: 5,
    title: "MetaGame – Animated Landing Page",
    description: "Designed a visually immersive, dynamic landing page with rich animations to enhance user engagement.",
    image: "/images/projects/metagame.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/er-vivekkhedkar/Metagame",
    previewUrl: "https://metagame.vercel.app",
  },
  {
    id: 6,
    title: "Podcast AI Generator",
    description: "Created an AI tool to convert scripts into studio-quality podcasts — easy and fast creation, no experience needed.",
    image: "/images/projects/podcast.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/er-vivekkhedkar/PodcastAI",
    previewUrl: "https://podcastaii.vercel.app",
  },
  {
    id: 7,
    title: "Mauli Electric Bike",
    description: "A modern landing page for an electric bike brand, featuring sleek design and product showcases.",
    image: "/images/projects/mauliebike.png",
    tag: ["All", "Landing Page"],
    gitUrl: "/",
    previewUrl: "https://www.maulielectricbike.com/",
  },
   {
    id: 8,
    title: "Team Octane Racing",
    description: "High-energy racing team website with dynamic visuals and team information.",
    image: "/images/projects/teamoctane.png",
    tag: ["All", "Landing Page"],
    gitUrl: "/",
    previewUrl: "https://www.teamoctaneracing.in/",
  },
   {
    id: 9,
    title: "Swartaal Music Academy",
    description: "Elegant music academy website highlighting courses, mentors, and events.",
    image: "/images/projects/swartal.png",
    tag: ["All", "Landing Page"],
    gitUrl: "/",
    previewUrl: "https://swartaalmusicacademy.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setVisibleProjects(6);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Landing Page"
          isSelected={tag === "Landing Page"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-4 mt-8">
        {visibleProjects < filteredProjects.length && (
          <motion.button
            onClick={() => setVisibleProjects((prev) => prev + 6)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white font-semibold shadow-lg shadow-primary-500/50"
          >
            Load More
          </motion.button>
        )}
        {visibleProjects > 6 && (
          <motion.button
            onClick={() => setVisibleProjects(6)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 rounded-full bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold shadow-lg shadow-white/20"
          >
            Show Less
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
