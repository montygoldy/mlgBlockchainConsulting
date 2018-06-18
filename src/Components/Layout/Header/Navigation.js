import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar className="navbar-trans" collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Home
          </NavItem>
          <NavDropdown eventKey={2} title="About" id="basic-nav-dropdown">
            <MenuItem eventKey={2.1}>Who We Are</MenuItem>
            <MenuItem eventKey={2.2}>Leadership</MenuItem>
            <MenuItem eventKey={2.3}>Advisors</MenuItem>
            <MenuItem eventKey={2.4}>Ambassadors</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Enterprise</MenuItem>
            <MenuItem eventkey={3.2}>Advisors</MenuItem>
          </NavDropdown>
          <NavItem eventKey={4} href="#">
            Clients
          </NavItem>
          <NavDropdown eventKey={5} title="News" id="basic-nav-dropdown">
            <MenuItem eventKey={5.1}>Press</MenuItem>
            <MenuItem eventKey={5.2}>Announcements</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={6} title="Learn" id="basic-nav-dropdown">
            <MenuItem eventKey={6.1}>Bitcoin Tutorials</MenuItem>
            <MenuItem eventKey={6.2}>Ethereum Tutorials</MenuItem>
            <MenuItem eventKey={6.3}>Icos Tutorials</MenuItem>
            <MenuItem eventKey={6.4}>Hyperledger Tutorials</MenuItem>
            <MenuItem eventKey={6.5}>Eris Tutorials</MenuItem>
            <MenuItem eventKey={6.6}>Other Tutorials</MenuItem>
            <MenuItem eventKey={6.7}>Blockchain Use Cases</MenuItem>
            <MenuItem eventKey={6.8}>Whitepaper Reviews</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={7} title="Analysis" id="basic-nav-dropdown">
            <MenuItem key={7.1}>Industry Analysis</MenuItem>
            <MenuItem key={7.2}>Token Profiles</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
