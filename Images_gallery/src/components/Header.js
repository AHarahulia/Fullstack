import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: "lightgrey",
};
const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo style={{ width: "300px", height: "70px" }}></Logo>
      </Container>
    </Navbar>
  );
};
export default Header;
