function displayWindowSize() {
  var w = document.documentElement.clientWidth;

  if (w < 900) {
    document.getElementById("nav").style.display = "none";
    document.getElementById("nav-resize").style.display = "flex";
  } else {
    document.getElementById("nav").style.display = "flex";
    document.getElementById("nav-resize").style.display = "none";
  }
}

var wf = document.documentElement.clientWidth;

if (wf < 900) {
  document.getElementById("nav").style.display = "none";
  document.getElementById("nav-resize").style.display = "flex";
} else {
  document.getElementById("nav").style.display = "flex";
  document.getElementById("nav-resize").style.display = "none";
}

window.addEventListener("resize", displayWindowSize);

document.getElementById("leaf-through-2").onclick = function () {
  document.getElementById("second-photo").style.display = "flex";
}