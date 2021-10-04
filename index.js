function isPalindrome(word) {
  // Write your algorithm here
  let array = word.split('');
  let arrayReverse = array.slice();
  arrayReverse.reverse();
  if (array.join() === arrayReverse.join()) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  make a function that takes a word as an argument
    take that word and compare it to the reversed version of itself
      return true if they are equal
      return false if they are not
*/

/*
  Add written explanation of your solution here
  I took the word provided and converted it into an array. I then created a second array as a copy and
  reversed it. Then, I took those arrays and compared them, if they are deeply equal to one another then
  return true, if not return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
