import React, { Component } from "react";
import { Button, Row, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { providers, signIn } from "next-auth/client";

const NavBar = dynamic(() => import("../../components/Navbar"));

function Login({ providers }) {
  console.log(providers);
  return (
    <>
      <NavBar />
      <div>
        <Container>
          <div className="row">
            <div className="col-12 col-md-6 mt-5">
              <h1 className="mt-5">
                Find your Aha Moment,
                <br /> Rediscover Your Closet.
              </h1>
              <h5 className="mt-5">Sign Up now and Join the community.</h5>
              <Row>
                <div className="col-12 col-lg-10">
                  <Button
                    color="danger"
                    size="lg"
                    block
                    className="mt-3"
                    style={{
                      backgroundColor: "#8B0000",
                      color: "white",
                      border: "none",
                    }}
                  >
                    <div className="login-scr-btn">
                      <FontAwesomeIcon icon={faEnvelope} className="faIcon" />{" "}
                      <span className="btn-writing">Sign Up with Email</span>
                    </div>
                  </Button>
                </div>
                <div className="col-12 col-lg-10">
                  <Button
                    color="primary"
                    size="lg"
                    block
                    className="mt-3"
                    onClick={() => signIn(providers.facebook.id)}
                    style={{
                      backgroundColor: "#325aa8",
                      color: "white",
                      border: "none",
                    }}
                  >
                    <div className="login-scr-btn">
                      <FontAwesomeIcon icon={faFacebook} className="faIcon " />{" "}
                      <span className="btn-writing">
                        Continue with facebook
                      </span>
                    </div>
                  </Button>
                </div>
                <div className="col-12 col-lg-10">
                  <Button
                    color="secondary"
                    size="lg"
                    block
                    className="mt-3"
                    onClick={() => signIn(providers.google.id)}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "none",
                    }}
                  >
                    <div className="login-scr-btn">
                      <FontAwesomeIcon icon={faGoogle} className="faIcon" />{" "}
                      <span className="btn-writing">Continue with Google</span>
                    </div>
                  </Button>
                </div>
              </Row>
            </div>
            <div className="col-12 col-md-6 m-1"></div>
          </div>
        </Container>
      </div>
    </>
  );
}

Login.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
  };
};

export default Login;
