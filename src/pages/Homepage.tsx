import { Container, Row, Col, Button } from "react-bootstrap";
import Tech from "../components/technologies";
import { Link } from "react-router-dom";
import "../styles/Global.css";

export default function Home() {
  return (
    <Container
      fluid
      id="backdrop_container"
      style={{
        backgroundSize: "cover",
        paddingTop: "400px",
        paddingLeft: "0px",
        paddingRight: "0px",
      }}
    >
      <Container style={{ color: "white", animation: "fadein 1s" }}>
        <Row className="text-center">
          <Col xl={6} style={{ marginBottom: "50px" }}>
            {" "}
            <h1
              style={{
                display: "block",
                fontFamily: "Silkscreen-Regular",
              }}
              id="awoldt_header"
            >
              Awoldt
            </h1>
            <Button
              style={{
                marginRight: "5px",
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
              variant={"light"}
            >
              <a
                href={"https://github.com/awoldt"}
                target={"_blank"}
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
                title="View all my code on GitHub"
              >
                <img
                  src="/github-icon.svg"
                  style={{ marginRight: "5px" }}
                  alt="Github icon"
                />
                <span>GitHub</span>
              </a>
            </Button>
            <Button
              variant={"light"}
              style={{
                borderRadius: "0px",
                marginRight: "5px",
              }}
            >
              <a
                href={"https://www.linkedin.com/in/awoldt/"}
                target={"_blank"}
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
                title="Visit my LinkedIn profile"
              >
                <img
                  src="/linkedin-icon.svg"
                  style={{ marginRight: "5px" }}
                  alt={"Linkedin icon"}
                />
                <span>LinkedIn</span>
              </a>
            </Button>
            <Button
              variant={"light"}
              style={{
                borderRadius: "10px",
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
              }}
            >
              <a
                href={"mailto:abreckwoldt23@gmail.com"}
                target={"_blank"}
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
                title="Email me"
              >
                <img
                  src="/email-icon.svg"
                  style={{ marginRight: "5px" }}
                  alt="Email icon"
                />
                <span>Contact</span>
              </a>
            </Button>
            <Button
              style={{
                borderRadius: "10px",
                display: "block",
                fontWeight: "bold",
              }}
              variant="danger"
              className="mx-auto mt-4"
            >
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "white" }}
              >
                Projects <img src="/code-icon.svg" alt="code icon" />
              </Link>
            </Button>
          </Col>
          <Col xl={6}>
            {" "}
            <p
              style={{
                marginBottom: "25px",
                paddingTop: "25px",
              }}
              className="mx-auto"
              id="awoldt_description"
            >
              My name is Alex and I'm a Full Stack Developer from Charlotte NC.
              I enjoy coding in my freetime and love learning new technologies
              and frameworks. JavaScript is my favorite language and is where I
              excel. I got started implementing JS to basic HTML pages and
              developed an interest in web development soon after.
            </p>
          </Col>
        </Row>

        <div
          style={{
            fontFamily: "Silkscreen-Regular",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <h2 style={{ marginBottom: "25px" }}>Technologies/Frameworks</h2>
          <Tech />
        </div>
      </Container>
    </Container>
  );
}
