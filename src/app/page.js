"use client";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <h1>Landing Page</h1>
      {
        <AnimatePresence mode="wait"></AnimatePresence>
        /* <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact /> */
      }
    </main>
  );
}
