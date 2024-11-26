// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

//filter(callbackFn)
//filter(callbackFn, thisArg)

const test = ['1','2','T', 'o', '4','M','I','6','s','10', 'i', 'N']
//This checks if the elements of the arrays can be turned into a string and then adds it to the filteredArray 
const filteredArray = test.filter(value => !Number(value))

console.log(filteredArray)