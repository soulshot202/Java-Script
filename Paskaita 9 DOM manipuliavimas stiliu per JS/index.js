const p = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", changeStyle);

function changeStyle() {
  p.style.fontSize = "20px";
  if (p.style.fontSize === "20px") {
    console.log("dydis yra 20px");
  }
  if (p.classList.contains("green-text")) {
    p.classList.remove("green-text");
  } else {
    p.classList.add("green-text");
  }
}
