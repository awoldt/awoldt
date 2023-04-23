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
          <a id="awoldt_blog_link" href={"/"} title="Return home">
            Awoldt
          </a>
          <SocialShareBtns />
        </div>

        <hr style={{marginTop: '25px'}}></hr>
        <h1 className="mt-5">
          How to Build a Basic Game of Hangman with Python
        </h1>
        <p>
          Hangman is a great beginner program to write for any language that
          will teach you fundamentals such as variables, loops, and user input
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
              <code>
                <b>
                  <u>word</u> (string)
                </b>
              </code>{" "}
              - This is the word that must be guessed. It is set to hello for
              this example but can be anything you want it to be.
            </p>
          </li>
          <li>
            <p>
              <code>
                <b>
                  <u>attempts</u> (int)
                </b>
              </code>{" "}
              - Keeps track of all the guesses a user has. For this program we
              are going to have 5 be the max number of attempts, anything over
              will result in the game ending.
            </p>
          </li>
          <li>
            <p>
              <code>
                <b>
                  <u>guess</u> (string)
                </b>
              </code>{" "}
              - This is the guess that a user submits. The length of this string
              can be less than or equal to the length of the{" "}
              <i>
                <b>word</b>
              </i>{" "}
              variable, but not greater.
            </p>
          </li>
          <li>
            <p>
              {" "}
              <code>
                <b>
                  <u>spelling</u> (dict)
                </b>
              </code>{" "}
              - This is a dictionary that stores the current character a user
              has guessed at each index of the word to guess. The keys for this
              dictionary represent the index of a string and each value
              represenets the char at said index. Look at the example below to
              better demenstrate the purpose of this variable:
            </p>
            <ul>
              <li>
                <p>
                  The current word the user needs to guess is hello.{" "}
                  <i>
                    <b>Spelling</b>
                  </i>{" "}
                  will look like this:{" "}
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
              <code>
                <b>
                  <u>index_char</u> (int)
                </b>
              </code>{" "}
              - This variable is to be used when the program first starts. It is
              used to keep track of each index of the word to be spelled.
            </p>
          </li>
        </ul>

        <p>
          The reason for this is that the underscore character is used to
          showcase to the user that the character at a specific index still
          needs to be guessed. For example, if the word is &quot;hello&quot; and
          the user has gussed &quot;learn&quot;, the spelling would represented
          as _e___. This is because the char <i>e</i> is the only character that
          aligns at the same index with the word &quot;hello&quot;
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
          Which will be represented as &quot;_____&quot;. It is blank becuase
          the user would not have guessed any characters when the game starts.
        </p>
        <p>
          Before we go any further, all of the code above is to set all the
          variables needed for the program to work along with populating each
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
          This is a basic loop that will keep the user in the game while they
          attempt to guess the word. This is set to run forever until code
          inside the loop breaks it. For this game the loop will break when
          either the user has guessed 5 times or the user has correctly guessed
          the word before the 5th attempt.
        </p>
        <p>
          At the start of the loop the program checks to see if user has guessed
          5 times. If this is true, the game is over and the user is shown the
          word. If this is not the 5th attempt, the game is going to take input
          from the user.
        </p>
        <p>Lets take a look at the logic happening inside of the else block:</p>

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
          On each loop the{" "}
          <code>
            <i>
              <b>current_spelling</b>
            </i>
          </code>{" "}
          variable will display how many characters the user has got correct and
          which ones sill need to be guessed. For example, with the word being
          &quot;hello&quot; and the user having guessed the word
          &quot;hwlto&quot;, the{" "}
          <code>
            <i>
              <b>current_spelling</b>
            </i>
          </code>{" "}
          shown would be &quot;h_l_o&quot;. This shows that the characters{" "}
          <i>h</i>,<i>l</i>, and <i>o</i> were all the correct characters at
          each specific index of the word &quot;hello&quot;. This is printed out
          to the terminal to show the user what they&quot;ve gotten correct so
          far to make it easier on each guess.
        </p>
        <p>
          The{" "}
          <code>
            <i>
              <b>guess</b>
            </i>
          </code>{" "}
          variable will be set to whatever the user inputs into the terminal.
          The <i>.lower()</i> function makes sure that all inputs from user are
          lowercase (prevents errors such as &quot;H&quot; not being equal to
          &quot;h&quot;)
        </p>
        <p>
          When the user has entered their guess the program will make sure that
          the length of this string is not greater than the{" "}
          <code>
            <i>
              <b>word</b>
            </i>
          </code>{" "}
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
          This block of code is very important, it will check each character of
          the users guess and compare it to the current word being spelled.
        </p>
        <p>
          The first condition its checking the{" "}
          <code>
            <i>
              <b>spelling</b>
            </i>
          </code>{" "}
          variable and seeing if the current character at the specified index is
          equal to &quot;_&quot;. The reasoning behind this is that any value
          that is equal to &quot;_&quot; means the user has not guessed the
          correct character or simply has not guessed yet (remember the program
          at inital run will populate all values in the{" "}
          <code>
            <i>
              <b>spelling</b>
            </i>
          </code>{" "}
          dictionary to &quot;_&quot;).
        </p>
        <p>
          If this condition is true, that means we need to compare the character
          at the current{" "}
          <code>
            <i>
              <b>index</b>
            </i>
          </code>{" "}
          in the{" "}
          <code>
            <i>
              <b>guess</b>
            </i>
          </code>{" "}
          string to the character in the{" "}
          <code>
            <i>
              <b>word</b>
            </i>
          </code>{" "}
          string. If these characters match, the{" "}
          <code>
            <i>
              <b>spelling</b>
            </i>
          </code>{" "}
          dictionary value at key{" "}
          <code>
            <i>
              <b>index</b>
            </i>
          </code>{" "}
          will be updated with this character.
        </p>

        <p>
          At the end of each iteration, the{" "}
          <code>
            <i>
              <b>index </b>
            </i>
          </code>{" "}
          variables adds 1 to keep track of the current character it needs to
          check. At the end of this loop the{" "}
          <code>
            <i>
              <b>spelling</b>
            </i>
          </code>{" "}
          dictionary will have the most up-to-date spelling of the word based on
          the users input, only keeping track of all the characters that were
          guessed correctly. Then the{" "}
          <code>
            <i>
              <b>attempts</b>
            </i>
          </code>{" "}
          variable will add 1. Remember, on each loop iteration if this is equal
          to 5, game over.
        </p>

        <hr></hr>
        <p>
          Congrats, you just created a hangman program using Python! It simply
          loops while taking user input and compares strings with each other.
          Feel free to add your own custom logic and make it work how you would
          like. For example, you could add a prompt at the end of the while loop
          that asks if a user would like to play again instead of having the
          program terminate. Remember to share this page with others if you
          found it helpful!
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
