let userName = "";
userName ? console.log(`Hell, ${userName}!`) : console.log(`Hello!`);
const userQuestion = "I will search the true love?";
console.log(userName + "I will search the true love?");
let randoNumber = Math.floor(Math.random() * 8);
let eightBall = "";

if (randoNumber === 0) {
    eightBall = 'It is certain';
} else if (randoNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randoNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randoNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randoNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randoNumber === 5) {
    eightBall = 'My sources say no';
} else if (randoNumber === 6) {
    eightBall = 'Outlook not so good';
} else { (randoNumber === 7)  
    eightBall = 'Signs point to yes';
}

console.log(randoNumber);
console.log("asks: " + userQuestion);
console.log("Magic Ball answer: " + eightBall);