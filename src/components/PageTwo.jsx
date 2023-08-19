import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Question from "./Question";
import { motion, AnimatePresence } from "framer-motion";

function PageTwo() {
  return (
    <div className="page-container">
      <h1>PageTwo</h1>
      <Navbar />
      <h1>Lorem, ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugit
        molestiae nam sunt quibusdam consectetur voluptatem dolorem unde facere
        amet porro vel commodi ad natus, suscipit inventore possimus minus sit?
        Vero, quod vitae. Officia itaque inventore ipsa deleniti, temporibus
        nulla ab, sint, ad consequatur eum animi debitis saepe ea modi sit magni
        aliquid id? Corrupti unde asperiores earum soluta rerum! Ipsa error
        repellendus iusto id quos possimus laborum sunt veritatis esse vel dicta
        voluptatibus, tempore cumque quo dolorem saepe, quisquam debitis
        architecto! In illum perspiciatis ipsam sit, voluptatibus excepturi
        dolor!
      </p>

      <AnimatePresence>
        <Question />
        <Question />
        <Question />
      </AnimatePresence>
    </div>
  );
}

export default PageTwo;
