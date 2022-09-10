let progress = 0;
let isHidden = false;
let isAnimate = false;
let deg_main = 360000;
let deg_blocks = 0;

document.querySelector(".hide").addEventListener("click", hide);

document.querySelector(".animate").addEventListener("click", function () {
  if (!isAnimate) {
    document.querySelector(
      ".block-1"
    ).style.transform = `rotate(${deg_main}deg)`;
    document.querySelector(".block-1").style.transition = `3600s`;
  } else {
    document.querySelector(".block-1").style.transform = `rotate(0deg)`;
    document.querySelector(".block-1").style.transition = `0s`;
  }
  isAnimate = !isAnimate;
  console.log(isAnimate);
});

document.querySelector("input").addEventListener("change", function (e) {
  progress = e.target.value;
  if (progress >= 0 && progress <= 100) {
    setProgress();
  } else {
    console.log("error");
  }
});

function hide() {
  document.querySelector(".block-1").style.visibility = isHidden
    ? "visible"
    : "hidden";
  document.querySelector(".block-1").style.transition = `0s`;
  isHidden = !isHidden;
  console.log(isHidden);
}

function setProgress() {
  document.getElementById("progress-spinner").style.background =
    "conic-gradient(rgb(3, 133, 255) " +
    progress +
    "%,rgb(242, 242, 242) " +
    progress +
    "%)";
}

window.onload = function () {
  setProgress();
};
