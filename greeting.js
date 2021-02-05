const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting= document.querySelector('.js-greetings'),
    user_ls= 'user',   //currentUser 혼동? 변수선언 이유?
    showing_cn= 'showing'; //변수선언 이유?

function saveName(text){
    localStorage.setItem(user_ls, text)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}   //event 임의치환해도 작동? DOM

function askForName(){
    form.classList.add(showing_cn);
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(showing_cn);
    greeting.classList.add(showing_cn);
    greeting.innerText= `G'Day, ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(user_ls);
    if(currentUser===null){
        askForName();
    } else {
        paintGreeting(currentUser);
        }
    }

function init(){
    loadName();
}

init();