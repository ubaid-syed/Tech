import React, { useState, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import Section from "./Section";
import "./Services.css";

const Services = () => {
  const [activeId, setActiveId] = useState(0);
  const sectionRefs = useRef([]);

  const services = [
    { id: 0, name: "Web Design & Development" },
    { id: 1, name: "Digital Marketing" },
    { id: 2, name: "SEO Optimization" },
    { id: 3, name: "Content Creation" },
    { id: 4, name: "Brand Strategy" },
    { id: 5, name: "UI/UX Design" },
    { id: 6, name: "App Development" },
    { id: 7, name: "E-commerce Solutions" },
  ];

  const handleSectionClick = (id) => {
    if (sectionRefs.current[id]) {
      sectionRefs.current[id].scrollIntoView({
        behavior: "smooth",
        block: "nearest", // Ensures the section is fully visible
        inline: "nearest", // This can help align the section in horizontal scrolling
      });
      setActiveId(id);
    }
  };

  return (
    <div className="min-h-screen mt-14">
      <div className="flex justify-start gap-14 p-5">
        <div className="sticky top-40 w-[600px] h-screen mb-12 flex flex-col justify-center font-bold gap-5">
          <h1 className="text-4xl font-extralight font-serif text-[#191919] ml-14 mt-[43px]">
            Core services.
          </h1>
          <p className="text-base font-light font-serif text-[#191919] ml-[4.25vw]">
            We love building cohesive, consistent brands that speak to their
            demographic in a meaningful and beautiful way.
          </p>
          <div className="-ml-1 space-y-3">
            {services.map((service, index) => (
              <div key={service.id}>
                <p
                  className={`text-base font-light ml-16 transition-all duration-300 cursor-pointer flex items-center ${
                    activeId === service.id
                      ? "text-black font-semibold"
                      : "text-[#747373]"
                  } hover:text-black hover:font-semibold`}
                  onClick={() => handleSectionClick(service.id)}
                >
                  <span className="text-[#000000] font-medium font-mono">
                    {service.id + 1}
                  </span>
                  <span className="ml-2">{service.name}</span>
                  {activeId === service.id && (
                    <span className="ml-2">
                      <MdArrowOutward />
                    </span>
                  )}
                </p>
                {activeId === service.id && (
                  <div className="ml-16 border-b-2 border-black mt-2 animate-expand"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hori">
          {services.map((service) => (
            <div
              key={service.id}
              ref={(el) => (sectionRefs.current[service.id] = el)}
              className="section"
            >
              <Section
                heading={service.name}
                para1="Your online presence is key in today’s marketplace."
                para2="We produce custom designed, gorgeous web experiences for our clients."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

// import React, { useState, useRef } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import "./Services.css";
// import Section from "./Section";

// const Services = () => {
//   const [activeId, setActiveId] = useState("0"); // Default to the first section with ID "0"
//   const sectionRefs = useRef({});

//   const services = [
//     { id: "0", name: "Web design and development" },
//     { id: "1", name: "Digital marketing" },
//     { id: "2", name: "SEO Optimization" },
//     { id: "3", name: "Content Creation" },
//     { id: "4", name: "Brand Strategy" },
//     { id: "5", name: "UI/UX Design" },
//     { id: "6", name: "App Development" },
//     { id: "7", name: "E-commerce Solutions" },
//   ];

//   const handleSectionClick = (id) => {
//     if (sectionRefs.current[id]) {
//       sectionRefs.current[id].scrollIntoView({
//         behavior: "smooth",
//         block: "nearest", // Ensures the section is fully visible
//         inline: "nearest", // This can help align the section in horizontal scrolling
//       });
//       setActiveId(id);
//     }
//   };

//   return (
//     <div className="min-h-screen mt-14">
//       <div className="flex justify-start gap-14 p-5">
//         <div className="sticky top-40 w-[600px] h-screen mb-12 flex flex-col justify-center font-bold gap-5">
//           <h1 className="text-4xl font-extralight font-serif text-[#191919] ml-14 mt-[43px]">
//             Core services.
//           </h1>
//           <p className="text-base font-light font-serif text-[#191919] ml-[4.25vw]">
//             We love building cohesive, consistent brands that speak to their
//             demographic in a meaningful and beautiful way. Social images, web
//             presences, print collateral; absolutely!
//           </p>
//           <div className="-ml-1 space-y-3">
//             {services.map((service) => (
//               <div key={service.id}>
//                 <p
//                   className={`text-base font-light ml-16 transition-all duration-300 cursor-pointer flex items-center ${
//                     activeId === service.id
//                       ? "text-black font-semibold"
//                       : "text-[#747373]"
//                   } hover:text-black hover:font-semibold`}
//                   onClick={() => handleSectionClick(service.id)}
//                 >
//                   <span className="text-[#000000] font-medium font-mono">
//                     {parseInt(service.id) + 1}
//                   </span>
//                   <span className="ml-2">{service.name}</span>
//                   {activeId === service.id && (
//                     <span className="ml-2">
//                       <MdArrowOutward />
//                     </span>
//                   )}
//                 </p>
//                 {activeId === service.id && (
//                   <div className="ml-16 border-b-2 border-black mt-2 animate-expand"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex gap-4 w-[100%] overflow-hidden">
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               width: "100%",
//               height: "100vh",
//             }}
//           >
//             {services.map((service) => (
//               <div
//                 key={service.id}
//                 className="section"
//                 ref={(el) => (sectionRefs.current[service.id] = el)}
//                 style={{
//                   width: "100vw",
//                   height: "100vh",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                   padding: "20px",
//                   boxSizing: "border-box",
//                   background: "red",
//                 }}
//               >
//                 <Section
//                   heading={service.name}
//                   para1="Your online presence is key in today’s marketplace. Whether you are a non-profit, small company, startup, or large corporation – we would love to help you realize your goals."
//                   para2="We produce custom designed, gorgeous web experiences for our clients all while being cognizant of excellent usability and accessibility. We deliver a fully responsive, compliant website to you that you are sure to love."
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

// import React, { useState, useRef } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import "./Services.css";
// import Section from "./Section";

// const Services = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // Default to the first section
//   const sectionRefs = useRef([]);

//   const handleSectionClick = (index) => {
//     if (sectionRefs.current[index]) {
//       sectionRefs.current[index].scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <div className="min-h-screen mt-14">
//       <div className="flex justify-start gap-14 p-5">
//         <div className="sticky top-40 w-[600px] h-screen mb-12 flex flex-col justify-center font-bold gap-5">
//           <h1 className="text-4xl font-extralight font-serif text-[#191919] ml-14 mt-[43px]">
//             Core services.
//           </h1>
//           <p className="text-base font-light font-serif text-[#191919] ml-[4.25vw]">
//             We love building cohesive, consistent brands that speak to their
//             demographic in a meaningful and beautiful way. Social images, web
//             presences, print collateral; absolutely!
//           </p>
//           <div className="-ml-1 space-y-3">
//             {[
//               "Web design and development",
//               "Digital marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div key={index}>
//                 <p
//                   className={`text-base font-light ml-16 transition-all duration-300 cursor-pointer flex items-center ${
//                     activeIndex === index
//                       ? "text-black font-semibold"
//                       : "text-[#747373]"
//                   } hover:text-black hover:font-semibold`}
//                   onClick={() => handleSectionClick(index)}
//                 >
//                   <span className="text-[#000000] font-medium font-mono">
//                     {index + 1}
//                   </span>
//                   <span className="ml-2">{service}</span>
//                   {activeIndex === index && (
//                     <span className="ml-2">
//                       <MdArrowOutward />
//                     </span>
//                   )}
//                 </p>
//                 {activeIndex === index && (
//                   <div className="ml-16 border-b-2 border-black mt-2 animate-expand"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex gap-4 w-[100%] overflow-hidden">
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               width: "100%",
//               height: "100vh",
//             }}
//           >
//             {[
//               "Web Design & Development",
//               "Digital Marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="section"
//                 ref={(el) => (sectionRefs.current[index] = el)}
//                 style={{
//                   width: "100vw",
//                   height: "100vh",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                   padding: "20px",
//                   boxSizing: "border-box",
//                   background: "red",
//                 }}
//               >
//                 <Section
//                   heading={service}
//                   para1="Your online presence is key in today’s marketplace. Whether you are a non-profit, small company, startup, or large corporation – we would love to help you realize your goals."
//                   para2="We produce custom designed, gorgeous web experiences for our clients all while being cognizant of excellent usability and accessibility. We deliver a fully responsive, compliant website to you that you are sure to love."
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

// import React, { useState, useRef, useEffect } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
// import "./Services.css";
// import Section from "./Section";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const Services = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // Default to the first section
//   const containerRef = useRef(null);
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     const sections = gsap.utils.toArray(".section");

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         markers: true,
//         scrub: 0.5, // Adjust for smoothness
//         snap: 1 / (sections.length - 1),
//         end: () => `+=${containerRef.current.scrollWidth}`, // Ensure total scroll width
//         onSnapComplete: (e) => {
//           const index = Math.round(e.progress * (sections.length - 1));
//           setActiveIndex(index);
//         },
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const handleSectionClick = (index) => {
//     if (sectionRefs.current[index]) {
//       sectionRefs.current[index].scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <div className="min-h-screen mt-14" ref={containerRef}>
//       <div className="flex justify-start gap-14 p-5">
//         <div className="sticky top-40 w-[600px] h-screen mb-12 flex flex-col justify-center font-bold gap-5">
//           <h1 className="text-4xl font-extralight font-serif text-[#191919] ml-14 mt-[43px]">
//             Core services.
//           </h1>
//           <p className="text-base font-light font-serif text-[#191919] ml-[4.25vw]">
//             We love building cohesive, consistent brands that speak to their
//             demographic in a meaningful and beautiful way. Social images, web
//             presences, print collateral; absolutely!
//           </p>
//           <div className="-ml-1 space-y-3">
//             {[
//               "Web design and development",
//               "Digital marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div key={index}>
//                 <p
//                   className={`text-base font-light ml-16 transition-all duration-300 cursor-pointer flex items-center ${
//                     activeIndex === index
//                       ? "text-black font-semibold"
//                       : "text-[#747373]"
//                   } hover:text-black hover:font-semibold`}
//                   onClick={() => handleSectionClick(index)}
//                 >
//                   <span className="text-[#000000] font-medium font-mono">
//                     {index + 1}
//                   </span>
//                   <span className="ml-2">{service}</span>
//                   {activeIndex === index && (
//                     <span className="ml-2">
//                       <MdArrowOutward />
//                     </span>
//                   )}
//                 </p>
//                 {activeIndex === index && (
//                   <div className="ml-16 border-b-2 border-black mt-2 animate-expand"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex gap-4 w-[100%] overflow-hidden">
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               width: "100%",
//               height: "100vh",
//             }}
//           >
//             {[
//               "Web Design & Development",
//               "Digital Marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="section"
//                 ref={(el) => (sectionRefs.current[index] = el)}
//                 style={{
//                   width: "100vw",
//                   height: "100vh",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                   padding: "20px",
//                   boxSizing: "border-box",
//                 }}
//               >
//                 <Section
//                   heading={service}
//                   para1="Your online presence is key in today’s marketplace. Whether you are a non-profit, small company, startup, or large corporation – we would love to help you realize your goals."
//                   para2="We produce custom designed, gorgeous web experiences for our clients all while being cognizant of excellent usability and accessibility. We deliver a fully responsive, compliant website to you that you are sure to love."
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

// import React, { useState, useRef, useEffect } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
// import "./Services.css";
// import Section from "./Section";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const Services = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // Default to the first section
//   const containerRef = useRef(null);
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     const sections = gsap.utils.toArray(".section");

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         markers: true,
//         scrub: 0.5, // Adjust for smoothness
//         snap: 1 / (sections.length - 1),
//         end: () => `+=${containerRef.current.scrollWidth}`, // Ensure total scroll width
//         onSnapComplete: (e) => {
//           const index = Math.round(e.progress * (sections.length - 1));
//           setActiveIndex(index);
//         },
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const handleSectionClick = (index) => {
//     if (sectionRefs.current[index]) {
//       sectionRefs.current[index].scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <div className="min-h-screen mt-14" ref={containerRef}>
//       <div className="flex justify-start gap-14 p-5">
//         <div className="sticky top-40 w-[600px] h-screen mb-12 flex flex-col justify-center font-bold gap-5">
//           <h1 className="text-4xl font-extralight font-serif text-[#191919] ml-14 mt-[43px]">
//             Core services.
//           </h1>
//           <p className="text-base font-light font-serif text-[#191919] ml-[4.25vw]">
//             We love building cohesive, consistent brands that speak to their
//             demographic in a meaningful and beautiful way. Social images, web
//             presences, print collateral; absolutely!
//           </p>
//           <div className="flex flex-col bg-transparent-500 rounded-lg w-10 justify-center items-center gap-2 absolute top-80 left-3">
//             {Array.from({ length: 8 }, (_, index) => (
//               <span
//                 key={index}
//                 className={`rounded-full w-3 h-3 border-2 border-black cursor-pointer transition-colors duration-300 ${
//                   activeIndex === index ? "bg-black" : "bg-white"
//                 }`}
//                 onClick={() => handleSectionClick(index)}
//               ></span>
//             ))}
//           </div>
//           <div className="-ml-1 space-y-3">
//             {[
//               "Web design and development",
//               "Digital marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div key={index}>
//                 <p
//                   className={`text-base font-light ml-16 transition-all duration-300 cursor-pointer flex items-center ${
//                     activeIndex === index
//                       ? "text-black font-semibold"
//                       : "text-[#747373]"
//                   } hover:text-black hover:font-semibold`}
//                   onClick={() => handleSectionClick(index)}
//                 >
//                   <span className="text-[#000000] font-medium font-mono">
//                     {index + 1}
//                   </span>
//                   <span className="ml-2">{service}</span>
//                   {activeIndex === index && (
//                     <span className="ml-2">
//                       <MdArrowOutward />
//                     </span>
//                   )}
//                 </p>
//                 {activeIndex === index && (
//                   <div className="ml-16 border-b-2 border-black mt-2 animate-expand"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex gap-4 w-[100%] overflow-hidden">
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               width: "100%",
//               height: "100vh",
//             }}
//           >
//             {[
//               "Web Design & Development",
//               "Digital Marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="section"
//                 ref={(el) => (sectionRefs.current[index] = el)}
//                 style={{
//                   width: "100vw",
//                   height: "100vh",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                   padding: "20px",
//                   boxSizing: "border-box",
//                 }}
//               >
//                 <Section
//                   heading={service}
//                   para1="Your online presence is key in today’s marketplace. Whether you are a non-profit, small company, startup, or large corporation – we would love to help you realize your goals."
//                   para2="We produce custom designed, gorgeous web experiences for our clients all while being cognizant of excellent usability and accessibility. We deliver a fully responsive, compliant website to you that you are sure to love."
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

// import React, { useState, useRef, useEffect } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
// import "./Services.css";
// import Section from "./Section";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const Services = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // Default to the first section
//   const containerRef = useRef(null);
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     const sections = gsap.utils.toArray(".section");
//     console.error({ sections });

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         markers: true,
//         scrub: 0.5, // Adjust for smoothness
//         snap: 1 / (sections.length - 1),
//         end: () => `+=${containerRef.current.scrollWidth}`, // Ensure total scroll width
//         onchange: () => {
//           // console.error("onChange");
//         },
//         onSnapComplete: (e) => {
//           console.error("On Snap complete", e);
//           const index = Math.round(e.progress * (sections.length - 1));
//           console.error(index);

//           setActiveIndex(index);
//         },
//         onUpdate: (self) => {
//           // const   index = Math.round(self.progress * (sections.length - 1));
//           // setActiveIndex(index);
//           // console.error(index);
//           // alert(index);
//         },
//       },
//     });
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const getBackgroundColor = (index) => {
//     const colors = [
//       "bg-gradient-to-r from-red-100 via-yellow-100 to-pink-200",
//       "bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200",
//       "bg-gradient-to-r from-green-100 to-blue-200",
//       "bg-gradient-to-r from-yellow-100 to-red-200",
//       "bg-gradient-to-r from-teal-100 to-blue-200",
//       "bg-gradient-to-r from-indigo-100 to-purple-200",
//       "bg-gradient-to-r from-orange-100 to-red-200",
//       "bg-gradient-to-r from-pink-100 to-indigo-200",
//     ];

//     return colors[index % colors.length];
//   };

//   // const   handleSectionClick = (index) => {
//   //   setActiveIndex(index);

//   //   if (sectionRefs.current[index]) {
//   //     gsap.to(containerRef.current, {
//   //       scrollTo: {
//   //         x: sectionRefs.current[index].offsetLeft,
//   //         autoKill: false,
//   //       },
//   //       duration: 1, // Adjust duration for smoothness
//   //       ease: "power2.out",
//   //     });
//   //   }
//   // };

//   const handleSectionClick = (index) => {
//     if (sectionRefs.current[index]) {
//       sectionRefs.current[index].scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen mt-14 ${
//         activeIndex !== null ? getBackgroundColor(activeIndex) : "bg-white"
//       }`}
//       ref={containerRef}
//     >
//       <div className="flex justify-start gap-14 p-5">
//         <div className="sticky top-40 w-[600px] h-screen mb-12 flex flex-col justify-center font-bold gap-5">
//           <h1 className="text-4xl font-extralight font-serif text-[#191919] ml-14 mt-[43px]">
//             Core services.
//           </h1>
//           <p className="text-base font-light font-serif text-[#191919] ml-[4.25vw]">
//             We love building cohesive, consistent brands that speak to their
//             demographic in a meaningful and beautiful way. Social images, web
//             presences, print collateral; absolutely!
//           </p>
//           <div className="flex flex-col bg-transparent-500 rounded-lg w-10 justify-center items-center gap-2 absolute top-80 left-3">
//             {Array.from({ length: 8 }, (_, index) => (
//               <span
//                 key={index}
//                 className={`rounded-full w-3 h-3 border-2 border-black cursor-pointer transition-colors duration-300 ${
//                   activeIndex === index ? "bg-black" : "bg-white"
//                 }`}
//                 onClick={() => handleSectionClick(index)}
//               ></span>
//             ))}
//           </div>
//           <div className="-ml-1 space-y-3">
//             {[
//               "Web design and development",
//               "Digital marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div key={index}>
//                 <p
//                   className={`text-base font-light ml-16 transition-all duration-300 cursor-pointer flex items-center ${
//                     activeIndex === index
//                       ? "text-black font-semibold"
//                       : "text-[#747373]"
//                   } hover:text-black hover:font-semibold`}
//                   onClick={() => handleSectionClick(index)}
//                 >
//                   <span className="text-[#000000] font-medium font-mono">
//                     {index + 1}
//                   </span>
//                   <span className="ml-2">{service}</span>
//                   {activeIndex === index && (
//                     <span className="ml-2">
//                       <MdArrowOutward />
//                     </span>
//                   )}
//                 </p>
//                 {activeIndex === index && (
//                   <div className="ml-16 border-b-2 border-black mt-2 animate-expand"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex gap-4 w-[100%] overflow-hidden">
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               width: "100%",
//               height: "100vh",
//             }}
//           >
//             {[
//               "Web Design & Development",
//               "Digital Marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="section"
//                 ref={(el) => (sectionRefs.current[index] = el)}
//                 style={{
//                   width: "100vw",
//                   height: "100vh",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                   padding: "20px",
//                   boxSizing: "border-box",
//                 }}
//               >
//                 <Section
//                   heading={service}
//                   para1="Your online presence is key in today’s marketplace. Whether you are a non-profit, small company, startup, or large corporation – we would love to help you realize your goals."
//                   para2="We produce custom designed, gorgeous web experiences for our clients all while being cognizant of excellent usability and accessibility. We deliver a fully responsive, compliant website to you that you are sure to love."
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
