/* eslint-disable @next/next/no-img-element */
import Tech from "@/components/Tech";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Awoldt | Full Stack Developer</title>
        <meta
          name="description"
          content="My name is Alex and I like web development. You can find my GitHub and LinkedIn pages along with some of my best projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <div
        className="container-fluid"
        id="backdrop_container"
        style={{
          backgroundSize: "cover",
          paddingTop: "400px",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <div
          className="container"
          style={{ color: "white", animation: "fadein 1s" }}
        >
          <div className="row text-center">
            <div className="col-xl-6" style={{ marginBottom: "50px" }}>
              <h1
                style={{
                  display: "block",
                  fontFamily: "Silkscreen-Regular",
                }}
                id="awoldt_header"
              >
                Awoldt
              </h1>
              <div
                className="btn btn-light"
                style={{
                  marginRight: "5px",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
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
              </div>
              <div
                className="btn btn-light"
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
              </div>
              <div
                className="btn btn-light"
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
              </div>
              <div
                style={{
                  borderRadius: "10px",
                  display: "block",
                  fontWeight: "bold",
                  width: "fit-content",
                  margin: "auto",
                  marginTop: "25px",
                }}
                className="btn btn-danger"
              >
                <a
                  href="/projects"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Projects <img src="/code-icon.svg" alt="code icon" />
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              {" "}
              <p
                style={{
                  marginBottom: "25px",
                  paddingTop: "25px",
                }}
                className="mx-auto"
                id="awoldt_description"
              >
                My name is Alex and I&#39;m a Full Stack Developer from
                Charlotte NC. I enjoy coding in my freetime and love learning
                new technologies and frameworks. JavaScript is my favorite
                language and is where I excel. I got started implementing JS to
                basic HTML pages and developed an interest in web development
                soon after.
              </p>
            </div>
          </div>

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
        </div>
      </div>
    </>
  );
}
