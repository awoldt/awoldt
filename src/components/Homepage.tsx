import { Container, Row, Col, Button } from "react-bootstrap";
import { useLayoutEffect, useState, useRef } from "react";
import Tech from "./templates/technologies";
import FullStackIcons from "./templates/fullstackIcons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Homepage.css";

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

          <p
            style={{
              fontSize: ptagSize,
              marginBottom: "25px",
              maxWidth: "500px",
            }}
            className="mx-auto"
          >
            My name is Alex and I'm a Full Stack Developer from
            Charlotte NC. I enjoy coding in my freetime and love learning new
            technologies and frameworks.
          </p>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="black"
                className="bi bi-github"
                viewBox="0 0 16 16"
                style={{ marginRight: "5px" }}
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>GitHub</span>
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
              href={"https://www.linkedin.com/in/awoldt/"}
              target={"_blank"}
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
              title="Visit my LinkedIn profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
                style={{ marginRight: "5px" }}
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <span>LinkedIn</span>
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
        </motion.div>
        <motion.div animate={{ y: [500, 0], opacity: [0, 1] }}>
          <Row
            style={{ marginTop: "100px", marginBottom: "100px" }}
            className="text-center"
          >
            <Col lg={5} style={{ padding: "10px", marginTop: "25px" }}>
              <p style={{ fontSize: ptagSize }}>
                JavaScript is my favorite language and where I excel. I got
                started implementing JS to basic HTML pages and developed an
                interest in web development soon after. Some of the different
                technologies I'm proficient in are:
              </p>
              <Tech />
            </Col>
            <Col lg={2}></Col>
            <Col lg={5} style={{ padding: "10px", marginTop: "25px" }}>
              <p style={{ fontSize: ptagSize }}>
                I have a deep understanding of both frontend and backend
                development. I focus more on writing clean and performant code
                rather than rushing things out of the door.
              </p>
              <FullStackIcons />
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}
