const submitBtn = document.querySelector("#submit");
const fistPage = document.querySelector(".firstpage");
const secondPage = document.querySelector(".secondpage");
const rateNumbers = document.querySelectorAll(".circle");
const userRateNum = document.querySelector("#userrate");

rateNumbers.forEach((rateNumber) => {
  rateNumber.addEventListener("click", (event) => {
    document
      .querySelectorAll(".clicked-circle")
      .forEach((clickedRateNumber) => {
        clickedRateNumber.classList.remove("clicked-circle");
      });

    event.target.classList.add("clicked-circle");
    const clickedValue = event.target.textContent;
    userRateNum.textContent = clickedValue;
  });
});

submitBtn.addEventListener("click", () => {
  fistPage.style.display = "none";
  secondPage.style.display = "block";
});
