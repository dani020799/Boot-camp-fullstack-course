const { add, removeBugs,isEven ,removeAtLeastOne,simplify,validate} = require('./code')

test("add should return sum of a + b", () => {
    let sum = add(1, 2)
    expect(sum).toBe(3)
})

test("should remove all BUGs from list of code", () => {
    let code = ["great code", "good code", "BUG", "async await awesome code", "BUG", "BUG", "general code"]
    let bugFreeCode = removeBugs(code)
    expect(bugFreeCode).not.toContain("BUG")
})


test ("isEven is working",() =>{
    expect(isEven(48)).toBeTruthy()
    expect(isEven(57)).toBeFalsy()
     expect(isEven(122)).toBeTruthy()
     expect(isEven(333)).toBeFalsy()
     

})

test("removeAtLeastOne removes at least one item", () => {
  const arr = ["a", "b", "c", "d"]
  const result = removeAtLeastOne(arr)

  expect(result.length).toBeLessThan(4)
  expect(result.length).toBeGreaterThanOrEqual(1)
})

test ("Simplify is working",()=>{
           expect(removeBugs(["good", "great"])).toEqual(["good", "great"])
           expect(removeBugs(["BUG", "BUG"])).toEqual([])


})

test("validate returns error if there are no booleans", () => {
  expect(validate([1, "a", null])).toEqual({ error: "Need at least one boolean" })
})

test("validate returns true when there are more true values than false", () => {
  expect(validate([true, false, true, true])).toBeTruthy()
})

test("validate returns false when there are not more true values than false", () => {
  expect(validate([true, false, false, false])).toBeFalsy()
})

test("validate returns false when true and false are equal", () => {
  expect(validate([true, false, true, false])).toBeFalsy()
})

test("isEven returns true for zero and false for negative odd", () => {
  expect(isEven(0)).toBeTruthy()
  expect(isEven(-3)).toBeFalsy()
})

test("isEven returns true for negative even number", () => {
  expect(isEven(-4)).toBeTruthy()
})

test("removeAtLeastOne returns shorter array for normal input", () => {
  const arr = ["a", "b", "c", "d"]
  const result = removeAtLeastOne(arr)
  expect(result.length).toBeLessThan(4)
})

test("removeAtLeastOne handles single-element array", () => {
  expect(removeAtLeastOne(["x"]).length).toBe(0)
})

test("removeAtLeastOne handles empty array", () => {
  expect(removeAtLeastOne([])).toEqual([])
})

test("simplify handles empty string", () => {
  expect(simplify("")).toBe("")
})

test("simplify keeps string with no symbols unchanged", () => {
  expect(simplify("hello")).toBe("hello")
})

test("simplify removes only the listed symbols", () => {
  expect(simplify("a,b!c#d.'")).toBe("abcd")
})
test("validate returns error if input is missing", () => {
  expect(validate()).toEqual({ error: "Need at least one boolean" })
})

test("validate ignores non-boolean values", () => {
  expect(validate([true, "true", null, false])).toBeFalsy()
})

test("validate returns false when true and false counts are equal", () => {
  expect(validate([true, false, true, false])).toBeFalsy()
})