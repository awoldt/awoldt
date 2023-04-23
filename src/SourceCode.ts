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
