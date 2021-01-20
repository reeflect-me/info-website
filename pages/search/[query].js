import React from "react";
import { Container, Row, Col } from "reactstrap";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../../components/Navbar"));

const Category = dynamic(() => import("../../components/Category"));
const SearchBar = dynamic(() => import("../../components/SearchBar"));
const ProdCard = dynamic(() => import("../../components/ProductCard"));

export default function SearchPage(props) {
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

  return (
    <>
      <NavBar />
      <Container>
        <SearchBar />
        <Category data={category} />
        <Row>
          {prods.map((item, index) => (
            <Col xs="6" md="3" key={index} className="p-2">
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
    </>
  );
}
