import React from "react";
import "./../App.css";
const Nav = () => {
  return (
    <div>
      <div className="mainNavContainer">
        <ul>
          <li>
            <a href="/main">MAIN</a>
          </li>
          <li>
            <a href="/work">WORK</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
