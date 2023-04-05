console.log("****** Loops Practice *******");

// 1. 'for' loop
console.log("---- 1. For loops ----");
// Example: a for loop to console.log numbers from 0 to 3
console.log("count from 0 to 3");
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
// Need to change the conditional statement of the for loop
// I prefer <= in this case because it's easier to read the range of the count from 0 to 5
console.log("count from 0 to 5");
for (let i = 0; i <= 5; i += 1) {
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
// Need to change the value assigned to i when it is declared from 0 to 3.  Also need to change the conditional statement to i <= 5.

console.log("count from 3 to 5");
for (let i = 3; i <= 5; i += 1) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
// Need to change the initial value of i to 2, and increment by 2 each iteration.  The conditional statement will be i <= 10;
console.log("count even numbers from 2 to 10 (2, 4, 6, 8, 10):");
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log("STRETCH: countdown from 5 to 0");
for (let i = 5; i >= 0; i -= 1) {
  console.log(i);
}

// 2. For of loops
console.log("---- 2. For Of loop ----");
let stars = ["Polaris", "Gacrux", "Formalhaut", "Rigel", "Deneb"];

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log("Some stars:");
for (star of stars) {
  console.log(star);
}

// 3. While loops
console.log("---- 3. While loop ----");

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log("Some stars using while:");
let index = 0;
while (index < stars.length) {
  console.log(stars[index]);
  index += 1;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log("count from 0 to 5");
let count = 0;
while (count <= 5) {
  console.log(count);
  count += 1;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log("count backwards from 10 to 5");
count = 10;
while (count >= 5) {
  console.log(count);
  count -= 1;
}
