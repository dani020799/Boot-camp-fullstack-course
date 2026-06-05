

function EX6(arr)
{
    const seen = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      console.log("there is a duplicate");
      return;
    }
    seen.add(item);
  }
}
const employees = {
  ax01: { name: "Ray", age: 28, salary: 1300 },
  qs84: { name: "Lucius", age: 31, salary: 1840 },
  bg33: { name: "Taylor", age: 18, salary: 12700 }
};

function findEmployeeSalary(employeeID) {
  const employee = employees[employeeID];
  return employee ? employee.salary : undefined;
}



function findIndex(numbers, num) {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (numbers[mid] === num) return mid;
    if (numbers[mid] < num) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}


function EX8()
{
    let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987];
    console.log(findIndex(numbers,2630));

}

function main()
{

    console.log("In ex1: the time complexity is n and space is 1.\n");
    console.log("In ex2: the time complexity is logn and space is 1\n");
        console.log("In ex3: the time complexity is logn and space is 1\n");
        console.log("In ex4: the time complexity is n and space is n\n");
     console.log("In ex5: the time complexity is n and space is 1\n");
          console.log("In ex6: the time complexity is n and space is n\n");
          console.log("In ex6 using a map of ID the complexity is O(1)");
        console.log("EX8 : \n");
           EX8();
        console.log("EX9: Green in o(1), blue is o(n), red is o(n^2) and yellow is o(logn)");
          




}




main();