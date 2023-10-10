let inputBar = document.getElementById("input-bar");

// button-c
let btnC = document.getElementById("btn-c");
btnC.addEventListener("click", () => {
  inputBar.value = 0;
});

//button- clear
let btnModulus = document.getElementById("btn-modulus");
btnModulus.addEventListener("click", () => {
  // inputBar.value = inputBar.value + btnModulus.outerText;
  let strArr = inputBar.value.split("");
  //console.log(strArr);
  strArr.pop();
  //console.log(strArr);
  let clearedString = strArr.join("");
  //console.log(clearedString);
  inputBar.value = clearedString;
});
//button- modulus
let btnPower = document.getElementById("btn-power");
btnPower.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnPower.outerText;
});
// button-division
let btnDivision = document.getElementById("btn-division");
btnDivision.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnDivision.outerText;
});
//button-seven

let btnSeven = document.getElementById("btn-seven");
btnSeven.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnSeven.outerText;
});

//button-eight
let btnEight = document.getElementById("btn-eight");
btnEight.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnEight.outerText;
});
// button-nine
let btnNine = document.getElementById("btn-nine");
btnNine.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnNine.outerText;
});

// button-multiplication
let btnMultiplication = document.getElementById("btn-multiplication");
btnMultiplication.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnMultiplication.outerText;
});

// button-four
let btnFour = document.getElementById("btn-four");
btnFour.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnFour.outerText;
});
// button-five
let btnFive = document.getElementById("btn-five");
btnFive.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnFive.outerText;
});
//button-six
let btnSix = document.getElementById("btn-six");
btnSix.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnSix.outerText;
});
//button-minus
let btnMinus = document.getElementById("btn-minus");
btnMinus.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnMinus.outerText;
});

// button-one
let btnOne = document.getElementById("btn-one");
btnOne.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnOne.outerText;
});
// button-two
let btnTwo = document.getElementById("btn-two");
btnTwo.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnTwo.outerText;
});
//button-three
let btnThree = document.getElementById("btn-three");
btnThree.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnThree.outerText;
});
//button-plus
let btnPlus = document.getElementById("btn-plus");
btnPlus.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnPlus.outerText;
});

// button-point
let btnPoint = document.getElementById("btn-point");
btnPoint.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnPoint.outerText;
});
// button-zero
let btnZero = document.getElementById("btn-zero");
btnZero.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnZero.outerText;
});
//button-double-zero
let btnDoubleZero = document.getElementById("btn-double-zero");
btnDoubleZero.addEventListener("click", () => {
  inputBar.value = inputBar.value + btnDoubleZero.outerText;
});
//button-equal
let btnEqual = document.getElementById("btn-equal");
btnEqual.addEventListener("click", () => {
  // inputBar.value = inputBar.value + btnEqual.outerText;
  let answer = eval(inputBar.value);
  //console.log(answer);
  inputBar.value = answer;
});
