/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */

import CodeBlock from "@/components/CodeBlock";
import Nav from "@/components/Nav";
import "../../../style/blogs.css";
import ShareBtns from "@/components/SocialMediaShareBtns";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Using Spotify API with JavaScript",
  description:
    "Explore the process of leveraging Spotify's official API to collect insightful music data from users and elevate your application's capabilities.",
  openGraph: {
    title: "How to Use the Spotify API to Access User Data",
    description:
      "With Node.js, you can easily get started making requests to the Spotify API and gather user data",
    url: "https://awoldt.com/blogs/spotify-api-with-javascript",
    siteName: "awoldt",
    images: "https://awoldt.com/imgs/blog/spotify-api-console-response.webp",
    locale: "en_US",
    type: "article",
    publishedTime: "2023-10-30T15:14:35.437Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use the Spotify API to Access User Data",
    description:
      "Learn how to use Node.js to access user data with the Spotify API",
  },
  alternates: {
    canonical: "https://awoldt.com/blogs/spotify-api-with-javascript",
  },
};

export default function Page() {
  return (
    <div className="container-fluid">
      <Nav page="blogs" />
      <div
        className="container pt-5"
        itemScope
        itemType="https://schema.org/Blog"
      >
        <div style={{ marginBottom: "50px" }}>
          <h1 style={{ marginTop: "75px" }} itemProp="about">
            Using Spotify API with JavaScript
          </h1>
          <p className="text-secondary">
            Start accessing user’s Spotify account data with Node.js
          </p>
          <ShareBtns pageUrl="https://awoldt.com/blogs/spotify-api-with-javascript" />
        </div>

        <p>
          Most developers have at some point integrated an API in their
          application to enrich the user’s experience and allow for personal
          data to be accessed and manipulated. Spotify’s API is a fun and
          exciting way to learn how to work with an API and understand
          authorization flows. Keep in mind that this API is a little more
          difficult to work with and will require a few more steps to access the
          data. You cannot simply start sending requests and getting back
          responses.
        </p>

        <p>
          This article will only demonstrate how to connect and access the data
          in the backend, there is no frontend code here. All code is written in
          JavaScript (you can also use TypeScript if you want). You may use any
          package/module that you like working with and should be able to follow
          along easily. I will be using Express.js for the server and axios for
          making requests, as this is the easiest to set up and get something
          working as quickly as possible.
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
            <p>An understanding of Asynchronous code</p>
          </li>
          <li>
            <p>Environment variables</p>
          </li>
        </ol>

        <h2>Create a developer account</h2>
        <p>
          The first step to working with Spotify’s API is creating a developer
          account. Keep in mind that you need a Spotify account already created
          to make a developer account. This is required to access user data.
          First, log in to your Spotify account at{" "}
          <a href="https://developer.spotify.com/dashboard/" target="_blank">
            https://developer.spotify.com/dashboard/
          </a>
          , then head over to{" "}
          <a
            href="https://developer.spotify.com/dashboard/applications"
            target="_blank"
          >
            https://developer.spotify.com/dashboard/applications
          </a>{" "}
          and hit “Create app” and follow the instructions given. Give the app
          whatever name you like, as you can see I already have an app called{" "}
          <i>music-visualizer</i> created.
        </p>
        <img
          src={"/imgs/blog/spotify-dev-dashboard.png"}
          alt="spotify developer dashboard screenshot"
          className="img-fluid"
        />

        <h2>Get your Node.js server up and running</h2>
        <p>
          The next step is to get a basic server up and running. Below is my
          Express.js server running on port 8080 and sending the text “Hello”
          once someone requests the root route (‘/’). Don’t worry too much about
          what is sent back from the root route as we will change this later.
        </p>
        <CodeBlock
          code={`const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("App is listening on port 8080!");
});

app.get("/", (req, res) => {
  res.send("Hello");
});`}
        />
        <p>
          Now that there is a web server ready to take in requests, we can start
          working with the API. Keep your server code off to the side for now as
          we will come back later and start working with it.
        </p>

        <h2>Request an access token</h2>
        <p>
          This is where using the Spotify API can be confusing to work with.
          Most other APIs allow you to send a basic request and get data back,
          no tokens or credentials are needed, but here we are going to need an
          access token to get back Spotify data. Accessing user data using the
          Spotify API used OAuth 2.0 authentication flow. The process of
          accessing this token is slightly complicated so be sure to have all of
          the following steps down before attempting to access data. We will
          need the following for this to work:
        </p>

        <ol>
          <li>
            <p>Your apps client ID</p>
          </li>
          <li>
            <p>
              A redirect URL pointing back to your app that is also registered
              in your Spotify developer app’s settings (this will be explained
              later)
            </p>
          </li>
          <li>
            <p>
              Defined scopes of what personal data you want to access (will be
              explained later)
            </p>
          </li>
        </ol>
        <p>
          First off, the client ID can be found inside the dashboard page of the
          app you created in the Spotify developer account. (I blocked out my
          app’s client id for security reasons)
        </p>
        <img
          src={"/imgs/blog/spotify-client-id.png"}
          alt="spotify application client id inside settings"
          className="img-fluid"
        />
        <p>
          The next thing you need is a redirect URL for Spotify to send users
          after they have accepted or declined access to their Spotify data.
          <strong>
            This redirect HAS TO BE REGISTERED IN THE APP BEFORE ITS PUT TO USE.
          </strong>{" "}
          To do this, scroll down a bit and click the edit button at the bottom
          of the page. Once in edit mode, you can add multiple redirect urls as
          seen below. Keep in mind that having redirects to your app on
          localhost will be needed if you want to interact with the API on your
          local machine during development. For example, if you wanted to
          redirect a user back to the account page in your application, the
          redirect url would be <i>http://localhost:8080/account</i>. You can
          replace the 8080 port with whatever port your server is listening on.
        </p>
        <img
          src={"/imgs/blog/spotify-edit-redirect-urls.png"}
          alt="edit the redirect urls for your spotify application"
          className="img-fluid"
        />
        <p>
          Now that we have this out of the way, it’s time to create your own
          custom Spotify authorization link. This link will send users to
          Spotify’s website and prompt them to allow or not allow the use of
          your data. The official authorization url on Spotify’s site is
          <i>https://accounts.spotify.com/authorize</i>. You must add now add
          the following queries to the URL. If you are not sure what URL queries
          are,{" "}
          <a
            href="https://www.claravine.com/a-query-on-using-query-strings-parameters/"
            title="Learn what url queries"
          >
            here is an article that explains it well.
          </a>
        </p>
        <ul style={{ listStyle: "none" }}>
          <li>
            <h3 style={{ marginTop: "10px" }}>client_id</h3>
            <ul>
              <li>
                <p>
                  The client ID for your app. Refer to steps above to find
                  client ID.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h3>response_type</h3>
            <ul>
              <li>
                <p>
                  Don’t worry too much about what this is, just know it is
                  necessary for getting the access token. It must be set to
                  “code”.
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h3>redirect_uri</h3>
            <ul>
              <li>
                <p>
                  This is the redirect URL you added to your Spotify developers
                  settings above, and it must match EXACTLY what you saved there
                </p>
              </li>
              <li>
                <p>
                  It is also very important to remember to encode this URL so
                  that your web browser doesn’t throw an error when attempting
                  to redirect users. An encoded URL will look something like
                  this <i>http%3A%2F%2Flocalhost%3A8080%2Faccount</i>, while the
                  same decoded URL would look like{" "}
                  <i>http://localhost:8080/account</i>
                </p>
                <p>
                  <a
                    href="https://www.urlencoder.org/"
                    title="Encode and decode urls"
                  >
                    You can read more about url encoding here
                  </a>
                </p>
              </li>
            </ul>
          </li>

          <li>
            <h3>scope</h3>
            <ul>
              <li>
                <p>
                  Scopes represent the different types of data you want to
                  extract from the user.{" "}
                  <a
                    href="https://developer.spotify.com/documentation/web-api/concepts/scopes"
                    title="Learn all the scopes used for spotify api"
                  >
                    There are many different types of scopes you can use for
                    your app
                  </a>
                  , but for this tutorial, we will be focusing only on the
                  “user-top-read” scope. This scope allows our app to see all
                  the top tracks and artists a person listens to.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Now that we have all the different URL queries required for accessing
          a user’s Spotify data, we now send the user to this link. Combine all
          the queries above and you will get a URL that looks like this:
        </p>

        <CodeBlock
          code={`https://accounts.spotify.com/authorize?client_id=xxx&response_type=code&redirect_uri=xxx&scope=user-top-read`}
        />
        <p>
          (The xxx at client_id and redirect_uri should be replaced with the
          correct data)
        </p>
        <p>
          This will send the user to this web page and is where the user will
          log into their Spotify account and accept or decline access to their
          data.
        </p>
        <img
          src={"/imgs/blog/spotify-login-screen.png"}
          alt="the login screen users who want to use your app will have to sign into"
          className="img-fluid"
        />
        <h2>Use response code to retrieve access token</h2>
        <p>
          Once the user accepts or declines data, Spotify should send the user
          back to your website according to what redirect URL you specified.
          From here we must extract a special code (remember response_type=code)
          from the URL query on our server. With Express.js, it is very simple
          to extract URL queries. Use the req object and access the query
          property then the code value. This is what your server code should
          look like now:
        </p>
        <CodeBlock
          code={`//this page contains the link to the spotify authorization page
//contains custom url queries that pertain to my specific app
app.get("/", (req, res) => {
  res.send(
    "<a href='https://accounts.spotify.com/authorize?client_id=" +
      process.env.CLIENT_ID +
      "&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Faccount&scope=user-top-read'>Sign in</a>"
  );
});

//this is the page user is redirected to after accepting data use on spotify's website
//it does not have to be /account, it can be whatever page you want it to be
app.get("/account", async (req, res) => {
  console.log("spotify response code is " + req.query.code);
  res.send("account page");
});`}
        />
        <p>
          Also, take note that I utilize environment variables to hide all the
          sensitive Spotify data so that I don’t expose these keys to the entire
          internet. You don’t have to do this with your app, it is entirely
          optional. If you do decide to use environment variables, make sure to
          install the{" "}
          <a
            href="https://www.npmjs.com/package/dotenv"
            title="Download the official dotenv npm package"
          >
            dotenv NPM package
          </a>
          .
        </p>
        <p>
          Here is what’s happening on the server. The root route
          (http://localhost:8080/) has a link that once clicked sends the user
          to Spotify’s authorization page. Notice the custom URL queries in the
          href attribute. Make sure each one of these queries has information
          that relates to your app and not mine (i.e. you need to change
          client_id and redirect_uri queries). Once this is done Spotify will
          send the user back to the redirect_uri provided, specifically to the
          account route in my app’s case (http://localhost:8080/account). If
          successful, this route will now have access to the special code in the
          URL needed for the access token. Notice how the redirect URL is
          encoded in the redirect_uri parameter in the a tag href (and decoded
          in the Spotify developer app’s settings). Now we finally have the code
          that will allow us to request an access token from Spotify.
        </p>
        <h2>Exchange code for an access token</h2>
        <p>
          We will now send a POST request from our server to{" "}
          <i>https://accounts.spotify.com/api/token</i>. Use NPM to install the{" "}
          <a
            href="https://www.npmjs.com/package/axios"
            title="Download axios package from NPM"
          >
            axios
          </a>{" "}
          package so we can make HTTP requests. This POST must have a body and
          headers associated with it to work properly. The body must contain the
          following properties:
        </p>

        <h3>
          <u>Format Reqest Body</u>
        </h3>
        <ul style={{ listStyle: "none" }}>
          <li>
            <h4>grant_type</h4>
            <ul>
              <li>
                <p>Must be set to “authorization_code”</p>
              </li>
            </ul>
          </li>
          <li>
            <h4>code</h4>
            <ul>
              <li>
                <p>
                  Code Spotify sends back to your server in the URL after the
                  user accepts/declines data usage. Extract this code from URL
                  query pictured above.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h4>redirect_uri</h4>
            <ul>
              <li>
                <p>
                  Whatever redirect URL you have used up until this point must
                  match what is saved in Spotify developer app settings
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          To have this request body formatted correctly, import the
          node:querystring module. This is built into node and will be available
          without installing any external packages.
        </p>
        <p>
          Now for the headers of this POST request. There are only two
          properties associated with the header
        </p>

        <h3>
          <u>Format Reqest Headers</u>
        </h3>
        <ul style={{ listStyle: "none" }}>
          <li>
            <h4>Authorization</h4>
            <ul>
              <li>
                <p>
                  This will be a string formatted like this &quot;Basic
                  xxx&quot;. With an API key used in this example, the header
                  value would be formatted as -{" "}
                  <i>&quot;Authorization: Basic [YOUR_CODE]&quot;</i>
                </p>
              </li>
              <li>
                <p>
                  The code used in the Authorization header string is a{" "}
                  <a
                    href="https://www.base64encode.org/"
                    title="Base 64 encode your authorization header value"
                    target="_blank"
                  >
                    Base 64 encoded
                  </a>{" "}
                  string of tpye [CLIENT_ID:CLIENT_SECRET]
                </p>
              </li>
              <li>
                <p>
                  The Client Secret can be found in the same settings dashboard
                  as described in previous steps. It will look like this:{" "}
                </p>
                <img
                  src={"/imgs/blog/spotify-client-secret.png"}
                  alt="spotify client secret location in dashboard settings"
                  className="img-fluid"
                />
              </li>
            </ul>
          </li>
          <li>
            <h4>Content-Type</h4>
            <ul>
              <li>
                <p>
                  This will be simply set to{" "}
                  <i>“application/x-www-form-urlencoded”</i>
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Now that we have this POST request set up with all the necessary data,
          your code on the server should look like this:
        </p>
        <CodeBlock
          code={`const queryString = require("node:querystring");
const axios = require("axios");

app.get("/account", async (req, res) => {
  const spotifyResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      queryString.stringify({
        grant_type: "authorization_code",
        code: req.query.code,
        redirect_uri: process.env.REDIRECT_URI_DECODED,
      }),
      {
        headers: {
          Authorization: "Basic " + process.env.BASE64_AUTHORIZATION,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  
  console.log(spotifyResponse.data);
})`}
        />
        <p>
          The spotifyResponse object is the response from Spotify that contains
          the access token we need to start making API requests. Make sure to
          log this request in your console and see if it worked. In the case of
          my code, this is what happens in the console after clicking sign in on
          the root route:
        </p>

        <img
          src={"/imgs/blog/spotify-access-token.webp"}
          alt="response from spotify api that contains access code"
          className="img-fluid"
        />
        <h2>Start making API requests</h2>
        <p>
          Finally, after all of that, we have the access token required to make
          Spotify API calls. This token can be found as the access_token
          property of the spotifyResponse object above. This code will
          automatically expire after an hour, and it is up to you as a developer
          what you want to do with this token. You could potentially send
          cookies back to the browser with this access token so that users won’t
          have to continuously sign in to get data{" "}
          <i>(follow best security practices)</i>, it’s really up to you at this
          point. I will demonstrate one single API call that can be made now
          that we have this code. Let’s attempt to get the user’s top tracks.
          Send a GET request https://api.spotify.com/v1/me/top/tracks, but we
          also need a custom header for this request.
        </p>

        <h3>Authorization</h3>
        <ul>
          <li>
            <p>
              This will be set to a string formatted as{" "}
              <i>“Bearer [spotifyResponse_ACCESS_TOKEN]”</i>
            </p>
          </li>
        </ul>
        <p>The request in your server should look like this:</p>

        <CodeBlock
          code={`const axios = require("axios");

const data = await axios.get(
  "https://api.spotify.com/v1/me/top/tracks?limit=50",
  {
    headers: {
      Authorization: "Bearer " + {YOUR ACCESS TOKEN GOES HERE},
    },
  }
);`}
        />
        <p>The response will look like this in the console:</p>

        <img
          src={"/imgs/blog/spotify-api-console-response.webp"}
          alt="what request from spotify api looks like"
          className="img-fluid"
        />

        <p style={{ marginTop: "100px", marginBottom: "50px" }}>
          🎉 Congratulations, you just made your first API call to Spotify and
          retrieved actual user data! In the end, the authorization flow will be
          having the user accept data collection from your web app, Spotify
          redirecting to your site with a code that can be exchanged for an
          access token, and finally taking this access token and making API
          calls.
        </p>
      </div>
    </div>
  );
}
