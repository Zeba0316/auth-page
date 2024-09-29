const rightDIv = document.querySelector(".right");
const leftDIv = document.querySelector(".left");
const circle = document.querySelector(".circle");
const enrollBtn = document.querySelector(".enroll-btn");
const enrollCard = document.querySelector(".enroll-card");
const divinp1 = document.querySelector(".inp-1");
const divinp2 = document.querySelector(".inp-2");

const inp1 = document.querySelector(".input-1");
const inp2 = document.querySelector(".input-2");
const label1 = document.querySelector(".label-1");
const label2 = document.querySelector(".label-2");
const loginBtn = document.querySelector(".login-btn");

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

enrollBtn.addEventListener("mouseover", () => {
  enrollCard.style.transition = "0.6s ease-in-out";
  enrollCard.style.opacity = "1";
});

enrollBtn.addEventListener("mouseout", () => {
  enrollCard.style.opacity = "0";
});

divinp1.addEventListener("click", () => {
  inp1.style.display = "block";
  label1.style.transition = "0.5s ease-in-out";
  label1.style.fontSize = "10px";
  label1.style.color = "#528a2f";
});
divinp2.addEventListener("click", () => {
  inp2.style.display = "block";
  label2.style.transition = "0.5s ease-in-out";
  label2.style.fontSize = "10px";
  label2.style.color = "#528a2f";
});

inp1.addEventListener("input", () => {
  checkInputs(1);
});
inp2.addEventListener("input", () => {
  checkInputs(2);
});

inp1.addEventListener("blur", () => {
  divinp1.style.border = "1px solid gray";
});
inp2.addEventListener("blur", () => {
  divinp2.style.border = "1px solid gray";
});

function checkInputs(inpnum) {
  if (inp1.value && inp2.value) {
    loginBtn.style.backgroundColor = "#528a2f";
  } else {
    loginBtn.style.backgroundColor = "gray";
  }

  if (inpnum == 1) {
    divinp1.style.border = "2px solid #528a2f";
  } else if (inpnum == 2) {
    divinp2.style.border = "2px solid #528a2f";
  }
}

loginBtn.addEventListener("click", () => {

  if (window.getComputedStyle(loginBtn).backgroundColor == "rgb(82, 138, 47)") {
  
    setTimeout(() => {
      rightDIv.style.transform = "scale(0)";
      leftDIv.style.opacity = "0";
      circle.style.top = "50%";
      circle.style.left = "50%";
      circle.style.transform="translate(-50%,-50%) scale(1.2)";
    },600);
  }
});
