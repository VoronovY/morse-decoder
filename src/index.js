const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  let pointer = 0;
  for (let i = 0; i < expr.length; i += 10) {
    let curResult = "";
    let pointer = i;
    if (expr[pointer] === "*") {
      result = result + " ";
      continue;
    }
    while (pointer < i + 10) {
      if (expr[pointer] === "0") {
        pointer++;
      } else {
        const symbol = expr[pointer] + expr[pointer + 1];
        if (symbol === "10") {
          curResult += ".";
        } else {
          curResult += "-";
        }
        pointer += 2;
      }
    }
    result += MORSE_TABLE[curResult];
  }
  return result;
}

module.exports = {
  decode,
};
