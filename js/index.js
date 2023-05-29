var imgs = document.querySelectorAll(".container img");
var imgsList = Array.from(imgs);
var fixedBox = document.getElementById("fixed-box");
var closeBtn = document.getElementById("close-btn");
var rightBtn = document.getElementById("right-btn");
var leftBtn = document.getElementById("left-btn");
var innerImg = document.getElementById("innerImg");
var clickedImgIndex;


// displaying clicked on image 
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    fixedBox.classList.replace("d-none", "d-flex");
    var clickedImg = e.target;
    clickedImgIndex = imgsList.indexOf(clickedImg);
    var imgSrc = clickedImg.getAttribute("src");
    innerImg.setAttribute("src", imgSrc);
  });
}

closeBtn.addEventListener("click", closeBox);
function closeBox() {
  fixedBox.classList.replace("d-flex", "d-none");
}

rightBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  nextImg();
});
function nextImg() {
  clickedImgIndex++;
  if (clickedImgIndex > imgsList.length - 1) {
    clickedImgIndex = 0;
  }
  var nextImgSrc = imgsList[clickedImgIndex].getAttribute("src");
  innerImg.setAttribute("src", nextImgSrc);
}

leftBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  prevImg();
});
function prevImg() {
  clickedImgIndex--;
  if (clickedImgIndex < 0) {
    clickedImgIndex = imgsList.length - 1;
  }
  var prevImgSrc = imgsList[clickedImgIndex].getAttribute("src");
  innerImg.setAttribute("src", prevImgSrc);
}

document.addEventListener("keyup", function (e) {
  if (e.code == "ArrowLeft") {
    prevImg();
  } else if (e.code == "ArrowRight") {
    nextImg();
  } else if (e.code == "Escape") {
    closeBox();
  }
});
