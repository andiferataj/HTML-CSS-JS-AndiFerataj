var programmingLanguages = ['JavaScript','PHP','Python'];

console.log(programmingLanguages);

console.log(programmingLanguages[0]);



programmingLanguages.push('Java');

programmingLanguages.pop();

programmingLanguages.unshift('C#');

programmingLanguages.shift();

programmingLanguages.splice(0,2, 'Ruby');


console.log(Math.random()*5);

console.log(Math.floor(Math.random()*5));


var students = ['Joni','Erda','Endriti','Bledioni'];

var [s1, s2, s3, s4] = students;

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

var places = ["London","Paris","New York","Berlin"]

var [firstPlace, , secondPlace] = places;

console.log(secondPlace);

var numbers = [1,2,3,4,5,6,7,8,9,10]

var [first, second, ...otherNumbers]= numbers;

console.log(first);

console.log(second);

console.log(otherNumbers.toString());