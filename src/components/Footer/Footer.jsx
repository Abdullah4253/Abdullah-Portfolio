import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>abdullaharif4253@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/abdullah_arif_123?igsh=dnozNjMxNzQ4bHFu" target="-blank"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/profile.php?id=100044850817091&mibextid=ZbWKwL" target="-blank"><Facebook color="white" size={"3rem"} /></a>
         <a href="https://github.com/Abdullah4253" target="-blank"><Gitub color="white" size={"3rem"} /></a> 
         <a href="https://www.linkedin.com/in/abullah-arif-5b8a52200/" target="-blank"><Linkdin color="white" size={"3rem"}/></a> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
