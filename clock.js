const clockContaier = document.querySelector(".js-clock"),
    clockTitle= clockContaier.querySelector(".js-title");

function getTime() {
    const date = new Date(),
          min = date.getMinutes(),
          hour = date.getHours(),
          sec = date.getSeconds();
    clockTitle.innerText= 
        `${hour<10?`0${hour}`:hour}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}`;
    }

function init() {
    getTime();
    setInterval(getTime, 1000)
}

init();
