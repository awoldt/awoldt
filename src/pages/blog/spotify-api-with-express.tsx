/* eslint-disable @next/next/no-img-element */
import { js_code_1, js_code_2, js_code_3, js_code_4 } from "@/SourceCode";
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
          content="https://awoldt.com/imgs/spotify-api.png"
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
          <i>
            Note that Spotify has updated its developer website since this
            article was written. The design is different, but the concepts are
            still the same.
          </i>
        </p>

        <p>
          Spotify&apos;s API is a fun and exciting way to learn how to work with
          an API and understand authorization flows. Most developers have, at
          some point, integrated an API in their application to enrich the
          user&apos;s experience and allow personal data to be accessed and
          manipulated. Remember that this API is more difficult to work with and
          will require a few more steps to access the data. You cannot simply
          start sending requests and getting back responses.
        </p>
        <p>
          This article will only demonstrate how to connect and access the data
          in the backend. There is no frontend code here. All code to access
          this API is written in JavaScript. You may use any package/module that
          you like working with and should be able to follow along easily. I
          will use Express.js for the server and Axios for making requests, as
          this is the easiest to set up and get something working as quickly as
          possible.
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
          Creating a developer account is the first step to working with
          Spotify&apos;s API. Remember that you need a Spotify account to make a
          developer account. A Spotify developer account is required to access
          user data. First, log in to your Spotify account at{" "}
          <a
            href={"https://developer.spotify.com/dashboard/"}
            title="Log into spotify developer account"
            target="_blank"
          >
            https://developer.spotify.com/dashboard/
          </a>
          , then head over to{" "}
          <a
            href={"https://developer.spotify.com/dashboard/applications"}
            title="Create an app in the spotify developer dashboard"
            target="_blank"
          >
            https://developer.spotify.com/dashboard/applications
          </a>{" "}
          and hit &quot;Create an app&quot; and follow the instructions given.
          Give the app whatever name you like. As you can see, I already have an
          app called music-visualizer created.
        </p>
        <img
          src="/imgs/spotify-dev-dashboard.webp"
          className="img-fluid blog-imgs"
          alt="spotify developer dashboard"
        />
        <h2>Get Your Nodejs Server Up and Running</h2>
        <p>
          The next step is to get a simple server up and running. Below is my
          Express.js server running on port 8080 and sending the text
          &quot;Hello&quot; once someone requests the root route
          (&quot;/&quot;).
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
        <p>
          Now that a web server is ready to take in requests, we can start
          working with the API. Keep your server code off to the side for now,
          as we will return later and start working on it.
        </p>
        <h2>Request Access Token</h2>
        <p>
          Obtaining an access token is where using the Spotify API can be
          confusing. Most other APIs allow you to send a basic request and get
          data back. No tokens or credentials are needed, but here we need an
          access token to regain Spotify data. Accessing this token is slightly
          complicated, so be sure to complete all of the following steps before
          attempting to access data. We will need the following for this to
          work:
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
          First, the client ID can be found on the dashboard page of the app you
          created in the Spotify developer account.
        </p>
        <img
          src="/imgs/spotify-clientid.webp"
          className="img-fluid blog-imgs"
          alt="spotify client id found on dashboard"
        />
        <p>
          Next, you need a redirect URL for Spotify to send users after
          accepting or declining access to their account data. To do this, go to
          your app dashboard, as shown in the picture below, and click the edit
          settings button. This redirect{" "}
          <strong>
            HAS TO BE REGISTERED IN THE APP BEFORE IT&apos;S PUT TO USE
          </strong>
          .
        </p>
        <img
          src="/imgs/spotify-edit-settings.webp"
          className="img-fluid blog-imgs"
          alt="get to application settings edit button at top right"
        />
        <p>
          Because we are building this app for development purposes, ALL
          redirect URLs will lead back to localhost. So, for example, if you
          want the user redirected to the /account route on your Node.js server,
          the redirect URL would look like http://localhost:8080/account. Now
          enter the URL redirect of your choice in the redirect URIs section of
          this menu and click add. (Throughout this article, I refer to this as
          redirect URL, not URI, but these two words can be used
          interchangeably).
        </p>
        <img
          src="/imgs/spotify-redirect-url.webp"
          className="img-fluid blog-imgs"
          alt="changing the redirect urls in spotify developer settings"
        />
        <p>
          Once you have added the redirect URL, scroll to the bottom of this
          menu and click the green Save button to save your changes.
        </p>
        <p>
          Now that we have this out of the way, it&apos;s time to create your
          custom Spotify authorization link. This link will send users to
          Spotify&apos;s website and prompt them to allow or not allow the use
          of their data. Add a href attribute set to
          https://accounts.spotify.com/authorize?, and now add the following
          queries to the URL. If you need clarification on what url queries are,{" "}
          <a
            href={
              "https://www.claravine.com/a-query-on-using-query-strings-parameters/"
            }
            title="Learn more on what url quries are"
            target="_blank"
          >
            here
          </a>{" "}
          is an article that explains it well.
        </p>
        <ul>
          <li>
            <b>
              <u>client_id</u>
            </b>
            <p>Whatever your client ID is from the step above</p>
          </li>
          <li>
            <b>
              <u>response_type</u>
            </b>
            <p>
              Don&apos;t worry too much about what this is, just know it is
              necessary for getting the access token. It must be set to “code”.
            </p>
          </li>
          <li>
            <b>
              <u>redirect_uri</u>
            </b>
            <p>
              This is the redirect URL you added to your Spotify
              developer&apos;s settings above must match{" "}
              <strong>EXACTLY</strong> what you saved there
            </p>
            <p>
              It is also crucial to remember to encode this URL so that your web
              browser doesn&apos;t throw an error when attempting to redirect
              users. An encoded URL will look something like this{" "}
              <i>http%3A%2F%2Flocalhost%3A8080%2Faccount</i> while the same
              decoded URL would look like <i>http://localhost:8080/account</i>.
            </p>
            <p>
              Ensure the redirect URL you put in your Spotify developer app is
              decoded, and the redirect_uri query is encoded! Don&apos;t worry
              if the encoded version of your redirect URL doesn&apos;t match
              what you saved in your Spotify developer app&apos;s settings. As
              long as this URL decoded matches, it will work. Use{" "}
              <a
                href={"https://www.urlencoder.org/"}
                title="Encode and decode your urls online"
                target="_blank"
              >
                this
              </a>{" "}
              site to encode and decode URLs.
            </p>
          </li>
          <li>
            <b>
              <u>scope</u>
            </b>
            <p>
              Scopes represent the different types of data you want to extract
              from the user. There are many types of scopes to use here, but we
              will focus only on the &quot;user-top-read&quot; scope for this
              tutorial. This scope allows our app to see all the top tracks and
              artists a person listens to.
            </p>
          </li>
        </ul>
        <p>
          Now that we have all the URL queries required for accessing a
          user&apos;s Spotify data, we send the user to this link. Combine all
          the queries above, and you will get a URL that looks like this:{" "}
          <b>
            https://accounts.spotify.com/authorize?client_id=&#123;YOUR_SPOTIFY_CLIENT_ID&#125;&response_type=code&redirect_uri=&#123;YOUR_REDIRECT_URI_ENCODED&#125;&scope=user-top-read
          </b>
        </p>

        <p>
          This will send the user to this web page and is where the user will
          log into their Spotify account and accept or decline access to their
          data.
        </p>
        <img
          src="/imgs/spotify-signin.webp"
          className="img-fluid blog-imgs"
          alt="spotify sign in page user is redirected to"
        />
        <h2>Use Response Code to Retrieve Access Token</h2>
        <p>
          Once the user accepts or declines data, Spotify should send the user
          back to your website according to what redirect URL you specified.
          From here, we must extract a unique code (remember response_type=code)
          from the URL query on our server. With Express.js, it is
          straightforward to extract URL queries. Use the req object and access
          the query property, then the code value. This is what your server code
          should look like now:
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
          {js_code_2}
        </SyntaxHighlighter>
        <p>
          Also, note that I utilize environment variables to hide all the
          sensitive Spotify data so that I don&apos;t expose these keys to the
          entire internet. You don&apos;t have to do this with your app. It is
          optional (although hard coding sensitive token data into your source
          code is not the best idea). If you do decide to use environment
          variables, make sure to install the{" "}
          <a
            href={"https://www.npmjs.com/package/dotenv"}
            title="Install the official dotenv npm package"
          >
            dotenv
          </a>{" "}
          NPM package.
        </p>
        <p>
          Here is what&apos;s happening on the server. The root route
          (http://localhost:8080/) has a link that sends the user to
          Spotify&apos;s authorization page once clicked. Notice the custom URL
          queries in the href attribute. Ensure each query has information
          related to your app, not mine (i.e., you must change client_id and
          redirect_uri queries). Once this is done, Spotify will send the user
          back to the redirect_uri provided, specifically to the account route
          in my app&apos;s case (http://localhost:8080/account). If successful,
          this route will now have access to the unique code needed for the
          access token. Notice how the redirect URL is encoded in the
          redirect_uri parameter in the a tag href (and decoded in the Spotify
          developer app&apos;s settings). Now we finally have the code that will
          allow us to request an access token from Spotify.
        </p>
        <h2>Exchange Code for an Access Token</h2>
        <p>
          We will now send a POST request from our server to
          https://accounts.spotify.com/api/token. Use NPM to install the{" "}
          <a
            href={"https://www.npmjs.com/package/axios"}
            title="Install the official axios npm package"
            target="_blank"
          >
            Axios
          </a>{" "}
          package and use this for the request. This POST must have a body and
          headers to work correctly. The body must contain the following
          properties:
        </p>
        <ul>
          <li>
            <b>
              <u>grant_type</u>
            </b>
            <p>Must be set to “authorization_code”</p>
          </li>
          <li>
            <b>
              <u>code</u>
            </b>
            <p>
              Code Spotify sends back to your server in the URL after the user
              accepts/declines data usage. Extract this code from URL query
              pictured above.
            </p>
          </li>
          <li>
            <b>
              <u>redirect_uri</u>
            </b>
            <p>
              Whatever redirect URL you have used up until this point must match
              what is saved in Spotify developer app settings
            </p>
          </li>
        </ul>
        <p>
          To have this request body formatted correctly, import the{" "}
          <i>node:querystring</i> module. This is built into node and will be
          available without installing external packages.
        </p>
        <p>
          Now for the headers of this POST request. There are only two
          properties associated with the header
        </p>
        <ul>
          <li>
            <b>
              <u>Authorization</u>
            </b>
            <p>
              This will be equal to a string that looks like “Basic xxx”. The
              xxx part must be equal to a base64 encoded string that is
              formatted like <i>client_id:client_secret</i>. The client id and
              secret can be found in the dashboard featured in the image below.
            </p>
            <img
              src="/imgs/spotify-clientdashboard-keys.webp"
              className="img-fluid blog-imgs"
              alt="get both the client id and the client secret from the developers dashboard"
            />
            <p>
              We now must return to our Spotify developer app dashboard and get
              the client&apos;s secret. This will be right below where the
              client ID is shown. Now combine the client ID and the client
              secret in the format client_ID:client_secret. An example of what
              this might look like could besdfgf934798dsf7sdf:sdfg798dsf98f7sd.
              Now with this string, go to this site and encode the string you
              just created in base64 format. The final result of this header
              would look something like this{" "}
              <i>
                Basic
                c2RmZ2Y5MzQ3OThkc2Y3c2RmOnNkZmc3OThkc2Y5OGY3c2Q6c2RmamhsODlzZDdmOThzYWRoZmFsc2RpZmt1YXM2ZA==
              </i>
              .
            </p>
          </li>
          <li>
            <b>
              <u>Content-Type</u>
            </b>
            <p>
              This will be simply set to “application/x-www-form-urlencoded”
            </p>
          </li>
        </ul>
        <p>
          Now that we have this POST request set up with all the necessary data,
          your code on the server should look like this:
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
          {js_code_3}
        </SyntaxHighlighter>
        <p>
          The spotifyResponse variable is the response from Spotify containing
          the access token we need to make API requests for user data. Log this
          request in your console and see if it worked. In the case of my code,
          this is what happens in the console after clicking sign-in on the root
          route:
        </p>
        <img
          src="/imgs/spotify-response.webp"
          className="img-fluid blog-imgs"
          alt="the json formatted response spotify will send back to console"
        />
        <h2>Start making API requests</h2>
        <p>
          Finally, after all that, we have the access token required to make
          Spotify API calls. This token can be found as the access_token
          property of the spotifyResponse variable above. This code will
          automatically expire after an hour, and it is up to you as a developer
          what you want to do with this token. You could send cookies back to
          the browser with this access token so that users won&apos;t have to
          continuously sign in to get data. It&apos;s really up to you at this
          point. I will demonstrate one API call that can be made now that we
          have this code. Let&apos;s attempt to get the user&apos;s top tracks.
          Send a GET request https://api.spotify.com/v1/me/top/tracks, but we
          also need a custom header for this request.
        </p>
        <ul>
          <li>
            <b>
              <u>Authorization</u>
            </b>
            <p>
              This will be set to a string formatted as “Bearer &#123;access
              token&#125;”. Use the access token returned from the
              spotifyResponse variable.
            </p>
          </li>
        </ul>
        <p>The request in your server should look like this:</p>
        <SyntaxHighlighter
          language="javascript"
          customStyle={{
            backgroundColor: "#002c4f",
            border: "10px solid #011e36",
          }}
          showLineNumbers
          style={dracula}
        >
          {js_code_4}
        </SyntaxHighlighter>
        <p>The response will look like this in the console:</p>
        <img
          src="/imgs/spotify-api-call.webp"
          className="img-fluid blog-imgs"
          alt="what data returned from spotify api call will look like"
        />
        <p>
          Congratulations, you just made your first API call to Spotify and
          retrieved user data! Ultimately, the authorization flow will be having
          the user accept data collection from your web app, Spotify redirecting
          to your site with a code that can be exchanged for an access token,
          and finally, taking this access token and making API calls. Be sure to
          share this article if you found it helpful!
        </p>
      </div>
    </>
  );
}
