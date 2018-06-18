import React from "react";
import { Row, Col, Card, Button } from "antd";
import Tutorial1 from "../../../../Assets/tutorials/16297473.png";
import Tutorial2 from "../../../../Assets/tutorials/6250754.png";

const Tutorials = () => {
  return (
    <section className="tutorials">
      <div className="heading-group text-center">
        <h3>
          <span>Latest</span> Tutorials
        </h3>
        <span className="sub-heading">
          Get started with blockchain development. Contact us if you have a
          question.
        </span>
      </div>
      <div className="container">
        <Row gutter={16} className="row">
          <Col md={{ span: 12 }} lg={{ span: 8 }}>
            <Card cover={<img alt="tut 1" src={Tutorial1} />} bordered={false}>
              <h4>
                Use Go-Ethereum to Setup your Own Private Ethereum Blockchain
              </h4>
              <p>
                A tutorial that goes over how to setup a custom private ethereum
                blockchain using geth.
              </p>
              <Button
                type="primary"
                icon="link"
                size="large"
                className="button button--dark"
              >
                Read More
              </Button>
            </Card>
          </Col>
          <Col md={{ span: 12 }} lg={{ span: 8 }}>
            <Card cover={<img alt="tut 1" src={Tutorial2} />} bordered={false}>
              <h4>
                Use Ethereumjs-tx and Web3 to Send an Ether Transaction using
                your Terminal
              </h4>
              <p>
                A tutorial that goes over how to send a send an ether
                transaction using Ethereumjs-tx and Web3.
              </p>
              <Button
                type="primary"
                icon="link"
                size="large"
                className="button button--dark"
              >
                Read More
              </Button>
            </Card>
          </Col>
          <Col md={{ span: 12 }} lg={{ span: 8 }}>
            <Card cover={<img alt="tut 1" src={Tutorial1} />} bordered={false}>
              <h4>
                Use Go-Ethereum to Setup your Own Private Ethereum Blockchain
              </h4>
              <p>
                A tutorial that goes over how to setup a custom private ethereum
                blockchain using geth.
              </p>
              <Button
                type="primary"
                icon="link"
                size="large"
                className="button button--dark"
              >
                Read More
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Tutorials;
