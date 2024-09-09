// import { useState, useEffect } from "react";

// const useMousePosition = () => {
//   const [mousePosition, setMousePosition] = useState({ x: null, y: null });

//   const updateMousePosition = (e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", updateMousePosition);

//     return () => window.removeEventListener("mousemove", updateMousePosition);
//   }, []);

//   return mousePosition;
// };

// export default useMousePosition;

import { useState, useEffect } from "react";

const useMousePosition = (isActive) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e) => {
    if (isActive) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    if (isActive) {
      window.addEventListener("mousemove", updateMousePosition);
    } else {
      setMousePosition({ x: null, y: null });
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [isActive]);

  return mousePosition;
};

export default useMousePosition;
