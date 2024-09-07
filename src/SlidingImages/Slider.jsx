// // // // import { useRef } from "react";
// // // // import { useScroll, useTransform, motion } from "framer-motion";
// // // // import styles from "./style.module.scss";

// // // // const slider1 = [
// // // //   {
// // // //     color: "#e3e5e7",
// // // //     src: "c2.jpg",
// // // //   },
// // // //   {
// // // //     color: "#d6d7dc",
// // // //     src: "decimal.jpg",
// // // //   },
// // // //   {
// // // //     color: "#e3e3e3",
// // // //     src: "funny.jpg",
// // // //   },
// // // //   {
// // // //     color: "#21242b",
// // // //     src: "google.jpg",
// // // //   },
// // // // ];

// // // // const slider2 = [
// // // //   {
// // // //     color: "#d4e3ec",
// // // //     src: "maven.jpg",
// // // //   },
// // // //   {
// // // //     color: "#e5e0e1",
// // // //     src: "panda.jpg",
// // // //   },
// // // //   {
// // // //     color: "#d7d4cf",
// // // //     src: "powell.jpg",
// // // //   },
// // // //   {
// // // //     color: "#e1dad6",
// // // //     src: "wix.jpg",
// // // //   },
// // // // ];

// // // // export default function Slider() {
// // // //   const container = useRef(null);
// // // //   const { scrollYProgress } = useScroll({
// // // //     target: container,
// // // //     offset: ["start end", "end start"],
// // // //   });

// // // //   const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
// // // //   const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
// // // //   const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

// // // //   return (
// // // //     <div ref={container} className={styles.slidingImages}>
// // // //       <motion.div style={{ x: x1 }} className={styles.slider}>
// // // //         {slider1.map((project, index) => {
// // // //           return (
// // // //             <div
// // // //               key={index}
// // // //               className={styles.project}
// // // //               style={{ backgroundColor: project.color }}
// // // //             >
// // // //               <div className={styles.imageContainer}>
// // // //                 <img fill={true} alt={"image"} src={`/images/${project.src}`} />
// // // //               </div>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </motion.div>
// // // //       <motion.div style={{ x: x2 }} className={styles.slider}>
// // // //         {slider2.map((project, index) => {
// // // //           return (
// // // //             <div
// // // //               key={index}
// // // //               className={styles.project}
// // // //               style={{ backgroundColor: project.color }}
// // // //             >
// // // //               <div key={index} className={styles.imageContainer}>
// // // //                 <img fill={true} alt={"image"} src={`/images/${project.src}`} />
// // // //               </div>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </motion.div>
// // // //       <motion.div style={{ height }} className={styles.circleContainer}>
// // // //         <div className={styles.circle}></div>
// // // //       </motion.div>
// // // //     </div>
// // // //   );
// // // // }

// // // import { useRef } from "react";
// // // import { useScroll, useTransform, motion } from "framer-motion";
// // // import styles from "./style.module.scss";

// // // const slider1 = [
// // //   {
// // //     color: "#e3e5e7",
// // //     src: "c2.jpg",
// // //   },
// // //   {
// // //     color: "#d6d7dc",
// // //     src: "decimal.jpg",
// // //   },
// // //   {
// // //     color: "#e3e3e3",
// // //     src: "funny.jpg",
// // //   },
// // //   {
// // //     color: "#21242b",
// // //     src: "google.jpg",
// // //   },
// // // ];

// // // const slider2 = [
// // //   {
// // //     color: "#d4e3ec",
// // //     src: "maven.jpg",
// // //   },
// // //   {
// // //     color: "#e5e0e1",
// // //     src: "panda.jpg",
// // //   },
// // //   {
// // //     color: "#d7d4cf",
// // //     src: "powell.jpg",
// // //   },
// // //   {
// // //     color: "#e1dad6",
// // //     src: "wix.jpg",
// // //   },
// // // ];

// // // export default function Slider() {
// // //   const container = useRef(null);
// // //   const { scrollYProgress } = useScroll({
// // //     target: container,
// // //     offset: ["start end", "end start"],
// // //   });

// // //   const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
// // //   const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
// // //   const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

// // //   return (
// // //     <div ref={container} className={styles.slidingImages}>
// // //       <motion.div style={{ x: x1 }} className={styles.slider}>
// // //         {slider1.map((project, index) => (
// // //           <div
// // //             key={index}
// // //             className={styles.project}
// // //             style={{ backgroundColor: project.color }}
// // //           >
// // //             <div className={styles.imageContainer}>
// // //               <img
// // //                 alt="image"
// // //                 src={`/images/${project.src}`}
// // //                 className={styles.image}
// // //               />
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </motion.div>
// // //       <motion.div style={{ x: x2 }} className={styles.slider}>
// // //         {slider2.map((project, index) => (
// // //           <div
// // //             key={index}
// // //             className={styles.project}
// // //             style={{ backgroundColor: project.color }}
// // //           >
// // //             <div className={styles.imageContainer}>
// // //               <img
// // //                 alt="image"
// // //                 src={`/images/${project.src}`}
// // //                 className={styles.image}
// // //               />
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </motion.div>
// // //       <motion.div style={{ height }} className={styles.circleContainer}>
// // //         <div className={styles.circle}></div>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // }

// // import { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import ScrollTrigger from "gsap/ScrollTrigger";
// // import styles from "./style.module.scss";

// // gsap.registerPlugin(ScrollTrigger);

// // const slider1 = [
// //   {
// //     color: "#e3e5e7",
// //     src: "c2.jpg",
// //   },
// //   {
// //     color: "#d6d7dc",
// //     src: "decimal.jpg",
// //   },
// //   {
// //     color: "#e3e3e3",
// //     src: "funny.jpg",
// //   },
// //   {
// //     color: "#21242b",
// //     src: "google.jpg",
// //   },
// // ];

// // const slider2 = [
// //   {
// //     color: "#d4e3ec",
// //     src: "maven.jpg",
// //   },
// //   {
// //     color: "#e5e0e1",
// //     src: "panda.jpg",
// //   },
// //   {
// //     color: "#d7d4cf",
// //     src: "powell.jpg",
// //   },
// //   {
// //     color: "#e1dad6",
// //     src: "wix.jpg",
// //   },
// // ];

// // export default function Slider() {
// //   const containerRef = useRef(null);
// //   const slider1Ref = useRef(null);
// //   const slider2Ref = useRef(null);
// //   const circleRef = useRef(null);

// //   useEffect(() => {
// //     const container = containerRef.current;
// //     const slider1Element = slider1Ref.current;
// //     const slider2Element = slider2Ref.current;
// //     const circleElement = circleRef.current;

// //     gsap.fromTo(
// //       slider1Element,
// //       { x: 0 },
// //       {
// //         x: 150,
// //         scrollTrigger: {
// //           trigger: container,
// //           start: "top top",
// //           end: "bottom top",
// //           scrub: true,
// //         },
// //       }
// //     );

// //     gsap.fromTo(
// //       slider2Element,
// //       { x: 0 },
// //       {
// //         x: -150,
// //         scrollTrigger: {
// //           trigger: container,
// //           start: "top top",
// //           end: "bottom top",
// //           scrub: true,
// //         },
// //       }
// //     );

// //     gsap.fromTo(
// //       circleElement,
// //       { height: 50 },
// //       {
// //         height: 0,
// //         scrollTrigger: {
// //           trigger: container,
// //           start: "top top",
// //           end: "bottom top",
// //           scrub: true,
// //         },
// //       }
// //     );
// //   }, []);

// //   return (
// //     <div ref={containerRef} className={styles.slidingImages}>
// //       <div ref={slider1Ref} className={styles.slider}>
// //         {slider1.map((project, index) => (
// //           <div
// //             key={index}
// //             className={styles.project}
// //             style={{ backgroundColor: project.color }}
// //           >
// //             <div className={styles.imageContainer}>
// //               <img
// //                 alt="image"
// //                 src={`/images/${project.src}`}
// //                 className={styles.image}
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div ref={slider2Ref} className={styles.slider}>
// //         {slider2.map((project, index) => (
// //           <div
// //             key={index}
// //             className={styles.project}
// //             style={{ backgroundColor: project.color }}
// //           >
// //             <div className={styles.imageContainer}>
// //               <img
// //                 alt="image"
// //                 src={`/images/${project.src}`}
// //                 className={styles.image}
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div ref={circleRef} className={styles.circleContainer}>
// //         <div className={styles.circle}></div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import styles from "./style.module.scss";

// gsap.registerPlugin(ScrollTrigger);

// const slider1 = [
//   {
//     color: "#e3e5e7",
//     src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
//   },
//   {
//     color: "#d6d7dc",
//     src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
//   },
//   {
//     color: "#e3e3e3",
//     src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
//   },
//   {
//     color: "#21242b",
//     src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
//   },
// ];

// const slider2 = [
//   {
//     color: "#d4e3ec",
//     src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
//   },
//   {
//     color: "#e5e0e1",
//     src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
//   },
//   {
//     color: "#d7d4cf",
//     src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
//   },
//   {
//     color: "#e1dad6",
//     src: "https://independentoxford.com/wp-content/uploads/2020/06/website.jpg",
//   },
// ];

// export default function Slider() {
//   const containerRef = useRef(null);
//   const slider1Ref = useRef(null);
//   const slider2Ref = useRef(null);
//   const circleRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const slider1Element = slider1Ref.current;
//     const slider2Element = slider2Ref.current;
//     const circleElement = circleRef.current;

//     gsap.fromTo(
//       slider1Element,
//       { x: 0 },
//       {
//         x: 150,
//         ease: "none",
//         scrollTrigger: {
//           trigger: container,
//           start: "top 100%",
//           end: "bottom top",
//           markers: true,
//           scrub: 2, // Adjust scrub value for smoothness
//         },
//       }
//     );

//     gsap.fromTo(
//       slider2Element,
//       { x: 0 },
//       {
//         x: -150,
//         ease: "none",
//         scrollTrigger: {
//           trigger: container,
//           start: "top top",
//           end: "bottom top",
//           scrub: 2, // Adjust scrub value for smoothness
//         },
//       }
//     );

//     gsap.fromTo(
//       circleElement,
//       { height: 50 },
//       {
//         height: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: container,
//           start: "top top",
//           end: "bottom top",
//           scrub: 2, // Adjust scrub value for smoothness
//         },
//       }
//     );
//   }, []);

//   return (
//     <div ref={containerRef} className={styles.slidingImages}>
//       <div ref={slider1Ref} className={styles.slider}>
//         {slider1.map((project, index) => (
//           <div
//             key={index}
//             className={styles.project}
//             style={{ backgroundColor: project.color }}
//           >
//             <div className={styles.imageContainer}>
//               <img
//                 alt="image"
//                 src={`${project.src}`}
//                 className={styles.image}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div ref={slider2Ref} className={styles.slider}>
//         {slider2.map((project, index) => (
//           <div
//             key={index}
//             className={styles.project}
//             style={{ backgroundColor: project.color }}
//           >
//             <div className={styles.imageContainer}>
//               <img
//                 alt="image"
//                 src={`${project.src}`}
//                 className={styles.image}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div ref={circleRef} className={styles.circleContainer}>
//         <div className={styles.circle}></div>
//       </div>
//     </div>
//   );
// }

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
