

function cleanText(sentence,specialChars) {
 
  let s = sentence.toLowerCase();
  for (const ch of specialChars) s = s.split(ch).join("");
  const parts = s.split(" ").map(p => p.trim()).filter(Boolean);
  return parts;
}

function addToCounter(word, wordCounts) {
  if (wordCounts[word]) wordCounts[word] += 1;
  else wordCounts[word] = 1;
}

function countWords(sentence,specialChars) {
  const wordCounts = {};
  const words = cleanText(sentence,specialChars);
  for (let i = 0; i < words.length; i++) addToCounter(words[i], wordCounts);
  return wordCounts;
}




function main()
{

 const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
];

const capitalize = function(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
};

const capitalizeWords = function(str) {
  const words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word === "") continue;
    const capitalizedWord = capitalize(word);
    if (result !== "") result += " ";
    result += capitalizedWord;
  }
  return result;
};

const formatAge = function(age) {
  if (age < 21) return "Underage";
  if (age > 55) return "55+";
  return age.toString();
};

const formatLocation = function(city, country) {
  return capitalizeWords(city) + ", " + capitalizeWords(country);
};

const formatCatchphrase = function(phrase) {
  let text = phrase.trim();
  if (text.length === 0) return '""';

  text = capitalize(text);
  const lastChar = text[text.length - 1];
  if (lastChar !== "." && lastChar !== "!" && lastChar !== "?") {
    text += "!";
  }

  return '"' + text + '"';
};

const getSummary = function(person) {
  const name = capitalize(person.name);
  const profession = capitalizeWords(person.profession);
  const age = formatAge(person.age);
  const location = formatLocation(person.city, person.country);
  const catchphrase = formatCatchphrase(person.catchphrase);

  return (
    name +
    " is " +
    age +
    " " +
    profession +
    " from " +
    location +
    ". " +
    name +
    " loves to say " +
    catchphrase +
    "."
  );
};

for (let i = 0; i < people_info.length; i++) {
  console.log(getSummary(people_info[i]));
}
    
 const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = countWords(story,specialChars);
console.log(wordCounts);

}


main();