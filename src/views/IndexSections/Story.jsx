import React from "react";
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import aboutImage from "assets/img/chester-wade.jpg";
// core components
export default function LandingPage() {
  return (
    <>
      <section className="section section-lg">
        <Container>
          <h1 className="text-center">Education & Skills</h1>
        </Container>
      </section>
      <section className="section section-lg section-safe">
        <Container>
          <Row className="row-grid justify-content-between">
            {/* <Col md="5">
              <img alt="..." className="img-fluid floating" src={aboutImage} />
              <Card className="card-stats bg-danger">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">100%</CardTitle>
                      <p className="card-category text-white">Safe</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-info">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">573 K</CardTitle>
                      <p className="card-category text-white">
                        Satisfied customers
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-default">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">10 425</CardTitle>
                      <p className="card-category text-white">Business</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col> */}
            <Col md="6">
              <div className="px-md-5">
                <hr className="line-warning" />
                <h3>Bachelor of Science</h3>
                <p>
                  I have completed my graduation from from Khulna University of
                  Engineering and Technology (KUET), Khulna In Electronics and Communication Engineering with a CGPA of 3.19.
                  The topics I covered in my major were
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-warning mb-2">
                        <i className="tim-icons icon-sound-wave" />
                      </div>
                      <div className="ml-3">
                        <h6>Electronics and Communication Engineering</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-warning mb-2">
                        <i className="tim-icons icon-app" />
                      </div>
                      <div className="ml-3">
                        <h6>Software development and Machine learning</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-warning mb-2">
                        <i className="tim-icons icon-molecule-40" />
                      </div>
                      <div className="ml-3">
                        <h6>Data strucure and Algorithms</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="6">
              <div className="px-md-5">
                <hr className="line-success" />
                <h3>Software engineer</h3>
                <p>
                  As a software engineer with 4+ years of experience, I
                  specialize in full stack development. My primary stack is MERN
                  and I have worked in agile environment leading teams and ensuring security.
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-spaceship" />
                      </div>
                      <div className="ml-3">
                        <h6>Full stack development</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-vector" />
                      </div>
                      <div className="ml-3">
                        <h6>Javascript, React, Mongodb, SQL, Node Js, OOP</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-cloud-upload-94" />
                      </div>
                      <div className="ml-3">
                        <h6>
                          Google cloud, GCP, AngularJs
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
