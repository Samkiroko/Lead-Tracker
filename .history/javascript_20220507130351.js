// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(...arr) {
    return arr[0]
}

console.log(getFirst(['sam', 'kiroko', 'happy']))

// Call it with an array as an argument to verify that it works
console.log(getFirst([1, 2, 3]))