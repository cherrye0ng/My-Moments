const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

// 입력한 ToDoList를 배열하여 호출
const toDos = [];

//  입력한 ToDoList 를 localStorage에 저장하기 
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify는 Value값을 Text가 아닌 배열로 표현
}


// 완료한 ToDoList 는 지우는 함수 
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}



// 새로 작성하는 ToDoList 에 대한 함수 
function paintToDo(newToDo) {
    // 여기서 호출명인 list 은 자유롭게 설정 가능하지만, document에서 불러오는"li"는 꼭 "li"여야한다.
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo; //span의 text는 newToDo가 되는 것이구만 ㅋ
    const button = document.createElement("button");
    button.innerText = "✓";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span); //span을 list 내부로 넣어주기 위한 코드  _ list 는 span이라는 자식을 가지게 함 
    li.appendChild(button);
    toDoList.appendChild(li);
}



// 작성된 ToDoList 를 동작시키는 함수  
function handletoDoSumit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    // value에 null(빈값)을 넣어서 Enter를 치면 input칸이 비도록 설정한다.
    // null값으로 todoInput이 비워졌다고해서 newToDo가 지워지는 것은 아니단
    toDoInput.value = "";
    paintToDo(newToDo);
    toDos.push(newToDo);
    saveToDos();

}


// inPut에 값이 제출되면 handletoDoSumit이 실행하게 한다.
toDoForm.addEventListener("submit", handletoDoSumit);