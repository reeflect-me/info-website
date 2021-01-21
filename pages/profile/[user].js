import React from "react";
import { Container } from "reactstrap";
import dynamic from "next/dynamic";
import { InstagramFilled } from "@ant-design/icons";
import { Row, Col, Button, Typography, Space } from "antd";

const NavBar = dynamic(() => import("../../components/Navbar"));

const { Text, Link } = Typography;

export default function User(props) {
  const tempimage = "/images/MenStyle.jpg";
  return (
    <>
      <NavBar />
      <Container
        style={{
          paddingTop: "5%",
          paddingLeft: "5%",
          height: "100%",
        }}
      >
        <div>
          <Row justify="space-between" align="middle">
            <Col span={8}>
              <Row>
                <img
                  src={tempimage}
                  style={{
                    width: "30%",
                    borderRadius: "50%",
                  }}
                />
                <h5
                  style={{
                    marginTop: "2%",
                    paddingLeft: "5%",
                  }}
                >
                  Rohan Mehra
                  <br /> @king_rohan
                </h5>
              </Row>
            </Col>
            <Col span={8}>
              <Row align="middle">
                <InstagramFilled
                  className="icon"
                  style={{ fontSize: "200%" }}
                />
                <Button
                  style={{
                    height: "40%",
                    marginLeft: "10px",
                    backgroundColor: "#20e319",
                    color: "white",
                    textDecoration: "none",
                    paddingLeft: "10%",
                    paddingRight: "10%",
                    // borderRadius: "20%"
                  }}
                >
                  <b>Follow</b>
                </Button>
              </Row>
            </Col>
          </Row>
          <Row
            justify="space-around"
            style={{
              paddingRight: "20%",
              marginTop: "5%",
            }}
          >
            <Col span={4} align="center">
              <h4>2K</h4>
              <Text type="secondary">Total Likes</Text>
            </Col>
            <Col span={4} align="center">
              <h4>105</h4>
              <Text type="secondary">Listing</Text>
            </Col>
            <Col span={4} align="center">
              <h4>243</h4>
              <Text type="secondary">Followers</Text>
            </Col>
            <Col span={4} align="center">
              <h4>143</h4>
              <Text type="secondary">Following</Text>
            </Col>
          </Row>

          <Row justify="start" className="mt-3">
            <Col span={20}>
              <Text type="secondary">
                I am a fashion designer based out of Bombay and some random
                text, I am a fashion designer based out of Bombay and some
                random text,I am a fashion designer based out of Bombay and some
                random text, Bombay Thanks!
                <br />
                <br />
                <br />
                <b>Average Shipping time :</b> 6-8 days
                <br />
                <b>COD :</b> Enable
              </Text>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
