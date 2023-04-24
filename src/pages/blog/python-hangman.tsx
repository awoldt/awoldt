import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {
  code_1,
  code_2,
  code_3,
  code_4,
  code_5,
  code_6,
  code_7,
  code_8,
} from "@/SourceCode";
import Head from "next/head";
import SocialShareBtns from "@/components/SocialShareBtns";
import Breadcrumb from "@/components/Breadcrumb";

export default function PythonHangman() {
  return (
    <>
      <Head>
        <title>How to Build a Basic Game of Hangman with Python</title>
        <meta
          name="description"
          content="Learn step-by-step how to write a basic python program that lets users play hangman."
        />
        <link rel="canonical" href="https://awoldt.com/blog/python-hangman" />

        <meta
          property="og:title"
          content="Building a Basic Game of Hangman with Python"
        />
        <meta
          property="og:url"
          content="https://awoldt.com/blog/python-hangman"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://awoldt.com/imgs/python-hangman.png"
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
          <Breadcrumb blogTitle="Python-Hangman" page="blogs" />
          <SocialShareBtns />
        </div>

        <hr style={{ marginTop: "25px" }}></hr>
        <h1 className="mt-5">
          How to Build a Basic Game of Hangman with Python
        </h1>
        <p>
          Hangman is a great beginner program to write for any language that
          will teach you fundamentals such as variables, loops, and user input,
          among other things. This tutorial assumes you understand the basics of
          Python.
        </p>

        <p>
          If you would simply like to copy the source code, click{" "}
          <a href="#source_code">here</a>
        </p>

        <p>First off, let&apos;s start with this block of code:</p>
        <SyntaxHighlighter
          language="python"
          customStyle={{
            backgroundColor: "#002c4f",
            border: "10px solid #011e36",
          }}
          showLineNumbers
          style={dracula}
        >
          {code_1}
        </SyntaxHighlighter>
        <p>
          Here is a breakdown of what these variables represent and what this
          code will do:
        </p>
        <ul>
          <li>
            <p>
              <var>
                <b>
                  <u>word</u>
                </b>{" "}
              </var>{" "}
              (string) - This is the word that must be guessed. It is set to
              hello for this example, but it can be anything you want.
            </p>
          </li>
          <li>
            <p>
              <var>
                <b>
                  <u>attempts</u>
                </b>{" "}
              </var>{" "}
              (int) - Keeps track of a user&apos;s guesses. For this program, we
              will have 5 be the max number of attempts. Anything over will
              result in the game ending.
            </p>
          </li>
          <li>
            <p>
              <var>
                <b>
                  <u>guess</u>
                </b>
              </var>{" "}
              (string) - This is the guess that a user submits. The length of
              this string can be less than or equal to the length of the{" "}
              <var>word</var> variable but not greater.
            </p>
          </li>
          <li>
            <p>
              {" "}
              <var>
                <b>
                  <u>spelling</u>
                </b>
              </var>{" "}
              (dict) - This is a dictionary that stores the current character a
              user has guessed at each index of the word to guess. The keys
              represent the index of a string and each value represents the char
              at said index. Look at the example below to better demonstrate the
              purpose of this variable:
            </p>
            <ul>
              <li>
                <p>
                  The current word the user needs to guess is hello.{" "}
                  <var>spelling</var> will look like this:{" "}
                </p>
                <SyntaxHighlighter
                  language="python"
                  customStyle={{
                    backgroundColor: "#002c4f",
                    border: "10px solid #011e36",
                  }}
                  style={dracula}
                >
                  {code_2}
                </SyntaxHighlighter>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <var>
                <b>
                  <u>index_char</u>
                </b>
              </var>{" "}
              (int) - This variable is to be used when the program first starts.
              It is used to keep track of each index of the word to be spelled.
            </p>
          </li>
        </ul>

        <p>
          This is because the underscore character is used to showcase to the
          user that the character at a specific index still needs to be guessed.
          For example, if the word is &quot;hello&quot; and the user has guessed
          &quot;learn&quot;, the spelling would be represented as _e___. This is
          because the character <i>e</i> is the only character that aligns at
          the same index with the word &quot;hello&quot;.
        </p>
        <p>
          The code below will loop for the length of the word to be guessed and
          set each value of the{" "}
          <i>
            <b>spelling</b>
          </i>{" "}
          dictionary to &quot;_&quot;:
        </p>

        <SyntaxHighlighter
          language="python"
          customStyle={{
            backgroundColor: "#002c4f",
            border: "10px solid #011e36",
          }}
          style={dracula}
          showLineNumbers
        >
          {code_3}
        </SyntaxHighlighter>
        <p>
          This will result in{" "}
          <i>
            <b>spelling</b>
          </i>{" "}
          to be set as:
        </p>

        <SyntaxHighlighter
          language="python"
          customStyle={{
            backgroundColor: "#002c4f",
            border: "10px solid #011e36",
          }}
          style={dracula}
        >
          {code_4}
        </SyntaxHighlighter>
        <p>
          Which will be represented as &quot;_____&quot;. It is blank because
          the user would not have guessed any characters when the game starts.
        </p>
        <p>
          Before we go any further, all of the code above is to set all the
          variables needed for the program to work, along with populating each
          value of the{" "}
          <i>
            <b>spelling</b>
          </i>{" "}
          dictionary to &quot;_&quot;. Nothing too crazy.
        </p>
        <hr></hr>
        <p>Next, lets focus on this block of code: </p>

        <SyntaxHighlighter
          language="python"
          customStyle={{
            backgroundColor: "#002c4f",
            border: "10px solid #011e36",
          }}
          style={dracula}
          showLineNumbers
        >
          {code_5}
        </SyntaxHighlighter>

        <p>
          This loop will keep the user in the game while they attempt to guess
          the word. This will run forever until the code inside the loop breaks
          it. For this game, the loop will break when the user has not guessed
          the word within five attempts or correctly before the 5th attempt.
        </p>
        <p>
          At the start of the loop, the program checks to see if the user has
          guessed five times. If this is true, the game ends. If not, the game
          will take input from the user.
        </p>
        <p>
          Let&apos;s take a look at the logic happening inside of the else
          block:
        </p>

        <SyntaxHighlighter
          language="python"
          customStyle={{
            backgroundColor: "#002c4f",
            border: "10px solid #011e36",
          }}
          style={dracula}
          showLineNumbers
        >
          {code_6}
        </SyntaxHighlighter>
        <p>
          On each loop, the <var>current_spelling</var> variable will display
          how many characters the user has got correct and which ones still need
          to be guessed. For example, with the word being &quot;hello&quot; and
          the user has guessed the word &quot;hwlto&quot;, the{" "}
          <var>current_spelling</var>
          shown would be &quot;h_l_o&quot;. This indicates that the characters
          h,l, and o were all correct at each specific index of the word
          &quot;hello&quot;. This is printed out to the terminal to show the
          user what they&apos;ve got correct so far to make it easier on each
          guess.
        </p>
        <p>
          The <var>guess</var> variable will be set to whatever the user inputs
          into the terminal. The <i>.lower()</i> function makes sure that all
          inputs from the user are lowercase (prevents errors such as
          &quot;H&quot; not being equal to &quot;h&quot;)
        </p>
        <p>
          When the user has entered their guess, the program will ensure that
          the length of this string is not greater than the <var>word</var>{" "}
          variable. If not, there is another loop that will execute:
        </p>

        <SyntaxHighlighter
          language="python"
          customStyle={{
            backgroundColor: "#002c4f",
            border: "10px solid #011e36",
          }}
          style={dracula}
          showLineNumbers
        >
          {code_8}
        </SyntaxHighlighter>
        <p>
          This code block is critical. It will check each character of the
          user&apos;s guess and compare it to the current word being spelled.
        </p>
        <p>
          The first condition is checking the <var>spelling</var> key at each
          index and seeing if the current character is equal to &quot;_&quot;.
          The reasoning behind this is that any value that is equal to
          &quot;_&quot; means the user has not guessed the correct character or
          has not guessed the character at the specific index yet (remember the
          program will populate all values in the <var>spelling</var> dictionary
          to &quot;_&quot; when it first runs).
        </p>
        <p>
          If this condition is true, we must compare the character at the
          current index in the <var>guess</var> string to the character in the{" "}
          <var>word</var> string. If these characters match, the{" "}
          <var>spelling</var> dictionary value at the key <var>index</var> will
          be updated with this character.
        </p>

        <p>
          At the end of each iteration, the <var>index</var> variable add 1 to
          keep track of the current character it needs to check. At the end of
          this loop, the <var>spelling</var> dictionary will have the most
          up-to-date spelling of the word based on the user&apos;s input, only
          keeping track of all the correctly guessed characters. Then the{" "}
          <var>attempts</var> variable will add 1. Remember, on each loop
          iteration, if <var>attempts</var> is equal to 5, game over.
        </p>

        <hr></hr>
        <p>
          Congrats, you just created a hangman program using Python! It simply
          loops while taking user input and compares strings with each other.
          Feel free to add your custom logic and add more to the program. For
          example, add a prompt at the end of the while loop that asks if a user
          would like to play again instead of having the program terminate.
          Remember to share this page with others if you found it helpful!
        </p>

        <p id="source_code">
          <b>Here is the source code in its entirety:</b>
        </p>
        <SyntaxHighlighter
          language="python"
          customStyle={{
            backgroundColor: "#002c4f",
            border: "10px solid #011e36",
          }}
          style={dracula}
          showLineNumbers
        >
          {code_7}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
