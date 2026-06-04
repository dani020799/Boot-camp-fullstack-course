


function EX1()
{
    const push = function () {
  console.log("pushing it!")
   } 

  const pull = function () {
  console.log("pulling it!")
   }
   pushPull(push);
   pushPull(pull);

}


function pushPull(fn) {

     fn();
}

function EX2()
{
    const returnTime = function (time) {
  console.log('The current time is: ' + time)
         }
         const getTime = function (callback) {
      const time = new Date();
     callback(time);
        }

       getTime(returnTime);
}

function EX3()
{
    const displayData = function (alertDataFunc, logDataFunc, data) {
      alertDataFunc(data);
     logDataFunc(data);
    };
    const logData = function (data) {
      console.log(data);
    }

 displayData(console.error, logData, "I like to party")

}

function EX4()
{
     const sumtree= (a,b,c) => a+b+c;
     console.log(sumtree(1,2,3));
}

 function EX5()
 {
     const capitalize = str =>
      str[0].toUpperCase() + str.slice(1).toLowerCase();

           console.log(capitalize("bOb")); // Bob
             console.log(capitalize("TAYLOR")); // Taylor
             console.log(capitalize("feliSHIA")); // Felishia
 }

 function EX6()
 {
     const determineWeather = temp => {
      if (temp > 25) {
            return "hot"
          }
            return "cold"
       }

       const commentOnWeather = temp => console.log("It's " + determineWeather(temp));
       commentOnWeather(30) //returns "It's hot"
       commentOnWeather(22) //returns "It's cold"
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
}



main();