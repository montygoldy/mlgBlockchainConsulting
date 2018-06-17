import React from "react";
import { Row, Col, Menu, Icon } from "antd";
import FooterInfo from "./FooterInfo";

const NavGroup = () => {
  return (
    <React.Fragment>
      <Row>
        <Col span={6}>
          <FooterInfo />
        </Col>
        <div className="linksGroup">
          <Col span={6}>
            <h4>Useful Information</h4>
            <Menu mode="vertical">
              <Menu.Item>
                <Icon type="right" /> Become an Ambassador
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> Join Our Team
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> Newsletter
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={6}>
            <h4>MLG Blockchain</h4>
            <Menu mode="vertical">
              <Menu.Item>
                <Icon type="right" /> About
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> Services
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> Clients
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> News
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> Contact
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={6}>
            <h4>Blockchain Research</h4>
            <Menu mode="vertical">
              <Menu.Item>
                <Icon type="right" /> Bitcoin Tutorials
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> Ethererum Tutorials
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> ICO Tutorials
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> Hyperledger Tutorials
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> Token Profiles
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> Altcoin Analysis
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> Blockchain Use Cases
              </Menu.Item>
              <Menu.Item>
                <Icon type="right" /> Whitepaper Reviews
              </Menu.Item>
            </Menu>
          </Col>
        </div>
      </Row>
    </React.Fragment>
  );
};

export default NavGroup;
