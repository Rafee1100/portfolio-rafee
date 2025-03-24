import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Navbar from "components/Navbars/Navbar";
import Footer from "components/Footer/Footer";

export default function ProfilePage() {
  React.useEffect(() => {
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="section">
          <Container>
            <Row>
              <Col md="12">
                <h1 className="text-center mt-5 ">Welcome to my blogs</h1>
                <p className="text-center  mb-5">
                  Blogs will be published soon
                </p>
                <div className="text-center mb-5">
                  <a href="https://medium.com/@rafee-abdullah1/" target="_blank">
                  <Button className="btn-simple btn-success">
                    Read me on Medium.com
                  </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
