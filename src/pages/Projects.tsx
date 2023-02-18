import { Container, Row, Button } from "react-bootstrap";
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Project from "../components/project";
export default function Projects() {
  const [ptagSize, setPtagSize] = useState<string>("");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#001220";
    document.body.style.color = "white";
    const initialWindowWitdth = window.innerWidth;

    if (initialWindowWitdth >= 768) {
      setPtagSize("22px");
    } else {
      setPtagSize("17px");
    }

    window.addEventListener("resize", () => {
      const w = window.innerWidth;
      if (w >= 768) {
        setPtagSize("22px");
      } else {
        setPtagSize("17px");
      }
    });
  }, []);

  return (
    <Container
      fluid
      style={{
        backgroundImage: "url(/waves-sm-flipped.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        transform: "scaleY(-1)",
        backgroundSize: "cover",
      }}
    >
      <Container
        className="text-center pt-5"
        style={{ transform: "scaleY(-1)" }}
      >
        <p
          style={{ maxWidth: "750px", fontSize: ptagSize }}
          className="mx-auto"
        >
          Here are a few of the projects I have worked on that helped establish
          the skills I now have. With every new project, my main goal is to
          learn at least one new thing.
        </p>

        <p
          className="my-4 mx-auto"
          style={{ maxWidth: "750px", fontSize: ptagSize }}
        >
          Visit my{" "}
          <a
            href="https://github.com/awoldt?tab=repositories"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          to view all of my public projects
        </p>

        <Button
          className="mb-5"
          style={{ borderRadius: "10px" }}
          variant="danger"
        >
          <Link
            to="/"
            title="Return to homepage"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>{" "}
            Return Home
          </Link>
        </Button>
        <hr></hr>

        <Row className="justify-content-center">
          <Project
            img={"/wordlebin_capture.PNG"}
            icon={"/wordlebin_icon.ico"}
            name={"Unlimited Wordle"}
            about={"Unlimited word version of the popular game Wordle"}
            url={"https://unlimited-wordle.vercel.app/"}
            gitUrl={"https://github.com/awoldt/Unlimited-Wordle"}
          />
          <Project
            img={"/github_dashboard_capture.PNG"}
            icon={"/githubdashboard.ico"}
            name={"Repo Dashboard"}
            about={
              "Get any public GitHub repository details along with recent commits"
            }
            url={"https://git-hub-dashboard.vercel.app/"}
            gitUrl={"https://github.com/awoldt/github-dashboard"}
          />
          <Project
            img={"/avatargenerator_capture.jpg"}
            icon={"/avatargenerator.svg"}
            name={"AI Avatar Generator"}
            about={
              "Easily generate new avatars for your online profile in seconds"
            }
            url={"https://onlineavatargenerator.com/"}
            gitUrl={"https://github.com/awoldt/AI-Avatar-Generator"}
          />
          <Project
            img={"/customerdb_capture.jpg"}
            icon={"/db-icon.svg"}
            name={"Fake Customer API"}
            about={"Simple API to fetch randomly generated fake customer data"}
            url={"https://customerapi-pd634dw2fa-uk.a.run.app/"}
            gitUrl={"https://github.com/awoldt/Mock-Customer-API"}
          />
          <Project
            img={"/music_capture.PNG"}
            icon={"/music.svg"}
            name={"Spotify Dashboard"}
            about={
              "Visualize your Spotify account's listening stats with Spotify API"
            }
            url={"https://spotify-dashboard-ruby.vercel.app/"}
            gitUrl={"https://github.com/awoldt/Music-Dashboard"}
          />
          <Project
            img={"/chatbot_capture.jpg"}
            icon={"/chatbot.svg"}
            name={"AI ChatBot"}
            about={"Have converstaions with a bot powered by OpenAI API"}
            url={"https://ai-chatbot-iota.vercel.app/"}
            gitUrl={"https://github.com/awoldt/AI-Chatbot"}
          />
          <Project
            img={"/tictactoe_capture.png"}
            icon={"/tictactoe.svg"}
            name={"Tic Tac Toe"}
            about={"Simple tic tac toe game to play against friends with"}
            url={"https://tic-tac-toe-seven-wine.vercel.app/"}
            gitUrl={"https://github.com/awoldt/Tic-Tac-Toe"}
          />
          <Project
            img={"/weather_capture.PNG"}
            icon={"/weather.ico"}
            name={"Weather Search"}
            about={"Get realtime weather data for any city in the world"}
            url={"https://weather-app-blue-two.vercel.app/"}
            gitUrl={"https://github.com/awoldt/Weather-App"}
          />
          <Project
            img={"/typesnap_capture.PNG"}
            icon={"/typesnap.ico"}
            name={"Typing Test"}
            about={"Online speed typing test that measures your WPM"}
            url={"https://typesnap-vercel.vercel.app/"}
            gitUrl={"https://github.com/awoldt/React-Typing-Test"}
          />
        </Row>
      </Container>
    </Container>
  );
}
