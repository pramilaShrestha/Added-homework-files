// Write a function printTriangle(n) that prints a triangle pattern of * with n rows.
function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';  
        }
        console.log(row);  
    }
}
printTriangle(7)


// 2. Write a function printReverseTriangle(n) that prints an inverted triangle of *.
function printReverseTriangle(n) {
    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';  
        }
        console.log(row);  
    }
}
printReverseTriangle(7)



// 3. Write a function printRightAngleTriangle(n) using numbers instead of *.
function printRightAlignedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    for (let k = 1; k <= i; k++) {
      row += "*";
    }

    console.log(row);
  }
}

printRightAlignedTriangle(7);

// 4. Write a function printFibonacciSeries(n) that prints the first n Fibonacci numbers
function printFibonacciSeries(n){
    let a=0, b=1;

    for(let i = 1; i<=n; i++){
        console.log(a);
        let next = a+b;
        a=b;
        b=next;
    }
}

printFibonacciSeries(10);


// 5. Write a function printSumTriangle(n) where each row prints the sum of numbers from 1 to row number.
function printSumTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            sum += j;
        }
        console.log(sum);
    }
}

printSumTriangle(5);



// 6. Write a function countDigits(num) that returns the number of digits in a number.
function countDigits(num){
    return num.toString().length;
}
console.log(countDigits(7));      
console.log(countDigits(123));    


// 7. Write a function reverseNumber(num) that prints the digits of a number in reverse.
function reverseNumber(num){
    let reversed = num.toString().split("").reverse().join("");
    console.log(reversed);
}
reverseNumber(12345); 
reverseNumber(987);


// 8. Write a function isArmstrong(num) that checks if a number is an Armstrong number
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const digits = temp.toString().length;

    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isArmstrong(153)); 
console.log(isArmstrong(123)); 

// 9. Write a function isPalindromeNumber(num) that checks if a number reads the same backward.
function isPalindromeNumber(num) {
    const strNum = num.toString();
    const reversedStrNum = strNum.split('').reverse().join('');
    return strNum === reversedStrNum;
}
console.log(isPalindromeNumber(121)); 
console.log(isPalindromeNumber(123));
console.log(isPalindromeNumber("ada"));

// 10. Write a function sumOfFactorialsOfDigits(num) that calculates factorial of each digit and sums them.
function sumOfFactorialsOfDigits(num){
    let fact=1;
    for(let i=1; i<=num; i++){
        fact = fact *i;

    }
    return fact;
}
console.log(sumOfFactorialsOfDigits(5));


// 11. Write a function printPrimeNumbers(n) that prints all prime numbers from 1 to n.
function printPrimeNumbers(n) {
    for (let i = 2; i <= n; i++) {   
        let isPrime = true;          
        
        for (let j = 2; j < i; j++) {  
            if (i % j === 0) {          
                isPrime = false;        
                break;                  
            }
        }

        if (isPrime) {      
            console.log(i); 
        }
    }
}
printPrimeNumbers(50)



// 12. Write a function printOddAndEvenCount(n) that prints the count of odd and even numbers from 1 to n.

function printOddAndEvenCount(n){
    even = 0;
    odd = 0;
    for (let i=1; i<=n; i++){
        if (i%2==0){
            even++; 
        }
        else{
           odd++; 
        }
    }
    console.log("Evencount: "+even);
    console.log("Odd count: "+odd);
}
printOddAndEvenCount(10);


// 13. Write a function sumOfSquares(n) that returns the sum of squares of numbers from 1 to n.

function sumOfSquares(n){
    sum = 0;
    for (let i =1; i<=n; i++){
        sum += i*i;
    }
    console.log("The sum of Squares:  "+sum)
}

sumOfSquares(5)

// 14. Write a function sumOfCubes(n) that returns the sum of cubes of numbers from 1 to n.
function sumOfCubes(n){
    sum = 0;
    for (let i =1; i<=n; i++){
        sum += i*i*i;
    }
    console.log("The sum of Cubes:  "+sum)
}

sumOfCubes(5)


// 15. Write a function printPatternNumbers(n) that prints numbers in a pyramid pattern.
function printPatternNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let s = 1; s <= n - i; s++) {
            row += " ";
        }

        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }

        console.log(row);
    }
}

printPatternNumbers(9);

// 16. Write a function gcd(a, b) that calculates the greatest common divisor using loops.
function gcd(a, b) {
    let gcdValue = 1;

    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            gcdValue = i;
        }
    }

    return gcdValue;
}


console.log(gcd(20, 28)); 
console.log(gcd(15, 25)); 

// 17. Write a function lcm(a, b) that calculates the least common multiple.
function lcm(a, b) {
    let max;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }

    for (let i = max; i <= a * b; i++) {
        if (i % a === 0 && i % b === 0) {
            return i;
        }
    }
}

console.log(lcm(4, 6));   
console.log(lcm(15, 25)); 


// 18. Write a function countPrimeDivisors(num) that counts how many prime numbers divide a given number.
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function countPrimeDivisors(num) {
    let count = 0;

    for (let i = 2; i <= num; i++) {
        if (num % i === 0 && isPrime(i)) {
            count++;
        }
    }

    return count;
}

console.log(countPrimeDivisors(28)); 
console.log(countPrimeDivisors(60));

// 19. Write a function sumOddDigits(num) that returns the sum of only the odd digits in a 
// number.
   function sumOddDigits(num) {
    let sum = 0;

    for (let i = num; i > 0; i = Math.floor(i / 10)) {
        let digit = i % 10;        
        if (digit % 2 !== 0) {     
            sum += digit;         
        }
    }

    return sum;
}

console.log(sumOddDigits(12345)); 

// 20. Write a function printNumberSeries(n) that prints numbers in this series: 1, 2, 4, 7, 11,16… 
function printNumberSeries(n) {
    let num = 1;
    let diff = 1;

    for (let i = 1; i <= n; i++) {
        console.log(num);
        num = num + diff;
        diff++;
    }
}

printNumberSeries(10);


