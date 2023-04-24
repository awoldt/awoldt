import { js_code_1 } from "@/SourceCode";
import Breadcrumb from "@/components/Breadcrumb";
import SocialShareBtns from "@/components/SocialShareBtns";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function SpotifyApiWithExpress() {
  return (
    <>
      <Head>
        <title>Using Spotify API with JavaScript</title>
        <meta
          name="description"
          content="Learn step-by-step how to access the official spotify api using express.js"
        />
        <link
          rel="canonical"
          href="https://awoldt.com/blog/spotify-api-with-express"
        />

        <meta
          property="og:title"
          content="How to Access the Official Spotify API with JavaScript"
        />
        <meta
          property="og:url"
          content="https://awoldt.com/blog/spotify-api-with-express"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://awoldt.com/imgs/spotify-api.webp"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.iife.js"
          defer
        ></script>
      </Head>
      <div className="container pt-5 blog-container">
        <div>
          <Breadcrumb blogTitle="spotify-api-with-express" page="blogs" />
          <SocialShareBtns />
        </div>

        <hr style={{ marginTop: "25px" }}></hr>
        <h1 className="mt-5">How to Access the Spotify API using JavaScript</h1>

        <p>
          Most developers have at some point integrated an API in their
          application to enrich the user&apos;s experience and allow for
          personal data to be accessed and manipulated. Spotify&apos;s API is a
          fun and exciting way to learn how to work with an API and understand
          authorization flows. Keep in mind that this API is a little more
          difficult to work with and will require a few more steps to access the
          data. You cannot simply start sending requests and getting back
          responses.
        </p>
        <p>
          This article will only demonstrate how to connect and access the data
          in the backend, there is no frontend code here. All code is written in
          JavaScript. You may use any package/module that you like working with
          and should be able to follow along easily. I will be using Express.js
          for the server and axios for making requests, as this is the easiest
          to set up and get something working as quickly as possible.
        </p>
        <p>Before we begin, make sure you have the following:</p>
        <ol>
          <li>
            <p>A Spotify account</p>
          </li>
          <li>
            <p>A Spotify developer account (explained below)</p>
          </li>
          <li>
            <p>
              A Decent understanding of web development and Node.js/Express.js
            </p>
          </li>
          <li>
            <p>Asynchronous code</p>
          </li>
          <li>
            <p>Environment variables</p>
          </li>
        </ol>
        <h2>Create a Developer Account</h2>
        <p>
          The first step to working with Spotify&apos;s API is creating a
          developer account. Keep in mind that you need a Spotify account
          already created to make a developer account. This is required to
          access user data. First, log in to your Spotify account at{" "}
          <a
            href={"https://developer.spotify.com/dashboard/"}
            target="_blank"
            title="sign into spotify"
          >
            https://developer.spotify.com/dashboard/
          </a>
          , then head over to
          <a href={"https://developer.spotify.com/dashboard/applications"}>
            https://developer.spotify.com/dashboard/applications
          </a>{" "}
          and hit “Create an app” and follow the instructions given. Give the
          app whatever name you like, as you can see I already have an app
          called music-visualizer created.
        </p>
        <img
          src="/imgs/spotify-dev-dashboard.webp"
          className="img-fluid blog-imgs"
          alt="spotify developer dashboard"
        />
        <h2>Get Your Nodejs Server Up and Running</h2>
        <p>
          The next step is to get a basic server up and running. Below is my
          Express.js server running on port 8080 and sending the text “Hello”
          once someone requests the root route (&apos;/&apos;). Don&apos;t worry
          too much about what is sent back from the root route as we will change
          this later.
        </p>
        <SyntaxHighlighter
          language="javascript"
          customStyle={{
            backgroundColor: "#002c4f",
            border: "10px solid #011e36",
          }}
          showLineNumbers
          style={dracula}
        >
          {js_code_1}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
