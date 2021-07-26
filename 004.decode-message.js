/**
 * Decode the message
 * 
 * Given an input, which is a steam of integers, convert integers that represent a character value,
 * each value can be decoded into a upper or lower case character or a punctuation symbol.
 *
 * - React character by character until the end is reached
 * - Convert value into integer 
 * - Convert integer into upper/lower case or punctuation character
 * - Track current mode (upper/lower case or punctuation)
 * 
 * Improvements
 * Refactor implementation so that only mode state is aware of U. L or P
 */

const input = "18,12312,171,763,98423,1208,216,11,500,18,241,0,32,20620,27,10";

function resolveCode(mode, value) {
  const modulo = mode !== "P" ? 27 : 9;
  return value % modulo;
}

const modeState = {
  init() {
    let mode = "U";
    return {
      update() {
        if (mode === "U") return mode = "L";
        if (mode === "L") return mode = "P";
        if (mode === "P") return mode = "U";
      },
      get() {
        return mode
      },
    }
  }
}

function resolveCharacter(mode, code) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const punctuation = ["!", "?", ",", ".", " ", ";", "\"", "'"];
  
  if (mode === "L") {
    return alphabet[code - 1].toLowerCase();
  } else if (mode === "P") {
    return punctuation[code - 1];
  } else {
    return alphabet[code - 1];
  }
};

function decodeTheMessage(input) {
  const mode = modeState.init();

  let message = "";

  // convert input stream into array of integers
  const integerCodeArray = input.split(",").map(Number);

  for (let index = 0; index < integerCodeArray.length; index++) {
    const currentMode = mode.get();

    const code = resolveCode(currentMode, integerCodeArray[index])

    if (code === 0) mode.update();
    else message += resolveCharacter(currentMode, code);
  }

  return message;
}

console.log(decodeTheMessage(input))