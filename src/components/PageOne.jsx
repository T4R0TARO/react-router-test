import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

function PageOne() {
  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="page-container">
      <h1>PageOne</h1>
      <Navbar />
      <h1>Lorem ipsum dolor sit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo excepturi
        harum voluptatem mollitia, ad quisquam nobis perferendis. Perferendis
        repellat eum modi ad eveniet laborum natus reiciendis iusto, cupiditate
        aliquam sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere alias
        voluptatibus hic. Atque perferendis ducimus ipsa, impedit necessitatibus
        debitis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime sequi
        similique et, vel minima tempora, ratione voluptas sapiente placeat
        eligendi, sed consectetur expedita vero. Facere labore quas quaerat
        pariatur explicabo?
      </p>

      <div
        className="questions-container"
        style={{
          width: "100%",
        }}
      >
        <motion.div
          className="question"
          style={{
            backgroundColor: "gray",
            padding: "1.4rem 1rem",
            borderRadius: "24px",
          }}
        >
          <div
            className="toggle-title"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-Between",
            }}
          >
            <h2>Lorem, ipsum dolor.</h2>
            <button
              onClick={btnToggler}
              style={{
                background: "transparent",
                outline: "none",
                cursor: "pointer",
                border: "none",
              }}
            >
              {toggle ? "➖" : "➕"}
            </button>
          </div>
          <AnimatePresence>
            {toggle && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  textAlign: "start",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi dolores odio neque perspiciatis debitis suscipit!
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default PageOne;
