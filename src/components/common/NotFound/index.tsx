import React from "react";
import "./style.css";
import stark from "../../../assets/images/Stark.png";
import Shit from "../../../assets/images/shit.png";

document.addEventListener("DOMContentLoaded", function () {});

const NotFound = () => {
  return (
    <div className="errorContainer">
      <div className="text">
        <div>ERROR</div>
        <h1>404</h1>
        <hr />
        <div>Page Not Found</div>
      </div>

      <div className="astronaut">
        <img src={stark} alt="" className="src" />
      </div>
      <div className="astronaut">
        <img src={Shit} alt="" className="src" />
      </div>
    </div>
  );
};

export default NotFound;
