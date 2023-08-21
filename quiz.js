const qns = document.getElementById("qns");
const optionsList = document.getElementById("options");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentQuestionIndex = 0;

const questionsWithOptions = [
  {
    question: "Who invented Java Programming?",
    options: {
      a: "Guido van Rossum",
      b: "James Gosling",
      c: "Dennis Ritchie",
      d: "Bjarne Stroustrup"
    },
    Answer : "James Gosling"
  },
  { 
    question: "Which statement is true about Java?",
    options: {
      a: "Java is a sequence-dependent programming language",
      b: "Java is a code dependent programming language",
      c: "Java is a platform-dependent programming language",
      d: "Java is a platform-independent programming language"    
    },
    Answer : "Java is a platform-independent programming language"
  },
  {
    question : "What is the extension of java code files?",
    options:{
    a: ".js",
    b: ".txt",
    c: ".class",
    d: ".java"
  },
  Answer : ".java"
},
  {
    question : "Which of the following is not an OOPS concept in Java?",
    options:{
      a: "Polymorphism",
      b: "Inheritance",
      c: "Compilation",
      d: "Encapsulation"
  },
  Answer : "Compilation"
},
{
  question : "Which of the following is a type of polymorphism in Java Programming?",
  options:{
    a: "Multiple Polymorphism",
    b: "Compile time polymorphism",
    c: "Multilevel polymorphism",
    d: "Execution time polymorphism"
},
  Answer : "Compile time polymorphism"
}
  // Add more question objects here if needed
];


function displayQuestion(index) {
  const questionObj = questionsWithOptions[index];
  const liElements = document.querySelectorAll("#options li");

  qns.textContent = questionObj.question;

  let optionIndex = 0;
  for (const option in questionObj.options) {
    // console.log(liElements[optionIndex])
      liElements[optionIndex].textContent = questionObj.options[option];
      optionIndex++;
    } 
}


prevButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
    evaluate(currentQuestionIndex);
  }
});

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questionsWithOptions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
    evaluate(currentQuestionIndex);
  }
});

// Initialize with the first question
displayQuestion(currentQuestionIndex);

let count  = 0;
const evaluate = (index) => {
  const arr = questionsWithOptions[index];
  const liElements = document.querySelectorAll("#options li");
  
  liElements.forEach(e => {
    e.addEventListener("click",() => {
      count = e.textContent === arr.Answer?++count:count;
      console.log(count)
    })
  })
}


const btn = document.querySelector('.btn');

btn.addEventListener("click", () => {
  console.log(count)
  const newWindow = window.open('', '_blank');

  newWindow.document.write(`<p>Thanks for taking the test
  Your total Score is : ${count}</p>`);
  setTimeout(() => {
    newWindow.close();
  }, 5000); 
});
evaluate(currentQuestionIndex)



