// 1. Age Check: Write an `if-else` statement to check if a person is 18 years old or older. Print "Adult" if 
// true, otherwise "Not an adult."

let age = 18;
if(age >= 18){
    console.log("Adult");
}
else{
    console.log("Not an sdult");
}
// 2. Number Sign: Write an `if-else` statement to check if a number is positive. Print "Positive" if true, 
// otherwise "Not positive."

let num = -5;
if (num > 0) {
    console.log("Positive");
} else {
    console.log("Not positive");
}

// 3. Even or Odd: Write an `if-else` statement to check if a number is even. Print "Even" if true, otherwise 
// "Odd."
let number = 7;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 4. Vowel or Consonant: Write an `if-else` statement to check if a given character is a vowel. Print "Vowel" 
// if true, otherwise "Consonant."
let char = 'e';
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
    char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}


// 5. Check Zero: Write an `if-else` statement to check if a number is zero. Print "Zero" if true, otherwise 
// "Non-zero."
let x = 0;
if (x === 0) {
    console.log("Zero");
} else {
    console.log("Non-zero");
}
// 6. Multiple of Five: Write an `if-else` statement to check if a number is a multiple of 5. Print "Multiple of 
// 5" if true, otherwise "Not a multiple of 5."
let y = 25;
if (y % 5 === 0) {
    console.log("Multiple of 5");
} else {
    console.log("Not a multiple of 5");
}
// 7. Greater Than Ten: Write an `if-else` statement to check if a number is greater than 10. Print "Greater 
// than 10" if true, otherwise "10 or less."
let z = 12;
if (z > 10) {
    console.log("Greater than 10");
} else {
    console.log("10 or less");
}
// 8. Check Equality: Write an `if-else` statement to check if two numbers are equal. Print "Equal" if true, 
// otherwise "Not equal."
let a = 10, b = 15;
if (a === b) {
    console.log("Equal");
} else {
    console.log("Not equal");
}

// 9. String Length Check: Write an `if-else` statement to check if the length of a string is greater than 5. 
// Print "Long string" if true, otherwise "Short string."
let str = "HelloJS";
if (str.length > 5) {
    console.log("Long string");
} else {
    console.log("Short string");
}


// 10. Check Uppercase: Write an `if-else` statement to check if a character is uppercase. Print "Uppercase" 
// if true, otherwise "Lowercase."
let ch = 'A';
if (ch === ch.toUpperCase()) {
    console.log("Uppercase");
} else {
    console.log("Lowercase");
}

// 11. Check Weekend: Write an `if-else` statement to check if a day of the week is Saturday. Print 
// "Weekend" if true, otherwise "Not weekend."
let day = "Saturday";
if (day === "Saturday") {
    console.log("Weekend");
} else {
    console.log("Not weekend");
}
// 12. Age Category: Write an `if-else` statement to check if a person is a child (under 12). Print "Child" if 
// true, otherwise "Not a child."
let age2 = 10;
if (age2 < 12) {
    console.log("Child");
} else {
    console.log("Not a child");
}

// 13. Temperature Check: Write an `if-else` statement to check if the temperature is above 30 degrees. Print 
// "Hot" if true, otherwise "Cold."
let temp = 35;
if (temp > 30) {
    console.log("Hot");
} else {
    console.log("Cold");
}

// 14. Number Range: Write an `if-else` statement to check if a number is between 1 and 100. Print "In 
// range" if true, otherwise "Out of range."
let num1 = 50;
if (num1 >= 1 && num1 <= 100) {
    console.log("In range");
} else {
    console.log("Out of range");
}
// 15. Grade Check: Write an `if-else` statement to check if a student’s score is greater than or equal to 50. 
// Print "Pass" if true, otherwise "Fail."
let score = 40;
if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 16. Divisibility Check: Write an `if-else` statement to check if a number is divisible by 3. Print "Divisible 
// by 3" if true, otherwise "Not divisible by 3."
let n1 = 9;
if (n1 % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not divisible by 3");
}
// 17. Morning or Afternoon: Write an `if-else` statement to check if the time is before 12 PM. Print 
// "Morning" if true, otherwise "Afternoon."
let time = 11; // in 24-hr format
if (time < 12) {
    console.log("Morning");
} else {
    console.log("Afternoon");
}

// 18. Teenager Check: Write an `if-else` statement to check if a person’s age is between 13 and 19. Print 
// "Teenager" if true, otherwise "Not a teenager."
let age3 = 16;
if (age3 >= 13 && age3 <= 19) {
    console.log("Teenager");
} else {
    console.log("Not a teenager");
}
// 19. String Content Check: Write an `if-else` statement to check if a string contains the letter "a". Print 
// "Contains 'a'" if true, otherwise "Does not contain 'a'."
let s1 = "hello";
if (s1.includes("a")) {
    console.log("Contains 'a'");
} else {
    console.log("Does not contain 'a'");
}
// 20. Leap Year Check: Write an `if-else` statement to check if a given year is a leap year. Print "Leap year" 
// if true, otherwise "Not a leap year."
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}
// 21. Check Negative: Write an `if-else` statement to check if a number is negative. Print "Negative" if true, 
// otherwise "Positive or zero."
let n2 = -5;
if (n2 < 0) {
    console.log("Negative");
} else {
    console.log("Positive or zero");
}
// 22. Password Match: Write an `if-else` statement to check if a user’s input matches the password "1234". 
// Print "Access granted" if true, otherwise "Access denied."
let password = "1234";
if (password === "1234") {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
// 23. Greater Number: Write an `if-else` statement to check if the first of two numbers is greater. Print 
// "First is greater" if true, otherwise "Second is greater or equal."
let n3 = 12, n4 = 15;
if (n3 > n4) {
    console.log("First is greater");
} else {
    console.log("Second is greater or equal");
}
// 24. Prime Check: Write an `if-else` statement to check if a number is greater than 1 and divisible only by 
// 1 and itself. Print "Prime" if true, otherwise "Not prime."
let n5 = 7;
let isPrime = true;
if (n5 > 1) {
    for (let i = 2; i < n5; i++) {
        if (n5 % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("Prime");
    } else {
        console.log("Not prime");
    }
} else {
    console.log("Not prime");
}
// 25. Eligible for Discount: Write an `if-else` statement to check if a customer’s age is 65 or older. Print 
// "Eligible for senior discount" if true, otherwise "Not eligible."
let age4 = 70;
if (age4 >= 65) {
    console.log("Eligible for senior discount");
} else {
    console.log("Not eligible");
}
// 26. String Comparison: Write an `if-else` statement to check if two strings are exactly the same. Print 
// "Match" if true, otherwise "Do not match."
let str1 = "hello", str2 = "hello";
if (str1 === str2) {
    console.log("Match");
} else {
    console.log("Do not match");
}
// 27. Multiples of Two: Write an `if-else` statement to check if a number is a multiple of 2. Print "Multiple 
// of 2" if true, otherwise "Not a multiple of 2."
let n6 = 8;
if (n6 % 2 === 0) {
    console.log("Multiple of 2");
} else {
    console.log("Not a multiple of 2");
}
// 28. Driving License Check: Write an `if-else` statement to check if a person is old enough to get a driving 
// license (age 18 or older). Print "Eligible" if true, otherwise "Not eligible."
let age5 = 16;
if (age5 >= 18) {
    console.log("Eligible");
} else {
    console.log("Not eligible");
}
// 29. Letter Case Check: Write an `if-else` statement to check if a character is lowercase. Print "Lowercase" 
// if true, otherwise "Uppercase."
let c2 = 'b';
if (c2 === c2.toLowerCase()) {
    console.log("Lowercase");
} else {
    console.log("Uppercase");
}
// 30. Number Check: Write an `if-else` statement to check if a number is a single-digit number. Print 
// "Single-digit" if true, otherwise "More than one digit."
let n7 = 7;
if (n7 >= 0 && n7 <= 9) {
    console.log("Single-digit");
} else {
    console.log("More than one digit");
}

// 31. Divisibility by 10: Write an `if-else` statement to check if a number is divisible by 10. Print "Divisible 
// by 10" if true, otherwise "Not divisible by 10."
let n8 = 40;
if (n8 % 10 === 0) {
    console.log("Divisible by 10");
} else {
    console.log("Not divisible by 10");
}
// 32. Check Month: Write an `if-else` statement to check if a month number corresponds to a month with 
// 31 days. Print "31 days" if true, otherwise "Not 31 days."
let month = 7;
if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    console.log("31 days");
} else {
    console.log("Not 31 days");
}
// 33. Password Length Check: Write an `if-else` statement to check if a password is at least 8 characters 
// long. Print "Valid password" if true, otherwise "Password too short."
let pass = "mypassword";
if (pass.length >= 8) {
    console.log("Valid password");
} else {
    console.log("Password too short");
}
// 34. Check for Zero: Write an `if-else` statement to check if a number is zero. Print "Zero" if true, 
// otherwise "Not zero."
let n9 = 0;
if (n9 === 0) {
    console.log("Zero");
} else {
    console.log("Not zero");
}
// 35. Grade A Check: Write an `if-else` statement to check if a student’s score is 90 or above. Print "Grade 
// A" if true, otherwise "Less than Grade A."
let score2 = 92;
if (score2 >= 90) {
    console.log("Grade A");
} else {
    console.log("Less than Grade A");
}

// 36. Empty String Check: Write an `if-else` statement to check if a string is empty. Print "Empty" if true, 
// otherwise "Not empty."
let s2 = "";
if (s2 === "") {
    console.log("Empty");
} else {
    console.log("Not empty");
}

// 37. Multiple of 4: Write an `if-else` statement to check if a number is a multiple of 4. Print "Multiple of 4" 
// if true, otherwise "Not a multiple of 4."
let num37 = 16;
if (num37 % 4 === 0) {
    console.log("Multiple of 4");
} else {
    console.log("Not a multiple of 4");
}

// 38. Day of the Week: Write an `if-else` statement to check if a given day is Sunday. Print "Sunday" if true, 
// otherwise "Not Sunday."
let day38 = "Sunday";
if (day38 === "Sunday") {
    console.log("Sunday");
} else {
    console.log("Not Sunday");
}
// 39. String Starts with A: Write an `if-else` statement to check if a string starts with the letter "A". Print 
// "Starts with A" if true, otherwise "Does not start with A."
let str39 = "Apple";
if (str39.startsWith("A")) {
    console.log("Starts with A");
} else {
    console.log("Does not start with A");
}
// 40. Check for Space: Write an `if-else` statement to check if a string contains a space. Print "Contains 
// space" if true, otherwise "No space."
let str40 = "Hello World";
if (str40.includes(" ")) {
    console.log("Contains space");
} else {
    console.log("No space");
}
// 41. String Length Even: Write an `if-else` statement to check if the length of a string is an even number. 
// Print "Even length" if true, otherwise "Odd length."
let str41 = "Hello!";
if (str41.length % 2 === 0) {
    console.log("Even length");
} else {
    console.log("Odd length");
}
// 42. Temperature Conversion: Write an `if-else` statement to check if a temperature in Celsius is above 100 
// degrees. Print "Above boiling point" if true, otherwise "Below boiling point."
let temp42 = 105;
if (temp42 > 100) {
    console.log("Above boiling point");
} else {
    console.log("Below boiling point");
}
// 43. Work Hours Check: Write an `if-else` statement to check if the current time is during work hours (9 
// AM to 5 PM). Print "Working hours" if true, otherwise "Off hours."
let time43 = 14; // 24-hour format
if (time43 >= 9 && time43 <= 17) {
    console.log("Working hours");
} else {
    console.log("Off hours");
}

// 44. BMI Check: Write an `if-else` statement to check if a person’s Body Mass Index (BMI) is in the 
// healthy range (18.5 to 24.9). Print "Healthy" if true, otherwise "Not healthy."
let bmi = 22;
if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Healthy");
} else {
    console.log("Not healthy");
}

// 45. Check Odd Number: Write an `if-else` statement to check if a number is odd. Print "Odd" if true, 
// otherwise "Even."
let num45 = 9;
if (num45 % 2 !== 0) {
    console.log("Odd");
} else {
    console.log("Even");
}

// 46. Check for Digit: Write an `if-else` statement to check if a character is a digit (0-9). Print "Digit" if 
// true, otherwise "Not a digit."
let char46 = '7';
if (char46 >= '0' && char46 <= '9') {
    console.log("Digit");
} else {
    console.log("Not a digit");
}

// 47. Check for Exclamation: Write an `if-else` statement to check if a string ends with an exclamation 
// mark (!). Print "Exclamation mark" if true, otherwise "No exclamation mark."
let str47 = "Wow!";
if (str47.endsWith("!")) {
    console.log("Exclamation mark");
} else {
    console.log("No exclamation mark");
}
// 48. Day Check: Write an `if-else` statement to check if today is a weekday (Monday to Friday). Print 
// "Weekday" if true, otherwise "Weekend."
let day48 = "Tuesday";
if (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(day48)) {
    console.log("Weekday");
} else {
    console.log("Weekend");
}

// 49. Check Square Number: Write an `if-else` statement to check if a number is a perfect square. Print 
// "Perfect square" if true, otherwise "Not a perfect square."
let num49 = 25;
if (Number.isInteger(Math.sqrt(num49))) {
    console.log("Perfect square");
} else {
    console.log("Not a perfect square");
}

// 50. Temperature Range Check: Write an `if-else` statement to check if a temperature is between 15 and 25 
// degrees Celsius. Print "Comfortable" if true, otherwise "Uncomfortable."
let temp50 = 20;
if (temp50 >= 15 && temp50 <= 25) {
    console.log("Comfortable");
} else {
    console.log("Uncomfortable");
}