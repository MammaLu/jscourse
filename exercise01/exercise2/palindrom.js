function isPalindrom(string) {

let strPalindrom = string.toLowerCase();

let left = 0;
let right = strPalindrom.length - 1;

while (left < right) {
    if (strPalindrom[left] !== strPalindrom[right]) {
        return false;
    }
     
    left++;
    right--;
}
return true;
}

// for (let i=0; i < string.length; i++)

// if () {
//     return true;
// } else {
//     return false;
// }

console.log(isPalindrom("hello"));
console.log(isPalindrom("racecar"));
