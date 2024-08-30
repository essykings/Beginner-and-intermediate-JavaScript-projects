const calculateBtn = document.querySelector(".calculate-btn");

function CalculateTip(e) {
  event.preventDefault();
  const tipMessage = document.getElementById("tip");
  const amount = document.getElementById("amount").value;
  const tipPercentage = document.querySelector('[name="percentage"]:checked')
    .value;
  if (amount === "") {
    alert("Please enter the amount.");
    return;
  }

  const people = document.getElementById("people").value;
  const tip = (amount * (tipPercentage / 100)) / people;
  console.log(tip);
  tipMessage.innerHTML = `The Tip per person is $${tip.toFixed(2)}`;
}

calculateBtn.addEventListener("click", CalculateTip);
