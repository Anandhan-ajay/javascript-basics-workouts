window.onload = function () {
  const bodyColor = document.body;
  const MyColor = document.getElementById("myColor");
  const btn = document.getElementById("btn-change-color");
  const para = document.getElementById("para");
  const AgedropDown = document.getElementById("AgedropDown");
  // const InputCheck = document.getElementById("inputCheck");

  // console.log(btn, "btnbtnbtnbtn");
  // console.log(AgedropDown, "AgedropDown");

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  function getRandomHex() {
    return hex[Math.floor(Math.random() * 16)];
  }

  function createColor() {
    var colors = "#";
    for (i = 0; i < 6; i++) {
      colors += getRandomHex();
    }

    return colors;
  }

  function changeColor() {
    const newColor = createColor();
    bodyColor.style.backgroundColor = newColor;
    MyColor.textContent = newColor;
    para.innerHTML = newColor;
  }

  btn.addEventListener("click", changeColor);

  // function checkEligible() {

  // }

  const arr = [16, 17, 18, 19, 20, 21];
  const res = arr.map((i) => {
    return i;
  });
  // AgedropDown.value = res;
  // <option value="18">18</option>

  // console.log(AgedropDown, "hdyfghvc.uc.ccoiyoyoyc");

  // AgedropDown.addEventListener("click", checkEligible);

  // function ageCheck() {}
};
