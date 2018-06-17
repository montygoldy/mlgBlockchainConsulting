import React from "react";
import { Row, Col, Card } from "antd";

const Services = () => {
  return (
    <section className="services">
      <div className="heading-group text-center">
        <h3>
          <span>Our</span> Services
        </h3>
        <span className="sub-heading">
          Expert blockchain consulting and development services.
        </span>
      </div>
      <div className="container">
        <Row gutter={16} className="row">
          <Col span={8}>
            <Card
              title={
                <span className="services-title">
                  <i className="fa fa-rocket" />
                  <span>Token Marketing</span>
                </span>
              }
              bordered={false}
            >
              <ul>
                <li>
                  <i className="fas fa-arrow-right" /> Bounty Campaign
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Digital Marketing
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Public Relations
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Community Management
                </li>
              </ul>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={
                <span className="services-title">
                  <i className="fa fa-cube" />
                  <span>Token Development</span>
                </span>
              }
              bordered={false}
            >
              <ul>
                <li>
                  <i className="fas fa-arrow-right" /> Token Contract
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Crowdsale Contract
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Security Audit
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Contract Deployment
                </li>
              </ul>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={
                <span className="services-title">
                  <i className="fa fa-globe" />
                  <span>Token Distribution</span>
                </span>
              }
              bordered={false}
            >
              <ul>
                <li>
                  <i className="fas fa-arrow-right" /> Exchange Listings
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Enterprise Partnerships
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Regional Representation
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Legal / Accounting
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} className="row">
          <Col span={8}>
            <Card
              title={
                <span className="services-title">
                  <i className="fa fa-rocket" />
                  <span>Blockchain Consulting</span>
                </span>
              }
              bordered={false}
            >
              <ul>
                <li>
                  <i className="fas fa-arrow-right" /> Strategic Planning
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Blockchain Architecture
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Developer Training
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Executive Training
                </li>
              </ul>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={
                <span className="services-title">
                  <i className="fa fa-link" />
                  <span>Blockchain Development</span>
                </span>
              }
              bordered={false}
            >
              <ul>
                <li>
                  <i className="fas fa-arrow-right" /> Integration with
                  Blockchain
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Smart Contract
                  Development
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Wallet / Explorer
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Admin Analytics
                </li>
              </ul>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={
                <span className="services-title">
                  <i className="fas fa-chart-line" />
                  <span>Blockchain Capital</span>
                </span>
              }
              bordered={false}
            >
              <ul>
                <li>
                  <i className="fas fa-arrow-right" /> SAFT Investment
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Angel Investment
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> ITO Liquidation
                </li>
                <li>
                  <i className="fas fa-arrow-right" /> Capital Management
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Services;
