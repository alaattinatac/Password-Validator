/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Passwords must not be any previous password. 
*/

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]
let previousPasswords = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyy!5", "qwbfj76%", "tytT3729.", "384#HsHf", "Jai33"];

const regexUp = /[A-Z]/g;
const regexLow = /[a-z]/g;
const regexNum = /[0-9]/g;
const regexSym = /[!#$%.*]/g;

const findLength = item => item.length >= 5;
const findUpperCase = item => item.match(regexUp);
const findLowerCase = item => item.match(regexLow);
const findNumber = item => item.match(regexNum);
const findSymbol = item => item.match(regexSym);
const isEqual = item => previousPasswords.indexOf(item) === -1;

function validatePasswords(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (findLength(arr[i]) && findUpperCase(arr[i]) && findLowerCase(arr[i]) && findNumber(arr[i]) && findSymbol(arr[i]) && isEqual(arr[i])) {
      resultArr.push(true);
    } else {
      resultArr.push(false);
    }
  }
  return resultArr;
}

console.log(validatePasswords(passwords1))
console.log(validatePasswords(passwords2))