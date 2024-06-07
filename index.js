// Palindrome Checker.......
// Write a function that takes a string as input and returns True if 
 //the string is a palindrome  (reads the same forwards and backwards),
 // and False otherwise.


   function palindromeChecker(word){
       let reverseWord = word.split('').reverse().join('');

       if (word === reverseWord) {
        return "True";
        
       } else {
       return "False"
       }
       
   }

console.log(palindromeChecker("working"));
console.log(palindromeChecker("noon"));
console.log(palindromeChecker("level"));
console.log(palindromeChecker("working"));