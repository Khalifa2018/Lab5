const MovingContainer = document.getElementById("MovingContainer");
const mainWidth = MovingContainer.clientWidth;
const mainHight = MovingContainer.clientHeight;

var interval;

const leftImage = document.getElementById("lImg");
const rightImage = document.getElementById("rImg");
const bottomImage = document.getElementById("bImg");

var moveLeftImageRight = true;
var moveRightImageLeft = true;
var moveBottomImageTop = true;

var isRunning = false;

document.getElementById("go").addEventListener("click", function () {
  if (isRunning) {
    this.textContent = "go";
    isRunning = false;
    clearInterval(interval);
    return;
  }

  interval = setInterval(() => {
    isRunning = true;
    this.textContent = "stop";

    let left = parseInt(getComputedStyle(leftImage).left);
    if (left >= mainWidth - leftImage.clientWidth && moveLeftImageRight) {
      moveLeftImageRight = false;
    } else if (!moveLeftImageRight && left === 0) {
      moveLeftImageRight = true;
    }
    if (moveLeftImageRight) {
      leftImage.style.left = `${left + 10}px`;
    } else {
      leftImage.style.left = `${left - 10}px`;
    }

    let right = parseInt(getComputedStyle(rightImage).right);
    if (
      right + 10 >= mainWidth - rightImage.clientWidth &&
      moveRightImageLeft
    ) {
      moveRightImageLeft = false;
    } else if (!moveRightImageLeft && right === 0) {
      moveRightImageLeft = true;
    }
    if (moveRightImageLeft) {
      rightImage.style.right = `${right + 10}px`;
    } else {
      rightImage.style.right = `${right - 10}px`;
    }

    let bottom = parseInt(getComputedStyle(bottomImage).bottom);
    if (
      bottom + 10 >= mainHight - bottomImage.clientHeight &&
      moveBottomImageTop
    ) {
      moveBottomImageTop = false;
    } else if (!moveBottomImageTop && bottom === 0) {
      moveBottomImageTop = true;
    }
    if (moveBottomImageTop) {
      bottomImage.style.bottom = `${bottom + 10}px`;
    } else {
      bottomImage.style.bottom = `${bottom - 10}px`;
    }
  }, 100);
});

document.getElementById("reset").addEventListener("click", function () {
  clearInterval(interval);
  document.getElementById("go").textContent = "go";
  isRunning = false;

  leftImage.removeAttribute("style");
  rightImage.removeAttribute("style");
  bottomImage.removeAttribute("style");
});
