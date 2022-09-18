import React from "react";
import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineDown,
  AiOutlineStar,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLink,
  AiOutlineTeam,
} from "react-icons/ai";
import "./compstyle.css";
import { BsBuilding } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
function SidebarItem() {
  const [acc, setAcc] = useState(false);
  const [pref, setPref] = useState(false);

  return (
    <div className="sidebarList">
      <div className="sidebar-item">
        <div className="sidebar-title">
          <div className="stleft">
            <AiOutlineHome />
            <p style={{ fontWeight: "bold" }}>Dashboard</p>
          </div>
        </div>
      </div>
      {/* ******************** */}
      <div className="sidebar-item">
        <div className="sidebar-title">
          <div className="stleft">
            <AiOutlineStar />
            <p>Intels</p>
          </div>
          <div className="unread">4 unread</div>
        </div>
      </div>
      {/* ************************** */}
      <div className="sidebar-item">
        <div className="sidebar-title">
          <div className="stleft">
            <AiOutlineUser />
            <p>Leads</p>
          </div>
          <div className="unread">4 unseen</div>
        </div>
      </div>
      {/* ************************************** */}
      <div className={acc ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setAcc(!acc)}>
          <div className="stleft">
            <BsBuilding />
            <p>Accounts</p>
          </div>
          <div className="toggle-btn">
            <AiOutlineDown />
          </div>
        </div>
        {acc && (
          <div className="sidebar-content">
            <div className="sidebar-content vl"></div>
            <div className="sidebar-content para">
              <p className="sbcont">Manage all</p>
              <p className="sbcont">Track new accounts</p>
              <p className="sbcont">Bulk Import</p>
            </div>
          </div>
        )}
      </div>
      {/* *********************************** */}
      <div className={pref ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setPref(!pref)}>
          <div className="stleft">
            <AiOutlineSetting />
            <p>Preferences</p>
          </div>
          <div className="toggle-btn">
            <AiOutlineDown />
          </div>
        </div>
        {pref && (
          <div className="sidebar-content">
            <div className="sidebar-content vl"></div>
            <div className="sidebar-content para">
              <p className="sbcont">Product Focus</p>
              <p className="sbcont">Intel Preferences</p>
              <p className="sbcont">Lead Persona</p>
            </div>
          </div>
        )}
      </div>
      {/* ************************** */}
      <div className="sidebar-item">
        <div className="sidebar-title">
          <div className="stleft">
            <AiOutlineLink />
            <p>Integrations</p>
          </div>
        </div>
      </div>
      {/* ************************************** */}
      {/* ************************** */}
      <div className="sidebar-item">
        <div className="sidebar-title">
          <div className="stleft">
            <AiOutlineTeam />
            <p>Team</p>
          </div>
        </div>
      </div>
      {/* ************************************** */}
      {/* ************************** */}
      <div className="sidebar-item">
        <div className="sidebar-title">
          <div className="stleft">
            <TiMessages />
            <p>Help / Support</p>
          </div>
        </div>
      </div>
      {/* ************************************** */}
    </div>
  );
}

export default SidebarItem;

{
  /* <div className={dash ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setDash(!dash)}>
          <div className="stleft">
            <AiOutlineHome />
            <p>Dashboard</p>
          </div>
          <div className="toggle-btn">
            <AiOutlineDown />
          </div>
        </div>
        <div className="sidebar-content">hello</div>
      </div> */
}
