const search = document.getElementById("search");
const closeBtn = document.getElementById("close");
const input = document.getElementById("input");
const container = document.getElementById("container");

let array = [];
let urlAdress =
  "https://api.unsplash.com/photos/random?client_id=_Tb6x0X0E13LWZZcn_IXl1qzj3iftkOIrNQ3oWNQC8Y&count=30&query=rpg";

const imageCatch = async function () {
  try {
    container.innerHTML = "";
    const data = await fetch(urlAdress);
    // console.log("ok");
    // console.log(data);
    const fData = await data.json();
    // console.log(fData);
    array = fData;
    // console.log(array);
    setPhotos();
  } catch {
    errApiLimit();
  }
};
imageCatch();

search.addEventListener("click", function () {
  try {
    let value = input.value;
    urlAdress =
      "https://api.unsplash.com/photos/random?client_id=_Tb6x0X0E13LWZZcn_IXl1qzj3iftkOIrNQ3oWNQC8Y&count=30&query=" +
      value;
    imageCatch();
  } catch {
    errApiLimit;
  }
});

function setPhotos() {
  for (let i = 0; i < array.length; i++) {
    let square = document.createElement("div");
    square.className = "square";
    square.style.backgroundImage = `url('${array[i].urls.small}')`;
    container.appendChild(square);
  }
}

closeBtn.addEventListener("click", function () {
  input.value = "";
  console.log("ok");
});

input.addEventListener("keypress", function (n) {
  try {
    if (n.key == "Enter") {
      console.log(input.value);
      let value = input.value;
      urlAdress =
        "https://api.unsplash.com/photos/random?client_id=_Tb6x0X0E13LWZZcn_IXl1qzj3iftkOIrNQ3oWNQC8Y&count=30&query=" +
        value;
        imageCatch();
    }
  } catch {
    errApiLimit;
  }
});

function errApiLimit() {
  console.log(
    "O'ops, Sorry, free API attempts have run out, try again at the beginning of the next hour. TY. GL.\n \nError 403"
  );
  alert(
    "Sorry, free API attempts have run out, try again at the beginning of the next hour. \n \nError 403"
  );
}
