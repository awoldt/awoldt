import { Container, Row, Col, Button } from "react-bootstrap";
import { useLayoutEffect, useRef, useState } from "react";
import Tech from "./components/technologies";
import FullStackIcons from "./components/fullstackIcons";
import responsiveLayout from "./scripts/responsiveLayout";
import { motion } from "framer-motion";
import Projects from "./components/personalProjects";

function App() {
  const awoldtHeader = useRef<HTMLHeadingElement>(null);
  const awoldtDescription = useRef<HTMLParagraphElement>(null);
  const pTag1 = useRef<HTMLParagraphElement>(null);
  const pTag2 = useRef<HTMLParagraphElement>(null);
  const pTag3 = useRef<HTMLParagraphElement>(null);
  const pTag4 = useRef<HTMLParagraphElement>(null);
  const personalProjectHeader = useRef<HTMLHeadingElement>(null);

  const container1 = useRef<HTMLDivElement>(null);

  const [backdrop, setBackdrop] = useState<string>("");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#001220";
    const initialWindowWitdth = window.innerWidth;

    if (initialWindowWitdth >= 992) {
      console.log("LG OR BIGGER SCREEN");
      setBackdrop("url(/waves.svg)");
      if (
        pTag1.current! &&
        pTag2.current! &&
        pTag3.current! &&
        pTag4.current! &&
        awoldtHeader.current! &&
        awoldtDescription.current! &&
        container1.current! &&
        personalProjectHeader!
      ) {
        awoldtHeader.current.style.fontSize = "150px";
        awoldtDescription.current.style.fontSize = "40px";
        pTag1.current.style.fontSize = "22px";
        pTag2.current.style.fontSize = "22px";
        pTag3.current.style.fontSize = "22px";
        pTag4.current.style.fontSize = "22px";
        container1.current.style.paddingLeft = "150px";
        container1.current.style.paddingRight = "150px";
        personalProjectHeader.current!.style.lineHeight = "318px";
        personalProjectHeader.current!.style.margin = "0px";
      }
    } else if (initialWindowWitdth >= 768) {
      console.log("MD SCREEN");
      setBackdrop("url(/waves.svg)");
      if (
        pTag1.current! &&
        pTag2.current! &&
        pTag3.current! &&
        pTag4.current! &&
        awoldtHeader.current! &&
        awoldtDescription.current! &&
        container1.current! &&
        personalProjectHeader!
      ) {
        awoldtHeader.current.style.fontSize = "100px";
        awoldtHeader.current.style.marginTop = "45px";
        awoldtDescription.current.style.fontSize = "30px";
        pTag1.current.style.fontSize = "18px";
        pTag2.current.style.fontSize = "18px";
        pTag3.current.style.fontSize = "18px";
        pTag4.current.style.fontSize = "18px";
        container1.current.style.paddingLeft = "50px";
        container1.current.style.paddingRight = "50px";
        personalProjectHeader.current!.style.lineHeight = "318px";
        personalProjectHeader.current!.style.margin = "0px";
      }
    } else {
      console.log("SM OR SMALLER SCREEN");
      setBackdrop("url(/waves-sm.svg)");
      if (
        pTag1.current! &&
        pTag2.current! &&
        pTag3.current! &&
        pTag4.current! &&
        awoldtHeader.current! &&
        awoldtDescription.current! &&
        container1.current! &&
        personalProjectHeader!
      ) {
        awoldtHeader.current.style.fontSize = "60px";
        awoldtHeader.current.style.marginTop = "-250px";
        awoldtDescription.current.style.fontSize = "25px";
        pTag1.current.style.fontSize = "16px";
        pTag2.current.style.fontSize = "16px";
        pTag3.current.style.fontSize = "16px";
        pTag4.current.style.fontSize = "16px";
        container1.current.style.paddingLeft = "25px";
        container1.current.style.paddingRight = "25px";
        personalProjectHeader.current!.style.lineHeight = "0px";
        personalProjectHeader.current!.style.margin = "25px";
      }
    }
    responsiveLayout(
      awoldtHeader,
      awoldtDescription,
      pTag1,
      pTag2,
      pTag3,
      pTag4,
      container1,
      setBackdrop,
      personalProjectHeader
    );
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
      <Container ref={container1} style={{ color: "white" }} fluid>
        <motion.div animate={{ y: [-500, 0], opacity: [0, 1] }}>
          <h1
            style={{
              fontSize: "150px",
              display: "block",
              marginRight: "150px",
            }}
            ref={awoldtHeader}
          >
            Awoldt
          </h1>

          <p ref={awoldtDescription}>
            My name is Alex and I'm a Full Stack Web Developer from Charlotte NC
          </p>
          <Button
            style={{ marginRight: "25px", marginBottom: "25px" }}
            variant={"light"}
          >
            <a
              href={"https://github.com/awoldt"}
              target={"_blank"}
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
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
            style={{ marginRight: "25px", marginBottom: "25px" }}
          >
            <a
              href={"https://medium.com/@awoldt"}
              target={"_blank"}
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="black"
                className="bi bi-medium"
                viewBox="0 0 16 16"
                style={{ marginRight: "5px" }}
              >
                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
              </svg>
              <span>Medium</span>
            </a>
          </Button>
        </motion.div>
        <motion.div animate={{ y: [-1000, 0], opacity: [0, 1] }}>
          <Row style={{ marginTop: "100px" }} className="text-center">
            <Col lg={5} style={{ padding: "0px" }}>
              <p ref={pTag1}>
                JavaScript is my main language and is where I excel. I got
                started making basic HTML pages that had no interactivity to
                them. After that, I moved on to implementing vanilla JavaScript
                to these pages, which is where my interest in coding and web
                development took off. Some of the different technologies I'm
                proficient in are:
              </p>
              <Tech />
            </Col>
            <Col lg={2}></Col>
            <Col lg={5} style={{ padding: "0px" }}>
              <p ref={pTag2}>
                I have a deep understanding of both front-end and back-end
                development. I started learning Express.js and how web servers
                work, the concept of HTTP requests, and the basics of working
                with a database. Once I was knowledgeable in back-end code, I
                learned how to implement efficient and clean front-end code.
              </p>
              <FullStackIcons />
            </Col>
          </Row>
        </motion.div>

        <motion.div animate={{ y: [-1500, 0], opacity: [0, 1] }}>
          <Row className="text-center mt-5 justify-content-center">
            <p ref={pTag3} style={{ maxWidth: "800px" }}>
              I pick up concepts very quickly and can adapt to using any tech
              stack needed. I have extensive experience with OOP programming and
              focus on concepts before implementation.
              <br></br>
              <br></br>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="currentColor"
                className="bi bi-filetype-js"
                viewBox="0 0 16 16"
                style={{ marginRight: "25px" }}
              >
                <path
                  fill-rule="evenodd"
                  d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.186 15.29a1.176 1.176 0 0 1-.111-.449h.765a.578.578 0 0 0 .255.384c.07.049.153.087.249.114.095.028.202.041.319.041.164 0 .302-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.255-.144-.462-.193l-.619-.143a1.72 1.72 0 0 1-.539-.214 1.001 1.001 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.528-.422.224-.1.483-.149.776-.149.305 0 .564.05.78.152.216.102.383.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 0 0-.12-.258.624.624 0 0 0-.247-.181.923.923 0 0 0-.369-.068c-.217 0-.388.05-.513.152a.472.472 0 0 0-.184.384c0 .121.048.22.143.3a.97.97 0 0 0 .405.175l.62.143c.218.05.406.12.566.211.16.09.285.21.375.358.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Zm-3.104-.033A1.32 1.32 0 0 1 0 14.791h.765a.576.576 0 0 0 .073.27.499.499 0 0 0 .454.246c.19 0 .33-.055.422-.164.092-.11.138-.265.138-.466v-2.745h.79v2.725c0 .44-.119.774-.357 1.005-.236.23-.564.345-.984.345a1.59 1.59 0 0 1-.569-.094 1.145 1.145 0 0 1-.407-.266 1.14 1.14 0 0 1-.243-.39Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="currentColor"
                className="bi bi-filetype-html"
                viewBox="0 0 16 16"
                style={{ marginRight: "25px" }}
              >
                <path
                  fill-rule="evenodd"
                  d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662H6.515Zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="currentColor"
                className="bi bi-filetype-css"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.397 14.841a1.13 1.13 0 0 0 .401.823c.13.108.289.192.478.252.19.061.411.091.665.091.338 0 .624-.053.859-.158.236-.105.416-.252.539-.44.125-.189.187-.408.187-.656 0-.224-.045-.41-.134-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.566-.21l-.621-.144a.97.97 0 0 1-.404-.176.37.37 0 0 1-.144-.299c0-.156.062-.284.185-.384.125-.101.296-.152.512-.152.143 0 .266.023.37.068a.624.624 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.2-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.551.05-.776.15-.225.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.122.524.082.149.2.27.352.367.152.095.332.167.539.213l.618.144c.207.049.361.113.463.193a.387.387 0 0 1 .152.326.505.505 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.223-.013-.32-.04a.838.838 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM.806 13.693c0-.248.034-.46.102-.633a.868.868 0 0 1 .302-.399.814.814 0 0 1 .475-.137c.15 0 .283.032.398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.441 1.441 0 0 0-.489-.272 1.838 1.838 0 0 0-.606-.097c-.356 0-.66.074-.911.223-.25.148-.44.359-.572.632-.13.274-.196.6-.196.979v.498c0 .379.064.704.193.976.131.271.322.48.572.626.25.145.554.217.914.217.293 0 .554-.055.785-.164.23-.11.414-.26.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.799.799 0 0 1-.118.363.7.7 0 0 1-.272.25.874.874 0 0 1-.401.087.845.845 0 0 1-.478-.132.833.833 0 0 1-.299-.392 1.699 1.699 0 0 1-.102-.627v-.495ZM6.78 15.29a1.176 1.176 0 0 1-.111-.449h.764a.578.578 0 0 0 .255.384c.07.049.154.087.25.114.095.028.201.041.319.041.164 0 .301-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.256-.144-.463-.193l-.618-.143a1.72 1.72 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.527-.422.225-.1.484-.149.777-.149.304 0 .564.05.779.152.217.102.384.239.5.41.12.17.187.359.2.566h-.75a.56.56 0 0 0-.12-.258.624.624 0 0 0-.246-.181.923.923 0 0 0-.37-.068c-.216 0-.387.05-.512.152a.472.472 0 0 0-.184.384c0 .121.047.22.143.3a.97.97 0 0 0 .404.175l.621.143c.217.05.406.12.566.211.16.09.285.21.375.358.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Z"
                />
              </svg>
            </p>
          </Row>
        </motion.div>
      </Container>

      <Container
        style={{ backgroundColor: "white", marginTop: "100px" }}
        fluid
        className="text-center"
      >
        <Container style={{ paddingTop: "25px", paddingBottom: "50px" }}>
          <Row>
            <Col md={6}>
              <h2 ref={personalProjectHeader}>
                <u>Personal Projects</u>
              </h2>
            </Col>
            <Col md={6}>
              <p style={{ marginBottom: "50px", fontSize: "22px" }} ref={pTag4}>
                Here are a few of the projects that I've worked on in the past
                along with the main technologies used. With every new project I
                start my main goal is to learn at least one new thing. A
                complete list of all of my projects can be found on my GitHub
                page above.
                <br></br>
                <br></br>
                These were all great learning experiences and helped establish
                the foundation I now have. A complete list of all my smaller
                projects can be found at{" "}
                <a
                  href="https://github.com/awoldt/side-projects"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  this
                </a>{" "}
                GitHub repostiory.
              </p>
            </Col>
          </Row>

          <Projects />

          <p style={{ marginTop: "50px", marginBottom: "50px" }}>
            <a href="mailto:abreckwoldt23@gmail.com">
              <Button variant="danger" className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>{" "}
                Contact me
              </Button>
            </a>
          </p>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
