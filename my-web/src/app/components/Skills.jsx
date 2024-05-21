"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SkillPlanet from "./SkillPlanet";

const Skills = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseRadiusX = dimensions.width / 5.7;
  const baseRadiusY = dimensions.height / 5.7;

  const skillsData = [
    {
      name: "Java",
      image: "/images/java.png",
      size: 50,
      orbitDuration: 10,
      orbitRadiusX: baseRadiusX,
      orbitRadiusY: baseRadiusY * 0.67,
    },
    {
      name: "Python",
      image: "/images/python.png",
      size: 60,
      orbitDuration: 12,
      orbitRadiusX: baseRadiusX,
      orbitRadiusY: baseRadiusY * 0.67,
    },
    {
      name: "HTML",
      image: "/images/html.png",
      size: 50,
      orbitDuration: 14,
      orbitRadiusX: baseRadiusX * 1.2,
      orbitRadiusY: baseRadiusY * 0.87,
    },

    {
      name: "CSS",
      image: "/images/css.png",
      size: 55,
      orbitDuration: 16,
      orbitRadiusX: baseRadiusX * 1.2,
      orbitRadiusY: baseRadiusY * 0.87,
    },
    {
      name: "Javascript",
      image: "/images/javascript.png",
      size: 55,
      orbitDuration: 18,
      orbitRadiusX: baseRadiusX * 1.4,
      orbitRadiusY: baseRadiusY * 1.07,
    },
    {
      name: "React",
      image: "/images/react.png",
      size: 55,
      orbitDuration: 20,
      orbitRadiusX: baseRadiusX * 1.4,
      orbitRadiusY: baseRadiusY * 1.07,
    },
    {
      name: "Node.js",
      image: "/images/nodejs.png",
      size: 55,
      orbitDuration: 22,
      orbitRadiusX: baseRadiusX * 1.6,
      orbitRadiusY: baseRadiusY * 1.27,
    },
    {
      name: "Next.js",
      image: "/images/nextjs.png",
      size: 55,
      orbitDuration: 24,
      orbitRadiusX: baseRadiusX * 1.6,
      orbitRadiusY: baseRadiusY * 1.27,
    },

    {
      name: "SQL",
      image: "/images/sql.png",
      size: 55,
      orbitDuration: 26,
      orbitRadiusX: baseRadiusX * 1.8,
      orbitRadiusY: baseRadiusY * 1.47,
    },
    {
      name: "Git",
      image: "/images/git.png",
      size: 55,
      orbitDuration: 28,
      orbitRadiusX: baseRadiusX * 1.8,
      orbitRadiusY: baseRadiusY * 1.47,
    },
    {
      name: "Github",
      image: "/images/github.png",
      size: 55,
      orbitDuration: 30,
      orbitRadiusX: baseRadiusX * 2,
      orbitRadiusY: baseRadiusY * 1.67,
    },
    {
      name: "AWS",
      image: "/images/aws.png",
      size: 55,
      orbitDuration: 32,
      orbitRadiusX: baseRadiusX * 2,
      orbitRadiusY: baseRadiusY * 1.67,
    },
    {
      name: "Docker",
      image: "/images/docker.png",
      size: 55,
      orbitDuration: 34,
      orbitRadiusX: baseRadiusX * 2.2,
      orbitRadiusY: baseRadiusY * 1.87,
    },
    {
      name: "Kubernetes",
      image: "/images/kubernetes.png",
      size: 55,
      orbitDuration: 38,
      orbitRadiusX: baseRadiusX * 2.2,
      orbitRadiusY: baseRadiusY * 1.87,
    },
  ];

  const containerVariants = {
    hidden: {
      scale: 0.95,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 10,
        when: "beforeChildren",
        staggerChildren: 6,
      },
    },
  };

  return (
    <motion.section
      id="skills"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Skills
      </h2>
      <div style={{ ...styles.solarSystem, height: dimensions.height }}>
        <div
          className="solar-system-container"
          style={{ ...styles.solarSystemContainer, height: dimensions.height }}
        >
          <img src="/images/Full-stack.png" alt="Sun" style={styles.sunImage} />
        </div>
        <svg width="100%" height="100%" style={styles.svgOverlay}>
          {skillsData.map((skill, index) => (
            <ellipse
              key={index}
              cx="50%"
              cy="50%"
              rx={skill.orbitRadiusX}
              ry={skill.orbitRadiusY}
              style={styles.orbitPath}
            />
          ))}
        </svg>
        {skillsData.map((skill, index) => (
          <SkillPlanet
            key={index}
            name={skill.name}
            image={skill.image}
            size={skill.size}
            orbitDuration={skill.orbitDuration}
            orbitRadiusX={skill.orbitRadiusX}
            orbitRadiusY={skill.orbitRadiusY}
          />
        ))}
      </div>
    </motion.section>
  );
};

const styles = {
  solarSystem: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#00000000",
  },
  solarSystemContainer: {
    position: "relative",
    width: "100vw",
    overflow: "hidden",
    background: "transparent",
  },
  sunImage: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100px",
    height: "100px",
    transform: "translate(-50%, -50%)",
  },
  svgOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  orbitPath: {
    fill: "none",
    stroke: "white",
    strokeWidth: 1,
  },
};

export default Skills;
