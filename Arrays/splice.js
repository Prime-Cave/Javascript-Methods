// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

randomNumbers = [1,2,3,4,5,6,6,7,87,9,10]

const result = randomNumbers.splice(1, 1, "Hello ")
// Returns a new array with the values  removed 
// splice(start, deleteCount, item1)
console.log(result)
console.log(randomNumbers)