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
          img={"/social_capture.PNG"}
          icon={"/social-logo.svg"}
          name={"Social Platform Hub"}
          about={"Connect your favorite platforms and post to each with ease"}
          url={"https://social-media-hub.vercel.app/"}
          gitUrl={"https://github.com/awoldt/Social-Media-Hub"}
        />
        <Project
          img={"/wordlebin_capture.PNG"}
          icon={"/wordlebin_icon.ico"}
          name={"Unlimited Wordle"}
          about={"Unlimited word version of the popular game Wordle"}
          url={"https://production-pja23flz7a-uc.a.run.app/"}
          gitUrl={"https://github.com/awoldt/Unlimited-Wordle"}
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
          url={"https://github-dashboard-qogmmillka-uc.a.run.app/"}
          gitUrl={"https://github.com/awoldt/github-dashboard"}
        />
        <Project
          img={"/badrapapi_capture.PNG"}
          icon={"/badrapapi.ico"}
          name={"BadRapApi"}
          about={
            "Rest API for the worst rap lyrics of all time from all your favorite artists"
          }
          url={"https://badrapapi.com/"}
          gitUrl={"https://github.com/awoldt/BadRapApi"}
        />
        <Project
          img={"/music_capture.PNG"}
          icon={"/music.ico"}
          name={"Spotify Dashboard"}
          about={
            "Visualize your Spotify account's listening stats with Spotify API"
          }
          url={"https://spotify-dashboard-ruby.vercel.app/"}
          gitUrl={"https://github.com/awoldt/Music-Dashboard"}
        />
        <Project
          img={"/tweet_capture.PNG"}
          icon={"/search.ico"}
          name={"Tweets Filter"}
          about={
            "Returns most recent 100 tweets from any user sorted by most likes with Twitter API"
          }
          url={"https://tweets-filter.vercel.app/"}
          gitUrl={"https://github.com/awoldt/Tweets-Filter"}
        />
        <Project
          img={"/chart_capture.PNG"}
          icon={"/chart.ico"}
          name={"Chart Maker"}
          about={
            "Easily create bar, line, and radar charts and save them to computer"
          }
          url={"https://online-chart-maker.vercel.app/"}
          gitUrl={"https://github.com/awoldt/Chart-Maker"}
        />
      </Row>
    </Container>
  );
}
