import React from "react";
import Subscription from "./Subscription";
import NavGroup from "./NavGroup";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Subscription />
        <div className="footer__navGroup">
          <NavGroup />
        </div>
        <div className="footer__copyright text-center">
          &copy; Copyright {new Date().getFullYear()} Mlg Blockchain Consulting
        </div>
      </div>
    </footer>
  );
};

export default Footer;
