
function isPalindrome(phrase) {
        var reversePhrase = phrase.split('').reverse().join(',');
    if (reversePhrase === phrase) {
        return true;
    }
    else {
        return false;
    }
}

//Sentence
function isPalindrome(phrase) {
        phrase = phrase.split('').join('');
        var reversePhrase = phrase.split('').reverse().join(',');

    if (reversephase === phrase) {
        return true;
    }
    else {
        return false;
    }

}

//Traverse
function traversePalindrome(phrase) {
    var mid = phrase.length/2 + phrase.length/2%2 + 1;

    for (var i = 0; i < phrase.length/2; i++) {
        if (phrase[mid] === phrase[i]) {
            results = true;
        } else {
            results = false;
        }
        mid -= 1
    } 
    return results;
}
