const promptSync= require("prompt-sync");
const prompt = promptSync()

let balance =100;
let running=true;



function main()
{
    while (running)
    {
        console.log("\n=== Banking System ===");
        console.log("1) Check Balance");
         console.log("2) Deposit Money");
          console.log("3) Withdraw Money");
          console.log("4) Exit");
          const choise = prompt("Choose option (1-4): ");
          switch (choise)
          {
            case "1":
                console.log(`Current balance : ${balance}$`);
                break;
            case "2":
                 const deposit = Number(prompt("Enter amount to deposit: "));

                 if (deposit > 0) 
                 {
                   balance += deposit;
                   console.log(`New balance: $${balance}`);
                 } 
               else 
                console.log("Please enter a positive amount.");
                  break;
            case "3":
                 const withdraw = Number(prompt("Enter amount to withdraw: "));

                  if (withdraw <= 0) 
                  console.log("Please enter a positive amount.");
                 else if (withdraw > balance) 
                  console.log("Insufficient funds.");
                  else 
                  {
                   balance -= withdraw;
                   console.log(`New balance: $${balance}`);
                  }
            break;
            case "4":
                console.log("Goodbye!");
                running=false;
                break;
            default:
                console.log("Invalid choice.")
          }
    }
}


main();