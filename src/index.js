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
  let res = "";

  for (let i = 0; i < expr.length / 10; i++) {
    let letter = "";
    letter += expr[i * 10];
    letter += expr[i * 10 + 1];
    letter += expr[i * 10 + 2];
    letter += expr[i * 10 + 3];
    letter += expr[i * 10 + 4];
    letter += expr[i * 10 + 5];
    letter += expr[i * 10 + 6];
    letter += expr[i * 10 + 7];
    letter += expr[i * 10 + 8];
    letter += expr[i * 10 + 9];
    if (letter === "**********") {
      res += " ";
    } else {
      let key = "";
      let a = "";
      for (let j = 0; j < 5; j++) {
        if (letter[i * 2] == "0" && letter[i * 2 + 1] == "0") {
          key += "";
        } else if (letter[i] == "1" && letter[i + 1] == "0") {
          key += ".";
        } else if (letter[i] == "1" && letter[i + 1] == "1") {
          key += "-";
        }
      }
    }

    res += MORSE_TABLE[key];
  }
  return res;
}

module.exports = {
  decode,
};
