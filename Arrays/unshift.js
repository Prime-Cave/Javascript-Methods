// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.

const randomNumbers = [2,3,5,1,5,1,6,2,8,2,100]
// this would add to the first element of the array
//unshift(element1, element2)
// Takes as many elements as possible 
const updatedArray =   randomNumbers.unshift(13,14)
//this will return the length of the array after it has been updated
console.log(updatedArray)
// After the first element has been removed 
console.log(randomNumbers)