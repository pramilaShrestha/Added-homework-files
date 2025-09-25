// 1. Write a program that counts how many times the letter 'e' appears in the string `"Hello EveryOne"`.
function countE(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'e' || str[i] === 'E') {
            count++;
        }
    }

    return count;
}

console.log(countE("Hello EveryOne"));

// 2. Create a program that checks if a string starts with the letter 'H' and ends with the letter 'e'. Use `ifelse` statements.
function checkString(str){
    if(str[0]=='H' && str[str.length -1]==='e'){
        console.log("The string starts with 'H' and end with 'e' .");  
    }
    else{
        console.log("The string does not meet the condition.");
    }
}
checkString("Hello Everyonee"); 
checkString("Housee");          
checkString("Apple"); 

// 3. Write a program that loops through a string and prints only the uppercase letters.
function printUpper(str){
    for(let i = 0; i< str.length; i++){
        let upp = str[i];
        if(upp >= 'A' && upp<='Z'){
            console.log(upp);
        }
    }
}
printUpper("HelLo PraMila");

// 4. Using a loop, write a program that replaces every occurrence of the word "Hello" with "Hi" in a given 
// string.
function replaceHello(str){
    let words = str.split(" ");
    for(let i=0; i<words.length; i++){
        if(words[i]=='Hello'){
            words[i]='Hi';
        }
    }
    return words.join(" ");
}
console.log(replaceHello("Hello Everyone Hello World"));



// 5. Create a program that counts the number of vowels (a, e, i, o, u) in the string `"Hello EveryOne"`.
function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello EveryOne")); 


// 6. Write a program that uses a loop to concatenate the first letter of each word in the string `"Hello 
// EveryOne"` to form a new string.
function firstLetters(str) {
    let words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            result += words[i][0];
        }
    }
    return result;
}

let str = "Hello EveryOne";
console.log(firstLetters(str));

// 7. Create a program that checks if a string is a palindrome (reads the same backward as forward). Use `ifelse` statements.
function isPalindromeNumber(str){
    let reserved = "";
    for(let i=str.length-1; i>=0; i--){
        reserved   += str[i];
    }
    if(reserved === str){
        console.log(`${str} is a palindrome.`);

    }else{
        console.log(`${str}  is not a palindrome.`);
    }
}
isPalindromeNumber("refer");
isPalindromeNumber("hello");
isPalindromeNumber("dad")



// 8. Write a program that trims any extra spaces at the beginning and end of a string and then checks if the 
// string is empty.
function checkTrimmedString(str){
    let trimed = str.trim();

    if (trimed === ''){
        console.log("The sting is empty");
    
    }else{
        console.log("The sting is not empty");
    }
}

checkTrimmedString("   Pramila   ");   
checkTrimmedString("     "); 



// 9. Using a loop, write a program that converts every letter in a string to lowercase if it’s uppercase, and 
// to uppercase if it’s lowercase.
function changeCase(str) {
    let upperC = str.toUpperCase();
    let lowerC = str.toLowerCase();
    let result = "";

    if (str === upperC) {
        result = lowerC;  
    } else {
        result = upperC;   
    }

    return result;
}

console.log(changeCase("hello world")); 
console.log(changeCase("HELLO"));  

// 10. Write a program that slices the first 5 characters of a string and checks if this substring is equal to 
// `"Hello"`.
function checkSubString(str) {
    let substr = str.slice(0, 5);
    if (substr === "Hello") {
        console.log("The substring is equal to 'Hello'.");
    } else {
        console.log("The substring is not equal to 'Hello'.");
    }
}

checkSubString("Hello world");       
checkSubString("My name is Pramila");

// 11. Create a program that replaces every vowel in a string with an asterisk (*) using a loop.
function replaceVowels(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if ("aeiouAEIOU".includes(ch)) {
            result += "*";
        } else {
            result += ch;
        }
    }

    return result;
}

console.log(replaceVowels("Hello Everyone")); 
console.log(replaceVowels("Programming")); 

// 12. Write a program that checks if a string contains the word `"Hello"` using `if-else` statements. If it 
// does, replace it with `"Hi"`.
function replaceIfHello(str) {
    let result = "";
    let re = str.replace("Hello", "Hi");

    if (str.includes("Hello")) {
        result = re;
    } else {
        result = str;
    }

    return result;
}

console.log(replaceIfHello("Hello EveryOne")); 


// 13. Using a loop, write a program that counts the number of spaces in the string `"Hello EveryOne"`.
function countSpaces(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            count++;
        }
    }

    return count;
}

console.log(countSpaces("Hello EveryOne"));   
console.log(countSpaces("My name is Pramila"));

// 14. Write a program that checks if the length of a string is greater than 10. If it is, print the string in 
// uppercase; otherwise, print it in lowercase.

function checkStringLength(str) {
    if (str.length > 10) {
        console.log(str.toUpperCase());
    } else {
        console.log(str.toLowerCase());
    }
}

checkStringLength("Hello");           
checkStringLength("Hello Everyone"); 


// 15. Create a program that loops through a string and prints the index of each letter 'o' in the string `"Hello EveryOne"`.

function printOIndexes(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'o' || str[i] === 'O') {
            console.log("Index of 'o':", i);
        }
    }
}

printOIndexes("Hello EveryOne");

// 16. Write a program that trims a string, then checks if its length is even or odd using `if-else` statements.
function checkEvenOdd(str) {
    let trimmed = str.trim();

    if (trimmed.length % 2 === 0) {
        console.log("The length is even.");
    } else {
        console.log("The length is odd.");
    }
}

checkEvenOdd("  Hello  ");    
checkEvenOdd("  HelloHi  ");   
checkEvenOdd("   JavaScript   ");

// 17. Using a loop, write a program that checks if the first and last characters of a string are the same. Use 
// `if-else` statements to print the result.
function checkFirstLast(str) {
    let first = "";
    let last = "";

    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            first = str[i];
        }
        if (i === str.length - 1) {
            last = str[i];
        }
    }

    if (first === last) {
        console.log("The first and last characters are the same.");
    } else {
        console.log("The first and last characters are different.");
    }
}

checkFirstLast("level");   
checkFirstLast("hello");   


// 18. Write a program that replaces the first 3 characters of a string with "ABC" using slicing and `if-else` statements.
function replaceFirstThree(str) {
    if (str.length >= 3) {
        let replaced = "ABC" + str.slice(3);
        console.log(replaced);
    } else {
        console.log("The string has less than 3 characters.");
    }
}

replaceFirstThree("HelloWorld");  
replaceFirstThree("Hi"); 


// 19. Create a program that uses a loop to reverse a string and print the reversed string.
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    console.log(reversed);
}

reverseString("Hello EveryOne");  
reverseString("JavaScript");