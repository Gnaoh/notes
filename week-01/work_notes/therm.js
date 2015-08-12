var arguments = process.argv.slice(2);


var temp = 20

function convertToCelsius(temp) {
  (temp - 32) * 5/9;
}

console.log(convertToCelsius(temp))



function countdown(number, arr){
    console.log(number)
    arr.push(number)
    if(number>0){
        number = number - 1
        countdown(number, arr)
    } else if (number === 0){
        arr.reverse()
        for (var i = 0; i<arr.length; i++){
            console.log(arr[i])
        }
    }
}
var arr = []

countdown(10, arr)