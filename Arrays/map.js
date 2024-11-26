// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
const randomNumbers = [2,3,5,1,5,1,6,2,8,2,100]

// does a function on each element and add it to an array 
const result = randomNumbers.map(x => x *10)

console.log(result)