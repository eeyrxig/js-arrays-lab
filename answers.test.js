const answers = require(`./answers`);

// Question 1
test('Question 1: average', () => {
  expect(answers.average([11, 12, 13])).toBe(12);
  expect(answers.average([15, 16, 17, 18, 19, 20])).toBe(17.5);
  expect(answers.average([101, 4, 78])).toBe(61);
});

// Question 2
test(`Question 2: combineArrays`, () => {
  let test1 = answers.combineArrays(["Ann", true, 4], [null, "Reuben"]);
  console.log("jfioasjfiosaf", test1)
  expect(Array.isArray(test1)).toBe(true);
  expect(test1.includes("Ann")).toBe(true);
  expect(test1.includes(true)).toBe(true);
  expect(test1.includes(4)).toBe(true);
  expect(test1.includes(null)).toBe(true);
  expect(test1.includes("Reuben")).toBe(true);

  let test2 = answers.combineArrays([4, 5, 6], [1, 2, 3]);
  expect(Array.isArray(test2)).toBe(true);
  expect(test2.includes(4)).toBe(true);
  expect(test2.includes(5)).toBe(true);
  expect(test2.includes(6)).toBe(true);
  expect(test2.includes(1)).toBe(true);
  expect(test2.includes(2)).toBe(true);
  expect(test2.includes(3)).toBe(true);
  expect(test2.includes(0)).toBe(false);
  expect(test2.includes(7)).toBe(false);
});

// Question 3
test(`Question 3: arrayPlusArray`, () => {
  expect(answers.arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21);
  expect(answers.arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toBe(-21);
  expect(answers.arrayPlusArray([0, 0, 0], [4, 5, 6])).toBe(15);
  expect(answers.arrayPlusArray([100, 200, 300], [400, 500, 600])).toBe(2100);
});

// Question 4
test(`Question 4: abbrevName`, () => {
  expect(answers.abbrevName("Sam Harris")).toBe("S.H");
  expect(answers.abbrevName("Patrick Feenan")).toBe("P.F");
});

// Question 5
test('Question 5: makeTitle', () => {
  expect(answers.makeTitle("How can mirrors be real if our eyes aren't real")).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real");
  expect(answers.makeTitle("most trees are blue")).toBe("Most Trees Are Blue");

}); 

// Question 6
test('Question 6: gimme', () => {
  expect(answers.gimme([2, 3, 1])).toBe(0);
  expect(answers.gimme([5, 10, 14])).toBe(1);
});

