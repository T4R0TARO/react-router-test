import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function PageOne() {
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
    </div>
  );
}

export default PageOne;
