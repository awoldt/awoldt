/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Breadcrumb from "@/components/Breadcrumb";
import Nav from "@/components/Nav";
import Project from "@/components/Project";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Here are some of my best projects I've worked on over the years. All of these can be found on my GitHub page."
        />
        <link rel="canonical" href="https://awoldt.com/projects" />
      </Head>
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url(/waves-sm-flipped.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          transform: "scaleY(-1)",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container text-center pt-5"
          style={{ transform: "scaleY(-1)" }}
        >
          <Nav page="blogs"/>
          <hr></hr>

          <div className="row justify-content-center">
            <Project
              img={"/imgs/botbook_capture.jpg"}
              icon={"/icons/botbook_icon.svg"}
              name={"BotBook"}
              about={"An entire dictionary generated using OpenAI"}
              url={"https://botbook.dev/"}
              gitUrl={"https://github.com/awoldt/BotBook"}
            />
            <Project
              img={"/imgs/wordlebin_capture.PNG"}
              icon={"/icons/wordlebin_icon.ico"}
              name={"Unlimited Wordle"}
              about={"Unlimited word version of the popular game Wordle"}
              url={"https://unlimited-wordle.vercel.app/"}
              gitUrl={"https://github.com/awoldt/Unlimited-Wordle"}
            />
            <Project
              img={"/imgs/github_dashboard_capture.PNG"}
              icon={"/icons/githubdashboard.ico"}
              name={"Repo Dashboard"}
              about={
                "Get any public GitHub repository details along with recent commits"
              }
              url={"https://git-hub-dashboard.vercel.app/"}
              gitUrl={"https://github.com/awoldt/github-dashboard"}
            />
            <Project
              img={"/imgs/chatbot_capture.jpg"}
              icon={"/icons/chatbot.svg"}
              name={"ChatBot"}
              about={"Have converstaions with an AI bot powered by OpenAI"}
              url={"https://ai-chatbot-iota.vercel.app/"}
              gitUrl={"https://github.com/awoldt/AI-Chatbot"}
            />
            <Project
              img={"/imgs/customerdb_capture.jpg"}
              icon={"/icons/database-fill.svg"}
              name={"Mock Customer API"}
              about={
                "Simple API to fetch randomly generated fake customer data"
              }
              url={"https://mock-customer-api.vercel.app/"}
              gitUrl={"https://github.com/awoldt/Mock-Customer-API"}
            />
            <Project
              img={"/imgs/music_capture.PNG"}
              icon={"/icons/music.svg"}
              name={"Spotify Dashboard"}
              about={
                "Visualize your Spotify account's listening stats with Spotify API"
              }
              url={"https://spotify-dashboard-ruby.vercel.app/"}
              gitUrl={"https://github.com/awoldt/Music-Dashboard"}
            />

            <Project
              img={"/imgs/tictactoe_capture.png"}
              icon={"/icons/tictactoe.svg"}
              name={"Tic Tac Toe"}
              about={"Simple tic tac toe game to play against friends with"}
              url={"https://tic-tac-toe-seven-wine.vercel.app/"}
              gitUrl={"https://github.com/awoldt/Tic-Tac-Toe"}
            />
            <Project
              img={"/imgs/weather_capture.PNG"}
              icon={"/icons/weather.ico"}
              name={"Weather Search"}
              about={"Get realtime weather data for any city in the world"}
              url={"https://weather-app-blue-two.vercel.app/"}
              gitUrl={"https://github.com/awoldt/Weather-App"}
            />
            <Project
              img={"/imgs/typesnap_capture.PNG"}
              icon={"/icons/typesnap.ico"}
              name={"Typing Test"}
              about={"Online speed typing test that measures your WPM"}
              url={"https://typesnap-vercel.vercel.app/"}
              gitUrl={"https://github.com/awoldt/React-Typing-Test"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
