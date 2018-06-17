import React from "react";
import { Input } from "antd";

const Subscription = () => {
  return (
    <div className="footer__subscription flexCenter">
      <hgroup className="text-center">
        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
        <h5>
          Be the first to hear about the newest advancements in blockchain
          technology!
        </h5>
      </hgroup>
      <div className="newsletter">
        <Input.Search
          type="email"
          placeholder="Enter your email address"
          enterButton="SUBMIT"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
    </div>
  );
};

export default Subscription;
