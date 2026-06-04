
function EX1()
{
     const names = ["Ashley", "Donovan", "Lucas"];
    const ages  = [23, 47, 18];
    const people = [];

    for (let i = 0; i < names.length && i < ages.length; i++) 
        people.push({ name: names[i], age: ages[i] });
    

    console.log(people);
}

function EX2()
{
     const people = [
    { name: "Ashley", age: 23 },
    { name: "Donovan", age: 47 },
    { name: "Lucas", age: 18 }
     ];

     for (const person of people) 
        console.log(`${person.name} is ${person.age} years old.`);
}

function EX3()
{
    const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" }
    ];

const idx = posts.findIndex(p => p.id === 2);
     if (idx !== -1) posts.splice(idx, 1);

console.log(posts);
}

function EX4()
{
    const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === 2) {
      const comments = posts[i].comments;
      for (let j = 0; j < comments.length; j++) {
        if (comments[j].id === 3) {
          comments.splice(j, 1);
          
          break;
        }
      }
     
      break;
    }
  }

  console.log(posts);
}

function EX5()
{
    const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
     };
     const letters = Object.keys(dictionary);
      for (let i = 0; i < letters.length; i++) {
  console.log("Words that begin with " + letters[i] + ":");
  for (let j = 0; j < dictionary[letters[i]].length; j++) {
    console.log("  " + dictionary[letters[i]][j]);
  }
}


}

function  main()
{
    console.log("EX1 results:");
    EX1();
    console.log("EX2 results:");
    EX2();
    console.log("EX3 results:");
    EX3();
    console.log("EX4 results:");
    EX4();
    console.log("EX5 results:");
    EX5();
}





main();