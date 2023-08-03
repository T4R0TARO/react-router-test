import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function PageThree() {
  return (
    <div className="page-container">
      <h1>PageThree</h1>
      <Navbar />
      <h1>Lorem, ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a
        veritatis porro fugit eum molestias eos voluptates sequi voluptate illum
        culpa ut, id nesciunt accusantium fugiat accusamus, animi tempore
        repudiandae.
      </p>
      <h2>Lorem ipsum dolor sit</h2>
      <div
        style={{
          display: "grid",
          gridTemplate: "1fr / repeat(3, auto)",
          textAlign: "center",
          gridGap: "20px",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, illo?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat enim
          accusantium voluptas ipsa, tempora id.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          natus incidunt harum quia sed ipsam, at quibusdam eum libero ratione!
        </p>
      </div>
      <h2>Lorem, ipsum dolor</h2>
    </div>
  );
}

export default PageThree;
