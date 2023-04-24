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
