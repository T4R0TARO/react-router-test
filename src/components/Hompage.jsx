import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="page-container">
      <h1>Hompage</h1>
      <Navbar />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in ex
        commodi laborum eius ullam libero itaque, sed fugit repellat, nulla
        officia deserunt eveniet, similique odit adipisci amet quas totam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde facere
        inventore voluptates perspiciatis quas modi aut eaque quod? Repellendus!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, nulla?
      </p>
    </div>
  );
}

export default Homepage;
