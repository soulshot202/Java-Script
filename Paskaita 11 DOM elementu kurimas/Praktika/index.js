const body = document.querySelector("body");
const newDiv = document.createElement("div");
const newH1 = document.createElement("h1");
const newImg = document.createElement("img");
const newP = document.createElement("p");
const newH5 = document.createElement("h5");

function createWeb() {
  let div = newDiv;
  let p = newP;
  let h1 = newH1;
  let img = newImg;
  let h5 = newH5;
  div.style.height = "300px";
  div.style.boxShadow = "1px 1px 10px lightgrey, -1px -1px 10px lightgrey";
  div.style.width = "90vw";

  div.style.borderRadius = "10px";
  div.style.backgroundColor = "white";
  div.style.margin = "auto";
  div.style.position = "relative";
  body.style.backgroundColor = "rgb(225,238,244)";
  div.style.marginTop = "50px";
  img.src =
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80";
  img.style.width = "120px";
  img.style.height = "120px";
  img.style.borderRadius = "50%";
  img.style.border = "2px solid white";
  img.style.boxShadow = "0 0 10px grey";
  img.style.position = "absolute";
  img.style.top = "-40px";

  h1.innerText = "Trent Walton";
  h1.style.textAlign = "center";
  h1.style.paddingTop = "100px";
  p.textContent = "Founder & 1/3 of @paravelinc Austin, Tx";
  p.style.color = "grey";

  p.style.width = "45%";
  p.style.textAlign = "center";
  p.style.margin = "auto";
  p.style.fontSize = "1.5rem";

  h5.style.width = "104px";
  h5.style.margin = "auto";
  body.append(div);
  div.append(h5, h1, p);
  h5.append(img);
}
createWeb();
