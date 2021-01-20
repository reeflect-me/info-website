import React from "react";
import { Container, Row, Col } from "reactstrap";
import dynamic from "next/dynamic";
import { Drawer } from "antd";
import { useRouter } from "next/router";

const NavBar = dynamic(() => import("../../components/Navbar"));

const Category = dynamic(() => import("../../components/Category"));
const SearchBar = dynamic(() => import("../../components/SearchBar"));
const ProdCard = dynamic(() => import("../../components/ProductCard"));
const InfoScreen = dynamic(() => import("../../components/ProductInfo"));

export default function SearchPage(props) {
  const router = useRouter();
  console.log(router.query);

  const prods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const tempimage = "/images/MenStyle.jpg";
  const category = [
    "All",
    "Men",
    "Women",
    "Kids",
    "Footware",
    "Accessories",
    "Purses & Wallets",
    "Home & Living",
    "Bags & Backpacks",
    "Sportswear",
    "Watches",
    "Gadgets",
    "Jewellery",
  ];

  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <NavBar />
      <Container>
        <SearchBar />
        <Category data={category} />
        <Row>
          {prods.map((item, index) => (
            <Col
              onClick={() => setVisible(true)}
              xs="6"
              md="3"
              key={index}
              className="p-2"
            >
              <ProdCard
                img={tempimage}
                user_image={tempimage}
                username="John Doe"
                liked={true}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Drawer
        height="95%"
        onClose={() => setVisible(false)}
        placement="bottom"
        closable={false}
        visible={visible}
      >
        <InfoScreen />
      </Drawer>
    </>
  );
}
