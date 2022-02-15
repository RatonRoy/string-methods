// The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.
const anthem = "Amar sonar bangla ami tomay valobasi";
const splitAnthemWhiteSpaces = anthem.split(' ');
console.log(splitAnthemWhiteSpaces);
console.log(splitAnthemWhiteSpaces[0]);
console.log(splitAnthemWhiteSpaces[1]);
// Split a string into characters
const anthemCharacters = anthem.split('')
console.log(anthemCharacters);
console.log(anthemCharacters[1]);
// main string is not changing 
console.log(anthem);
//Use a letter as a separator:
const anthemSeparateByA = anthem.split('a');
console.log(anthemSeparateByA);
// If the separator parameter is omitted, an array with the original string is returned:
const stringArray = anthem.split();
console.log(stringArray);
console.log(stringArray[0]);
console.log(stringArray[1]);
/* The slice() method extracts a part of a string.
The slice() method returns the extracted part in a new string.
The slice() method does not change the original string. 
string.slice(start, end);
start - Required. (including the position) first character is 0;
end - Optional. The end position (up  to you, but not including).
Default is string length.
The return value is a string.
*/
const anthem1 = "Cirodin tomar akash tomar batas amar prane bajay basi";
const anthem1FirstWord = anthem1.slice(0, 7);
// it start position at the 0 and end at the position 6 but not include at the position 7.
console.log(anthem1FirstWord);
// so it returns a string 
console.log(typeof anthem1FirstWord);
// not modify the main string 
console.log(anthem1);
// only the first character 
console.log(anthem1.slice(0, 1));
// only the last character 
console.log(anthem1.slice(-1));
// the whole string 
console.log(anthem1.slice(0));
