"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "Responsive portfolio website using next.js, Tailwind and framer motion, Showcasing my expertise through skill exploration and project highlights.",
    image: "/images/projects/1.png",
    tag: ["All", "Applications"],
    gitUrl: "https://github.com/Jiayulllll/portofolio",
    previewUrl: "https://portofolio-lovat-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "Food Order Website",
    description:
      "Food oder website, finished the front-end part, working on the back-end part",
    image: "/images/projects/2.png",
    tag: ["All", "Applications"],
    gitUrl: "https://github.com/Jiayulllll/food-app",
    previewUrl: "https://food-app-nine-blue.vercel.app/",
  },
  {
    id: 3,
    title: "Clustering of interval time series",
    description:
      "Project aimed at providing different methods to compute variables in clustering analysis, mainly focusing on Point-to-Point comparison, Time domain method and Wavelet analysis.",
    image: "/images/projects/cluster.png",
    tag: ["All", "Data"],
    gitUrl: "https://www.overleaf.com/read/xsjhjfgrkyyn#8797d7",
    previewUrl: "https://www.overleaf.com/read/xsjhjfgrkyyn#8797d7",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
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
          name="Applications"
          isSelected={tag === "Applications"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
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
