import React from "react";

import I4g from "../assets/I4G.svg";
import zuri from "../assets/Zuri.Internship_Logo.svg";
import "../styles//footer.scss";
export default function Footer() {
  return (
    <footer>
      <img src={zuri} alt='Zuri Internship logo' />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={I4g} alt='Ingressive for Good logo' />
    </footer>
  );
}
