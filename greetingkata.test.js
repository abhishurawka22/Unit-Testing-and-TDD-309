import greeting from "./greetingkata";

const testGreetingKata = (input, output) => {
  expect(greeting(input)).toBe(output);
};

test("Requirement 1", () => {
  testGreetingKata("Bob", "Hello, Bob.");
});

test("Requirement 2", () => {
  testGreetingKata(null, "Hello, my friend.");
  expect(greeting()).toBe("Hello, my friend.");
});

test("Requirement 3", () => {
  testGreetingKata("JERRY", "HELLO JERRY!");
});

test("Requirement 4", () => {
  const names = ["Jill", "Jane"];
  testGreetingKata(names, "Hello, Jill and Jane.");
});

test("Requirement 5", () => {
  const names = ["Amy", "Brian", "Charlotte"];
  testGreetingKata(names, "Hello, Amy, Brian, and Charlotte.");
});

test("Requirement 6", () => {
  const names = ["Amy", "BRIAN", "Charlotte"];
  testGreetingKata(names, "Hello, Amy and Charlotte. AND HELLO BRIAN!");
});

test("Requirement 7", () => {
  const names = ["Bob", "Charlie, Dianne"];
  testGreetingKata(names, "Hello, Bob, Charlie, and Dianne.");
});

test("Requirement 8", () => {
  const names = ["Bob", "\"Charlie, Dianne\""];
  testGreetingKata(names, "Hello, Bob and Charlie, Dianne.");
});
