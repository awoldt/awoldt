import CodeExmaple from "../../../components/CodeExample";
import SocialShareBtns from "@/components/SocialShareBtns";
import Breadcrumb from "@/components/Breadcrumb";
import OtherBlogs from "@/components/OtherBlogs";

import { Metadata } from "next";
import {
  js_code_10,
  js_code_11,
  js_code_12,
  js_code_13,
  js_code_14,
  js_code_15,
  js_code_16,
  js_code_6,
  js_code_7,
  js_code_8,
  js_code_9,
} from "@/sourceCode";

export const metadata: Metadata = {
  title: "How to build a Tic-Tac-Toe Game with Reactjs",
  description:
    "Learn how to build a basic game of tic tac toe using react js and typescript. This turorial will teach you about components, props, and state.",
  alternates: { canonical: "https://awoldt.com/blog/react-tic-tac-toe" },
};

export default function SpotifyApiWithExpress() {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div>
          <Breadcrumb blogTitle="react-tic-tac-toe" />
          <SocialShareBtns />
        </div>

        <hr style={{ marginTop: "25px" }}></hr>

        <article>
          <h1 className="mt-5">How to Build a Tic Tac Toe Game with Reactjs</h1>
          <p>
            Tic Tac Toe is a great game to build with any language for people
            who want a challenge. For this tutorial, we will use Reactjs with
            the help of TypeScript to create this game. If you don&apos;t know
            TypeScript, there&apos;s no need to worry. The implementation of
            TypeScript is mainly used for IntelliSense purposes.{" "}
            <strong>
              This tutorial assumes you have intermediate JavaScript and Reactjs
              knowledge
            </strong>
            .
          </p>
          <p>
            You can check out the entire source code for this app{" "}
            <a href={"https://github.com/awoldt/Tic-Tac-Toe"} target="_blank">
              here
            </a>
          </p>
          <h2>Initiate a React Applcaition</h2>
          <p>
            The first step for this tutorial is to initiate a new React
            application using{" "}
            <code className="terminal-code">
              npx create-react-app &#123;YOUR_APP_NAME&#125; --template
              typescript
            </code>{" "}
            command in your terminal. Notice the template flag, as this is not a
            standard React application. It is a TypeScript React app. Once this
            is done, you should have a project structure that looks like this:
          </p>
          <pre className="code-preview">
            {`/node_modules
/public
/src
.gitignore
package-lock.json
package.json
tsconfig.json`}
          </pre>

          <h2>Building the Tic Tac Toe Grid</h2>
          <p>
            This is where the majority of this tutorial will focus. The grid
            refers to the hashtag structure in which the <b>X</b>&apos;s and{" "}
            <b>O</b>&apos;s will reside during the game. For organizational
            purposes, we will create a new component called <i>Grid.tsx</i> that
            will house all the logic for this grid.
          </p>
          <img
            src="/icons/tic-tac-toe-grid.svg"
            alt="tic tac toe grid"
            className="img-fluid mb-4"
            width={200}
            height={200}
          />
          <p>This is what the grid component React code should look like:</p>

          <CodeExmaple
            language="javascript"
            code={js_code_6}
            showLines={true}
          />

          <p>
            This may look overwhelming initially, but we will break down what is
            happening in this component.
          </p>
          <h3>State Variables</h3>
          <p>
            Below are the various state variables that control the logic of how
            the component will render. Be sure to fully understand what each
            variable does, as each state dictates what is rendered on screen at
            any given moment during the game.
          </p>

          <CodeExmaple
            language="javascript"
            code={js_code_7}
            showLines={false}
          />

          <ul>
            <li>
              <b>
                <var>whoseTurn</var>
              </b>
              <p>
                This variable will track which letter is placed on the board.
                The value is initialized as &apos;X&apos;, meaning that <b>X</b>{" "}
                will always be the first letter placed on the board.
              </p>
            </li>
            <li>
              <b>
                <var>GRID_DATA</var>
              </b>
              <p>
                This represents the current placement of all <b>X</b>s and{" "}
                <b>O</b>s on the board. It is a 2D array, with each nested array
                being the rows for the grid. An example structure for this
                variable could be:
              </p>

              <CodeExmaple
                language="javascript"
                code={js_code_10}
                showLines={false}
              />

              <p>
                As you can see, three separate arrays are nested inside the
                parent array, each representing a row on the grid. A visual
                representation of this grid shown to the end user would be:
              </p>
              <img
                src="/imgs/tic-tac-toe-example.jpg"
                alt="tic tac toe board grid example"
                className="img-fluid blog-imgs"
                width={600}
                height={200}
              />
            </li>
            <li>
              <b>
                <var>gameOver</var>
              </b>
              <p>
                A simple true or false if the game has ended. This will
                determine what is shown on screen, either the grid or game over
                component.
              </p>
            </li>
            <li>
              <b>
                <var>winningPattern</var>
              </b>
              <p>
                This is similar to <var>GRID_DATA</var>. It represents the final
                grid layout of the pattern that won. This is initialized as null
                when the components render and will only change if a winner
                exists.
              </p>
            </li>
            <li>
              <b>
                <var>totalMoves</var>
              </b>
              <p>
                Keeps track of how many moves the game has had between two
                players. Each <b>X</b> and <b>O</b> placed counts as one move.
              </p>
            </li>
          </ul>
          <h3>Grid Conditional Render</h3>
          <p>
            Inside the grid component are two possible views to render based on
            the <var>gameOver</var> state variable, the actual tic tac toe grid,
            or an end-game message to the user. Notice the conditional renders:
          </p>
          <CodeExmaple
            language="javascript"
            code={js_code_8}
            showLines={true}
          />

          <p>
            The code above checks whether the <var>gameOver</var> boolean is
            true or false. If false, it will render the grid to the screen. If
            true, the end-game message will be shown. This will be evaluated on
            each render. Let&apos;s take a look at the code for when{" "}
            <var>gameOver</var> is false (render the actual grid):
          </p>

          <CodeExmaple
            language="javascript"
            code={js_code_9}
            showLines={true}
          />

          <p>
            First, we start out mapping all the values from the{" "}
            <var>GRID_DATA</var> array. Remember, this variable stores the
            placement of all the <b>X</b>s and <b>O</b>s on the grid. Inside
            each element for this map are the grid&apos;s top, middle, and
            bottom rows. Each row will also be rendered to the screen during a
            second nested loop. Each element in this second loop will be{" "}
            <b>X</b>, <b>O</b>, or <b>null</b>. A basic square block will
            showcase the string value inside if the value is either <b>X</b> or{" "}
            <b>O</b> on each loop. For example, if the value of the current
            element is <b>X</b>, it will render as this on screen:
          </p>
          <img
            src="/imgs/tic-tac-toe-x.jpg"
            alt="tic tac toe X"
            className="img-fluid mb-3 blog-imgs"
            width={600}
            height={200}
          />
          <p>If it is null, it will redner as this on screen:</p>
          <img
            src="/imgs/tic-tac-toe-null.jpg"
            alt="tic tac toe empty space"
            className="img-fluid mb-3 blog-imgs"
            width={600}
            height={200}
          />
          <p>
            When a value is null, the square will contain logic for when it is
            clicked:
          </p>
          <CodeExmaple
            language="javascript"
            code={js_code_11}
            showLines={true}
          />

          <h3>Updating Grid Squares with onClick Event</h3>
          <p>
            The onClick event will update the <var>GRID_DATA</var> variable and
            check whether there is a winner based on this new letter placement.
            The data variable (&#123;data&#125;) placed inside the div tag
            represents the letter to be placed in the current square, which can
            be either <b>X</b>, <b>O</b>, or <b>null</b>. If data is null,
            nothing will be placed, and it will be an empty square on the grid.
          </p>

          <ol>
            <li>
              <CodeExmaple
                language="javascript"
                code={`const x = [...GRID_DATA];`}
                showLines={false}
              />

              <p>
                We first will set the variable <var>x</var> to the 2D{" "}
                <var>GRID_DATA</var> array using the spread operator. Spread
                operators can be used to set variables equal to all the elements
                of any iterable such as arrays and strings among other uses.
                Those needing to better understand what a spread operator is and
                the advantages of using it can read more about it{" "}
                <a
                  href={
                    "https://www.geeksforgeeks.org/explain-the-benefits-of-spread-syntax-how-it-is-different-from-rest-syntax-in-es6/"
                  }
                  title="Read more about the spread operator"
                  target="_blank"
                >
                  here
                </a>
                .
              </p>
            </li>
            <li>
              <CodeExmaple
                language="javascript"
                code={`whoseTurn === "X"
      ? (x[rowIndex][dataIndex] = "X")
      : (x[rowIndex][dataIndex] = "O");
SET_GRID_DATA(x);`}
                showLines={false}
              />

              <p>
                Based on the <var>whoseTurn</var> state variable, we will place
                an <b>X</b> or an <b>O</b> inside the square. There is a ternary
                operator that will decide which letter to use. The{" "}
                <var>rowIndex</var> and <var>dataIndex</var> variables are
                defined from the map functions used to loop through all the rows
                of <var>GRID_DATA</var>. When using the map function on an
                iterable, an optional secondary argument can be used to return
                the index of the element in the loop. That is what is used to
                represent both <var>rowIndex</var> and <var>dataIndex</var> to
                keep track of where inside the x 2D array to place this new
                letter. Finally, we will call a setState function for{" "}
                <var>GRID_DATA</var> that will set it equal to the newly created
                2D array <var>x</var>.
              </p>
            </li>
            <li>
              <p>
                Now we will check if there is a winner based on this new grid.
                The logic is isolated in an external file and exported as a
                function called isThereWinner. This function will take eight
                separate arguments:
              </p>
              <ul>
                <li>
                  <var>x</var>
                </li>
                <li>
                  <var>whoseTurn</var>
                </li>
                <li>
                  <var>setGameOver</var>
                </li>
                <li>
                  <var>setWinningPattern</var>
                </li>
                <li>
                  <var>totalMoves</var>
                </li>
                <li>
                  <var>whoseTurn</var>
                </li>
                <li>
                  <var>setWhoseTurn</var>
                </li>
                <li>
                  <var>setTotalMoves</var>
                </li>
              </ul>
              <p className="mt-3">
                The isThereWinner function will look like this:
              </p>

              <CodeExmaple
                language="javascript"
                code={js_code_12}
                showLines={true}
              />

              <p>
                We will not go too into depth with this function. You can go
                through this code and see what it does. It will check all
                possible grid combinations to see if the <b>X</b> or <b>O</b>{" "}
                lines up three times (winning a tic tac toe game). It will also
                end the game if there are no winners.
              </p>
            </li>
          </ol>

          <p>
            At the end of mapping out all the nested arrays (
            <var>GRID_DATA</var>), the final result should be a basic tic tac
            toe grid on the screen containing all the letters placed at the
            current point of the game.
          </p>

          <h2>Building the Game Over Component</h2>
          <p>
            At some point the tic tac toe game will come to an end. Whether a
            user gets three letters in a row or neither user achieves this
            pattern, the app must alert the end of the game. It is important to
            showcase to the user that the game is over and allow them to start a
            new game if wanted. We will now create a new component called
            <i>GameOver.tsx</i> that will display this endgame message.
          </p>
          <p>
            This GameOver component will not contain the complexity of the grid
            component we built above. There will be two things this component
            will showcase either:
          </p>
          <ol>
            <li>The winning pattern highlighted</li>
            <li>Message stating that nobody won</li>
          </ol>
          <p>An example of a winning pattern would resemble this:</p>
          <img
            src="/imgs/tic-tac-toe-winning-pattern.jpg"
            alt="tic tac toe winning pattern"
            className="img-fluid mb-3 blog-imgs"
            id="winning_pattern"
            width={600}
            height={200}
          />
          <p>
            While an example of a game where nobody won would resemble this:{" "}
          </p>
          <img
            src="/imgs/tic-tac-toe-no-winner.jpg"
            alt="tic tac toe nobody won"
            className="img-fluid mb-3 blog-imgs"
            width={600}
            height={200}
          />
          <p>
            It might look like the GameOver component is doing little, but it is
            re-rendering the entire grid based on the <var>GRID_DATA</var>{" "}
            variable and highlighting the winning pattern if there is one.
            Observe the code for this component below:
          </p>

          <CodeExmaple
            language="javascript"
            code={js_code_13}
            showLines={true}
          />

          <p>
            Notice all the props being passed into this component. The{" "}
            <var>winningPattern</var> state variable from the parent component
            will be a 2D array of boolean representing the pattern that won if
            there is a winner (it can be null, in which case the grid rendered
            will not have a highlighted winning pattern). Using the{" "}
            <a href="#winning_pattern">exmaple above</a> of a winning pattern,
            the <var>winningPattern</var> array would look like this:
          </p>

          <CodeExmaple
            language="javascript"
            code={js_code_14}
            showLines={false}
          />

          <p>
            The &quot;Play again&quot; button shown will simply set the state of
            all the variables for the grid back to default values:
          </p>

          <CodeExmaple
            language="javascript"
            code={js_code_15}
            showLines={true}
          />

          <h2>Conclusion</h2>
          <p>
            Congrats, you just created a basic tic tac toe game using React! It
            is now up to you how you would like to style the grid and organize
            the project structure files. For this tutorial, we created a custom
            component called <i>Grid.tsx</i> that is imported into the main{" "}
            <i>App.tsx</i>
            React file. This grid component contains all the logic and the
            <i>GameOver.tsx</i> component. So the <i>App.tsx</i> component will
            look like this:
          </p>

          <CodeExmaple
            language="javascript"
            code={js_code_16}
            showLines={true}
          />

          <p>
            The top of the <i>Grid.tsx</i> component will have all these
            imports, remember to include them as they are needed for this game
            to function properly:
          </p>

          <CodeExmaple
            language="javascript"
            code={`import { useState } from "react";
import Gameover from "./gameOver";
import { isThereWinner } from "../functions";`}
            showLines={false}
          />

          <p>
            Play the production ready game of this app{" "}
            <a
              href={"https://tic-tac-toe-seven-wine.vercel.app/"}
              title="play tic tac toe online"
              target="_blank"
            >
              here
            </a>
          </p>
          <p>Happy coding!</p>
        </article>

        <hr></hr>
        <OtherBlogs
          blogs={[
            {
              title: "How to Build a Basic Game of Hangman with Python",
              link: "/blog/python-hangman",
            },
            {
              title: "Why Nextjs is the Best JavaScript Framework",
              link: "/blog/nextjs-best-js-framework",
            },
            {
              title: "How to Access the Spotify API using JavaScript",
              link: "/blog/spotify-api-with-express",
            },
          ]}
        />
      </div>
    </div>
  );
}
