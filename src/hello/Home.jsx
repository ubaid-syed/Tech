import React, { useState } from "react";
import Project from "./component/Project/Project";
import Modal from "./component/Modal/Modal";
import styles from "./page.module.css";

const projects = [
  {
    title: "C2 Montreal",
    src: "../assets/Sour Green Apple 3D.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "../assets/Sour Green Apple 3D.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "../assets/Sour Green Apple 3D.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "../assets/Sour Green Apple 3D.png",
    color: "#706D63",
  },
];

const Home = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className={styles.mainss}>
      <div className={styles.body}>
        {projects.map((project, index) => (
          <Project
            index={index}
            title={project.title}
            setModal={setModal}
            key={index}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default Home;
