import React from "react";
import Navigation from "./Navigation";
import { Row, Col, Button } from "antd";
import Logo from "../../../Assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <Row>
        <Col span={3} offset={1}>
          <div className="header__logo flexCenter">
            <img src={Logo} alt="Logo" />
          </div>
        </Col>
        <Col md={{ span: 20 }} lg={{ span: 16 }}>
          <div className="header__nav">
            <Navigation />
          </div>
        </Col>
        <Col md={{ span: 0 }} lg={{ span: 4 }}>
          <div className="flexCenter header__button">
            <Button
              type="primary"
              icon="environment-o"
              size="large"
              className="button button--dark"
            >
              Contact
            </Button>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
