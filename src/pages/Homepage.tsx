import { Container, Row, Col, Button } from "react-bootstrap";
import { useLayoutEffect, useState, useRef } from "react";
import Tech from "../components/technologies";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

export default function Home() {
  const [ptagSize, setPtagSize] = useState<string>("");
  const [backdrop, setBackdrop] = useState<string>("");

  const awoldtHeader = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#001220";
    const initialWindowWitdth = window.innerWidth;

    if (initialWindowWitdth >= 768) {
      awoldtHeader.current!.style.fontSize = "100px";
      setBackdrop("url(/waves.svg)");
      setPtagSize("22px");
    } else {
      awoldtHeader.current!.style.fontSize = "50px";
      setPtagSize("17px");
      setBackdrop("url(/waves-sm.svg)");
    }

    window.addEventListener("resize", () => {
      const w = window.innerWidth;
      if (w >= 768) {
        awoldtHeader.current!.style.fontSize = "100px";
        setBackdrop("url(/waves.svg)");
        setPtagSize("22px");
      } else {
        awoldtHeader.current!.style.fontSize = "50px";
        setBackdrop("url(/waves-sm.svg)");
        setPtagSize("17px");
      }
    });
  }, []);

  return (
    <Container
      fluid
      style={{
        backgroundImage: backdrop,
        backgroundSize: "cover",
        paddingTop: "400px",
        paddingLeft: "0px",
        paddingRight: "0px",
      }}
    >
      <Container style={{ color: "white" }}>
        <motion.div
          animate={{ y: [-500, 0], opacity: [0, 1] }}
          className="text-center"
        >
          <Row>
            <Col xl={6} style={{ marginBottom: "50px" }}>
              {" "}
              <h1
                style={{
                  fontSize: "100px",
                  display: "block",
                  fontFamily: "Silkscreen-Regular",
                }}
                ref={awoldtHeader}
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
              <Link to="/projects" style={{ textDecoration: "none" }}>
                <Button
                  style={{
                    borderRadius: "10px",
                    display: "block",
                    fontWeight: "bold",
                  }}
                  variant="danger"
                  className="mx-auto mt-4"
                >
                  Projects <img src="/code-icon.svg" alt="code icon" />
                </Button>
              </Link>
            </Col>
            <Col xl={6}>
              {" "}
              <p
                style={{
                  fontSize: ptagSize,
                  marginBottom: "25px",
                  paddingTop: "25px",
                }}
                className="mx-auto"
              >
                My name is Alex and I'm a Full Stack Developer from Charlotte
                NC. I enjoy coding in my freetime and love learning new
                technologies and frameworks. JavaScript is my favorite language
                and is where I excel. I got started implementing JS to basic
                HTML pages and developed an interest in web development soon
                after.
              </p>
            </Col>
          </Row>
        </motion.div>
        <motion.div animate={{ y: [500, 0], opacity: [0, 1] }}>
          <div
            style={{ fontFamily: "Silkscreen-Regular", textAlign: "center", marginTop: '100px'}}
          >
            <h2 style={{ fontSize: ptagSize, marginBottom: "25px" }}>
              Technologies/Frameworks
            </h2>
            <Tech />
          </div>
        </motion.div>
      </Container>
    </Container>
  );
}
