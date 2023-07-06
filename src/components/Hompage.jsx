import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Hompage</h1>
      <Navbar />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in ex
        commodi laborum eius ullam libero itaque, sed fugit repellat, nulla
        officia deserunt eveniet, similique odit adipisci amet quas totam!
      </p>
    </div>
  );
}

export default Homepage;
