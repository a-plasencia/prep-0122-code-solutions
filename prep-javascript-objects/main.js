const person = {
  firstName: 'Alex',
  lastName: 'Plasencia',
  hobby: 'Reading'
};
console.log(person);
var fullName = "This person's name is: " + person.lastName + ' ' + person.firstName + '.';
console.log(fullName);
person.job = ['Being bad at basketball'];
var job = "The person's current job is: " + person.job + '.';
console.log(job);
person.previousJob = ['Being the homie'];
var previousJob = "This person's previous job is: " + person.previousJob + '.';
console.log(previousJob);
console.log(person);
