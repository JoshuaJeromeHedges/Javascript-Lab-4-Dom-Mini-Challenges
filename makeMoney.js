let coinForm = document.querySelector(".form");
let coinContainer = document.querySelector(".coin-container");
coinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(coinForm);
  let amount = data.get("amount");
  let coin = data.get("coin");
  console.log(amount, coin);
  for (let i = 0; i < amount; i++) {
    let coinDiv = document.createElement("div");
    coinDiv.classList.add("coins");
    coinDiv.innerText = coin;
    coinContainer.append(coinDiv);
  }
  coinForm.reset();
});

coinContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("coin-div")) {
    event.target.remove();
  }
});
