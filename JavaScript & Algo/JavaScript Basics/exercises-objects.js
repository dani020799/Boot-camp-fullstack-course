

function EX1()
{
     const p1 = {
        name: "Jill",
        age: 28,
        city: "New York"
    };

    const p2 = {
        name: "Robert",
        age: 28,
        city: "New York"
    };

    
  /*
    if (p1.age === p2.age) 
        console.log("The people are the same age");
   if (p1.city === p2.city) 
        console.log("The people live in the same city");
   */
     if (p1.age === p2.age && p1.city === p2.city) 
        console.log("Jill wanted to date Robert");
     else 
        console.log("Jill wanted to date Robert, but couldn't");
    
}


function EX2()
{
     const library = {
        books: [
            { title: "To Kill a Mockingbird", author: "Harper Lee" },
            { title: "1984", author: "George Orwell" },
            { title: "The Hobbit", author: "J.R.R. Tolkien" },
            { title: "Pride and Prejudice", author: "Jane Austen" },
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
        ]
    };

    console.log(library);
}

function EX3()
{
     const reservations = {
        Bob: { claimed: false },
        Ted: { claimed: true }
    };
        const name = "Bob";
        const reservationKey=Object.keys(reservations).find(key=> key.toLowerCase() === name.toLowerCase());
        if (!reservationKey) {
        console.log("You have no reservation");
        return;
    }

       if (!reservations[reservationKey].claimed) {
        console.log("Welcome, " + reservationKey);
        reservations[reservationKey].claimed = true;
       } else 
        console.log("Hmm, someone already claimed this reservation");
       
}

function EX4()
{
    const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: true, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
  const hasOven=kitchen.hasOven;
  const fridgeWorks=kitchen.fridge.works;
  const radish=kitchen.fridge.items.find(item => item.name === "radish");
  const expiredDays= date - radish.expiryDate;
  const fixCost=kitchen.fridge.price / 2;
    let message = "";
    message='Geradines radish expired ' + expiredDays + ' days ago. ';
    if (fridgeWorks) 
        message += " Weird, considering her fridge works.";
    else
         message += " Probably because her fridge doesn't work.";
    if (hasOven)
        message += " Luckily, she has an oven to cook the radish in.";
    else
        message += " Too bad she doesn't have an oven to cook the radish in.";
    if (!fridgeWorks)
          message += ` And she'll have to pay ${fixCost} to fix the fridge.`;
     console.log(message);    
}    

function main()
{
    console.log("EX1: results:");
    EX1();
    console.log("EX2: results:");
    EX2();
    console.log("EX3: results:");
    EX3();
    console.log("EX4: results:");
    EX4();
}



main();