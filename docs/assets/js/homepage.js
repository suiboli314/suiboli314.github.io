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
  window.location = "./assets/html/resumeViewer.html";
};

let homebtn_1 = document.querySelector("#home-btn1");
homebtn_1.onclick = function () {
  window.location = "../../index.html#intro";
};

let projbtn_1 = document.querySelector("#projects-btn1");
projbtn_1.onclick = function () {
  window.location = "../../index.html#prjects";
};
