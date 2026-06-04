function isEven(num)
{
    return num % 2 === 0;
}


function printodds(numbers)
{
    for (const num of numbers) 
        if (!isEven(num)) 
            console.log(num);
        
    
}

function checkExists(arr,num)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] === num)
            return true;
    }
    return false;
}

function EX4()
{
     const calculator ={
         add(a,b)
         {
             return a + b;
         },
         subtract(a,b)
         {
                return a - b;
            }
     };
     const result1 = calculator.add(20, 1);
   const result2 = calculator.subtract(30, 9);
    console.log(calculator.add(result1, result2)); // should print 42
}

function increaseByNameLength(money, name) {
    const lettersOnly = name.replace(/\s+/g, "");
  
  return money + lettersOnly.length * 100;
}

function makeRegal(name) {
  return "His Royal Highness, " + name;
}


function EX5()
{
 const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
}

function EX6()
{
     for (let n = 100; n <= 999; n++) {
    let t = n;
    let sum = 0;
    while (t > 0) {
      const d = t % 10;
      sum += d * d * d;
      t = Math.floor(t / 10);
    }
    if (sum === n) console.log(n);
  }
}
function main()
{
     console.log("EX1 results:");
      console.log(isEven(4)); 
     console.log('EX2 results:');
      printodds([1,2,3,4,5,6,7,8,9,10]);
        console.log('EX3 results:');
        console.log(checkExists([1,2,3,4,5], 3));
        console.log('EX4 results:');
        EX4();
        console.log('EX5 results:');
        EX5();
        console.log('EX6 results:');
        EX6();
}


main();