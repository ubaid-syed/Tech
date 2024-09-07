import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { opacity, slideUp } from "./anim";

const words = [
  "Welcome",
  "to",
  "Web",
  "Agency",
  "this",
  "is",
  "Mahtab",
  "Tech",
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateDimensions() {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    }

    updateDimensions(); // Set initial dimensions
    window.addEventListener("resize", updateDimensions); // Update dimensions on resize

    return () => {
      window.removeEventListener("resize", updateDimensions); // Clean up on component unmount
    };
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(
      () => {
        setIndex((prevIndex) => prevIndex + 1);
      },
      index === 0 ? 1000 : 150
    );

    return () => clearTimeout(timeout); // Clean up timeout on component unmount
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            <span></span>
            {words[index]}
          </motion.p>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit" />
          </svg>
        </>
      )}
    </motion.div>
  );
}
