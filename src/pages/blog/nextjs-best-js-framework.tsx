/* eslint-disable @next/next/no-img-element */
import { js_code_5 } from "@/sourceCode";
import Breadcrumb from "@/components/Breadcrumb";
import SocialShareBtns from "@/components/SocialShareBtns";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import OtherBlogs from "@/components/OtherBlogs";

export default function NextjsBestJsFramework() {
  return (
    <>
      <Head>
        <title>How to Build a Basic Game of Hangman with Python</title>
        <meta
          name="description"
          content="Nextjs is the best javascript framework for building full stack applications"
        />
        <link
          rel="canonical"
          href="https://awoldt.com/blog/nextjs-best-js-framework"
        />

        <meta
          property="og:title"
          content="Why Nextjs is the Best JavaScript Framework"
        />
        <meta
          property="og:url"
          content="https://awoldt.com/blog/nextjs-best-js-framework"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://awoldt.com/imgs/next-js-logo.png"
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
          <Breadcrumb blogTitle="Nextjs-best-js-framework" page="blogs" />
          <SocialShareBtns />
        </div>

        <hr style={{ marginTop: "25px" }}></hr>
        <img
          className="img-fluid mt-4"
          src="/imgs/next-js-logo.png"
          alt="nextjs logo"
        />
        <h1 className="mt-5">Why Nextjs is the Best JavaScript Framework</h1>
        <p>
          If you know React, think about learning Nextjs. Nextjs is React code
          with many extra features to help you quickly develop secure, reliable,
          and efficient production-ready applications.
        </p>
        <h2>What is Nextjs?</h2>
        <p>
          Nextjs is a JavaScript framework built on top of Reactjs, enabling
          developers to create applications that feature server-side rendering,
          incremental static regeneration, and automatic routing. If you know
          React, you can start using Nextjs immediately.
        </p>
        <h2>What&apos;s Different with Nextjs?</h2>
        <p>
          Assuming you are using <code>npx create-react-app</code> when creating
          a new React project, multiple features are missing out of the box by
          default. React is meant to be built upon and acts as a foundation.
          There are thousands of packages to utilize that will enhance your
          React project and let you customize how it works. This is where Nextjs
          stands out, as it comes with everything you need by default, with no
          external packages required.
        </p>
        <h2>How to Create a Nextjs Project</h2>
        <p>
          Like React, the npx command is used to create a new Nextjs project.
          Run <code>npx create-next-app &#123;project_name&#125;</code> to
          create a new app. Enter a name for the project in the bracket section
          shown above. This command will create a new folder with the specified
          name inside the current directory.
        </p>
        <h2>Structure of a Nextjs Project</h2>
        <p>
          The default folder of a Nextjs project after all modules have been
          installed will look like this:
        </p>
        <pre className="code-preview">
          {`/node_modules
/pages
/public
/styles
.eslintrc.json
.gitignore
next.config.js
package-lock.json
package.json
README.md`}
        </pre>
        <h2>Best Features of Nextjs</h2>
        <p>
          Here are some reasons to consider using Nextjs for your next big
          project. These are just a few of the many benefits this framework
          offers, be sure to check out the{" "}
          <a
            href={"https://nextjs.org/docs"}
            title="Visit Nextjs official documentation"
            target="_blank"
          >
            official documentation
          </a>{" "}
          for all the features.
        </p>
        <h3>Server Side Rendering (SSR)</h3>
        <p>
          This is one of Next&apos;s best features that{" "}
          <code>create-react-app</code> could never do. This will allow the HTML
          page sent back to the user to be generated on your server instead of
          the client&apos;s browser. Typically, all the contents of a page
          rendered with React are generated on the user&apos;s machine. The
          server you request the page from will send back a blank HTML page that
          will execute JavaScript on the client to populate the page with data.
          This isn&apos;t good for SEO and will rely on the user&apos;s machine
          to run most of the code. With Nextjs, the page being sent back has
          already been rendered with all the appropriate data. Now when the user
          requests a page, no client rendering is needed as the page already has
          content on it.
        </p>
        <p>
          While using a React default project, if you would like to make
          requests to a server, it had to be done from the frontend using AJAX
          or some similar technology. With server-side rendering, requests can
          be made before the HTML page is ever sent to the client. This is
          especially helpful for apps that require back-end code to be executed
          before a page is sent back to the client.
        </p>
        <h3>Routing</h3>
        <p>
          Routing in a default React app requires external libraries to function
          appropriately and uses client-side routing instead of server-side
          routing. Client-side routing doesn&apos;t send a separate request to
          load a new page, it simply manually changes the URL in the address bar
          to mimic a legit page change, but the new content you see is a new
          React component mounted on the screen.
        </p>
        <p>
          <code>/pages</code> is the folder that contains all the routes on your
          app; this is where most of your code will go. The pages folder should
          include the following folders/files:
        </p>
        <pre className="code-preview">
          {`/pages
     /api
          hello.js
     _app.js
     index.js`}
        </pre>
        <p>
          <code>index.js</code> is the root route and will act as the homepage
          for your app. For example, assume your app is running on{" "}
          <i>http://localhost:3000</i>. Visiting <i>http://localhost:3000/</i>{" "}
          will send back the index route while requesting{" "}
          <i>http://localhost:8080/about</i> will send back the about page. The
          index.js file will look like this:
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
          {js_code_5}
        </SyntaxHighlighter>
        <p>
          As you can see, this file is simply a react component called Home
          which is the default export of the file. Nextjs will automatically
          render an HTML page at the specified route. You can create as many
          routes as you want and easily organize them within this pages folder.
        </p>
        <h3>Static Site Generation (SSG)</h3>
        <p>
          Server side rendering (SSR) is not the only method for fetching data
          for a Nextjs page. Static site generation will allow the
          project&apos;s pages to be generated at runtime by pre-rendering each
          page with props. This can be used to create thousands of pages
          simultaneously when the app is built. Each pre-rendered page is static
          HTML ready to be served with fast response times. This is ideal for
          quickly creating a large volume of pages, each with unique data.
        </p>
        <h3>Incremental Static Regeneration (ISR)</h3>
        <p>
          Static pages, as described above, can be updated regularly with
          Incremental Static Regeneration. You can generate a specific page
          without having to re-render the entire site. This could be useful for
          having static pages for better SEO while also being able to routinely
          change data on that page.
        </p>
        <p>
          For example, let&apos;s say there&apos;s a website for displaying the
          top records for a specific sport, such as soccer. This site keeps
          track of all the goals scored by each player and lists them from most
          goals to least. This data is constantly changing, and because of this,
          this page will need to be updated regularly. Instead of rerendering
          the page with static site generation (SSG) every time a new goal is
          scored or sending a newly created page with server side rendering
          (SSR), we could utilize incremental static regeneration to update
          these stats on a custom interval. Once the Nextjs server detects it is
          time to rerender a page, it will fetch all the new data and then save
          this latest version as the static HTML to be served. This page will
          remain unchanged until it is time to rerender based on the interval
          set.
        </p>

        <p>
          Overall Nextjs is my favorite JavaScript framework to build apps. I
          have several projects built with it and have had great experiences
          using this framework. I&apos;d highly recommend it to anyone who wants
          to build out complex backend services that use React in the frontend.
        </p>
        <hr></hr>
        <OtherBlogs
          blogs={[
            {
              title: "How to Access the Spotify API using JavaScript",
              link: "/blog/spotify-api-with-express",
            },
            {
              title: "How to Build a Basic Game of Hangman with Python",
              link: "/blog/python-hangman",
            },
          ]}
        />
      </div>
    </>
  );
}
