import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faHouse,
  faStar,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="link-container">
      <Link to={"/"}>
        <FontAwesomeIcon icon={faHouse} />
        <span>Home</span>
      </Link>
      <Link to={"/pageone"}>
        <FontAwesomeIcon icon={faFire} />
        <span>Page One</span>
      </Link>
      <Link to={"/pagetwo"}>
        <FontAwesomeIcon icon={faStar} />
        <span>Page Two</span>
      </Link>
      <Link to={"/pagethree"}>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>Page Three</span>
      </Link>
    </div>
  );
}

export default Navbar;
