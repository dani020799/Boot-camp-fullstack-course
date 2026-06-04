const users = require('./users.json');


function EX1()
{
     let result = users.map(user => ({
    email: user.email,
    companyName: user.company.name
     }));
      console.log(result);
}

function EX2()
{
    let result = users.filter(user =>
    user.address.zipcode.startsWith("5")
  );

  console.log(result);
}

function EX3()
{
       let result = users
    .filter(user => user.address.zipcode.startsWith("5"))
    .map(user => user.id);

  console.log(result); 
}

function EX4()
{ 
    let result = users
    .map(u => u.name)
    .filter(name => name.startsWith("C"));
  console.log(result); 

}
function EX5()
{
    console.log(users.every(u => u.address.city === "South Christy"));
}


function EX6()
{
    console.log(users.find(u => u.address.suite === "Apt. 950").company.name);
}

function logUser(user) {
  console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`);
}
    
function EX7()
{
    users.forEach(logUser);
}


function EX8()
{
    const inventory = [
    { name: "Laptop", price: 899.99, quantity: 5 },
    { name: "Mouse",  price: 24.99,  quantity: 12 },
    { name: "Keyboard",price: 79.99,  quantity: 8 },
    { name: "Monitor", price: 249.99, quantity: 3 },
    { name: "Headphones",price:149.99, quantity: 6 }
      ];
    const total = inventory.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
     0 
    );
    console.log(total.toFixed(2));  
}





function EX9()
{
     let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81];
      const gradeCounts = studentScores.reduce((acc, score) => {
          let grade = "";
        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else if (score >= 70) {
            grade = "C";
        } else {
            grade = "F";
        }

      acc[grade] = (acc[grade] || 0) + 1;
      return acc;
      }, { A: 0, B: 0, C: 0, F: 0 });

      console.log(gradeCounts);


}


function EX10()
{
    let cartItems = [
    { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
    { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
    { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
    { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
    { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 }
 ]

   let taxRates = {
    clothing: 0.08,    // 8% tax
    electronics: 0.10, // 10% tax  
    food: 0.05        // 5% tax
        }
    let totalCost = cartItems.reduce((sum, item) => {
   let itemTotal = item.price * item.quantity;
   let taxRate = taxRates[item.category] || 0;
   return sum + itemTotal * (1 + taxRate);
     }, 0);

console.log(totalCost); 
}

function main()
{

 console.log("EX1:");
    EX1();
    console.log("\nEX2:");
    EX2();
    console.log("\nEX3:");
    EX3();
    console.log("\nEX4:");
    EX4();
    console.log("\nEX5:");
    EX5();
    console.log("\nEX6:");
    EX6();
    console.log("\nEX7:");
    EX7();
    console.log("\nEX8:");
    EX8();
    console.log("\nEX9:");
    EX9();
    console.log("\nEX10:");
    EX10();
}
   




main();