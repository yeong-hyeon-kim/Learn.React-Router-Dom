import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/ina"
            activeStyle={{ background: "#000", color: "#fff" }}
          >
            ina
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/codechemi"
            activeStyle={{ background: "#fff", color: "#000" }}
          >
            codechemi
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element="유저를 선택해주세요" />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
