import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="link-container">
      <Link to={"/"}>Home</Link>
      <Link to={"/pageone"}>Page One</Link>
      <Link to={"/pagetwo"}>Page Two</Link>
      <Link to={"/pagethree"}>Page Three</Link>
    </div>
  );
}

export default Navbar;
