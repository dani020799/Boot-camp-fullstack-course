
const add = function(a, b){
    return a + b;
}

const removeBugs = function(code) {
  return code.filter(c => c !== "BUG");
}

const isEven= function(n) {
    return n % 2 == 0 ? true : false;
}

const removeAtLeastOne= function(arr)
{
     let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
}



const simplify = function(str) {
  let symbols = ["!", "#", ".", ",", "'"];
  return str.split("").filter(c => symbols.indexOf(c) == -1).join("");
}

const validate = function(arr) {
  if (!Array.isArray(arr)) {
    return { error: "Need at least one boolean" }
  }

  const bools = arr.filter(item => typeof item === "boolean")
  if (bools.length === 0) {
    return { error: "Need at least one boolean" }
  }

  const trueCount = bools.filter(item => item === true).length
  const falseCount = bools.filter(item => item === false).length

  return trueCount > falseCount
}


module.exports = { add, removeBugs, isEven, removeAtLeastOne, simplify, validate }