// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2+2^2+2^2 = 9

// My solution:
function squareSum(numbers){
  let squared = numbers.map(num => num * num)
  let sum = squared.reduce((a,b) => a + b, 0)

  return sum
  }