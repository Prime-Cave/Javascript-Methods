// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const randomNumbers = [1,2,3,4,5,6,7,8,9,10]

result = randomNumbers.slice(1,6)

console.log(result)

// note: the start index is not added to in the return value but the end index is added