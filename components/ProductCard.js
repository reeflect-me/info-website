import React from "react";
import { Button, Card, Typography, Row, Col } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  ShareAltOutlined,
} from "@ant-design/icons";
const { Text } = Typography;

export default function ProductCard(props) {
  const [liked, setLiked] = React.useState(false);

  React.useEffect(() => {
    setLiked(props.liked);
  }, []);

  return (
    <div>
      <Card
        className="prod-card"
        hoverable
        cover={<img alt="example" src={props.img} />}
      >
        <Row justify="space-between" align="middle">
          <Col span={3}>
            <img
              alt="example"
              src={props.user_image}
              style={{ width: "80%", borderRadius: "50%" }}
            />
          </Col>
          <Col span={14}>
            <Text style={{ fontWeight: 600 }}>{props.username}</Text>
          </Col>
          <Col>
            <Button type="text" shape="circle" onClick={() => setLiked(!liked)}>
              {!liked ? (
                <HeartOutlined className="icon heart-icon" />
              ) : (
                <HeartFilled className="icon heart-icon" />
              )}
            </Button>
          </Col>
          <Col>
            <Button type="text" shape="circle">
              <ShareAltOutlined className="icon" />
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
