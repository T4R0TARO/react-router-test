import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Question() {
  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };

  return (
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
            dolor, sit amet consectetur adipisicing elit. Neque optio placeat
            amet voluptatibus quo voluptatem.
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default Question;
