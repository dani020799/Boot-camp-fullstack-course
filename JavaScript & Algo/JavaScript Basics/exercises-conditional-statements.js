
function EX1()
{
    let age =20;
    if(age >= 18)
    {
        console.log("You can vote.");
    }
    else
    {
        console.log("You cannot vote.");
    }
}


function EX2()
{
    let score=85;
     if(score >= 90)
    {
        console.log("Grade: A");
    }
    else if(score >= 80)
    {
        console.log("Grade: B");
    }
    else if(score >= 70)
    {
        console.log("Grade: C");
    }
    else if(score >= 60)
    {
        console.log("Grade: D");
    }
    else
    {
        console.log("Grade: F");
    }
}


function EX3()
{
    let temperature = 20;
    let weather = "sunny";
    if (weather === "sunny" ) {
        if (temperature > 24) 
            console.log ("Go to the beach");
        else if (temperature >= 15)
        {
            console.log("Go for a walk.");
        }
        else
            console.log("Stay indoors.");

    } else if (weather === "rainy") 
        console.log("watch a movie indoors.");
    else if (weather === "cloudy")
    {
        if (temperature > 21)
        {
            console.log("Go hiking.");
        }
        else
        {
            console.log("Visit a museum");
        }
    }

}
function EX4()
{
    let usernameLength = 6;
    let passwordLength = 7;
    let userAge = 15;
    if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13) 
     console.log("Registration successful.");
    else 
     { 
        if (usernameLength < 5)
            console.log("Username must be at least 5 characters long.");
        if (passwordLength < 8)
            console.log("Password must be at least 8 characters long.");
        if (userAge < 13)
            console.log("You must be at least 13 years old to register.");
     } 
    
}

function EX5()
{
    let customerType = "premium";
      let purchaseAmount = 150;
          let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.
        let discount = 0;
        if (customerType === "vip") {
        discount = 20;
    } else if (customerType === "premium") {
        if (dayOfWeek === 6 || dayOfWeek === 0) 
            discount = 15;
         else 
            discount = 10;
        
    } 
    else if (customerType === "regular") {
        if (purchaseAmount > 100) 
            discount = 10;
         else if (purchaseAmount > 50) 
            discount = 5;
         else 
            discount = 0;
        }
    

    console.log("Discount:", discount + "%");

        
}

function EX6()
{
    let year = 2024;
    let isLeapYear = false;
    if (year %4 === 0) 
    {
        if (year % 100 === 0)
        {
            if (year % 400 === 0)
                isLeapYear = true;
            else
                isLeapYear = false;
        } else
            isLeapYear = true;
    } else
        isLeapYear = false;

    console.log(year + " is a leap year: " + isLeapYear);
}





function main()
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
    console.log("EX6 results:");
    EX6();
}



main();