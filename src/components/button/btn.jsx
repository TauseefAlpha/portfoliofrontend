import React from "react";
import "./btnstyle.scss";

const Btn = ({ name, link, data }) => {
  return (
    // <a href='#contactdetail"' className='btncontact'>{name}</a>
    <a
      className="btncontact"
      href={link}
      download={name == "Contact Me" ? false : true}
    >
      {name}
    </a>
  );
};

export default Btn;
