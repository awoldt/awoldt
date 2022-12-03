import { Container, Row, Button } from "react-bootstrap";
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Project from "./templates/project";
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
    <Container className="text-center pt-5">
      <p style={{ maxWidth: "750px", fontSize: ptagSize }} className="mx-auto">
        Here are a few of the projects I have worked on that helped establish
        the skills I now have. With every new project, my main goal is to learn
        at least one new thing.
      </p>

      <Button
        className="mb-5"
        style={{ borderRadius: "10px" }}
        variant="danger"
      >
        <Link
          to="/"
          title="Return to homepage"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
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
          img={"/badlyrics_capture.PNG"}
          icon={"/badlyrics.ico"}
          name={"LyricDump"}
          about={
            "Collection of the worst song lyrics of all time from all your favorite artists"
          }
          url={"https://lyricdump.com/"}
          gitUrl={"https://github.com/awoldt/LyricDump"}
        />
        <Project
          img={"/stockwasp_capture.PNG"}
          icon={"/stockwasp.ico"}
          name={"Stockwasp"}
          about={
            "Realtime stock price and news data along with insider trading records"
          }
          url={"https://stockwasp.com/"}
          gitUrl={"https://github.com/awoldt/StockWasp"}
        />
        <Project
          img={"/wordlebin_capture.PNG"}
          icon={"/wordlebin_icon.ico"}
          name={"Unlimited Wordle"}
          about={"Unlimited word version of the popular game Wordle"}
          url={"https://unlimited-wordle.vercel.app/"}
          gitUrl={"https://github.com/awoldt/Unlimited-Wordle"}
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
          img={"/music_capture.PNG"}
          icon={"/music_icon.ico"}
          name={"Spotify Dashboard"}
          about={
            "Visualize your Spotify account's listening stats with Spotify API"
          }
          url={"https://spotify-dashboard-ruby.vercel.app/"}
          gitUrl={"https://github.com/awoldt/Music-Dashboard"}
        />
        <Project
          img={"/social_capture.PNG"}
          icon={"/social-logo.svg"}
          name={"Social Platform Hub"}
          about={
            "Connect your Discord, Reddit, and Twitter accounts and post to each with ease"
          }
          url={"https://social-media-hub.vercel.app/"}
          gitUrl={"https://github.com/awoldt/Social-Media-Hub"}
        />
      </Row>
    </Container>
  );
}
