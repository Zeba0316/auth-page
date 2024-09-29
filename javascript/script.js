const rightDIv = document.querySelector(".right");
const leftDIv = document.querySelector(".left");
const circle = document.querySelector(".circle");

rightDIv.style.width = "100%";
rightDIv.style.transition = "1s ease-in-out";
rightDIv.style.transform = "scale(0)";
leftDIv.style.width = "0%";
leftDIv.style.display = "none";
circle.style.transition = "1s ease-in-out";
circle.style.transform = "scale(0)";


setTimeout(() => {
  rightDIv.style.transform = "scale(1)";
  setTimeout(() => {
    circle.style.transform = "scale(1)";
  }, 1000);
}, 1000);

setTimeout(() => {
  rightDIv.style.width = "50%";
  leftDIv.style.width = "50%";
  leftDIv.style.display = "flex";
  circle.style.top = "15px";
  circle.style.left = "12px";
  circle.style.width = "70px";
  circle.style.height = "70px";



}, 4000);
