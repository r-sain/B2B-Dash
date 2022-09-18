import React from "react";
import Logo from "../images/B2Brain.png";
import "./compstyle.css";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="headSb">
        <span className="logo">
          <img src={Logo} alt="logo" />
          <h3>B2Brain</h3>
        </span>
      </div>

      <div className="bodySb">
        <SidebarItem />
      </div>
    </div>
  );
}

export default Sidebar;
