import Nav from "./components/Nav";
import ProjectBlock from "./components/ProjectBlock";

export default function Projects() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Personal Projects</title>
        <meta
          name="description"
          content="Check out some of the personal projects I&#x27;ve done that helped establish the knowledge I now have"
        />
        <link rel="canonical" href="https://awoldt.dev/projects" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/styles/global.css" />
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
          style="background: linear-gradient(#001220 , #000509); padding-bottom: 75px"
        >
          <Nav currentPage="projects" />

          <div
            class="container text-center pt-5"
            style="background: linear-gradient(#001220 , #000509);"
          >
            <h1 class="text-center" style="font-family: Silkscreen-Regular">
              Personal Projects
            </h1>
            <p class="text-center" id="personal_projects_description">
              Here are some of the projects I&#x27;ve worked on that have
              established the knowledge I now have. With every new project, my
              main goal is to learn something new and improve my skills.
            </p>

            <div id="project_blocks_container">
              <ProjectBlock
                icon="/imgs/icons/stack-icon.svg"
                name="Stackapp"
                description="Visualize the techie stuff behind your app and flaunt it to others. Pick from tech categories like programming languages, databases, apis, and others. Connect your GitHub account to show off the newest changes made to the app."
                websiteUrl="https://stackapp.xyz"
                githubUrl="https://github.com/awoldt/Stackapp"
              />
              <ProjectBlock
                icon="/imgs/icons/dividend.ico"
                name="Dividome"
                description="Effortlessly explore dividend disbursements from NASDAQ, NYSE, AMEX, ASE, and CBOE-listed companies. Developed using ASP.NET, this platform maintains dividend data in a Postgres database hosted on AWS RDS. A 24-hour cron job ensures continuous updates, keeping the database synchronized with the latest information for an always current user experience."
                websiteUrl="https://dividome.com/"
                githubUrl="https://github.com/awoldt/Dividome"
              />
              <ProjectBlock
                icon="/imgs/icons/wordlebin_icon.ico"
                name="Unlimited Wordle"
                description="Unlimited word version of the popular game Wordle. There are over 5,000 words to spell, you can play as many games as you want. Built with Nextjs, reactive frontend that looks great on any screen size."
                websiteUrl="https://unlimited-wordle.vercel.app/"
                githubUrl="https://github.com/awoldt/Wordle-Clone"
              />
              <ProjectBlock
                icon="/imgs/icons/avatar-generator.svg"
                name="Avatar Generator"
                description="Create stunning avatars using OpenAI's DALL·E 2 image generation model."
                websiteUrl="https://onlineavatargenerator.com/"
                githubUrl="https://github.com/awoldt/Avatar-Generator"
              />
              <ProjectBlock
                icon="/imgs/icons/githubdashboard.ico"
                name="Repo Dashbaord"
                description="Look up any GitHub account that's public and receive a rundown of all its public repositories. Each repository in the results will show the ten most recent commits. The data is fetched using the official GitHub API."
                websiteUrl="https://git-hub-dashboard.vercel.app/"
                githubUrl="https://github.com/awoldt/github-dashboard"
              />
              <ProjectBlock
                icon="/imgs/icons/music.svg"
                name="Spotify Dashboard"
                description="See your Spotify account's listening stats using the Spotify API. Check out your favorite artists, top songs, recently played tracks, and get recommendations based on your listening habits."
                websiteUrl="https://spotify-dashboard-ruby.vercel.app/"
                githubUrl="https://github.com/awoldt/Spotify-Dashboard"
              />
              <ProjectBlock
                icon="/imgs/icons/tictactoe.svg"
                name="Tic Tac Toe"
                description="Simple tic tac toe game to play against friends with. Made with a responsive frontend using React, play as many games as you want."
                websiteUrl="https://tic-tac-toe-seven-wine.vercel.app/"
                githubUrl="https://github.com/awoldt/Tic-Tac-Toe"
              />
              <ProjectBlock
                icon="/imgs/icons/chatbot.svg"
                name="ChatBot"
                description="Have converstaions with an AI bot powered by OpenAI's text-davinci-003 text completion model."
                websiteUrl="https://ai-chatbot-iota.vercel.app/"
                githubUrl="https://github.com/awoldt/AI-Chatbot"
              />
            </div>

            <p class="mb-0">
              A complete list of all my projects and source code can be found on
              my GitHub
            </p>
            <a
              href="https://github.com/awoldt?tab=repositories"
              style="margin-right: 10px"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="btn hover-btn prof-personal-link">
                <span>GitHub</span>
              </div>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
