import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">Rafee•</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  About me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Blogs
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink>
                  Contact me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="mailto:rafee.abdullah1@gmail.com">
                  rafee.abdullah1@gmail.com
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Phone : +8801779404301
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Find me on:</h3>
            <div className="btn-wrapper profile">
              <a href="https://github.com/Rafee1100" target="_blank">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                id="tooltip622135962"
              >
                <i className="fab fa-github"></i>
              </Button>
              </a>
              <a href="https://www.facebook.com/abdullahal.rafee/" target="_blank">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                id="tooltip230450801"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/abdullahalrafee/" target="_blank">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                id="tooltip318450378"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
