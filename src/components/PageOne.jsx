import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function PageOne() {
  return (
    <div className="page-container">
      <h1>PageOne</h1>
      <Navbar />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo excepturi
        harum voluptatem mollitia, ad quisquam nobis perferendis. Perferendis
        repellat eum modi ad eveniet laborum natus reiciendis iusto, cupiditate
        aliquam sed.
      </p>
    </div>
  );
}

export default PageOne;
