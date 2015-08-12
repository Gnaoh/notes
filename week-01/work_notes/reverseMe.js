 var arguments = process.argv[2];

var array = arguments.split("");

var reversedArray = [];

for (var i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

var results = reversedArray.join("");

console.log(results);