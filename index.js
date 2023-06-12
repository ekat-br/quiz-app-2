/* === TOGGLE FUNCTION BOOKMARK === */

//get reference to the bookmark button
const bookmark1 = document.querySelector('[data-js="bookmark-1"]');
console.log(bookmark1);

// Add click event listener for bookmark button
bookmark1.addEventListener("click", () => {
  console.log("In EventListener");
  bookmark1.classList.toggle("bookmark--active");
});

/* === TOGGLE FUNCTION ANSWERBUTTON === */

//get reference to the answer button
const answerbutton1 = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

// Display answer
answerbutton1.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");

  if (answer.classList.contains("card__answer--active")) {
    answerbutton1.textContent = "Hide answer";
  } else {
    answerbutton1.textContent = "Show answer";
  }
});

//change text of button based on answer visibility
