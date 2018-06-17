import React, { Component } from "react";
import About from "../Component/About";
import Clients from "../Component/Clients";
import Partner from "../Component/Partner";
import Services from "../Component/Services";
import Tutorials from "../Component/Tutorials";
import Banner from "../Component/Banner";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <About />
        <Services />
        <Partner />
        <Tutorials />
        <Clients />
      </React.Fragment>
    );
  }
}

export default Home;
