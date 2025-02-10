let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((persons)) => persons.sex);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade =persons.map((persons)) => persons.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((persons)) => persons.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopleName.filter((name) => name.startsWith('J') || name.startsWith('P')));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopleName.filter((name) => name.startsWith('A') || name.startsWith('C')).length);
// Log all the filtered male ('M') in persons array
console.log(persons.filter((person) => person.sex === 'M'));
// Log all the filtered female ('F') in persons array
console.log(persons.filter((person) => person.sex === 'F'));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((person) => person.sex === 'F' && (person.name.startsWith('C') || person.name.startsWith('J'))));
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((grade) => grade % 2 === 0));
// Find the first name that starts with 'J' in persons array and log the object
persons.find((person) => person.name.startsWith('J'));
// Find the first name that starts with 'P' in persons array and log the object
persons.find((person) => person.name.startsWith('P'));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
persons.find((person) => person.name.startsWith('J') && person.grade > 10 && person === 'F');       
// Filter all the female from persons array and store in femalePersons array
persons.filter((person) => person.sex === 'F');
// Filter all the male from persons array and store in malePersons array
persons.filter ((person) => person.sex === 'M');
// Find the sum of all grades and store in gradeTotal
persons.reduce((acc, person) => acc + person.grade, 0);         

// Find the average grade
persons.reduce((acc, person) => acc + person.grade, 0) / persons.length;
// Find the average grade of male
persons.filter((acc,person) => acc + person.grade, 0) / persons.filter((person) =>person.sex === 'M').length;
// Find the average grade of female
persons.filter((acc,person) => acc + person.grade, 0) / persons.filter((person) =>person.sex === 'F').length; 
// Find the highest grade
persons.reduce((acc, person) => acc > person.grade ? acc : person.grade, 0);
// Find the highest grade in male
persons.filter((person) => 
// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

// Sort the peopleGrade in descending order

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
