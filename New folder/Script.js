"use strict";

const sectionBox = document.querySelector(".section-box");
const listBtn = document.querySelector(".ph-list");
const authorList = document.querySelector(".author-list");
listBtn.addEventListener("click", function () {
  authorList.classList.toggle("hidden");
});
document.querySelector(".darkbtn").addEventListener("click", function () {
  sectionBox.classList.toggle("darkmode");
});

let exchRATE = 740;
const conVERTER = (convNaira) => convNaira * exchRATE;
const amount = conVERTER(500);
console.log(amount);

let price = 500;
const conVERTE = function (xchange) {
  return xchange * price;
};
const value = conVERTE(740);
console.log(value);

const addEXPR = function (a, b) {
  console.log(arguments);
  return a + b;
};
addEXPR(5, 9);
