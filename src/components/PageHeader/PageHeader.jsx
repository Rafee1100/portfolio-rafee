import React from "react";
import { Container, Button } from "reactstrap";
import resume from "../../assets/Abdullah Al Rafee.pdf";
async function downloadResume() {
  try {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "abdullah_al_rafee_resume.pdf";
    link.click()
  } catch (error) {
    console.error("Error downloading file:", error);
  }
}
export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">Abdullah Al Rafee</h1>
          <h3 className="d-none d-sm-block">
            Full Stack Developer and a Passionate Problem Solver.
          </h3>
          <Button className="btn-simple btn-success" onClick={downloadResume}>
            View my cv
          </Button>
        </div>
      </Container>
    </div>
  );
}
