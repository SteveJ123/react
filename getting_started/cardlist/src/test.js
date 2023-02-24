const myArray = [];

const myObject = {
    name: 'MyName'
};

const otherObject = {
    name: 'OtherName'
};

console.log(myArray); // -> []
console.log(myObject); // -> {name: 'MyName'}
console.log(otherObject); // -> {name: 'OtherName'}

let newSizeOfTheArray = myArray.push(myObject);

console.log(newSizeOfTheArray) // -> 1, because the array now has 1 element
console.log(myArray); // -> [{name: 'MyName'}]

newSizeOfTheArray = myArray.push(otherObject);

console.log(newSizeOfTheArray) // -> 2, because the array now has 2 elements
console.log(myArray); // -> [{name: 'MyName'}, {name: 'OtherName'}]

