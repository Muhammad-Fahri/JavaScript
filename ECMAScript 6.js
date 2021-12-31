Which of the following is not one of the new ES6 features?
  hoisting


Fill in the blanks to declare a constant num and an arrow function calc.
 const num = 5;
 const calc = (x, y, z = num) =>{return x + y + z;}



Fill in blanks to make the variable arr3 look like the following: [1, 2, 3, 4, 5, 6, 7, 8].
  const arr1= [1, 2, 3];
  const arr2 = [5, 6, 7, 8];
    let arr3 = [...arr1,4, ...arr2];


What is the output of the following code?
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6];
const func = (...rest) => {
  console.log(rest.length);
}
func(...arr1);
func(...arr2);
  5 6



What is the output of this code?
const square = num => num * num;
console.log(square(6) + 6);
  42



Fill in the blanks to copy the user object to the newUser object by destructuring the name and age properties. Pass the value 9999 for the id property.
  const user = {name: 'David',age: 28,id: 1234};
    let newUser = Object.assign({},{name, age} = user,
    	{id: 9999});
    console.log(newUser);



Fill in the blanks to get the following output:
zero = 0
one = 1
 let myMap = new Map();
     myMap.set('zero', 0);
     myMap.set('one', 1);
for
  (let [key, value] of myMap) 
  {console.log(`${key} = ${value}`);}