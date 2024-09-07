// import React from "react";
// import videoMain from "../../assets/significo_main.mp4";

// const Video = () => {
//   return (
//     <div
//       style={{ "--clip": "100%" }}
//       className="vid_cont w-full h-screen absolute top-0 left-0 z-20"
//     >
//       <video
//         src={videoMain}
//         autoPlay
//         loop
//         muted
//         className="w-full h-full object-cover object-center"
//       ></video>
//     </div>
//   );
// };

// export default Video;
// import React, { useRef, useEffect, Suspense, lazy } from "react";

// // Lazy load the Index component
// const Index = lazy(() => import("../Scene/Index"));

// const Video = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas?.getContext("2d");

//     if (canvas && context) {
//       // Set the canvas dimensions
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       // Example drawing: Fill the canvas with a color
//       context.fillStyle = "#000"; // Background color
//       context.fillRect(0, 0, canvas.width, canvas.height);

//       // Example: Draw a rectangle
//       context.fillStyle = "#FF0000";
//       context.fillRect(50, 50, 200, 100);

//       // Handle window resize
//       const handleResize = () => {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         context.fillStyle = "#000";
//         context.fillRect(0, 0, canvas.width, canvas.height);
//         context.fillStyle = "#FF0000";
//         context.fillRect(50, 50, 200, 100);
//       };

//       window.addEventListener("resize", handleResize);

//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }
//   }, []);

//   return (
//     <div
//       style={{ "--clip": "100%" }}
//       className="vid_cont w-full h-screen absolute top-0 left-0 z-20"
//     >
//       {/* Uncomment the canvas if needed */}
//       {/* <canvas ref={canvasRef} className="w-full h-full"></canvas> */}

//       {/* Lazy load the Index component */}
//       <div className="flex h-[100vh] bg-black">
//         <Suspense fallback={<div>Loading...</div>}>
//           <Index />
//         </Suspense>
//       </div>
//     </div>
//   );
// };

// export default Video;

import React, { Suspense, lazy } from "react";
const Scene = lazy(() => import("../Scene/Index"));
const Video = () => {
  return (
    <div
      style={{ "--clip": "100%" }}
      className="vid_cont w-full h-screen absolute top-0 left-0 z-20"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Scene />
      </Suspense>
    </div>
  );
};

export default Video;
