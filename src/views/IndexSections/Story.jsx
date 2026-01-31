import { Col, Container, Row } from "reactstrap";
export default function LandingPage() {
  return (
    <>
      <section className="section section-lg">
        <Container>
          <h1 className="text-center">Education & Skills</h1>
        </Container>
      </section>
      <section className="section section-lg section-safe">
        
          <Row className="row-grid justify-content-between">
            <Col md="4">
              <div className="px-md-5">
                <hr className="line-primary" />
                <h3>Master of Science</h3>
                <p>
                  I am currently pursuing an M.Sc. in Computer Science at
                  Jahangirnagar University. My coursework and research cover
                  Computer Science and Engineering topics, software
                  development and machine learning, and data structures &amp;
                  algorithms. The topics I am currently working on are
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-primary mb-2">
                        <i className="tim-icons icon-laptop" />
                      </div>
                      <div className="ml-3">
                        <h6>Human Computer Interaction</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-primary mb-2">
                        <i className="tim-icons icon-light-3" />
                      </div>
                      <div className="ml-3">
                        <h6>Software Quality & Maintenance</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-primary mb-2">
                        <i className="tim-icons icon-tv-2" />
                      </div>
                      <div className="ml-3">
                        <h6>Machine Learning & Agentic AI</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="4">
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
                        <h6>Data structure and Algorithms</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="4">
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
        {/* </Container> */}
      </section>
    </>
  );
}
