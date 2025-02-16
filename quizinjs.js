var readlineSync=require('readline-sync');
var userName;

while(!userName || userName.length <=0) {
     console.log("Please enter a name to continue");
     var userName=readlineSync.question("Enter your name:");
}
console.log(`Welcome ${userName}.`)

let score=0;
//All questions as objects
console.log("Your initial score is 0.Every right answer will add 1 to score and wrong will add 0");
let a=readlineSync.question("enter any key to continue:");

let questionOne={
    question:"Which are prime numbers from the following numbers 2 3 5 ?\na:2 and 3 \nb:3 and 5 \nc:all\nyour answer:",
    answer:"c"
}

let questionTwo={
    question:"Which are composite numbers from the following numbers 6 7 9 8 ?\na:6 and 7\nb:6,8,9\nc:all\nyour answer:",
    answer:"b"
}

let questionThree={
    question:"Which is the best method to solve any type of quadratic equation?\nca:factorization\nb:complete square\nc:quadratic formula\nyour answer:",
    answer:"c"
}

let questionFour={
    question:"What is the area of circle?\na:pi*r*r\nb:pi*r\nc:l*b\nyour answer:",
    answer:"a"
}

let questionFive={
    question:"What is the point of concurrence of all medians of triangle?\na:incentre\nb:median\nc:orthocentre\nyour answer:",
    answer:"b"
}

let questionSix={
    question:"What is an empty set called?\na:null set\nb:power set\nc:singleton set\nyour answer:",
    answer:"a"
}

let questionSeven={
    question:"How is the graph of a linear equation?\na:straight line\nb:parabolic curve\nc:circle\nyour answer:",
    answer:"a"
}

let questionEight={
    question:"What is the angle of a right angle?\na:100 degree\nb:90 degree\nc:30 degree\nyour answer:",
    answer:"b"
}

let questionNine={
    question:"What is sin theta?\na:A/H\nb:O/A\nc:O/H\nyour answer:",
    answer:"c"
}

let questionTen={
    question:"What is ln(e)?\na:1\nb:10\nc:0\nyour answer:",
    answer:"a"
}

let questions=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];
//play function
function play(question,answer){
    let userAnswer=readlineSync.question(question);
    if(userAnswer===answer){
        console.log("Well done!you are right");
        score++;
    }
    else if(userAnswer === 'a' || userAnswer === 'b' || userAnswer === 'c'){
        console.log("OOPs!youe are wrong");
    }
    else{
        console.log('Incorrect option entered');
    }
}

for(let i=0;i<questions.length;i++){
    play(questions[i].question,questions[i].answer);
}

console.log("Congratulations "+userName+"on completing the quiz !\nYou scored "+score);

let prasad={
    name:"prasad",
    score:0
}

let shreyasi={
    name:"shreyasi",
    score:2
}

let users=[prasad,shreyasi];
let highestScore={name: users[0].name, score: users[0].score};
for(var i=0;i<users.length;i++){
    if(highestScore.score<users[i].score){
      highestScore={name: users[i].name, score: users[i].score};
      break;
    }
}

if(score>highestScore.score){
    console.log("HURRAY!You have beaten the highest scorer of this quiz "+highestScore.name+" with score "+ highestScore.score);
    console.log("Please do share a screenshot of score with me ");
}
