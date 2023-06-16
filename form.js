//listen the form's submit event
const form = document.querySelector(".newcard-form");
const submitButton = document.querySelector(".form__button-submit");
const cardList = document.querySelector(".card-list");
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const question = data.questionTextarea;
  const answer = data.answerTextarea;
  const tag = data.tagTextarea;
  createCard(data);
});

/** === AD ELEMENTS FOR NEW CARD  **/

const newCard = document.createElement("li");
const newArticle = document.createElement("article");
const newCardQuestion = document.createElement("h2");
const newCardAnswer = document.createElement("p");
const newCardButton = document.createElement("button");

/** === AD CLASSES FOR NEW CARD  **/

const questionElement = document.querySelector("#questionTextarea");
const answerElement = document.querySelector("#answerTextarea");
const amountLeftQuestion = document.querySelector(
  '[data-js="amountLeftQuestion"]'
);
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');
const maxLengthQuestion = questionElement.getAttribute("maxlength");
const maxLengthAnswer = questionElement.getAttribute("maxlength");

const updateAmountLeftQuestion = (value) => {
  amountLeftQuestion.innerText = value;
};

const updateAmountLeftAnswer = (value) => {
  amountLeftAnswer.innerText = value;
};

updateAmountLeftAnswer(maxLengthAnswer);
updateAmountLeftQuestion(maxLengthQuestion);

questionElement.addEventListener("input", () => {
  updateAmountLeftQuestion(maxLengthQuestion - questionElement.value.length);
});

answerElement.addEventListener("input", () => {
  updateAmountLeftAnswer(maxLengthAnswer - answerElement.value.length);
});
