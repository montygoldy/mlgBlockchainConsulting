import React from "react";
import { Carousel, Row, Col } from "antd";
//Images for slider
import Bit from "../../../../Assets/clients/bitjob.png";
import Block from "../../../../Assets/clients/blockmason.jpg";
import Btc from "../../../../Assets/clients/btcmedia.jpg";
import Coral from "../../../../Assets/clients/coralhealth.jpg";
import Corl from "../../../../Assets/clients/corl.jpg";
import Dcc from "../../../../Assets/clients/dcc.jpg";
import Iht from "../../../../Assets/clients/iht.jpg";
import Latoken from "../../../../Assets/clients/latoken.jpg";
import Loopring from "../../../../Assets/clients/loopring.jpg";
import Soma from "../../../../Assets/clients/soma.png";
import Tdbank from "../../../../Assets/clients/tdbank.jpg";
import Tron from "../../../../Assets/clients/tron.jpg";
import Verasity from "../../../../Assets/clients/verasity.jpg";

const Clients = () => {
  return (
    <section className="clients">
      <div className="heading-group text-center">
        <h3>
          <span>Our</span> Clients
        </h3>
        <span className="sub-heading">
          Some of the teams we have worked with in the past.
        </span>
      </div>
      <Carousel autoplay>
        <div>
          <Row gutter={16}>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Verasity} alt="Verasity" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Bit} alt="Bit" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Block} alt="Block" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Btc} alt="Btc" />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={16}>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Coral} alt="Coral" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Corl} alt="Corl" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Dcc} alt="Dcc" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Iht} alt="Iht" />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={16}>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Latoken} alt="Latoken" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Loopring} alt="Loopring" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Soma} alt="Soma" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Tdbank} alt="Tdbank" />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={16}>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Tron} alt="Tron" />
              </div>
            </Col>
          </Row>
        </div>
      </Carousel>
    </section>
  );
};

export default Clients;
