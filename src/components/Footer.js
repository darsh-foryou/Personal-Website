import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg"
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h2 style={{ color: 'white', fontWeight: 'bold' }}>DM.</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/modi-darshil/"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/darshil_modii?igsh=ZTI5aHgzYzV4dTlz"><img src={navIcon3}  alt="Instagram" /></a>
                <a href="https://github.com/darsh-foryou"><img src={navIcon2}  alt="GitHub" /></a>
                <a href="https://wa.me/13157461195"><img src={navIcon4} alt="WhatsApp" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
