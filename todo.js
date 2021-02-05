const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector("input"),
    toDoList =  document.querySelector(".js-toDoList"),
    toDos_LS = "toDos";
let toDos = []; //localstorage?

function filterFn(toDo){

}

function deleteToDo(event){
    const btn = event.target,
        li = btn.parentNode, 
        cleanToDos = toDos.filter(function(toDos){
            return toDos.id !== parseInt(li.id);
        });
    toDoList.removeChild(li);   
    toDos = cleanToDos;
    saveToDos();
};
 
function saveToDos(){
    localStorage.setItem (toDos_LS, JSON.stringify(toDos));
}; //obj외않되?

function paintToDo(text){
    const li=document.createElement("li"),
        delBtn= document.createElement("button"),
        span = document.createElement("span"),
        newID = toDos.length + 1, //id중복 문제있슴
        toDoObj = { text: text, id: newID };

    delBtn.innerText = "⛔";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);   //일단 생성? 오류?
    li.appendChild(delBtn);
    li.id = newID; 
    toDoList.appendChild(li);    //역할? 순서? 
    toDos.push(toDoObj);
    saveToDos();  
};

function loadToDos(){
    const loadedtoDos = localStorage.getItem(toDos_LS);
    if(loadedtoDos !== null){
        const parsedToDos = JSON.parse(loadedtoDos);  // obj/str
        parsedToDos.forEach(function(toDo){ ///
            paintToDo(toDo.text);
        });
    }
};


function handleSubmit(event){
    event.preventDefault();
    const currentValue =  toDoInput.value;
    paintToDo(currentValue); 
    toDoInput.value="";   
};
    

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
};

init();