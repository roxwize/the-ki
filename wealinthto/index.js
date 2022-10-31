import { url } from "./loadenv.js";

const title = document.getElementById("title");
const input = document.getElementById("val");
const btn = document.getElementById("submit");
const usr = document.getElementById("us");
const chi = document.getElementById("chi");

const lenCheck = (txt) => txt.length > 20;

btn.addEventListener("click", () => {
  if (
    !checkForUrl(input.value) &&
    !checkForMention(input.value) &&
    !lenCheck(usr.value)
  ) {
    if (chi.files[0]) {
      console.log(postImage(chi));
    }
    sendRequest({
      content: input.value,
      username: usr.value,
    });
    input.value = "";
    title.textContent = "sent";
  } else {
    title.textContent = "don't be cheeky (no links or mentions)";
  }
});

chi.addEventListener("change", () => {
  parseImage(chi);
});

input.addEventListener("change", () => {
  if (input.value.length >= 1) {
    chi.disabled = false;
  } else {
    chi.disabled = true;
  }
});

function checkForUrl(txt) {
  const exp =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(exp);

  return txt.match(regex) ? true : false;
}

function checkForMention(txt) {
  const exp = /<?@[\S&!].+>?/gi;
  const regex = new RegExp(exp);

  return txt.match(regex) ? true : false;
}

function parseImage(img) {
  if (img.files && img.files[0]) {
    const imag = document.querySelector("img");
    imag.onload = () => {
      URL.revokeObjectURL(imag.src);
    };

    imag.src = URL.createObjectURL(img.files[0]);
    return imag.src;
  }
}

function postImage(img) {
  const fd = new FormData();
  let res;
  fd.append("file", img.files[0]);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://store3.gofile.io/uploadFile");
  // xhr.setRequestHeader("enctype", "multipart/form-data");
  xhr.send(fd);
  xhr.onreadystatechange = () => {
    if (xhr.responseText) {
      return JSON.parse(xhr.responseText.data.directLink);
    }
  };
}

function sendRequest(args) {
  const req = new XMLHttpRequest();
  req.open("POST", url);
  req.setRequestHeader("Content-Type", "application/json");
  const params = {
    content: args.content,
    username: args.username,
  };
  req.send(JSON.stringify(params));
}
