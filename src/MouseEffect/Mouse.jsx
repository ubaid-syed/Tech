// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import useMousePosition from "../utils/useMousePosition.js";
// import "./Mouse.css";

// export default function Mouse() {
//   const [isHovered, setIsHovered] = useState(false);
//   const { x, y } = useMousePosition();
//   const size = isHovered ? 300 : 40;

//   return (
//     <main className="mains">
//       <motion.div
//         className="mask"
//         animate={{
//           WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
//           WebkitMaskSize: `${size}px`,
//         }}
//         transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
//       >
//         <p
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           We are selectively skilled product designer with a strong focus on
//           producing high quality & impactful digital experiences. focus on
//           producing high quality & impactful digital experiences.
//         </p>
//       </motion.div>

//       <div className="body">
//         <p>
//           We're a global powerhouse of <span>creativity</span> and{" "}
//           <span>innovation</span>. We work with the best brands in the biz, and
//           we're not afraid to shake things up with our daring and unconventional
//           designs.
//         </p>
//       </div>
//     </main>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition.js";
import "./Mouse.css";

export default function Mouse() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition(isHovered); // Pass isHovered to enable mouse tracking only on hover
  const size = isHovered ? 300 : 40;

  return (
    <main className="mains">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          We are selectively skilled product designer with a strong focus on
          producing high quality & impactful digital experiences.
        </p>
      </motion.div>

      <div className="body">
        <p>
          We're a global powerhouse of <span>creativity</span> and{" "}
          <span>innovation</span>. We work with the best brands in the biz, and
          we're not afraid to shake things up with our daring and unconventional
          designs.
        </p>
      </div>
    </main>
  );
}
