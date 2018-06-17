import React from "react";
import { Carousel, Row, Col } from "antd";
//Images for slider
import Airdropx from "../../../../Assets/partners/airdropx.jpg";
import Ben from "../../../../Assets/partners/ben.jpg";
import Council from "../../../../Assets/partners/blockchaincouncil.jpg";
import Crunch from "../../../../Assets/partners/blockcrunch.jpg";
import Gemini from "../../../../Assets/partners/blockgemini.jpg";
import Cfs from "../../../../Assets/partners/cfs.jpg";
import Cmg from "../../../../Assets/partners/cmg.jpg";
import Cryptoc from "../../../../Assets/partners/cryptoc.png";
import Cryptorated from "../../../../Assets/partners/cryptorated.jpg";
import Etherlabs from "../../../../Assets/partners/etheralabs.jpg";
import Icobench from "../../../../Assets/partners/icobench.jpg";
import Icocrow from "../../../../Assets/partners/icocrow.jpg";
import Ivey from "../../../../Assets/partners/ivey.jpg";
import Kba from "../../../../Assets/partners/kba.jpg";
import Pegasus from "../../../../Assets/partners/pegasus.jpg";
import Roq from "../../../../Assets/partners/roq.jpg";
import Stratx from "../../../../Assets/partners/stratx.png";
import Tokeny from "../../../../Assets/partners/tokeny.jpg";

const partners = () => {
  return (
    <section className="partners">
      <div className="heading-group text-center">
        <h3>
          <span>Our</span> Partners
        </h3>
        <span className="sub-heading">
          Some of our strategic partners from around the world.
        </span>
      </div>
      <Carousel autoplay>
        <div>
          <Row gutter={16}>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Airdropx} alt="Airdropx" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Ben} alt="Ben" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Council} alt="Council" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Crunch} alt="Crunch" />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={16}>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Gemini} alt="Gemini" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Cfs} alt="Cfs" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Cmg} alt="Cmg" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Cryptoc} alt="Cryptoc" />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={16}>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Cryptorated} alt="Cryptorated" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Etherlabs} alt="Etherlabs" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Icobench} alt="Icobench" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Icocrow} alt="Icocrow" />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={16}>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Ivey} alt="Ivey" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Kba} alt="Kba" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Pegasus} alt="Pegasus" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Roq} alt="Roq" />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={16}>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Stratx} alt="Stratx" />
              </div>
            </Col>
            <Col span={6} className="flexCenter">
              <div className="slider__image">
                <img src={Tokeny} alt="Tokeny" />
              </div>
            </Col>
          </Row>
        </div>
      </Carousel>
    </section>
  );
};

export default partners;
