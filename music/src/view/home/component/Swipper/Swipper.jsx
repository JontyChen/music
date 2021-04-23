import React from "react";
import { Carousel, WingBlank, WhiteSpace } from "antd-mobile";
// import '../../../../assets/img/'
export default function Swipper() {
  const style = {
    display: "inline-block",
    width: "100%",
    height: "180px",
    borderRadius: "10px",
  };
  return (
    
      <WingBlank size="md">
          <WhiteSpace size="md"></WhiteSpace>
        <Carousel
          autoplay={true}
          infinite={true}
          style={{ touchAction: "none" }}
        >
          <img
            src={require("../../../../assets/img/xuanlv.jpg").default}
            alt="1"
            style={style}
          />
          <img
            src={require("../../../../assets/img/music2.jpg").default}
            alt="2"
            style={style}
          />
          <img
            src={require("../../../../assets/img/music3.jpg").default}
            alt="3"
            style={style}
          />
        </Carousel>
      </WingBlank>
  );
}
