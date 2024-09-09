import React, { useEffect, useState } from "react";
import Hero from "../../modules/Hero";
import useLocomotive from "../../hooks/useLocomotive";

import Works from "../../components/Works/Works";
import Mouse from "../../MouseEffect/Mouse";

import Slider from "../../SlidingImages/Slider";
import Preloader from "../../Preloader/index";

import Home from "../../hello/Home";
import Contact from "../../Contact";
import { AnimatePresence } from "framer-motion";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useLocomotive(true);
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 3000);
    })();
  }, []);
  return (
    <>
      <main>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        {/* <Hero /> */}
        <Works />
        <Mouse />
        <Home />
        <Slider />
        <div className="bg-black h-screen w-full"></div>
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
