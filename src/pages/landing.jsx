import React from "react";
import "./landing.scss";
import Logo from "../images/LargeLogoYellow.png";
import Menupic from "../images/menu.png";

const Landing = () => {
  return (
    <div id="landing">
      <div className="fix-nav">
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://instagram.com/">Instagram</a>
        <a href="https://instagram.com/">Impressum</a>
      </div>
      <section className="menu">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="menu-img">
          <img src={Menupic} alt="" />
        </div>
        <button className="btn">SPEISEKARTE &#62;</button>
      </section>
      <section className="aktion">
        <button className="btn">AKTION &#62;</button>
      </section>
      <section className="about">
        <button className="btn">UNSERE PRODUKTE &#62;</button>
      </section>
      {/* <section className="gallery">gallery</section> */}
    </div>
  );
};

export default Landing;
