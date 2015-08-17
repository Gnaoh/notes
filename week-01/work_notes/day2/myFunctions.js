//1. You're a Thermometer, Harry!

function convertToCelsius(temp) {
  var cTemp = (temp - 32) * 5 / 9; 
  console.log(cTemp);
}

function convertToFahrenheit(temp) {
  var fTemp = temp * 9/5 + 32;
  console.log(fTemp);
}

//Thermometer Stretch Challenge

function convertTemp(temp, input, output) {
  if ((input === "celsius") && (output === "fahrenheit")) {
    var fahrenheit = temp * 9/5 + 32;
      return fahrenheit
  }
  else if ((input === "kelvin") && (output === "fahrenheit")) {
    var fahrenheit = temp * 9/5 - 459.67;
      return fahrenheit
  }
  else if ((input === "fahrenheit") && (output === "celsius")) {
    var celsius = (temp - 32) * 5 / 9; 
      return celsius
  }
  else if ((input === "kelvin") && (output === "celsius")) {
    var celsius = temp - 273.15;
      return celsius
  }
  else if ((input === "celsius") && (output === "kelvin")) {
    var kelvin = temp + 273.15;
      return kelvin
  }
  else if ((input === "fahrenheit") && (output === "kelvin")) {
    var kelvin = (temp + 459.67) * 5/9;
      return kelvin
  }
}


//2. The Great Comparator

function compare(a, b) {
  var results = (b - a);
  return results;
}

//check to see if it's a string, then execute

function compare2(a, b) {
    var results;
    if (typeof a === "number");
      results = a - b;
  }

  else if (typeof a === "string") {
      if (a < b) {
        results = 1;
      } else  if (a > b ) {
        results = -1
      } else {
        results = 0;
      }  
    }
    return results;

//3. A man, a plan, a canal: Panama!

function isPalindrome(word) {
  var reverseword = word.length;
    for (var i =0; i<string.length; 1++) {
      if (word[i] !== word[reverseword - 1 -i]) {
        return false
}
}
return true;

function palindrome(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}





