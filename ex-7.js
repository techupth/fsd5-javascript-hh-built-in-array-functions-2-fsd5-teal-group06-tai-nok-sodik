function isPalindrome(string) {
  // Start coding here
  let a = string;
  let reverse = a.split("").reverse().join("");
  return a === reverse;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
