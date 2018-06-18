import React from "react";
import { Row, Col } from "antd";
import AboutUs from "../../../../Assets/about-us.png";
const About = () => {
  return (
    <section className="about">
      <div className="container">
        <Row>
          <Col sm={{ span: 24 }} md={{ span: 10 }}>
            <div className="image">
              <img src={AboutUs} alt="" />
            </div>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 14 }}>
            <div className="heading-group text-center">
              <h3>
                <span>About</span> Us
              </h3>
              <span className="sub-heading">
                Expert blockchain development and consulting
              </span>
            </div>
            <p>
              MLG Blockchain is a global blockchain development and consulting
              firm headquartered in Toronto with a distributed team across North
              America, Europe and Asia that is focused on building next
              generation applications using blockchain and smart contract
              technology. We speed up your team's understanding of the
              blockchain and its potential opportunities for your business and
              help you to create a blockchain strategy you can use today. We are
              blockchain agnostic and are experienced working with many
              blockchain fabrics including the Bitcoin Blockchain, Ethereum,
              Hyperledger, Ripple, Factom, Eris. We are also experienced working
              with many blockchain development APIs, software frameworks,
              databases, and devOps tools for testing and agile development.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
