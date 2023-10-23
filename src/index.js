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
    letter += expr[i + 7];
    letter += expr[i + 8];
    letter += expr[i + 9];
    for (let j = 0; j < 5; j++) {
      let key = "";
    }

    if (letter === "**********") {
      res += " ";
    }
  }
}

module.exports = {
  decode,
};
