export const code_1 = `word = "hello"
attempts = 0
guess = ""
spelling = {}
index_char = 0`;

export const code_2 = `spelling = {
    0: "h",
    1: "e",
    2: "l",
    3: "l",
    4: "o"
  }`;

export const code_3 = `# generates underscores for each char for length of word to guess
for i in range(len(word)):
    spelling.update({index_char: "_"})
    index_char += 1`;

export const code_4 = `spelling = {
    0: "_",
    1: "_",
    2: "_",
    3: "_",
    4: "_"
}`;

export const code_5 = `while True:
    if attempts == 5:
        print("GAME OVER. THE WORD WAS '" + word.upper() + "'")
        break
    else:
        # shows current user spelling of word, highlighting all correct chars guessed
        current_spelling = ""
        for i in spelling:
            current_spelling = current_spelling + spelling[i]
        print(current_spelling)
        guess = input("Guess: ").lower()
        # GAME OVER, USER GUESSED WORD!
        if guess == word:
            print("GAME OVER. YOU WON!THE WORD WAS " + word.upper())
            break
        if len(guess) > len(word):
            print("error: length of guess is too many characters")
            continue
        else:
            index = 0
            for char in guess:
                # only compare characters if spelling is '_' at current index
                if spelling[index] == "_":
                    if char == word[index]:
                        spelling[index] = char
                index += 1
    attempts += 1`;

export const code_6 = `# shows current user spelling of word, highlighting all correct chars guessed
current_spelling = ""
for i in spelling:
    current_spelling = current_spelling + spelling[i]
print(current_spelling)
guess = input("Guess: ").lower()
# GAME OVER, USER GUESSED WORD!
if guess == word:
    print("GAME OVER. YOU WON! THE WORD WAS " + word.upper())
    break
if len(guess) > len(word):
    print("error: length of guess is too many characters")
    continue
else:
    index = 0
    for char in guess:
        # only compare characters if spelling is '_' at current index
        if spelling[index] == "_":
            if char == word[index]:
                spelling[index] = char
        index += 1`;

export const code_7 = `word = "hello"
attempts = 0
guess = ""
spelling = {}
index_char = 0
# generates underscores for length of word at game start
for i in range(len(word)):
    spelling.update({index_char: "_"})
    index_char += 1
while True:
    if attempts == 5:
        print("GAME OVER. THE WORD WAS '" + word.upper() + "'")
        break
    else:
        # shows current user spelling of word, highlighting all correct chars guessed
        current_spelling = ""
        for i in spelling:
            current_spelling = current_spelling + spelling[i]
        print(current_spelling)
        guess = input("Guess: ").lower()
        # GAME OVER, USER GUESSED WORD!
        if guess == word:
            print("GAME OVER. YOU WON!THE WORD WAS " + word.upper())
            break
        if len(guess) > len(word):
            print("error: length of guess is too many characters")
            continue
        else:
            index = 0
            for char in guess:
                # only compare characters if spelling is '_' at current index
                if spelling[index] == "_":
                    if char == word[index]:
                        spelling[index] = char
                index += 1
        attempts += 1
exit()`;

export const code_8 = `index = 0
for char in guess:
    # only compare characters if spelling is '_' at current index
    if spelling[index] == "_":
        if char == word[index]:
            spelling[index] = char
    index += 1`;

export const js_code_1 = `const express = require("express");
const app = express();
app.listen(8080, () => {
    console.log("App is listening on port 8080!");
});
app.get("/", (req, res) => {
    res.send("Hello");
});`;

export const js_code_2 = `//this page contains the link to the spotify authorization page
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
});`;

export const js_code_3 = `const queryString = require("node:querystring");
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
})`;

export const js_code_4 = `const axios = require("axios");
const data = await axios.get(
  "https://api.spotify.com/v1/me/top/tracks?limit=50",
  {
    headers: {
      Authorization: "Bearer " + {YOUR ACCESS TOKEN GOES HERE},
    },
  }
);`;

export const js_code_5 = `export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
       //the parent div above contains everything you see on a page
       //feel free to put any valid JSX code below 
    )
  }`;

export const js_code_6 = `import { useState } from "react";
import Gameover from "./gameOver";
import { isThereWinner } from "../functions";
export default function Grid() {
  const [whoseTurn, setWhoseTurn] = useState<"X" | "O">("X"); //X is default
  const [GRID_DATA, SET_GRID_DATA] = useState<(null[] | string[])[]>([
    [null, null, null], //top row
    [null, null, null], //middle row
    [null, null, null], //bottom row
  ]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winningPattern, setWinningPattern] = useState<boolean[][] | null>(
    null
  ); //the indexs of the squares to color after someone wins, null means nobody won
  const [totalMoves, setTotalMoves] = useState<number>(0);
  return (
    <>
      {!gameOver && (
        <div className="row" style={{ maxWidth: "600px" }} id="grid_row">
          {GRID_DATA.map((row: any[], rowIndex: number) => {
            return (
              <>
                {row.map((data: null | "X" | "O", dataIndex: number) => {
                  return (
                    <>
                      {data === null && (
                        <div
                          className="grid_square col-4"
                          onClick={() => {
                            //1. set new grid data based on where user clicked on grid
                            const x = [...GRID_DATA];
                            whoseTurn === "X"
                              ? (x[rowIndex][dataIndex] = "X")
                              : (x[rowIndex][dataIndex] = "O");
                            SET_GRID_DATA(x);
                            //2. check to see if anybody won based on new grid
                            isThereWinner(
                              x,
                              whoseTurn!,
                              setGameOver,
                              setWinningPattern,
                              totalMoves,
                              whoseTurn,
                              setWhoseTurn,
                              setTotalMoves
                            );
                          }}
                        >
                          {data}
                        </div>
                      )}
                      {data !== null && (
                        <div className="grid_square col-4">{data}</div>
                      )}
                    </>
                  );
                })}
              </>
            );
          })}
        </div>
      )}
      {gameOver && (
        <Gameover
          gridData={GRID_DATA}
          winningPattern={winningPattern}
          whoseTurn={whoseTurn!}
          setWhoseTurn={setWhoseTurn}
          setGridData={SET_GRID_DATA}
          setGameOver={setGameOver}
          setWinningPattern={setWinningPattern}
          setTotalMoves={setTotalMoves}
        />
      )}
    </>
  );
}
`;

export const js_code_7 = `const [whoseTurn, setWhoseTurn] = useState<"X" | "O">("X"); //X is default
const [GRID_DATA, SET_GRID_DATA] = useState<(null[] | string[])[]>([
  [null, null, null], //top row
  [null, null, null], //middle row
  [null, null, null], //bottom row
]);
const [gameOver, setGameOver] = useState<boolean>(false);
const [winningPattern, setWinningPattern] = useState<boolean[][] | null>(
  null
); //the indexs of the squares to color after someone wins, null means nobody won
const [totalMoves, setTotalMoves] = useState<number>(0);`;

export const js_code_8 = `<>
  {!gameOver && (
    {SHOW GRID IF GAME IS NOT OVER}
  )}
  {gameOver && (
    {SHOW ENDGAME MESSAGE IF GAME IS OVER}
  )}
</>`;

export const js_code_9 = `<div className="row" style={{ maxWidth: "600px" }} id="grid_row">
  {GRID_DATA.map((row: any[], rowIndex: number) => {
    return (
      <>
        {row.map((data: null | "X" | "O", dataIndex: number) => {
          return (
            <>
              {data === null && (
                <div
                  className="grid_square col-4"
                  onClick={() => {
                    //1. set new grid data based on where user clicked on grid
                    const x = [...GRID_DATA];
                    whoseTurn === "X"
                      ? (x[rowIndex][dataIndex] = "X")
                      : (x[rowIndex][dataIndex] = "O");
                    SET_GRID_DATA(x);
                    //2. check to see if anybody won based on new grid
                    isThereWinner(
                      x,
                      whoseTurn!,
                      setGameOver,
                      setWinningPattern,
                      totalMoves,
                      whoseTurn,
                      setWhoseTurn,
                      setTotalMoves
                    );
                  }}
                >
                  {data}
                </div>
              )}
              {data !== null && (
                <div className="grid_square col-4">{data}</div>
              )}
            </>
          );
        })}
      </>
    );
  })}
</div>`;

export const js_code_10 = `[
  ["O", null, "X"],
  ["X", "X", "O"],
  [null, null , "X"]
]`;

export const js_code_11 = `<div
  className="grid_square col-4"
  onClick={() => {
    //1. set new grid data based on where user clicked on grid
    const x = [...GRID_DATA];
    whoseTurn === "X"
      ? (x[rowIndex][dataIndex] = "X")
      : (x[rowIndex][dataIndex] = "O");
    SET_GRID_DATA(x);
    //2. check to see if anybody won based on new grid
    isThereWinner(
      x,
      whoseTurn!,
      setGameOver,
      setWinningPattern,
      totalMoves,
      whoseTurn,
      setWhoseTurn,
      setTotalMoves
    );
  }}
>
  {data}
</div>`;

export const js_code_12 = `export function isThereWinner(
  grid: (null[] | string[])[],
  currentTurn: "X" | "O",
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
  setWinningPattern: React.Dispatch<React.SetStateAction<boolean[][] | null>>,
  totalMoves: number,
  whoseTurn: "X" | "O",
  setWhoseTurn: React.Dispatch<React.SetStateAction<"X" | "O">>,
  setTotalMoves: React.Dispatch<React.SetStateAction<number>>
) {
  //there are 8 possible patterns to win
  if (
    grid[0][0] === currentTurn &&
    grid[1][0] === currentTurn &&
    grid[2][0] === currentTurn
  ) {
    setGameOver(true);
    setWinningPattern([
      [true, false, false],
      [true, false, false],
      [true, false, false],
    ]);
  } else if (
    grid[0][1] === currentTurn &&
    grid[1][1] === currentTurn &&
    grid[2][1] === currentTurn
  ) {
    setGameOver(true);
    setWinningPattern([
      [false, true, false],
      [false, true, false],
      [false, true, false],
    ]);
  } else if (
    grid[0][2] === currentTurn &&
    grid[1][2] === currentTurn &&
    grid[2][2] === currentTurn
  ) {
    setGameOver(true);
    setWinningPattern([
      [false, false, true],
      [false, false, true],
      [false, false, true],
    ]);
  } else if (
    grid[0][0] === currentTurn &&
    grid[0][1] === currentTurn &&
    grid[0][2] === currentTurn
  ) {
    setGameOver(true);
    setWinningPattern([
      [true, true, true],
      [false, false, false],
      [false, false, false],
    ]);
  } else if (
    grid[1][0] === currentTurn &&
    grid[1][1] === currentTurn &&
    grid[1][2] === currentTurn
  ) {
    setGameOver(true);
    setWinningPattern([
      [false, false, false],
      [true, true, true],
      [false, false, false],
    ]);
  } else if (
    grid[2][0] === currentTurn &&
    grid[2][1] === currentTurn &&
    grid[2][2] === currentTurn
  ) {
    setGameOver(true);
    setWinningPattern([
      [false, false, false],
      [false, false, false],
      [true, true, true],
    ]);
  } else if (
    grid[0][0] === currentTurn &&
    grid[1][1] === currentTurn &&
    grid[2][2] === currentTurn
  ) {
    setGameOver(true);
    setWinningPattern([
      [true, false, false],
      [false, true, false],
      [false, false, true],
    ]);
  } else if (
    grid[0][2] === currentTurn &&
    grid[1][1] === currentTurn &&
    grid[2][0] === currentTurn
  ) {
    setGameOver(true);
    setWinningPattern([
      [false, false, true],
      [false, true, false],
      [true, false, false],
    ]);
  } else {
    //nobody won, grid full
    if (totalMoves === 8) {
      setGameOver(true);
      setWinningPattern(null);
    } else {
      whoseTurn === "X" ? setWhoseTurn("O") : setWhoseTurn("X");
      setTotalMoves((prev) => (prev += 1));
    }
  }
}`;

export const js_code_13 = `export default function Gameover({
  gridData,
  winningPattern,
  whoseTurn,
  setWhoseTurn,
  setGridData,
  setGameOver,
  setWinningPattern,
  setTotalMoves,
}: {
  gridData: (null[] | string[])[];
  winningPattern: boolean[][] | null;
  whoseTurn: "X" | "O";
  setWhoseTurn: React.Dispatch<React.SetStateAction<"X" | "O">>;
  setGridData: React.Dispatch<React.SetStateAction<(null[] | string[])[]>>;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setWinningPattern: React.Dispatch<React.SetStateAction<boolean[][] | null>>;
  setTotalMoves: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <div className="text-center">
        <code
          style={{
            display: "block",
            marginBottom: "5px",
            fontSize: "30px",
            marginTop: "50px",
          }}
        >
          Game over
        </code>
        <button
          style={{
            marginBottom: "25px",
            backgroundColor: "#282c34",
            color: "#00ffff",
            border: "none",
            fontWeight: "bold",
          }}
          onClick={() => {
            setWhoseTurn("X");
            setGridData([
              [null, null, null], //top row
              [null, null, null], //middle row
              [null, null, null], //bottom row
            ]);
            setGameOver(false);
            setWinningPattern(null);
            setTotalMoves(0);
          }}
        >
          <img src="/icons/arrow-repeat.svg" alt="restart game icon" /> Play
          again
        </button>
        {winningPattern! && (
          <span
            className="text-center"
            style={{ display: "block", marginBottom: "50px" }}
          >
            The {whoseTurn}'s won!
          </span>
        )}
      </div>
      <div style={{ maxWidth: "600px" }} id="grid_row" className="row">
        {gridData.map((row: any[], rowIndex: number) => {
          return (
            <>
              {winningPattern === null && (
                <>
                  {row.map((data: null | "X" | "O", dataIndex: number) => {
                    return (
                      <>
                        <div className="grid_square col-4">{data}</div>
                      </>
                    );
                  })}
                </>
              )}
              {winningPattern! && (
                <>
                  {row.map((data: null | "X" | "O", dataIndex: number) => {
                    return (
                      <>
                        {winningPattern![rowIndex][dataIndex] && (
                          <div
                            className="grid_square col-4"
                            style={{
                              backgroundColor: "rgb(0, 255, 255, .5)",
                            }}
                          >
                            {data}
                          </div>
                        )}
                        {!winningPattern![rowIndex][dataIndex] && (
                          <div className="grid_square col-4">{data}</div>
                        )}
                      </>
                    );
                  })}
                </>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
`;

export const js_code_14 = `[
  [false, false, true],
  [false, true, false],
  [true, false , false]
]`;

export const js_code_15 = `onClick={() => {
  setWhoseTurn("X");
  setGridData([
    [null, null, null], //top row
    [null, null, null], //middle row
    [null, null, null], //bottom row
  ]);
  setGameOver(false);
  setWinningPattern(null);
  setTotalMoves(0);
}}`;

export const js_code_16 = `export default function App() {
  return (
    <div className="container-fluid">
      <div style={{ paddingTop: "100px" }} className="container">
        <Grid />
      </div>
    </div>
  );
}`;