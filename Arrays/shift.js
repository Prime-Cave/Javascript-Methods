// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

const randomNumbers = [2,3,5,1,5,1,6,2,8,2,100]
// this would remove the first element from the array
const updatedArray =   randomNumbers.shift()
//this will return the element that was removed 
console.log(updatedArray)
// After the first element has been removed 
console.log(randomNumbers)