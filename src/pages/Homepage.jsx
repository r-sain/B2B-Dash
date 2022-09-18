import React from "react";
import { AiOutlineSearch, AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import Sidebar from "../components/Sidebar";
import "./homepage.css";
import Axios from "axios";
import { useState } from "react";
import ResultCard from "../components/ResultCard";

const Homepage = () => {
  const [timeoutId, updateTimeoutId] = useState();
  const [search, setSearch] = useState("");
  const [companyList, updateCompanyList] = useState([]);

  const fetchCompany = async (searchString) => {
    const response = await Axios.get(
      `https://staging.staging.b2brain.com/search/autocomplete_org_all/?q=${searchString}`
    );
    console.log(response);
    updateCompanyList(response.data);
    console.log(companyList);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    setSearch(e.target.value);
    const timeout = setTimeout(() => fetchCompany(e.target.value), 600);
    updateTimeoutId(timeout);
  };
  return (
    <div className="home">
      <div className="sidebarCont">
        <Sidebar />
      </div>
      <div className="homeContainer">
        {/* ******************************************** */}
        <div className="topBarCont">
          <div className="topbar">
            <div className="topsearch">
              <AiOutlineSearch size="25px" />
              <input
                type="text"
                placeholder="Search by account name or website"
                onChange={onTextChange}
              />
            </div>
            <div className="topicons">
              <AiOutlineBell size="25px" />
              <AiOutlineUser size="25px" />
            </div>
          </div>
        </div>
        {/* ******************************************************** */}

        <div className="homeBody">
          {companyList.length && search ? (
            <div className="BodyFull">
              <h3 style={{ fontSize: "22px", color: "grey" }}>
                Similar Accounts
              </h3>
              {companyList.map((company) => (
                <div className="data">
                  <div className="cardList">
                    <ResultCard company={company} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="homeBodyEmpty"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
