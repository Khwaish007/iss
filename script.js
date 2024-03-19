const colourbtn = document.getElementById("button2");
const section = document.getElementById("about-me");

let colourcount = 0;

colourbtn.addEventListener("click", function onClick(e) {
  e.preventDefault();
  switch (colourcount) {
    case 0:
      section.style.backgroundColor = "purple";
      colourcount++;
      break;
    case 1:
      section.style.backgroundColor = "red";
      colourcount++;
      break;
    case 2:
      section.style.backgroundColor = "blue";
      colourcount++;
      break;
    case 3:
      section.style.backgroundColor = "green";
      colourcount++;
      break;
    case 4:
      section.style.backgroundColor = "white";
      colourcount = 0;
      break;
  }
});


const temp = document.getElementById("paraid");
const fontbtn = document.getElementById("fonts");

let fontcnt = 0;

fontbtn.addEventListener("click", function onClick(e) {
  e.preventDefault();
  switch (fontcnt) {
    case 0:
      temp.style.fontSize = "22px";
      fontcnt++;
      break;
    case 1:
      temp.style.fontSize = "24px";
      fontcnt++;
      break;
    case 2:
      temp.style.fontSize = "20px";
      fontcnt = 0;
      break;
  }
});


document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.querySelector('.content').style.transform = 'translate(0, 0)';
  }, 2000);
});

window.addEventListener('load', () => {
  document.body.classList.add('bitmoji-container-loaded');
  setTimeout(() => {
    document.body.classList.add('bitmoji-loaded');
  }, 750); 
});

window.addEventListener('load', () => {
  document.body.classList.add('column-left-loaded');
  setTimeout(() => {
    document.body.classList.add('image-loaded');
  }, 1500);
});

function openPdf(pdfPath) {
  window.open(pdfPath, '_blank');
}


window.onload = function() {
  document.getElementById("sunIcon").style.display = "inline";
};

function toggleMode() {
  var body = document.body;
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
  var sunIcon = document.getElementById("sunIcon");
  var moonIcon = document.getElementById("moonIcon");

  if (body.classList.contains("dark-mode")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
  } else {
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sunIcon").style.display = "inline";
  document.getElementById("moonIcon").style.display = "none";
});