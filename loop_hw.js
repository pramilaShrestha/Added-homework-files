// 1. Counting from 1 to 20: Write a loop to print numbers from 1 to 20.
for (let i=1; i<=20; i++){
    console.log(i);
}

// 2. Sum of First 10 Numbers: Use a loop to calculate the sum of the first 10 natural numbers (1, 2, 3, ..., 
// 10).
let sum10 = 0
for(let i = 1; i<=10; i++){
    sum10 += i;
}
console.log("Sum of first 10 numbers: ", sum10)
// 3. Multiplication Table of 5: Create a loop to print the multiplication table of 5.
let a=5;
for (let i= 1; i<=10; i++){
     console.log(`${a} * ${i} = ${a * i}`);
}
// 4. Print Numbers from 1 to 100: Write a loop to print numbers from 1 to 100.
for (let i = 1; i<=100; i++){
    console.log(i)
}
// 5. Sum of Odd Numbers: Use a loop to calculate the sum of odd numbers between 1 and 10.
let sumodd= 0 
for(let i = 1; i<=10; i++){
    if(i%2 != 0){
        sumodd+=i
    }
}
console.log("Sum of odd numbers (1-10):", sumodd);

// 6. Count Down from 20 to 1: Write a loop to print numbers from 20 down to 1.
for(let i = 20; i>=1; i--){
    console.log(i);
}

// 7. Print Multiples of 3: Use a loop to print the first 10 multiples of 3.
for (let i = 1; i <= 10; i++) {
    console.log(3 * i);
}

// 8. Print Squares of Numbers: Write a loop to print the square of each number from 1 to 10.
for(let i = 1; i<=10; i++){
    console.log(`${i}**2=${i *i}`);
}

// 9. Sum of First 100 Numbers: Use a loop to calculate the sum of the first 100 natural numbers.
let sum100 = 0;
for (let i = 1; i <= 100; i++) {
    sum100 += i;
}

// 10. Print Cube of Numbers: Write a loop to print the cube of each number from 1 to 5.
for (let i = 1; i <= 5; i++) {
    console.log(`${i}^3 = ${i * i * i}`);
}
// 11. Print Numbers in Reverse Order: Write a loop to print numbers from 50 down to 1.
for (let i =50; i>=1; i--){
    console.log(i)
}
// 12. Count Down Odd Numbers: Create a loop to print odd numbers from 19 down to 1.
for (let i = 19; i >= 1; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 13. Sum of First 5 Odd Numbers: Use a loop to calculate the sum of the first 5 odd numbers (1, 3, 5, 7, 9).
let sum5Odd = 0;
let countOdd = 0;
for (let i = 1; countOdd < 5; i += 2) {
    sum5Odd += i;
    countOdd++;
}
console.log("Sum of first 5 odd numbers:", sum5Odd);

// 14. Print the First 10 Positive Integers: Write a loop to print the first 10 positive integers.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 15. Print Powers of 2: Use a loop to print the powers of 2 from `2^1` to `2^10`.
for (let i = 1; i <= 10; i++) {
    console.log(`2^${i} = ${2 ** i}`);
}

// 16. Sum of First 10 Even Numbers: Write a loop to calculate the sum of the first 10 even numbers (2, 4, 6, 
// ..., 20).
let sum10Even = 0;
for (let i = 2; i <= 20; i += 2) {
    sum10Even += i;
}
console.log("Sum of first 10 even numbers:", sum10Even);

// 17. Print Multiples of 4: Create a loop to print the first 10 multiples of 4.
for (let i = 1; i <= 10; i++) {
    console.log(4 * i);
}
// 18. Print First 5 Prime Numbers: Write a loop to print the first 5 prime numbers.
let primeCount = 0;
let num = 2;
while (primeCount < 5) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
        primeCount++;
    }
    num++;
}
// 19. Reverse Counting Even Numbers: Use a loop to print even numbers from 30 down to 10.
for (let i = 30; i >= 10; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
