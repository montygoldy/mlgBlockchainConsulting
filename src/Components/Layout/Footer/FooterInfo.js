import React from "react";
import LogoWhite from "../../../Assets/logo-white.png";
import { List, Icon } from "antd";
import { Link } from "react-router-dom";

export default () => {
  const socialLinks = [
    { type: "facebook", link: "https://www.facebook.com/mlgblockchain" },
    { type: "twitter", link: "https://twitter.com/mlgblockchain" },
    {
      type: "linkedin",
      link:
        "https://www.linkedin.com/company/mlg-blockchain-consulting/?originalSubdomain=ca"
    },
    { type: "github", link: "https://github.com/mlgblockchain" }
  ];
  return (
    <div className="contact-section">
      <img src={LogoWhite} alt="logo" />
      <h5>Stay Connected</h5>
      <List
        grid={{ column: 8 }}
        dataSource={socialLinks}
        renderItem={item => (
          <List.Item>
            <Link to={item.link}>
              <Icon type={item.type} />
            </Link>
          </List.Item>
        )}
      />
      <div className="addressGroup">
        <div className="address">
          <Icon type="environment" /> Bay Adelaide Centre, 333 Bay St, Toronto
        </div>
        <div className="address">
          <Icon type="environment" /> 3 Place Ville Marie, Montreal
        </div>
      </div>
    </div>
  );
};
