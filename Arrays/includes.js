//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//includes(searchElement, fromIndex)
// includes(searchElement)

const randomStuff = ['Enem', 'Tomisin', 'Ibrahim', 'Elijah']

//the includes method return a true or false 
console.log(randomStuff.includes('Enem'))
// Starts the search from the second Index, so it shouldn't find anything and return false 
console.log(randomStuff.includes('Enem', 2))