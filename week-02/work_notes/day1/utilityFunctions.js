
function assert(input, output, testFunction) {
  return output === testFunction(input);
}

/* FIRST

function first(arr) {
  return arr[0];
}

console.log(assert(['monday', "tuesday", "wednesday"], "monday", first))
console.log(assert(["thursday", "friday", "saturday"], "thursday", first))
*/

 /*LAST

function last(arr) {
  return arr[arr.length-1];
}

console.log(assert(["monday", "tuesday", "wednesday"], "wednesday", last))
console.log(assert(["thursday", "friday", "saturday"], "saturday", last))
*/

//MIN

function min(arr) {
  return arr[arr.length-1];
}

console.log(assert([144, 12, 81, 9], 9, min))
console.log(assert([42, 17, 4, 9, -Infinity, 7], -Infinity, min))

