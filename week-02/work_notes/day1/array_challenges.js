//Challenge 1 (forEach)

var customers = ["Justin", "Ilias", "Nathan", "Camilo", "Vikash", "Adam", "Brianna", "Sarah", "Ali", "Jessie", "Cameron"]

customers.forEach(function(element, index) {
    console.log(element + ": " + (index*2+2) + " minutes");
})

//Challenge 2 (maps)

var prices = [3.00,4.00,10.00,2.25,3.01];

prices.map(function (element) {
    return element - 0.01;
});

//Challenge 3 (filter)

