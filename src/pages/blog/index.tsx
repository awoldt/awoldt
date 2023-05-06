import BlogPreviewDiv from "@/components/BlogPreviewDiv";
import Breadcrumb from "@/components/Breadcrumb";
import Head from "next/head";

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Here are some blogs that might help you and gives ideas for future personal projects"
        />
        <link rel="canonical" href="https://awoldt.com/blog" />
      </Head>
      <div className="container pt-5">
        <Breadcrumb blogTitle={null} page="blogs" />
        <hr></hr>
        <ol>
          <li>
            <BlogPreviewDiv
              title="Build a Basic Hangman Game with Python"
              description="Take user input and compare it to a word that needs to be guessed"
              href={"/blog/python-hangman"}
            />
          </li>
          <li>
            <BlogPreviewDiv
              title="Using Spotify API with JavaScript"
              description="Setup a basic express server and start making requests to Spotify API and accessing user data"
              href={"/blog/spotify-api-with-express"}
            />
          </li>
          <li>
            <BlogPreviewDiv
              title="Why Nextjs is the Best JavaScript Framework"
              description="Nextjs is the best full stack framework for developers who love using Reactjs"
              href={"/blog/nextjs-best-js-framework"}
            />
          </li>
          <li>
            <BlogPreviewDiv
              title="How to Build a Tic Tac Toe Game with Reactjs"
              description="Learn how to build a tic tac toe game using Reactjs to play with your friends"
              href={"/blog/react-tic-tac-toe"}
            />
          </li>
        </ol>
      </div>
    </>
  );
}
