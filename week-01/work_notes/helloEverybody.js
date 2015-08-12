var arguments = process.argv.slice(2);

var names = arguments[0]

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i] + "!");
} 