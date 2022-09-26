let homebtn = document.querySelector("#home-btn");

homebtn.onclick = function () {
  window.location = "#intro";
};

let projbtn = document.querySelector("#projects-btn");
projbtn.onclick = function () {
  window.location = "#projects";
};

let viewResume = document.querySelector("#resume-btn");
viewResume.onclick = function () {
  window.location = "../assets/html/resumeViewer.html";
};
