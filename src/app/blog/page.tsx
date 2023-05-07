import BlogPreviewDiv from "@/components/BlogPreviewDiv";
import Nav from "@/components/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Articles that will help you learn new coding skills and concepts along with many detailed exmaples",
  alternates: { canonical: "https://awoldt.com/blog" },
};

export default function BlogsPage() {
  return (
    <div className="container-fluid pt-5" style={{ backgroundColor: "green" }}>
      <div className="container">
        <Nav page="blogs" />
        <hr></hr>
        <div className="p-3">
          <h1>Blogs</h1>
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
      </div>
    </div>
  );
}
