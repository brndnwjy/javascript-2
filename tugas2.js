const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const trimmer = (arr, num) => {
  return arr.splice(num);
};

const wordCheck = (val) => {
  return typeof val == "string" ? true : false;
};

const amountCheck = (num) => {
  return Number.isInteger(num) && num > 0 ? true : false;
};

const searchName = (word, amount, cb) => {
  let result = [];

  !wordCheck(word) || !amountCheck(amount)
    ? console.log("Word Input Invalid")
    : "";

  for (name of names) {
    if (name.toLowerCase().includes(word.toLowerCase())) result.push(name);
  }

  if (result.length > 0) {
    console.log(`We found ${result.length} name(s)`);
    cb(result, amount);
    return console.log(result);
  }
  return console.log(`Name containing the word "${word}" can't be found`);
};

const word = "an";
const amount = 1;

searchName(word, amount, trimmer);
