import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./style.module.scss";

gsap.registerPlugin(ScrollTrigger);

const slider1 = [
  {
    color: "#e3e5e7",
    src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
  },
  {
    color: "#d6d7dc",
    src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
  },
  {
    color: "#e3e3e3",
    src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
  },
  {
    color: "#21242b",
    src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
  },
  {
    color: "#e5e0e1",
    src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
  },
  {
    color: "#d7d4cf",
    src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
  },
  {
    color: "#e1dad6",
    src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
  },
];

export default function Slider() {
  const containerRef = useRef(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const slider1Element = slider1Ref.current;
    const slider2Element = slider2Ref.current;
    const circleElement = circleRef.current;

    gsap.fromTo(
      slider1Element,
      { x: 0 },
      {
        x: 150,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 100%",
          end: "bottom top",
          scrub: 2, // Adjust scrub value for smoothness
        },
      }
    );

    gsap.fromTo(
      slider2Element,
      { x: 0 },
      {
        x: -150,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 2, // Adjust scrub value for smoothness
        },
      }
    );

    gsap.fromTo(
      circleElement,
      { height: 30 },
      {
        height: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 2, // Adjust scrub value for smoothness
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className={styles.slidingImages}>
      <div ref={slider1Ref} className={styles.slider}>
        {slider1.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <img
                alt="image"
                src={`${project.src}`}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
      <div ref={slider2Ref} className={styles.slider}>
        {slider2.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <img
                alt="image"
                src={`${project.src}`}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
      <div ref={circleRef} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
