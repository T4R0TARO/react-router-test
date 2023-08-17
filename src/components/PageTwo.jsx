import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

function PageTwo() {
  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };

  console.log(toggle);

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
        <div className="question">
          <div className="toggle-title">
            <h4>Lorem ipsum dolor sit?</h4>
            <button onClick={btnToggler}>{toggle ? "➖" : "➕"}</button>
          </div>

          {toggle && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur nihil corporis, culpa esse neque amet. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Neque optio
                placeat amet voluptatibus quo voluptatem.
              </p>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default PageTwo;
