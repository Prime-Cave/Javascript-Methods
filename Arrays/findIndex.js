// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
const randomNumbers = [2,3,5,1,5,1,6,2,8,2,100]
// return index of element that satusfies the conditin
const result = randomNumbers.findIndex(element => element >50)

console.log(result)