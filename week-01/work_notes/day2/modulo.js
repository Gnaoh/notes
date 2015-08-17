var arguments = process.argv.slice(2);

n1 = arguments[0]
n2 = arguments[1]

var results = [];


for (var i = 0; i < n1; i ++) {

if (i % n2 === 0) {
  results.push(i);
}
}
console.log(results)