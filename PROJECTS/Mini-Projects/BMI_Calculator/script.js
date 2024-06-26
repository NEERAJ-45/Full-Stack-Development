const submit = document.querySelector(".btn");
submit.addEventListener("click", () => {
  const wt = Number(document.querySelector("#weight").value);
  const htcm = Number(document.querySelector("#height").value);

  const ht = htcm / 100;
  const p = document.querySelector("p");
  p.hidden = false;
  const bmiVal = wt / (ht * ht);
  const finalBMIVAL = bmiVal.toFixed(2);

  if (bmiVal < 18.6) {
    p.innerHTML =
      "You are Underweight</br>Your BMI Value: " + finalBMIVAL + " 👍";
  } else if (bmiVal > 18.6 && bmiVal < 24.9) {
    p.innerHTML =
      "You are Properly weighted<br>Your BMI Value: " + finalBMIVAL + " 👍";
  } else {
    p.innerHTML =
      "You are overweight<br>Your BMI Value: " + finalBMIVAL + " 👍";
  }
});
