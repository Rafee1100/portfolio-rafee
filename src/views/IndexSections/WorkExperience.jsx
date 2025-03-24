import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import imsTechnologiesCollege from "assets/img/ims-technologies-college.jpg";
import ujetLogo from "assets/img/UJET-logo1.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// core components
export default function LandingPage() {
  return (
    <>
      <section className="section section-lg">
        <Container>
          <h1 className="text-center">Work experience</h1>
        </Container>
      </section>
      <section className="section section-lg">
        <Container>
          <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
              <hr className="line-danger" />
              <h3 className="text-white">UJET Inc</h3>
              <p className="text-white mb-3">
                <strong>UJET Inc</strong> revolutionizes contact centers with
                AI-driven automation, a cloud-native platform, and a CRM-first
                approach. We enhance customer experiences, empower agents, and
                optimize operations—delivering smarter insights without{" "}
                <strong>storing PII</strong>.
              </p>
              <div className="btn-wrapper mb-3">
                <a href="https://ujet.cx/">
                  <p className="category text-success d-inline">View company</p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </a>
              </div>
              <div className="btn-wrapper">
                <div className="button-container">
                  <a href="https://x.com/ujetcx" target="_blank">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </a>
                  <a href="https://ujet.cx/" target="_blank">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </a>
                  <a href="https://www.facebook.com/ujet.cx" target="_blank">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="5" md="5">
              <img
                alt="..."
                className="img-fluid"
                src={ujetLogo}
                width={"80%"}
              />
            </Col>
          </Row>
          <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
              <hr className="line-danger" />
              <h3 className="text-white">iMS Technologies</h3>
              <p className="text-white mb-3">
                A wonderful technology company based in UK that works on digital
                trasformation. <strong>iMS Systems</strong> is a SaaS that helps
                organizations to trasform their business operations digitally. I
                was the tech lead at iMS Systems.
              </p>
              <div className="btn-wrapper mb-3">
                <a href="https://imssystems.tech">
                  <p className="category text-success d-inline">View company</p>
                  <Button className="btn-link" color="success" size="sm">
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </a>
              </div>
              <div className="btn-wrapper">
                <div className="button-container">
                  <a href="https://x.com/iMS__Tech?t=EQYerVxB-y-QwfEwIT_bUg&s=09" target="_blank">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </a>
                  <a href="https://imssystems.tech/" target="_blank">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61550345531503" target="_blank">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="5" md="5">
              <img
                alt="..."
                className="img-fluid"
                src={imsTechnologiesCollege}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
