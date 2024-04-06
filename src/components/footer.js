import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/img/logo.png";
import navIcon1 from "../assets/img/img/nav-icon1.svg";
import navIcon2 from "../assets/img/img/nav-icon2.svg";
import navIcon3 from "../assets/img/img/nav-icon3.svg";
import navIcon4 from "../assets/img/img/nav-icon4.svg";
export default function Footer () {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="#"><img src={navIcon3} alt="" /></a>
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

