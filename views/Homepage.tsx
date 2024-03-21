import type { ArticleData } from "../utils/functions";
import ProjectBlock from "./components/ProjectBlock";
import SkillsGrid from "./components/SkillsGrid";

interface PageProps {
  articles: ArticleData[] | null;
}

export default function Index(props: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Alex Breckwoldt | Full Stack Developer</title>
        <meta
          name="description"
          content="My name is Alex and I&#x27;m a Full Stack Developer from Charlotte NC. I like to code."
        />
        <link rel="canonical" href="https://awoldt.dev/" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/styles/global.css" />
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
            <div class="row text-center mt-5">
              <div class="col-xl-6" style="padding: 40px">
                <h1>👋 Hey</h1>

                <p class="mt-4">
                  My name is Alex an I'm a Full Stack Developer from Charlotte,
                  NC. I have a passion for coding, and I'm always eager to learn
                  new technologies and frameworks. JavaScript is my favorite
                  language and the area where I excel the most.
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
                      <span style="color: black">View my Code</span>
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
            <div class="text-center">
              <h3>Projects</h3>
              <div class="row text-center justify-content-center">
                <ProjectBlock
                  name="Wordle Clone"
                  description="Unlimited word version of the popular game Wordle. There are over 5,000 words to spell, you can play as many games as you want. Features a responsive react frontend that looks great on any screen size."
                  websiteUrl="https://unlimited-wordle.vercel.app/"
                  githubUrl="https://github.com/awoldt/Wordle-Clone"
                  icon="wordle-clone.png"
                />
                <ProjectBlock
                  name="Spotify Dashboard"
                  description="See your Spotify account's listening stats using the Spotify API. Check out your favorite artists, top songs, recently played tracks, and get recommendations based on your listening habits."
                  websiteUrl="https://spotify-dashboard-ruby.vercel.app/"
                  githubUrl="https://spotify-dashboard-ruby.vercel.app/"
                  icon="music.png"
                />
                <ProjectBlock
                  name="Tic Tac Toe"
                  description="Simple tic tac toe game to play against friends with. Made with a responsive frontend using React, play as many games as you want."
                  websiteUrl="https://tic-tac-toe-seven-wine.vercel.app/"
                  githubUrl="https://github.com/awoldt/Tic-Tac-Toe"
                  icon="tictactoe.png"
                />
                <ProjectBlock
                  name="Avatar Generator"
                  description="Create stunning avatars using OpenAI's DALL·E 2 image generation model. Choose between human and animal avatars."
                  websiteUrl="https://onlineavatargenerator.com/"
                  githubUrl="https://github.com/awoldt/Avatar-Generator"
                  icon="avatar.png"
                />
                <ProjectBlock
                  name="Repo Dashbaord"
                  description="Look up any GitHub account that's public and receive a rundown of all its public repositories. Each repository in the results will show the ten most recent commits. The data is fetched using the official GitHub API."
                  websiteUrl="https://git-hub-dashboard.vercel.app/"
                  githubUrl="https://github.com/awoldt/github-dashboard"
                  icon="githubdashboard.png"
                />
                <ProjectBlock
                  name="Dividome"
                  description="Explore dividend payments from NASDAQ, NYSE, AMEX, ASE, and CBOE-listed companies. A 24-hour cron job ensures continuous updates, keeping the database synchronized with the latest dividend data."
                  websiteUrl="https://dividome.com/"
                  githubUrl="https://github.com/awoldt/Dividome"
                  icon="dividome.png"
                />
                <ProjectBlock
                  name="Stackapp"
                  description="A platform to visualize your application's tech stack"
                  websiteUrl="https://stackapp.xyz/"
                  githubUrl="https://github.com/awoldt/Stackapp"
                  icon="stackapp.png"
                />
                <ProjectBlock
                  name="AI ChatBot"
                  description="Have converstaions with an AI bot powered by OpenAI's GPT-3.5 Turbo text completion model."
                  websiteUrl="https://ai-chatbot-iota.vercel.app/"
                  githubUrl="https://github.com/awoldt/AI-Chatbot"
                  icon="chat.png"
                />
                <ProjectBlock
                  name="HTML Scraper"
                  description="Extract information from HTML tags on any website, detailing attributes like href, inner text, class, src, and others"
                  websiteUrl="https://prod-server-z3f5iiejda-uk.a.run.app"
                  githubUrl="https://github.com/awoldt/HTML-Scraper"
                  icon="html-scrape.png"
                />
              </div>
              <div style="background-color: white; width: 200px; padding: 10px; margin: auto; margin-top: 25px; border-radius: 10px">
                <a
                  href="https://github.com/awoldt?tab=repositories"
                  style="color: black;"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View all projects
                </a>
              </div>
            </div>
            {props.articles === null && (
              <p>There was an error while fetching articles :(</p>
            )}
            {props.articles !== null && (
              <div class="text-center" style="margin-top: 100px">
                <h2>Recent Articles</h2>
                <div id="recent_article_links">
                  {props.articles.map((x) => {
                    return (
                      <div>
                        <a href={`/articles/${x.file_name}`}>
                          <span>{x.name}</span>
                        </a>
                      </div>
                    );
                  })}
                  <div style="background-color: white; width: 200px; padding: 10px; margin: auto; margin-top: 25px">
                    <a href="/articles" style="color: black">
                      View all articles
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
