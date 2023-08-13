import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Homepage() {
  const textAnimationRight = {
    initial: { opacity: 0, x: -300 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textAnimationLeft = {
    initial: { opacity: 0, x: 300 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textFadeIn = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 3, ease: "easeOut" },
    },
  };

  return (
    <div className="page-container">
      <h1>Hompage</h1>
      <Navbar />
      <motion.h1 initial="initial" animate="animate" variants={textFadeIn}>
        Lorem ipsum dolor sit.
      </motion.h1>
      <motion.p
        initial="initial"
        animate="animate"
        variants={textAnimationLeft}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in ex
        commodi laborum eius ullam libero itaque, sed fugit repellat, nulla
        officia deserunt eveniet, similique odit adipisci amet quas totam!
      </motion.p>
      <motion.p
        initial="initial"
        animate="animate"
        variants={textAnimationRight}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde facere
        inventore voluptates perspiciatis quas modi aut eaque quod? Repellendus!
      </motion.p>
      <motion.p
        initial="initial"
        animate="animate"
        variants={textAnimationLeft}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, nulla?
      </motion.p>
    </div>
  );
}

export default Homepage;
