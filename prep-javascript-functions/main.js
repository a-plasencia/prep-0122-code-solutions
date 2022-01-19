function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(2, 2);
console.log(sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

console.log(convertHoursToMinutes(2));

function getGreeting(name) {
  return 'Hello ' + name;
}

console.log(getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  num1 = num1 * 5;
  num2 = num2 * 5;
  return num1 + num2;
}

console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  var mNum = num1 * num2;
  return mNum / 5;
}

console.log(multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log(getFullName('Alex', 'Plasencia'));

function cube(number) {
  return number * number * number;
}

console.log(cube(5));
