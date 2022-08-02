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
      <h1>Personal Projects</h1>
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
          style={{ color: "white", textDecoration: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fillRule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>{" "}
          Return Home
        </Link>
      </Button>
      <hr></hr>
      <Row className="mt-2">
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
          name={"Wordlebin"}
          about={"Unlimited word version of the popular game Wordle"}
          url={"https://wordlebin.com/"}
          gitUrl={"https://github.com/awoldt/Wordlebin"}
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
      </Row>
      <Row>
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
          img={"/typesnap_capture.PNG"}
          icon={"/typesnap.ico"}
          name={"Typesnap"}
          about={
            "Online speed typing test that measures your words per minute score"
          }
          url={"https://typesnap-vercel.vercel.app/"}
          gitUrl={"https://github.com/awoldt/Typesnap"}
        />
      </Row>
      <Row className="justify-content-center">
        <Project
          img={"/weather_capture.PNG"}
          icon={"/weather.ico"}
          name={"Weather App"}
          about={"Get the current weather forecast for any city in the world"}
          url={"https://weather-app-blue-two.vercel.app/"}
          gitUrl={"https://github.com/awoldt/Weather-App"}
        />
        <Project
          img={"/chart_capture.PNG"}
          icon={"/charts.ico"}
          name={"Chart Maker"}
          about={
            "Easily create bar, line, and radar charts. Simple UI and powerful tools"
          }
          url={"https://online-chart-maker.vercel.app/"}
          gitUrl={"https://github.com/awoldt/Chart-Maker"}
        />
      </Row>
    </Container>
  );
}
