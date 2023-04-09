console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this? 
// I need to change the middle part. Change number for to number 6.
console.log('count from 0 to 5');

for (let i=0; i<6; i++) {  
  console.log(i);
}


// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this? 
// I need to change i=0 to i=3 so it will start counting from 3.

console.log('count from 3 to 5');

for (let i=3; i<6; i++) {  
  console.log(i);
}


// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this? 
// I added a variable called number with a value of . Then I added a for loop and an if. iside the if i used a Remainder `%` to just get the even numbers.

console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

let number=10;

for (let i=1; i<=number; i++) {   
if (i%2==0)   
{  
console.log(i);  
}  
}  



// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for(i = 5; i >= 0; i--) {
  console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

for (let i=0; i<stars.length; i++){
  console.log(stars[i]);
}


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

let star = stars.length;
let iStars = 0;

while(iStars<star){
  console.log(stars[iStars] + " ");
  iStars ++;
}


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let count = 0;
		while ( count < 6 )
		{
			console.log(count);
			count++;
    }


// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let secondCount = 10;
		while ( secondCount >= 5 )
		{
			console.log(secondCount);
			secondCount--;
    }

