let buttonContainer = document.querySelector(".button-container");
let total = document.querySelector(".total");
let currentTotal = 0;

buttonContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("button")) {
    // get attribute data amount refers to the data amount on
    // the button in the html
    let amount = Number(e.target.getAttribute("data-amount"));
    // Number converts the inside () to a number
    console.log(amount);
    currentTotal += amount;
    total.innerText = `Total: $${currentTotal.toFixed(2)}`;
  }
});
