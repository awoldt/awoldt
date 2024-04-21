import SkillsGrid from "./components/SkillsGrid";

export default function Index() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Alex Breckwoldt | Software Developer</title>
        <meta
          name="description"
          content="My name is Alex and I&#x27;m a Software Developer from Charlotte NC. My favorite language is JavaScript and I love learning new technologies."
        />
        <link rel="canonical" href="https://awoldt.dev/" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/styles/homepage.css" />
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
      </head>
      <body>
        <div
          class="container-fluid"
          id="backdrop_container"
          style="padding-bottom: 50px"
        >
          <div class="container" id="main_container">
            <main>
              <div class="row text-center" style="margin-top: 100px">
                <div class="col-xl-6" style="padding: 40px">
                  <h1>👋 Hey</h1>

                  <p class="mt-4 mx-auto" style={{maxWidth: "500px"}}>
                    My name is Alex an I'm a Software Developer from Charlotte,
                    NC. I have a passion for coding, and I'm always eager to
                    learn new technologies and frameworks.
                  </p>

                  <div id="social_btns_parent_div">
                    <div class="btn btn-light" id="github_link_btn">
                      <a
                        href="https://github.com/awoldt?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View all my code on GitHub"
                        class="prof-social-link"
                      >
                        <img
                          alt="Github icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          class="prof-social-icon"
                          style="color: transparent"
                          src="/imgs/icons/github-icon.svg"
                        />
                        <span style="color: black">GitHub</span>
                      </a>
                    </div>

                    <div class="btn btn-light" id="linkedin_link_btn">
                      <a
                        href="https://www.linkedin.com/in/awoldt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit my LinkedIn profile"
                        class="prof-social-link"
                      >
                        <img
                          alt="Linkedin icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          class="prof-social-icon"
                          style="color: transparent"
                          src="/imgs/icons/linkedin-icon.svg"
                        />
                        <span style="color: black">Follow me</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6" style="padding: 40px">
                  <SkillsGrid />
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
