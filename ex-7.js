function isPalindrome(string) {
  // Start coding here
  let newString = string.split("").reverse().join("");
  console.log(newString);
  return newString === string ? true : false;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
