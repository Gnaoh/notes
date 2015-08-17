var arguments = process.argv.slice(2);

var temperature = arguments[0];

if ((temperature > 60 && temperature < 80)) {

console.log("Enjoy the day! Let's have a picnic :)");
}

else if (temperature > 80) {

console.log("Too darn hot! I'm shvitzing over here.");
}

else {

  console.log("Brrrr... no, get back inside!");
}
