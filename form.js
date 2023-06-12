//listen the form's submit event
form = document.querySelector(".newcard-form");
submitButton = document.querySelector(".form__button-submit");
cardList = document.querySelector(".card-list");

//read all entered data from the input fields (question, answer, tags)

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const question = data.questionTextarea;
  const answer = data.answerTextarea;
  const tag = data.tagTextarea;
  createCard(data);
});

//function to create a card with the data of the submit entries
function createCard(data) {
  //cardlistitem
  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card-list__item");
  form.append(cardListItem);

  //card
  const card = document.createElement("article");
  card.classList.add("card");
  cardListItem.append(card);

  //question
  const cardQuestion = document.createElement("h2");
  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = data.question;
  card.append(cardQuestion);

  //answer
  const cardAnswer = document.createElement("p");
  cardAnswer.classList.add("card__answer");
  cardAnswer.textContent = data.answer;
  card.append(cardAnswer);

  //tag
  const cardTagList = document.createElement("ul");
  cardTagList.classList.add("card__tag-list");
  card.append(cardTagList);
  const cardTag = document.createElement("li");
  cardTag.classList.add("card__tag-list-item");
  cardTag.textContent = data.tag;
  cardTagList.append(cardTag);
}

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
