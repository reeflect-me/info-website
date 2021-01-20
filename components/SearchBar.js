import React from "react";
import { Form, FormGroup, Input } from "reactstrap";

export default function Search(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <Form>
            <FormGroup className="mt-5">
              <Input
                type="search"
                name="search"
                id="search"
                placeholder="search..."
                className="searchBarShadow"
                style={{
                  marginLeft: "40%",
                }}
              />
            </FormGroup>
          </Form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Fashion Products
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h5
            style={{
              textAlign: "center",
            }}
          >
            10000+ Fashion Products
          </h5>
        </div>
      </div>
    </div>
  );
}
