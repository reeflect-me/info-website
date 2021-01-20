import React from "react";
import { Row, Col } from "reactstrap";
import { Select, Radio } from "antd";
const { Option } = Select;

export default function Category(props) {
  const category = props.data;

  return (
    <div className="mt-5">
      <Row>
        <Col xs="2">
          <Select defaultValue="Top Selling" className="dropdown">
            <Option value="Top Selling">Top Selling</Option>
            <Option value="Popular">Popular</Option>
            <Option value="New and Noteworthy">New and Noteworthy</Option>
            <Option value="Recommended">Recommended</Option>
          </Select>
        </Col>
        <Col xs="8">
          <Radio.Group
            defaultValue={category[0]}
            buttonStyle="solid"
            className="radio p-1"
          >
            {category.map((item, index) => (
              <Radio.Button value={item} key={index} className="radio-text">
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Col>
        <Col xs="2"></Col>
      </Row>
    </div>
  );
}
