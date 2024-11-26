// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const randomNumbers = [2,3,5,1,5,1,6,2,8,2,100]

// does a search and return the first element that meets the condition 
const result = randomNumbers.find(element => element > 5)

console.log(result)