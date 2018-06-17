import React from "react";
import { Menu, Icon } from "antd";
const { SubMenu } = Menu;
const Navigation = () => {
  return (
    <Menu mode="horizontal" className="header__nav flexCenter">
      <Menu.Item>Home</Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span className="submenu-heading flexCenter">
            <span>About</span> <Icon type="caret-down" />
          </span>
        }
      >
        <Menu.Item key="about-1">Who We Are</Menu.Item>
        <Menu.Item key="about-2">Leadership</Menu.Item>
        <Menu.Item key="about-3">Advisors</Menu.Item>
        <Menu.Item key="about-4">Ambassadors</Menu.Item>
      </SubMenu>
      <Menu.SubMenu
        key="sub2"
        title={
          <span className="submenu-heading flexCenter">
            <span>Services</span> <Icon type="caret-down" />
          </span>
        }
      >
        <Menu.Item key="services-1">Services</Menu.Item>
        <Menu.Item key="services-2">Enterprise</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>Clients</Menu.Item>
      <Menu.SubMenu
        key="sub3"
        title={
          <span className="submenu-heading flexCenter">
            <span>News</span> <Icon type="caret-down" />
          </span>
        }
      >
        <Menu.Item key="news-1">Press</Menu.Item>
        <Menu.Item key="news-2">Announcements</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="sub4"
        title={
          <span className="submenu-heading flexCenter">
            <span>Learn</span> <Icon type="caret-down" />
          </span>
        }
      >
        <Menu.Item key="learn-1">Bitcoin Tutorials</Menu.Item>
        <Menu.Item key="learn-2">Ethereum Tutorials</Menu.Item>
        <Menu.Item key="learn-3">Icos Tutorials</Menu.Item>
        <Menu.Item key="learn-4">Hyperledger Tutorials</Menu.Item>
        <Menu.Item key="learn-5">Eris Tutorials</Menu.Item>
        <Menu.Item key="learn-6">Other Tutorials</Menu.Item>
        <Menu.Item key="learn-7">Blockchain Use Cases</Menu.Item>
        <Menu.Item key="learn-8">Whitepaper Reviews</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="sub5"
        title={
          <span className="submenu-heading flexCenter">
            <span>Analysis</span> <Icon type="caret-down" />
          </span>
        }
      >
        <Menu.Item key="analysis-1">Industry Analysis</Menu.Item>
        <Menu.Item key="analysis-2">Token Profiles</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default Navigation;
