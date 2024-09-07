// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { MdArrowOutward } from "react-icons/md";
// const Section = ({ heading, para1, para2, index }) => {
//   return (
//     <div className="relative">
//       {index === 0 ? (
//         ""
//       ) : (
//         <hr className="border-t-2 absolute top-14 border-black mt-3 w-2/3 self-center " />
//       )}

//       <div className=" h-auto flex items-center -mt-8 ">
//         <div className="-mt-32 ">
//           <h1 className="text-2xl font-bold ">{heading}</h1>
//           <br />
//           <p className="text-sm ">{para1}</p>
//           <br />
//           <p className="text-sm ">{para2}</p>

//           <br />
//           <button className="relative bg-transparent text-black border border-black rounded-full w-40 h-10  font-light text-base md:text-lg transition-all duration-300 hover:bg-slate-100 hover:border-transparent hover:w-44 hover:after:content-[ '>'] hover:after:absolute hover:after:right-4 hover:text-black hover:after:text-black hover:after:font-bold hover:after:text-xl ">
//             <span className="flex items-center justify-center">
//               SEE OUR WORK
//               <MdArrowOutward />
//             </span>
//           </button>
//         </div>
//         <div>
//           {" "}
//           <div
//             className="w-[480px]
//              mt-28 ml-6"
//           >
//             <Carousel
//               showArrows={false}
//               showThumbs={false}
//               infiniteLoop={true}
//               autoPlay={true}
//               interval={3000}
//               transitionTime={500}
//               emulateTouch={true}
//               className="carousel-container"
//             >
//               <div className="carousel-item">
//                 <img
//                   src="https://envydesign.co/wp-content/uploads/2023/05/Mask-group-35-1.png"
//                   className="carousel-image"
//                   alt="Image 1"
//                 />
//               </div>
//               <div className="carousel-item">
//                 <img
//                   src="https://envydesign.co/wp-content/uploads/2023/05/Mask-group-7-1.jpg"
//                   className="carousel-image"
//                   alt="Image 2"
//                 />
//               </div>
//               <div className="carousel-item">
//                 <img
//                   src="https://envydesign.co/wp-content/uploads/2024/03/StallionCompareBanner-jpg.webp"
//                   className="carousel-image"
//                   alt="Image 3"
//                 />
//               </div>
//             </Carousel>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowOutward } from "react-icons/md";

const Section = ({ heading, para1, para2 }) => {
  return (
    <div className="relative p-8">
      {/* {index !== 0 && (
        <hr className="border-t-2 absolute top-14 border-black mt-3 w-2/3 self-center" />
      )} */}

      <div className="flex flex-col md:flex-row items-center gap-8 -mt-36 -ml-8">
        <div className="md:mt-0 mt-8 md:w-1/2 w-full">
          <h1 className="text-2xl text-start font-bold mb-4">{heading}</h1>
          <p className="text-sm text-start mb-4">{para1}</p>
          <p className="text-sm text-start mb-4">{para2}</p>
          <button className="absolute -left-1 bg-transparent text-black border border-black rounded-full w-40 h-10 font-light  text-base md:text-lg transition-all duration-300 hover:bg-slate-100 hover:border-transparent hover:w-44 hover:after:content-[ '>'] hover:after:absolute hover:after:right-4 hover:text-black hover:after:text-black hover:after:font-bold hover:after:text-xl">
            <span className="flex items-center justify-center">
              SEE OUR WORK
              <MdArrowOutward />
            </span>
          </button>
        </div>
        <div className="flex justify-center md:w-1/2 w-full mr-[33vw] mt-64">
          <div className="w-[480px]">
            <Carousel
              showArrows={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              transitionTime={500}
              emulateTouch={true}
              className="carousel-container"
            >
              <div className="carousel-item">
                <img
                  src="https://envydesign.co/wp-content/uploads/2023/05/Mask-group-35-1.png"
                  className="carousel-image"
                  alt="Image 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://envydesign.co/wp-content/uploads/2023/05/Mask-group-7-1.jpg"
                  className="carousel-image"
                  alt="Image 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://envydesign.co/wp-content/uploads/2024/03/StallionCompareBanner-jpg.webp"
                  className="carousel-image"
                  alt="Image 3"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
