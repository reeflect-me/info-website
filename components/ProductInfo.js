import React from "react";
import { Button, Card, CardImg, Row } from "reactstrap";



export default function InfoScreen(props) {
  const MenStyle = "/images/MenStyle.jpg";
  return (
    <>
      
      <div
        style={{
          backgroundColor: "white",
          height: "50vh",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 ">
              <div
                className="row"
                style={{
                  marginLeft: "10%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="col-sm-6 mt-2">
                  <Row>
                    <img
                      src={MenStyle}
                      height="48px"
                      width="48px"
                      style={{
                        borderRadius: "50%",
                      }}
                      alt="product"
                    />
                    <span
                      style={{
                        paddingLeft: "6%",
                        fontSize: "150%"
                      }}
                    >
                      Angel Priya
                    </span>
                  </Row>
                </div>
                <div className="col-sm topbtn">
                  <Button
                    className="infoScreenTopBtn"
                    color=" #d6d2d2"
                    size="sm"
                  >
                    Buy
                  </Button>{" "}
                  <Button
                    className="infoScreenTopBtn"
                    color=" #d6d2d2"
                    size="sm"
                  >
                    Like
                  </Button>{" "}
                  <Button
                    className="infoScreenTopBtn"
                    color=" #d6d2d2"
                    size="sm"
                  >
                    Share
                  </Button>
                </div>
              </div>
              <Card className="mt-4">
                <div
                  style={{
                    margin: "20px",
                  }}
                >
                  <CardImg width="100%" src={MenStyle} alt="Men Style" />
                </div>
              </Card>
            </div>
            <div className="col-12 col-md-4 imageDescription">
              <h4>Lorem ipsum</h4>
              <h6>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
