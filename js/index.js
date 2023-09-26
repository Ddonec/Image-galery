const search = document.getElementById('search')
const coseBtn = document.getElementById('close')
const input = document.getElementById('input')



let array = [];

let urlAdress =
"https://api.unsplash.com/photos/random?client_id=_Tb6x0X0E13LWZZcn_IXl1qzj3iftkOIrNQ3oWNQC8Y&count=9&query=winter";

const imageCatch = async function () {
    const data = await fetch(urlAdress);
    // console.log("ok");
    // console.log(data);
    const fData = await data.json();
    // console.log(fData);
    array = fData
    // console.log(array);
    setPhotos(); 
};
imageCatch();

search.addEventListener('click', function(){
let value = input.value
urlAdress = 'https://api.unsplash.com/photos/random?client_id=_Tb6x0X0E13LWZZcn_IXl1qzj3iftkOIrNQ3oWNQC8Y&count=9&query=' + value
imageCatch()
})



function setPhotos() {
    for (let i = 0; i < array.length; i++) {
        let square = document.createElement("div");
        square.className = "square";
        square.style.backgroundImage = `url('${array[i].urls.small}')`;
        container.appendChild(square);
    }
}

let container = document.getElementById("container");
