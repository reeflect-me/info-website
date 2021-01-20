import React from "react";
import { Card, CardTitle, Button, Form, FormGroup, Input } from "reactstrap";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../../components/Navbar"));

export default function SignUp() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-12 col-md-6 mt-5">
            <Card className="cardSize  cardShadow">
              <CardTitle className="cardHeading" tag="h5">
                Sign Up
              </CardTitle>
              <Form className="signupStyle">
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Id"
                  />
                </FormGroup>
                <FormGroup className="formField">
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </FormGroup>
                <FormGroup className="formField">
                  <Input
                    type="password"
                    name="Confirm Password"
                    id="Confirm Password"
                    placeholder="Confirm Password"
                  />
                </FormGroup>
                <Button
                  className="formField"
                  color="primary"
                  style={{
                    backgroundColor: "#325aa8",
                  }}
                >
                  Sign Up
                </Button>
              </Form>
            </Card>
          </div>
          <div className="col-12 col-md-6"></div>
        </div>
      </div>
    </>
  );
}
