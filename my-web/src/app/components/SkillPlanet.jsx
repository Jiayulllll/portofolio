import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SkillPlanet = ({
  name,
  image,
  size,
  orbitDuration,
  orbitRadiusX,
  orbitRadiusY,
}) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const time = (currentTime / 1000) % orbitDuration; // time in seconds within the duration of one orbit
      const angle = (time / orbitDuration) * 2 * Math.PI; // angle in radians

      const x = orbitRadiusX * Math.cos(angle); // x position
      const y = orbitRadiusY * Math.sin(angle); // y position
      const scale = 1 + 0.2 * Math.sin(angle); // scale varies from 0.8 to 1.2

      setStyle({
        translateX: x - size / 2, // Centering the image
        translateY: y - size / 2,
        scale: scale,
      });
    }, 1000 / 60); // update 60 times per second

    return () => clearInterval(interval);
  }, [orbitDuration, orbitRadiusX, orbitRadiusY, size]);

  const fontSize = 14 * style.scale; // Adjust font size based on scale

  return (
    <motion.div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: size,
        height: size + 20, // Increase height to accommodate text
        borderRadius: "50%",
        ...style,
      }}
    >
      <img
        src={image}
        alt="skill"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
        }}
      />
      <span
        style={{
          display: "block",
          textAlign: "center",
          color: "white",
          fontSize: `${fontSize}px`, // Dynamic font size
          marginTop: "4px",
        }}
      >
        {name}
      </span>
    </motion.div>
  );
};

export default SkillPlanet;
