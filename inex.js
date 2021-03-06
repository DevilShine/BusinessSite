function displayWindowSize() {
  var w = document.documentElement.clientWidth;

  if (w < 900) {
    document.getElementById("nav").style.display = "none";
    document.getElementById("nav-resize").style.display = "flex";
  } else {
    document.getElementById("nav").style.display = "flex";
    document.getElementById("nav-resize").style.display = "none";
  }

  if (w < 1487) {
    document.getElementById("about-us-wrap").style.justifyContent = "center";
  } else {
    document.getElementById("about-us-wrap").style.justifyContent = "normal";
  }

  if (w < 916) {
    document.getElementById("arrow").style.display = "none";
    document.getElementById("explanation-seriatim-item-wrap").style.margin = "83px 0 0 0";
    document.getElementById("explanation-seriatim-item-wrap").style.justifyContent = "center";
  } else {
    document.getElementById("arrow").style.display = "flex";
    document.getElementById("explanation-seriatim-item-wrap").style.margin = "51px 0 0 0";
    document.getElementById("explanation-seriatim-item-wrap").style.justifyContent = "space-between";
  }

  if (w < 364) {
    document.getElementById("quotes-closing").style.top = "120px";
  } else {
    document.getElementById("quotes-closing").style.top = "90px";
  }

  if (w < 910) {
    document.getElementById("newsletter-emeil").style.width = "281px";
  } else {
    document.getElementById("newsletter-emeil").style.width = "388px";
  }

  if (w < 582) {
    document.getElementById("registration-input-fields").style.flexDirection = "column";
    document.getElementById("registration-input-fields").style.alignItems = "center";
    document.getElementById("registration-input-fields").style.justifyContent = "normal";
  } else {
    document.getElementById("registration-input-fields").style.flexDirection = "row";
    document.getElementById("registration-input-fields").style.alignItems = "normal";
    document.getElementById("registration-input-fields").style.justifyContent = "center";
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

if (wf < 1487) {
  document.getElementById("about-us-wrap").style.justifyContent = "center";
} else {
  document.getElementById("about-us-wrap").style.justifyContent = "normal";
}

if (wf < 916) {
  document.getElementById("arrow").style.display = "none";
  document.getElementById("explanation-seriatim-item-wrap").style.margin = "83px 0 0 0";
  document.getElementById("explanation-seriatim-item-wrap").style.justifyContent = "center";
} else {
  document.getElementById("arrow").style.justifyContent = "flex";
  document.getElementById("explanation-seriatim-item-wrap").style.margin = "51px 0 0 0";
  document.getElementById("explanation-seriatim-item-wrap").style.justifyContent = "space-between";
}

if (wf < 364) {
  document.getElementById("quotes-closing").style.top = "120px";
} else {
  document.getElementById("quotes-closing").style.top = "90px";
}

if (wf < 910) {
  document.getElementById("newsletter-emeil").style.width = "281px";
} else {
  document.getElementById("newsletter-emeil").style.width = "388px";
}

if (wf < 582) {
  document.getElementById("registration-input-fields").style.flexDirection = "column";
  document.getElementById("registration-input-fields").style.alignItems = "center";
  document.getElementById("registration-input-fields").style.justifyContent = "normal";
} else {
  document.getElementById("registration-input-fields").style.flexDirection = "row";
  document.getElementById("registration-input-fields").style.alignItems = "normal";
  document.getElementById("registration-input-fields").style.justifyContent = "center";
}

window.addEventListener("resize", displayWindowSize);

document.getElementById("leaf-through-2").onclick = function () {
  document.getElementById("second-photo").style.display = "flex";
}