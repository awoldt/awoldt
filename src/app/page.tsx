import Image from "next/image";
import Tech from "../components/Tech";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awoldt | Full Stack Developer",
  description:
    "My name is Alex and I'm a Full Stack Developer from Charlotte NC. I like to code.",
  alternates: { canonical: "https://awoldt.com/" },
};

export default function Home() {
  return (
    <div className="container-fluid" id="backdrop_container">
      <div className="container" id="main_container">
        <>
          <div className="row text-center">
            <div className="col-xl-6" style={{ marginBottom: "50px" }}>
              <h1 id="awoldt_header">Awoldt</h1>
              <div className="btn btn-light" id="github_link_btn">
                <a
                  href={"https://github.com/awoldt"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  title="View all my code on GitHub"
                  className="prof-social-link"
                >
                  <Image
                    src="/icons/github-icon.svg"
                    className="prof-social-icon"
                    alt="Github icon"
                    width={20}
                    height={20}
                  />
                  <span style={{ color: "black" }}>GitHub</span>
                </a>
              </div>
              <div className="btn btn-light" id="linkedin_link_btn">
                <a
                  href={"https://www.linkedin.com/in/awoldt/"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  title="Visit my LinkedIn profile"
                  className="prof-social-link"
                >
                  <Image
                    src="/icons/linkedin-icon.svg"
                    className="prof-social-icon"
                    alt={"Linkedin icon"}
                    width={20}
                    height={20}
                  />
                  <span style={{ color: "black" }}>LinkedIn</span>
                </a>
              </div>
              <div className="btn btn-light" id="email_link_btn">
                <a
                  href={"mailto:abreckwoldt23@gmail.com"}
                  className="prof-social-link"
                  title="Email me"
                >
                  <Image
                    src="/icons/email-icon.svg"
                    className="prof-social-icon"
                    alt="Email icon"
                    width={20}
                    height={20}
                  />
                  <span style={{ color: "black" }}>Contact</span>
                </a>
              </div>
              <div>
                <a href={"/blogs"}>
                  <div className="btn hover-btn prof-personal-link">
                    <span>Blogs</span>{" "}
                  </div>
                </a>
                <a href={"/projects"}>
                  <div className="btn hover-btn prof-personal-link">
                    <span>Projects</span>{" "}
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              {" "}
              <p className="mx-auto" id="awoldt_description">
                My name is Alex and I&#39;m a Full Stack Developer from
                Charlotte NC. I enjoy coding in my freetime and love learning
                new technologies and frameworks. JavaScript is my favorite
                language and is where I excel. I got started implementing JS to
                basic HTML pages and developed an interest in web development
                soon after.
              </p>
            </div>
          </div>

          <div id="tech_frame_banner">
            <h2 style={{ marginBottom: "25px" }}>Skills</h2>
            <Tech />
          </div>
        </>
      </div>
    </div>
  );
}
