let imgArray=[
    "./img/Desert.jpg", 
    "./img/Koala.jpg",
    "./img/Tulips.jpg",
    "./img/Hydrangeas.jpg",
    "./img/Jellyfish.jpg",
    "./img/Lighthouse.jpg",
    "./img/Penguins.jpg",
    "./img/Chrysanthemum.jpg"
];


function load(){
    console.log("Load");
    const divImagens = document.getElementById("divImagens");

    for (let i = 0; i < imgArray.length; i++) {
        const img = document.createElement("img");
        img.src = getRandom();
        divImagens.appendChild(img);
    }
    
}
function getRandom() {
    const imgRandom = Math.floor(Math.random() * imgArray.length);
    return imgArray[imgRandom];
}

window.onscroll = function(){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        load();
    }
};

