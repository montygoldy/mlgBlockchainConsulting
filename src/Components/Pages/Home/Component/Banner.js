import React from "react";
import Slider from "../../../../Assets/slider-bg.jpg";
import { Row, Col, Button } from "antd";
const Banner = () => {
  return (
    <section className="jumbotron" style={{ background: `url(${Slider})` }}>
      <Row>
        <div className="container">
          <Col sm={{ span: 24, offset: 0 }} md={{ span: 12, offset: 12 }}>
            <div className="content flexCenter">
              <h1>
                Turn Key Execution, <br />Global Distribution
              </h1>
              <span className="sub-heading text-center">
                Get involved in the blockchain world!
              </span>
              <Button className="button">Contact Us</Button>
            </div>
            <div className="arrow">
              <i className="fas fa-arrow-down" />
            </div>
          </Col>
        </div>
      </Row>
    </section>
  );
};

export default Banner;
