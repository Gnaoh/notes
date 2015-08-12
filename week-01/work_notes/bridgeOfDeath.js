var arguments = process.argv.slice(2);

var color = arguments[0];
var capital = arguments[1];
var airspeed = arguments[2];

if ((color === "blue" || "red" || "green" || "yellow" || "purple" || "orange" || "pink") && (capital === "Assur") && (airspeed === "24mph")){

console.log("You may pass");
}
  else {
  console.log("You have been cast into the gorge of eternal peril!");
}
