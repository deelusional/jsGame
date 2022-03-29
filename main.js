const problemElement = document.querySelector('.problem');
const ourForm = document.querySelector('our-form');


let state = {
  score: 0,
  wrongAnswers: 0
}

function generateNumber(max) { 
  return Math.floor(Math.random() * (max + 1));
}

function updateProblem() {
  state.currentProblem = generateProblem();
  problemElement.innerHTML = `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`;
}
 
updateProblem();

function generateProblem() {
  return {
    numberOne: generateNumber(10),
    numberTwo: generateNumber(10),
    // The generateNumber(2) is for the plus, minus, multiply [0, 1, 2]
    operator: ['+', '-', 'x'][generateNumber(2)],
  }
}
 
ourForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) { 
  e.preventDefault()
}