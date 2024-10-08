import styles from "./style.module.scss";
import Rounded from "../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "../common/Magnetic/index";
import { Link } from "react-router-dom";
// import SvgPathComponent from "../svgPath/SvgPathComponent";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          {/* <div className="absolute mt-36">
            <SvgPathComponent />
          </div> */}
          <span>
            <div className={styles.imageContainer}>
              <img
                alt="background"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <h2>Let's work</h2>
          </span>
          <h2>together</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Link to="/contact-page">
              <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                <p>Get in touch</p>
              </Rounded>
            </Link>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <p>ziyabsyed1122@gmail.com</p>
          </Rounded>
          <Rounded>
            <p>+902 839 333 322</p>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>{new Date().getFullYear()} © Edition</p>
            </span>
            <span>
              <h3>Version</h3>
              <p>
                {new Date().toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                  timeZone: "Europe/Paris",
                })}{" "}
                GMT+2
              </p>
            </span>
          </div>
          <div>
            <span>
              <h3>Socials</h3>
              <Magnetic>
                <p>Fiver</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>UpWork</p>
            </Magnetic>
            <Magnetic>
              <p>Skype</p>
            </Magnetic>
            <Magnetic>
              <p>Linkedin</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
