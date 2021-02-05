const body = document.querySelector("body"),
    img_number = 5;


function paintImg(imgNo){
    const image =  new Image();
    image.src = `/img/${imgNo + 101}.jpg`;
    image.classList.add('bgImg');
    body.prepend(image);

}

function genRandom(){
    const number = Math.floor(Math.random() * img_number);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}


init();
