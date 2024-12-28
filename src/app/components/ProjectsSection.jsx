"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Sikhley: Course Website",
    description: "Built a modern course website using React, Next.js, TypeScript, and Tailwind CSS, focusing on a user-friendly interface.",
    image: "/images/projects/lmsp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShivamPal7/sikhley",
    previewUrl: "https://sikhley.vercel.app",
  },
  {
    id: 3,
    title: "Study Share",
    description: "Created an interactive website that allows users to easily access and share educational notes, enhancing collaborative learning and providing a seamless experience for students.",
    image: "/images/projects/ss.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/er-vivekkhedkar/Study-Share",
    previewUrl: "https://studynotesshare.netlify.app",
  },
  {
    id: 4,
    title: "Moviez Search",
    description: "Movie Discovery Platform: Built a responsive movie search app that lets users explore movie details, including ratings, plot, and streaming options using the OMDB API.",
    image: "/images/projects/ms.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/er-vivekkhedkar/moviezsearch",
    previewUrl: "https://moviezsearch.vercel.app",
  },
  {
    id: 5,
    title: "City Weather",
    description: "The City Weather Website is a responsive app that provides real-time weather updates and forecasts for any city. With a focus on simplicity and accuracy, it delivers essential weather data in an easy-to-understand format for a seamless user experience." ,
    image: "/images/projects/ww.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/er-vivekkhedkar/city-weather",
    previewUrl: "https://city-weather-website.netlify.app/",
  },
  {
    id: 6,
    title: "cloud computing",
    description: "Cloud Computing Notes",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://cloudcomputingnotes.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
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
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
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
    </section>
  );
};

export default ProjectsSection;
