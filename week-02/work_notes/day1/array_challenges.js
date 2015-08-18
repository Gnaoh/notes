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

var birthDates = [1, 6, 2, 15, 31, 8, 3, 8, 6, 10, 20, 3, 10, 17, 5, 26, 12, 5, 1, 31, 3, 20]

even = birthDates.filter( function (dates) {
var isEven = dates%2 === 0;

    return isEven;
})

odd = birthDates.filter( function (dates) {
var isOdd = dates%2 !== 0;

    return isOdd;
})

//Challenge 4 (reduce)

var earnings = [20, 25, 60, 20, 85, 20];

results = earnings.reduce(function(previous, next) {
  return previous + next;
});

//Challenge

