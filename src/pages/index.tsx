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
        <link rel="canonical" href="https://awoldt.com" />
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
          <>
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
                      src="/icons/github-icon.svg"
                      style={{ marginRight: "5px" }}
                      alt="Github icon"
                    />
                    <span style={{ color: "black" }}>GitHub</span>
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
                      src="/icons/linkedin-icon.svg"
                      style={{ marginRight: "5px" }}
                      alt={"Linkedin icon"}
                    />
                    <span style={{ color: "black" }}>LinkedIn</span>
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
                    style={{ textDecoration: "none", color: "black" }}
                    title="Email me"
                  >
                    <img
                      src="/icons/email-icon.svg"
                      style={{ marginRight: "5px" }}
                      alt="Email icon"
                    />
                    <span style={{ color: "black" }}>Contact</span>
                  </a>
                </div>
                <div>
                  <a
                    href={"/projects"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontWeight: "bold",
                        width: "166.165px",
                        margin: "auto",
                        marginTop: "25px",
                        borderRadius: "0px",
                        color: "white",
                      }}
                      className="btn hover-btn"
                    >
                      Projects{" "}
                      <img src="/icons/projects-icon.svg" alt="project icon" />
                    </div>
                  </a>

                  <a
                    href={"/blog"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontWeight: "bold",
                        width: "166.165px",
                        margin: "auto",
                        marginTop: "25px",
                        borderRadius: "0px",
                        color: "white",
                      }}
                      className="btn hover-btn"
                    >
                      Blogs{" "}
                      <img src="/icons/file-richtext.svg" alt="project icon" />
                    </div>
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
                  language and is where I excel. I got started implementing JS
                  to basic HTML pages and developed an interest in web
                  development soon after.
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
          </>
        </div>
      </div>
    </>
  );
}
