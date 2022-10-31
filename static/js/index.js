const body = document.querySelector("body");
const text = document.getElementById("gw");
const imag = document.getElementById("dev");
const invertColors = (ui) => {
  if (ui) {
    body.style.backgroundColor = "#000";
    text.style.color = "#FFF";
    imag.src = "./static/img/index_fall2.png";
  } else {
    body.style.backgroundColor = "#FFF";
    text.style.color = "#000";
    imag.src = "./static/img/index_fall.png";
  }
};
text.innerHTML = '<a href="#">THEKILLECTIVE</a>';
text.addEventListener("mouseover", () => {
  invertColors(1);
});
text.addEventListener("mouseout", () => {
  invertColors(0);
});
