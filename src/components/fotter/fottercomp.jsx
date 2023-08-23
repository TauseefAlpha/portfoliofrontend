import React from "react";
import "./fotterstyle.scss";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logodev.png";

const Fottercomp = () => {
  return (
    <div className=" wrapfooter ">
      <div className="container">
        <div className="row d-flex  align-items-center justify-content-md-center ">
          <div className="col-md-3 logowrap">
            <img src={logo} height={60} alt="logo" />
          </div>
          <div className="col-md-5 text-light text-center mt-2 ">
            <p>© 2023 FullstackDeveloper TA. All rights reserved.</p>
          </div>
          <div className="col-md-4 text-light text-center">
            <FaInstagram
              size={"2rem"}
              style={{ margin: "0px 4px" }}
              color="yellow"
            />
            <FaFacebook
              size={"2rem"}
              style={{ margin: "0px 4px" }}
              color="yellow"
            />
            <FaLinkedin
              size={"2rem"}
              style={{ margin: "0px 4px" }}
              color="yellow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fottercomp;
