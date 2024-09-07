// SvgPathComponent.js
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./SvgPathComponent.css"; // Make sure to import the CSS

gsap.registerPlugin(ScrollTrigger);

const SvgPathComponent = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const path = `M 10 100 Q ${event.clientX} ${event.clientY} 990 100`;

      gsap.to(pathRef.current, {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathRef.current, {
        attr: { d: "M 10 100 Q 500 100 990 100" },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
      });
    };

    const stringElement = document.getElementById("string");
    stringElement.addEventListener("mousemove", handleMouseMove);
    stringElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stringElement.removeEventListener("mousemove", handleMouseMove);
      stringElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div id="string">
      <svg width="1000" height="200">
        <path
          ref={pathRef}
          d="M 10 100 Q 500 100 990 100"
          stroke="white"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default SvgPathComponent;
